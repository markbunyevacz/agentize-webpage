import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight, Search, ExternalLink, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  url?: string;
  externalLink?: string;
}

const Blog = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch fresh tech news from Perplexity Discover every time
  useEffect(() => {
    const fetchFreshTechNews = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Try multiple CORS proxy services
        const proxyServices = [
          'https://api.allorigins.win/get?url=',
          'https://corsproxy.io/?',
          'https://cors-anywhere.herokuapp.com/',
          'https://api.codetabs.com/v1/proxy?quest='
        ];
        
        const perplexityTechUrl = 'https://www.perplexity.ai/discover/tech';
        let success = false;
        
        for (const proxyUrl of proxyServices) {
          try {
            console.log(`Trying proxy: ${proxyUrl}`);
            const response = await fetch(proxyUrl + encodeURIComponent(perplexityTechUrl), {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
              }
            });
            
            if (!response.ok) {
              console.log(`Proxy ${proxyUrl} failed with status: ${response.status}`);
              continue;
            }
            
            const data = await response.json();
            const htmlContent = data.contents || data.data || data;
            
            if (typeof htmlContent === 'string' && htmlContent.length > 100) {
              // Extract AI/tech news from HTML
              const freshNews = extractTechNewsFromHTML(htmlContent);
              
              if (freshNews.length > 0) {
                setPosts(freshNews);
                setError('');
                console.log(`Successfully loaded ${freshNews.length} fresh tech articles via ${proxyUrl}`);
                success = true;
                break;
              }
            }
          } catch (err) {
            console.error(`Error with proxy ${proxyUrl}:`, err);
            continue;
          }
        }
        
        if (!success) {
          throw new Error('All proxy services failed');
        }
        
      } catch (err) {
        console.error('Error fetching Perplexity tech news:', err);
        setError('Perplexity Discover tech oldal elérése sikertelen. Statikus tartalmat mutatunk.');
        setPosts(getFallbackContent());
      } finally {
        setLoading(false);
      }
    };

    fetchFreshTechNews();
  }, [language]);

  const extractTechNewsFromHTML = (htmlContent: string): BlogPost[] => {
    const newsItems: BlogPost[] = [];
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const formatDate = (date: Date) => 
      language === 'hu' 
        ? date.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    try {
      // Parse HTML content
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Look for article elements, headlines, and links
      const articleSelectors = [
        'article', 
        '[data-testid*="article"]',
        '[class*="article"]',
        '[class*="card"]',
        'h1, h2, h3',
        'a[href*="/discover"]',
        '[class*="discover"]'
      ];
      
      let extractedCount = 0;
      const maxItems = 8;
      
      // Try different selectors to find content
      for (const selector of articleSelectors) {
        if (extractedCount >= maxItems) break;
        
        const elements = doc.querySelectorAll(selector);
        elements.forEach((element) => {
          if (extractedCount >= maxItems) return;
          
          const text = element.textContent?.trim() || '';
          const linkElement = element.querySelector('a') || (element.tagName === 'A' ? element : null);
          const href = linkElement?.getAttribute('href') || '';
          
          // Filter for AI/tech content
          if (text.length > 20 && (
            text.toLowerCase().includes('ai') ||
            text.toLowerCase().includes('artificial intelligence') ||
            text.toLowerCase().includes('machine learning') ||
            text.toLowerCase().includes('technology') ||
            text.toLowerCase().includes('tech') ||
            text.toLowerCase().includes('model') ||
            text.toLowerCase().includes('google') ||
            text.toLowerCase().includes('openai') ||
            text.toLowerCase().includes('microsoft') ||
            text.toLowerCase().includes('meta') ||
            text.toLowerCase().includes('deepseek') ||
            text.toLowerCase().includes('perplexity') ||
            text.toLowerCase().includes('chatgpt')
          )) {
            const title = text.length > 100 ? text.substring(0, 80) + '...' : text;
            const fullUrl = href.startsWith('http') ? href : href.startsWith('/') ? `https://www.perplexity.ai${href}` : 'https://www.perplexity.ai/discover/tech';
            
            newsItems.push({
              title: language === 'hu' ? translateToHungarian(title) : title,
              excerpt: language === 'hu' 
                ? `Friss technológiai hír a Perplexity Discover-ről. ${title.substring(0, 100)}...`
                : `Fresh tech news from Perplexity Discover. ${title.substring(0, 100)}...`,
              category: language === 'hu' ? getHungarianCategory(text) : getEnglishCategory(text),
              date: formatDate(extractedCount % 2 === 0 ? currentDate : yesterday),
              readTime: language === 'hu' ? `${3 + Math.floor(Math.random() * 4)} perc` : `${3 + Math.floor(Math.random() * 4)} min`,
              featured: extractedCount < 3,
              externalLink: fullUrl
            });
            extractedCount++;
          }
        });
      }
      
    } catch (error) {
      console.error('Error parsing HTML:', error);
    }
    
    return newsItems;
  };

  const translateToHungarian = (text: string): string => {
    const translations: { [key: string]: string } = {
      'AI': 'MI',
      'Artificial Intelligence': 'Mesterséges Intelligencia',
      'Machine Learning': 'Gépi Tanulás',
      'Technology': 'Technológia',
      'Development': 'Fejlesztés',
      'Innovation': 'Innováció',
      'Research': 'Kutatás',
      'Google': 'Google',
      'OpenAI': 'OpenAI',
      'Microsoft': 'Microsoft',
      'Meta': 'Meta',
      'DeepSeek': 'DeepSeek',
      'ChatGPT': 'ChatGPT'
    };
    
    let translated = text;
    for (const [eng, hun] of Object.entries(translations)) {
      translated = translated.replace(new RegExp(eng, 'gi'), hun);
    }
    return translated;
  };

  const getEnglishCategory = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('google') || lowerText.includes('gemini')) return 'Google AI';
    if (lowerText.includes('openai') || lowerText.includes('chatgpt') || lowerText.includes('gpt')) return 'OpenAI';
    if (lowerText.includes('meta') || lowerText.includes('llama')) return 'Meta AI';
    if (lowerText.includes('microsoft') || lowerText.includes('copilot')) return 'Microsoft AI';
    if (lowerText.includes('deepseek')) return 'DeepSeek';
    if (lowerText.includes('perplexity')) return 'Perplexity';
    if (lowerText.includes('browser') || lowerText.includes('web')) return 'Browser Tech';
    if (lowerText.includes('security') || lowerText.includes('privacy')) return 'AI Security';
    return 'AI Tech';
  };

  const getHungarianCategory = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('google') || lowerText.includes('gemini')) return 'Google AI';
    if (lowerText.includes('openai') || lowerText.includes('chatgpt') || lowerText.includes('gpt')) return 'OpenAI';
    if (lowerText.includes('meta') || lowerText.includes('llama')) return 'Meta AI';
    if (lowerText.includes('microsoft') || lowerText.includes('copilot')) return 'Microsoft AI';
    if (lowerText.includes('deepseek')) return 'DeepSeek';
    if (lowerText.includes('perplexity')) return 'Perplexity';
    if (lowerText.includes('browser') || lowerText.includes('web')) return 'Böngésző Tech';
    if (lowerText.includes('security') || lowerText.includes('privacy')) return 'AI Biztonság';
    return 'AI Tech';
  };

  const getFallbackContent = (): BlogPost[] => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const formatDate = (date: Date) => 
      language === 'hu' 
        ? date.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    if (language === 'en') {
      return [
        {
          title: "China's DeepSeek AI Breakthrough Rocks Silicon Valley",
          excerpt: "DeepSeek, a little-known Chinese AI startup, has created an advanced AI model that matches top US competitors at a fraction of the cost, sending shockwaves through tech stocks.",
          category: "AI Models",
          date: formatDate(today),
          readTime: "6 min",
          featured: true,
          externalLink: "https://www.cnn.com/2025/01/28/china/china-deepseek-ai-success-tech-intl-hnk"
        },
        {
          title: "Google Rolls Out Gemini Deep Think AI with Parallel Reasoning",
          excerpt: "Google DeepMind launches Gemini 2.5 Deep Think, its most advanced AI reasoning model that explores multiple ideas simultaneously to choose the best answers.",
          category: "AI Agents",
          date: formatDate(yesterday),
          readTime: "7 min",
          featured: true,
          externalLink: "https://techcrunch.com/2025/08/01/google-rolls-out-gemini-deep-think-ai-a-reasoning-model-that-tests-multiple-ideas-in-parallel/"
        },
        {
          title: "Perplexity Launches Revolutionary Comet AI Browser",
          excerpt: "Perplexity's new Comet browser revolutionizes web interaction with AI-native features, voice commands, and intelligent content organization capabilities.",
          category: "Browser Tech",
          date: formatDate(twoDaysAgo),
          readTime: "5 min",
          featured: true,
          externalLink: "https://www.tomsguide.com/ai/i-tried-perplexitys-new-comet-browser-and-now-i-dont-think-i-can-go-back-to-chrome"
        },
        {
          title: "Alibaba's Qwen 2.5-Max AI Model Surpasses DeepSeek V3",
          excerpt: "Chinese tech giant Alibaba releases new version of its Qwen 2.5 AI model, claiming superiority over the highly regarded DeepSeek V3 model.",
          category: "AI Competition",
          date: formatDate(today),
          readTime: "4 min",
          featured: false,
          externalLink: "https://www.azernews.az/region/237104.html"
        },
        {
          title: "Perplexity Mac App Gains System Control via MCP",
          excerpt: "Perplexity's macOS app now supports Model Context Protocol, enabling access to Apple Notes, Calendar, and Google Drive with automated task execution.",
          category: "Productivity AI",
          date: formatDate(yesterday),
          readTime: "5 min",
          featured: false,
          externalLink: "https://www.business-standard.com/technology/tech-news/perplexity-mac-app-can-now-perform-system-tasks-using-mcp-what-it-means-125072800425_1.html"
        },
        {
          title: "ChatGPT Privacy Leak: Google Indexes Private Conversations",
          excerpt: "Major privacy issue discovered as Google has indexed thousands of shared ChatGPT conversations, making sensitive prompts and private data publicly searchable.",
          category: "AI Security",
          date: formatDate(twoDaysAgo),
          readTime: "6 min",
          featured: false,
          externalLink: "https://dev.to/alifar/exposed-google-is-indexing-private-ai-conversations-heres-what-you-should-know-37m5"
        }
      ];
    } else {
      return [
        {
          title: "Kína DeepSeek AI áttörése megrázza a Szilícium-völgyet",
          excerpt: "A DeepSeek, egy kevéssé ismert kínai AI startup, fejlett AI modellt hozott létre, amely töredék költségen vetekedik a vezető amerikai versenytársakkal.",
          category: "AI Modellek",
          date: formatDate(today),
          readTime: "6 perc",
          featured: true,
          externalLink: "https://www.cnn.com/2025/01/28/china/china-deepseek-ai-success-tech-intl-hnk"
        },
        {
          title: "Google kiadja a Gemini Deep Think AI-t párhuzamos gondolkodással",
          excerpt: "A Google DeepMind bemutatja a Gemini 2.5 Deep Think-et, legfejlettebb AI gondolkodási modelljét, amely többféle ötletet vizsgál egyidejűleg.",
          category: "AI Ügynökök",
          date: formatDate(yesterday),
          readTime: "7 perc",
          featured: true,
          externalLink: "https://techcrunch.com/2025/08/01/google-rolls-out-gemini-deep-think-ai-a-reasoning-model-that-tests-multiple-ideas-in-parallel/"
        },
        {
          title: "Perplexity elindítja a forradalmi Comet AI böngészőt",
          excerpt: "A Perplexity új Comet böngészője forradalmasítja a webes interakciót AI-natív funkciókkal, hangvezérléssel és intelligens tartalomszervezéssel.",
          category: "Böngésző Tech",
          date: formatDate(twoDaysAgo),
          readTime: "5 perc",
          featured: true,
          externalLink: "https://www.tomsguide.com/ai/i-tried-perplexitys-new-comet-browser-and-now-i-dont-think-i-can-go-back-to-chrome"
        },
        {
          title: "Alibaba Qwen 2.5-Max AI modellje felülmúlja a DeepSeek V3-at",
          excerpt: "A kínai technológiai óriás, az Alibaba kiadja Qwen 2.5 AI modelljének új verzióját, amely állítólag felülmúlja a nagyra értékelt DeepSeek V3 modellt.",
          category: "AI Verseny",
          date: formatDate(today),
          readTime: "4 perc",
          featured: false,
          externalLink: "https://www.azernews.az/region/237104.html"
        },
        {
          title: "Perplexity Mac alkalmazás rendszervezérlést kap MCP-n keresztül",
          excerpt: "A Perplexity macOS alkalmazása mostantól támogatja a Model Context Protocol-t, lehetővé téve az Apple Notes, Calendar és Google Drive elérését.",
          category: "Produktivitás AI",
          date: formatDate(yesterday),
          readTime: "5 perc",
          featured: false,
          externalLink: "https://www.business-standard.com/technology/tech-news/perplexity-mac-app-can-now-perform-system-tasks-using-mcp-what-it-means-125072800425_1.html"
        },
        {
          title: "ChatGPT adatvédelmi hiba: Google indexeli a privát beszélgetéseket",
          excerpt: "Súlyos adatvédelmi problémát fedeztek fel: a Google több ezer megosztott ChatGPT beszélgetést indexelt, nyilvánosan kereshetővé téve az érzékeny adatokat.",
          category: "AI Biztonság",
          date: formatDate(twoDaysAgo),
          readTime: "6 perc",
          featured: false,
          externalLink: "https://dev.to/alifar/exposed-google-is-indexing-private-ai-conversations-heres-what-you-should-know-37m5"
        }
      ];
    }
  };

  const getCategories = () => {
    if (language === 'en') {
      return ["All", "AI Models", "AI Agents", "Browser Tech", "AI Competition", "Productivity AI", "AI Security"];
    } else {
      return ["Mind", "AI Modellek", "AI Ügynökök", "Böngésző Tech", "AI Verseny", "Produktivitás AI", "AI Biztonság"];
    }
  };

  const categories = getCategories();

  // Filter posts based on selected category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory = !selectedCategory || selectedCategory === 'Mind' || selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (post: BlogPost) => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank');
    } else if (post.url) {
      window.location.href = post.url;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('blog.page.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('blog.page.subtitle')}
            </p>
          </div>

          
          {loading && (
            <div className="text-center py-12">
              <Loader2 className="mx-auto h-8 w-8 animate-spin" />
              <p className="mt-2 text-muted-foreground">
                Friss AI/tech hírek betöltése a Perplexity Discover-ből...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-4 mb-8">
              <p className="text-yellow-600 text-sm">{error}</p>
            </div>
          )}

          {!loading && (
            <>
              {/* Search and Categories */}
              <div className="mb-12">
                {/* Search */}
                <div className="relative max-w-md mx-auto mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder={t('blog.search.placeholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <Badge 
                      key={category} 
                      variant={selectedCategory === category || (!selectedCategory && (category === "Mind" || category === "All")) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedCategory(category === "Mind" || category === "All" ? "" : category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Featured Posts */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">{t('blog.featured')}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredPosts.filter(post => post.featured).map((post, index) => (
                    <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer group" onClick={() => handlePostClick(post)}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                          {t('blog.read.more')}
                          {post.externalLink ? (
                            <ExternalLink className="ml-2 h-4 w-4" />
                          ) : (
                            <ArrowRight className="ml-2 h-4 w-4" />
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Posts */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">{t('blog.all')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.filter(post => !post.featured).map((post, index) => (
                    <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer group" onClick={() => handlePostClick(post)}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readTime}
                          </div>
                          {post.externalLink && (
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">{t('blog.newsletter.title')}</h2>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                  {t('blog.newsletter.desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder={t('blog.newsletter.placeholder')}
                    className="flex-1 px-4 py-2 rounded-md text-foreground"
                  />
                  <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
                    {t('blog.subscribe')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;