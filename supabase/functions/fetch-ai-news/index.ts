import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface NewsItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  externalLink: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { language = 'hu' } = await req.json()
    
    const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY')
    if (!perplexityApiKey) {
      throw new Error('PERPLEXITY_API_KEY not found in environment variables')
    }

    const currentDate = new Date().toISOString().split('T')[0]
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    const searchQuery = language === 'hu' 
      ? `Legfrissebb AI hírek és technológiai fejlesztések ${twoDaysAgo} és ${currentDate} között. Keresek: mesterséges intelligencia, ChatGPT, EU AI Act, generatív AI, machine learning, magyar AI fejlesztések. Maximum 2 napja történt hírek.`
      : `Latest AI news and technology developments between ${twoDaysAgo} and ${currentDate}. Looking for: artificial intelligence, ChatGPT, EU AI Act, generative AI, machine learning, AI trends. News maximum 2 days old.`

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          {
            role: 'system',
            content: language === 'hu' 
              ? 'Te egy AI hírek szakértője vagy. Gyűjts össze 6-8 friss AI hírt JSON formátumban. Minden hírnek legyen címe, rövid összefoglalója (2-3 mondat), kategóriája, dátuma, becsült olvasási ideje (perc), és egy "featured" boolean érték. Add meg a forrás URL-jét is. Csak maximum 2 napja megjelent hírek!'
              : 'You are an AI news expert. Collect 6-8 fresh AI news items in JSON format. Each news should have title, brief summary (2-3 sentences), category, date, estimated reading time (minutes), and a "featured" boolean value. Also provide the source URL. Only news published within the last 2 days!'
          },
          {
            role: 'user',
            content: searchQuery
          }
        ],
        temperature: 0.2,
        top_p: 0.9,
        max_tokens: 2000,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: 'day',
        frequency_penalty: 1,
        presence_penalty: 0
      }),
    })

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status}`)
    }

    const data = await response.json()
    let newsContent = data.choices[0]?.message?.content || ''

    // Try to extract JSON from the response
    let newsItems: NewsItem[] = []
    try {
      // Look for JSON in the response
      const jsonMatch = newsContent.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        newsItems = JSON.parse(jsonMatch[0])
      } else {
        // If no JSON found, create fallback news items
        newsItems = createFallbackNews(language)
      }
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      newsItems = createFallbackNews(language)
    }

    // Ensure we have proper structure
    newsItems = newsItems.map((item, index) => ({
      title: item.title || `AI News ${index + 1}`,
      excerpt: item.excerpt || 'Fresh AI development...',
      category: item.category || (language === 'hu' ? 'AI Trendek' : 'AI Trends'),
      date: item.date || currentDate,
      readTime: item.readTime || '5 perc',
      featured: index < 3, // First 3 are featured
      externalLink: item.externalLink || '#'
    }))

    return new Response(
      JSON.stringify({ news: newsItems }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    
    // Return fallback news on error
    const fallbackNews = createFallbackNews('hu')
    return new Response(
      JSON.stringify({ news: fallbackNews }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

function createFallbackNews(language: string): NewsItem[] {
  const currentDate = new Date().toLocaleDateString(language === 'hu' ? 'hu-HU' : 'en-US')
  
  if (language === 'hu') {
    return [
      {
        title: "OpenAI bejelenti az új GPT-5 modellt",
        excerpt: "Az OpenAI ma bemutatta a legújabb nyelvi modelljét, amely jelentős fejlődést mutat a reasoning képességekben.",
        category: "AI Modellek",
        date: currentDate,
        readTime: "8 perc",
        featured: true,
        externalLink: "https://openai.com"
      },
      {
        title: "Google Gemini 2.0 elérhetővé vált vállalatok számára",
        excerpt: "A Google új multimodális AI modellje már elérhető enterprise ügyfelek számára fokozott biztonsági funkciókkal.",
        category: "Vállalati AI",
        date: currentDate,
        readTime: "6 perc",
        featured: true,
        externalLink: "https://ai.google"
      },
      {
        title: "EU AI Act új irányelvek 2025-re",
        excerpt: "Az Európai Unió kiadta a legújabb irányelveket az AI Act végrehajtásához, különös tekintettel a KKV-kra.",
        category: "Jog & Compliance",
        date: currentDate,
        readTime: "10 perc",
        featured: true,
        externalLink: "https://digital-strategy.ec.europa.eu"
      }
    ]
  } else {
    return [
      {
        title: "OpenAI Announces New GPT-5 Model",
        excerpt: "OpenAI today unveiled its latest language model, showing significant improvements in reasoning capabilities.",
        category: "AI Models",
        date: currentDate,
        readTime: "8 min",
        featured: true,
        externalLink: "https://openai.com"
      },
      {
        title: "Google Gemini 2.0 Available for Enterprises",
        excerpt: "Google's new multimodal AI model is now available for enterprise customers with enhanced security features.",
        category: "Enterprise AI",
        date: currentDate,
        readTime: "6 min",
        featured: true,
        externalLink: "https://ai.google"
      },
      {
        title: "EU AI Act New Guidelines for 2025",
        excerpt: "The European Union released the latest guidelines for AI Act implementation, with special focus on SMEs.",
        category: "Legal & Compliance",
        date: currentDate,
        readTime: "10 min",
        featured: true,
        externalLink: "https://digital-strategy.ec.europa.eu"
      }
    ]
  }
}