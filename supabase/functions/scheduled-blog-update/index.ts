import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  url?: string;
  language: string;
  created_at?: string;
  updated_at?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    console.log('Starting scheduled blog content update...')

    // Scrape fresh content from multiple sources
    const freshPosts = await scrapeLatestTechNews()
    
    if (freshPosts.length === 0) {
      console.log('No fresh content found, keeping existing data')
      return new Response(JSON.stringify({ message: 'No updates needed' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Insert new posts to database
    const { data, error } = await supabaseClient
      .from('blog_posts')
      .upsert(freshPosts, { 
        onConflict: 'title,language',
        ignoreDuplicates: false 
      })

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    console.log(`Updated ${freshPosts.length} blog posts`)

    return new Response(JSON.stringify({ 
      message: 'Blog updated successfully',
      postsUpdated: freshPosts.length 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error updating blog:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

async function scrapeLatestTechNews(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []
  
  try {
    // Scrape TechCrunch AI section
    const techCrunchResponse = await fetch('https://techcrunch.com/category/artificial-intelligence/')
    if (techCrunchResponse.ok) {
      const html = await techCrunchResponse.text()
      const techCrunchPosts = extractTechCrunchPosts(html)
      posts.push(...techCrunchPosts)
    }
  } catch (error) {
    console.log('TechCrunch scraping failed:', error)
  }

  try {
    // Scrape VentureBeat AI section
    const ventureBeatResponse = await fetch('https://venturebeat.com/ai/')
    if (ventureBeatResponse.ok) {
      const html = await ventureBeatResponse.text()
      const ventureBeatPosts = extractVentureBeatPosts(html)
      posts.push(...ventureBeatPosts)
    }
  } catch (error) {
    console.log('VentureBeat scraping failed:', error)
  }

  // Create Hungarian translations
  const hungarianPosts = posts.map(post => ({
    ...post,
    language: 'hu',
    title: translateTitle(post.title),
    excerpt: translateExcerpt(post.excerpt),
    category: translateCategory(post.category)
  }))

  return [...posts, ...hungarianPosts]
}

function extractTechCrunchPosts(html: string): BlogPost[] {
  const posts: BlogPost[] = []
  
  // Extract article blocks with title, excerpt and url
  const articleRegex = /<article[^>]*class="[^"]*post-block[^"]*"[^>]*>(.*?)<\/article>/gs
  
  let match
  let index = 0
  
  while ((match = articleRegex.exec(html)) !== null && index < 10) {
    const articleHtml = match[1]
    
    // Extract title and URL
    const titleMatch = articleHtml.match(/<h2[^>]*class="[^"]*post-block__title[^"]*"[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>/s)
    if (!titleMatch) continue
    
    const url = titleMatch[1]
    const title = titleMatch[2].trim()
    
    if (!title || !isAIRelated(title)) continue
    
    // Extract excerpt/first paragraph
    let excerpt = ''
    const excerptMatch = articleHtml.match(/<div[^>]*class="[^"]*post-block__content[^"]*"[^>]*>(.*?)<\/div>/s)
    if (excerptMatch) {
      excerpt = excerptMatch[1]
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim()
        .substring(0, 200) + '...' // Limit to 200 chars
    }
    
    if (!excerpt) {
      excerpt = `${title} - Olvassa el a teljes cikket a TechCrunch oldalán.`
    }
    
    posts.push({
      title,
      excerpt,
      category: 'AI',
      date: new Date().toISOString().split('T')[0],
      readTime: '3 perc',
      url: url.startsWith('http') ? url : `https://techcrunch.com${url}`,
      language: 'en'
    })
    index++
  }
  
  return posts
}

function extractVentureBeatPosts(html: string): BlogPost[] {
  const posts: BlogPost[] = []
  
  // Extract article blocks with title, excerpt and url
  const articleRegex = /<article[^>]*class="[^"]*ArticleListing__item[^"]*"[^>]*>(.*?)<\/article>/gs
  
  let match
  let index = 0
  
  while ((match = articleRegex.exec(html)) !== null && index < 10) {
    const articleHtml = match[1]
    
    // Extract title and URL
    const titleMatch = articleHtml.match(/<h2[^>]*class="[^"]*ArticleListing__title[^"]*"[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a>/s)
    if (!titleMatch) continue
    
    const url = titleMatch[1]
    const title = titleMatch[2].trim()
    
    if (!title || !isAIRelated(title)) continue
    
    // Extract excerpt/description
    let excerpt = ''
    const excerptMatch = articleHtml.match(/<div[^>]*class="[^"]*ArticleListing__excerpt[^"]*"[^>]*>(.*?)<\/div>/s) ||
                        articleHtml.match(/<p[^>]*class="[^"]*ArticleListing__description[^"]*"[^>]*>(.*?)<\/p>/s)
    
    if (excerptMatch) {
      excerpt = excerptMatch[1]
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim()
        .substring(0, 200) + '...' // Limit to 200 chars
    }
    
    if (!excerpt) {
      excerpt = `${title} - Olvassa el a teljes cikket a VentureBeat oldalán.`
    }
    
    posts.push({
      title,
      excerpt,
      category: 'Technology',
      date: new Date().toISOString().split('T')[0],
      readTime: '4 perc',
      url: url.startsWith('http') ? url : `https://venturebeat.com${url}`,
      language: 'en'
    })
    index++
  }
  
  return posts
}

function isAIRelated(text: string): boolean {
  const aiKeywords = [
    'ai', 'artificial intelligence', 'machine learning', 'deep learning',
    'neural network', 'chatgpt', 'openai', 'llm', 'generative', 'automation',
    'robot', 'algorithm', 'data science', 'computer vision', 'nlp'
  ]
  
  const lowerText = text.toLowerCase()
  return aiKeywords.some(keyword => lowerText.includes(keyword))
}

function translateTitle(title: string): string {
  return title
    .replace(/AI/gi, 'MI')
    .replace(/artificial intelligence/gi, 'mesterséges intelligencia')
    .replace(/machine learning/gi, 'gépi tanulás')
    .replace(/ChatGPT/gi, 'ChatGPT')
    .replace(/OpenAI/gi, 'OpenAI')
    .replace(/Google/gi, 'Google')
    .replace(/Microsoft/gi, 'Microsoft')
    .replace(/tech/gi, 'technológia')
    .replace(/startup/gi, 'startup')
    .replace(/new/gi, 'új')
    .replace(/latest/gi, 'legfrissebb')
}

function translateExcerpt(excerpt: string): string {
  return excerpt
    .replace(/Latest news/gi, 'Legfrissebb hírek')
    .replace(/AI world/gi, 'MI világából')
    .replace(/technology/gi, 'technológia')
    .replace(/innovation/gi, 'innováció')
}

function translateCategory(category: string): string {
  const translations: { [key: string]: string } = {
    'AI': 'MI',
    'Technology': 'Technológia',
    'Startups': 'Startupok',
    'Business': 'Üzlet',
    'Innovation': 'Innováció'
  }
  
  return translations[category] || category
}