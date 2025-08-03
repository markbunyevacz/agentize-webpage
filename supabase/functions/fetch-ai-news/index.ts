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
    
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY')
    if (!firecrawlApiKey) {
      console.log('FIRECRAWL_API_KEY not found, using fallback news')
      const fallbackNews = createFallbackNews(language)
      return new Response(
        JSON.stringify({ news: fallbackNews }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Scrape Perplexity Discover page for AI news
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${firecrawlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: 'https://www.perplexity.ai/discover',
        formats: ['markdown'],
        onlyMainContent: true
      }),
    })

    if (!response.ok) {
      throw new Error(`Firecrawl API error: ${response.status}`)
    }

    const data = await response.json()
    let newsItems: NewsItem[] = []

    if (data.success && data.data?.markdown) {
      newsItems = extractAINewsFromPerplexity(data.data.markdown, language)
    }

    // If no news extracted or empty, use fallback
    if (newsItems.length === 0) {
      newsItems = createFallbackNews(language)
    }

    // Ensure proper structure
    newsItems = newsItems.map((item, index) => ({
      title: item.title || `AI News ${index + 1}`,
      excerpt: item.excerpt || 'Fresh AI development from Perplexity Discover...',
      category: item.category || (language === 'hu' ? 'AI Trendek' : 'AI Trends'),
      date: item.date || new Date().toLocaleDateString(language === 'hu' ? 'hu-HU' : 'en-US'),
      readTime: item.readTime || (language === 'hu' ? '5 perc' : '5 min'),
      featured: index < 3, // First 3 are featured
      externalLink: item.externalLink || 'https://www.perplexity.ai/discover'
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

function extractAINewsFromPerplexity(markdown: string, language: string): NewsItem[] {
  const currentDate = new Date().toLocaleDateString(language === 'hu' ? 'hu-HU' : 'en-US')
  const newsItems: NewsItem[] = []
  
  // Extract headlines and content using various patterns
  const patterns = [
    /#{1,3}\s*(.+?)(?:\n|$)/g, // Headlines
    /\*\*(.+?)\*\*/g, // Bold text
    /\[(.+?)\]\((.+?)\)/g, // Links with text
  ]
  
  const headlines = []
  const links = []
  
  // Extract headlines
  let match
  while ((match = patterns[0].exec(markdown)) !== null) {
    const title = match[1].trim()
    if (title.toLowerCase().includes('ai') || 
        title.toLowerCase().includes('artificial') ||
        title.toLowerCase().includes('machine learning') ||
        title.toLowerCase().includes('technology')) {
      headlines.push(title)
    }
  }
  
  // Extract links
  patterns[2].lastIndex = 0
  while ((match = patterns[2].exec(markdown)) !== null) {
    const linkText = match[1].trim()
    const url = match[2].trim()
    if (linkText.toLowerCase().includes('ai') || 
        linkText.toLowerCase().includes('artificial') ||
        linkText.toLowerCase().includes('technology')) {
      links.push({ text: linkText, url })
    }
  }
  
  // Create news items from extracted data
  for (let i = 0; i < Math.min(6, Math.max(headlines.length, links.length)); i++) {
    const headline = headlines[i] || `AI Technology Update ${i + 1}`
    const link = links[i] || { text: headline, url: 'https://www.perplexity.ai/discover' }
    
    newsItems.push({
      title: language === 'hu' ? translateToHungarian(headline) : headline,
      excerpt: language === 'hu' 
        ? `Friss fejlesztés a mesterséges intelligencia területén. ${headline.substring(0, 100)}...`
        : `Fresh development in artificial intelligence. ${headline.substring(0, 100)}...`,
      category: language === 'hu' ? 'AI Trendek' : 'AI Trends',
      date: currentDate,
      readTime: language === 'hu' ? '5 perc' : '5 min',
      featured: i < 3,
      externalLink: link.url.startsWith('http') ? link.url : 'https://www.perplexity.ai/discover'
    })
  }
  
  return newsItems
}

function translateToHungarian(text: string): string {
  const translations = {
    'AI': 'MI',
    'Artificial Intelligence': 'Mesterséges Intelligencia',
    'Machine Learning': 'Gépi Tanulás',
    'Technology': 'Technológia',
    'Development': 'Fejlesztés',
    'Innovation': 'Innováció',
    'Research': 'Kutatás'
  }
  
  let translated = text
  for (const [eng, hun] of Object.entries(translations)) {
    translated = translated.replace(new RegExp(eng, 'gi'), hun)
  }
  return translated
}

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