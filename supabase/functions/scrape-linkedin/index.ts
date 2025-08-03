import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url } = await req.json()
    
    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY')
    if (!firecrawlApiKey) {
      throw new Error('FIRECRAWL_API_KEY not found in environment variables')
    }

    // Use Firecrawl API to scrape the LinkedIn page
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${firecrawlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        formats: ['markdown', 'html'],
        includeTags: ['title', 'meta', 'img'],
        onlyMainContent: true
      }),
    })

    if (!response.ok) {
      throw new Error(`Firecrawl API error: ${response.status}`)
    }

    const data = await response.json()

    // Extract company information from the scraped data
    let companyInfo = {
      name: '',
      description: '',
      industry: '',
      location: '',
      followers: '',
      about: '',
      logoUrl: ''
    }

    if (data.success && data.data) {
      const content = data.data.markdown || data.data.html || ''
      
      // Extract key information using regex patterns
      const nameMatch = content.match(/(?:company[\/\s]*)?([A-Za-z]+(?:\s+[A-Za-z]+)*)\s*\|\s*LinkedIn/i)
      if (nameMatch) companyInfo.name = nameMatch[1]

      const industryMatch = content.match(/Industry[:\s]*([^\n\r]+)/i)
      if (industryMatch) companyInfo.industry = industryMatch[1].trim()

      const locationMatch = content.match(/(?:Headquarters|Location)[:\s]*([^\n\r]+)/i)
      if (locationMatch) companyInfo.location = locationMatch[1].trim()

      const followersMatch = content.match(/(\d+[\d,]*)\s*followers/i)
      if (followersMatch) companyInfo.followers = followersMatch[1]

      const aboutMatch = content.match(/About\s*us[:\s]*([^]+?)(?=\n\s*\n|\n\s*[A-Z]|$)/i)
      if (aboutMatch) companyInfo.about = aboutMatch[1].trim()

      // Try to extract logo URL from HTML if available
      if (data.data.html) {
        const logoMatch = data.data.html.match(/(?:logo|company.*?image).*?src=["']([^"']+)["']/i)
        if (logoMatch) companyInfo.logoUrl = logoMatch[1]
      }

      companyInfo.description = companyInfo.about || 'AI automation and intelligent solutions'
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        companyInfo,
        rawData: data.data 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})