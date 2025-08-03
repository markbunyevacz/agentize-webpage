import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight, Search, ExternalLink, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

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

  // Fetch fresh news from Perplexity Discover
  useEffect(() => {
    const fetchPerplexityNews = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Use a CORS proxy to fetch Perplexity Discover content
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const perplexityUrl = 'https://www.perplexity.ai/discover';
        
        const response = await fetch(proxyUrl + encodeURIComponent(perplexityUrl));
        
        if (!response.ok) {
          throw new Error('Failed to fetch Perplexity Discover');
        }
        
        const data = await response.json();
        const htmlContent = data.contents;
        
        // Extract AI-related news from the HTML content
        const aiNews = extractAINewsFromHTML(htmlContent);
        
        if (aiNews.length > 0) {
          setPosts(aiNews);
          setError('');
        } else {
          throw new Error('No AI news found');
        }
        
      } catch (err) {
        console.log('Error fetching Perplexity news:', err);
        setError('Perplexity Discover elérése sikertelen. Statikus tartalmat mutatunk.');
        setPosts(getStaticPosts());
      } finally {
        setLoading(false);
      }
    };

    fetchPerplexityNews();
  }, [language]);

  const extractAINewsFromHTML = (htmlContent: string): BlogPost[] => {
    const currentDate = new Date().toLocaleDateString(language === 'hu' ? 'hu-HU' : 'en-US');
    const newsItems: BlogPost[] = [];
    
    try {
      // Create a DOM parser to extract content
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Look for article titles, headlines, or links that might contain AI content
      const headings = doc.querySelectorAll('h1, h2, h3, h4, a[href*="ai"], a[href*="artificial"], a[href*="tech"]');
      const articles = doc.querySelectorAll('article, .article, [class*="card"], [class*="post"]');
      
      let extractedCount = 0;
      const maxItems = 6;
      
      // Extract from headings first
      headings.forEach((element) => {
        if (extractedCount >= maxItems) return;
        
        const text = element.textContent?.trim() || '';
        if (text.length > 10 && (
          text.toLowerCase().includes('ai') ||
          text.toLowerCase().includes('artificial') ||
          text.toLowerCase().includes('machine learning') ||
          text.toLowerCase().includes('technology') ||
          text.toLowerCase().includes('tech')
        )) {
          newsItems.push({
            title: language === 'hu' ? translateToHungarian(text) : text,
            excerpt: language === 'hu' 
              ? `Friss fejlesztés a mesterséges intelligencia területén. ${text.substring(0, 80)}...`
              : `Fresh development in artificial intelligence. ${text.substring(0, 80)}...`,
            category: language === 'hu' ? 'AI Trendek' : 'AI Trends',
            date: currentDate,
            readTime: language === 'hu' ? '5 perc' : '5 min',
            featured: extractedCount < 3,
            externalLink: 'https://www.perplexity.ai/discover'
          });
          extractedCount++;
        }
      });
      
    } catch (error) {
      console.log('Error parsing HTML:', error);
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
      'Research': 'Kutatás'
    };
    
    let translated = text;
    for (const [eng, hun] of Object.entries(translations)) {
      translated = translated.replace(new RegExp(eng, 'gi'), hun);
    }
    return translated;
  };

  const getStaticPosts = (): BlogPost[] => {
    if (language === 'en') { // English
      return [
        {
          title: "2025's Hottest AI Trends: Multimodal AI and Autonomous Agents",
          excerpt: "Generative AI is expanding beyond text to work with images, voice, and video. AI agents are now making autonomous decisions in business processes.",
          category: "AI Trends",
          date: "January 20, 2025",
          readTime: "8 min",
          featured: true,
          externalLink: "https://honlapmagus.hu/ai-trendek-2025/"
        },
        {
          title: "EU AI Act 2025: Practical Guide for Hungarian Companies",
          excerpt: "The EU AI Act is now in effect. What compliance requirements must Hungarian businesses meet? Complete checklist and practical examples.",
          category: "Legal & Compliance",
          date: "January 18, 2025",
          readTime: "12 min",
          featured: true,
          externalLink: "https://indigo.ai/en/blog/ai-act/"
        },
        {
          title: "AI-Based Hyper-Personalization in Marketing with Real Examples",
          excerpt: "Real-time customer data analysis and automated content generation. How Netflix and Amazon are taking recommendation systems to the next level.",
          category: "Marketing AI",
          date: "January 15, 2025",
          readTime: "10 min",
          featured: true,
          externalLink: "https://www.marketing-mentor.hu/mesterseges-intelligencia/varhato-marketing-ai-trendek-2025-ben/"
        }
      ];
    } else { // Hungarian
      return [
        {
          title: "2025 legforróbb AI-trendjei: Multimodális AI és autonóm ügynökök",
          excerpt: "A generatív AI a szövegen túl képekkel, hanggal és videóval is dolgozik. Az AI-ügynökök már önálló döntéseket hoznak üzleti folyamatokban.",
          category: "AI Trendek",
          date: "2025. január 20.",
          readTime: "8 perc",
          featured: true,
          externalLink: "https://honlapmagus.hu/ai-trendek-2025/"
        },
        {
          title: "EU AI Act 2025: Gyakorlati útmutató magyar cégeknek",
          excerpt: "Az EU AI Act már életben van. Milyen megfelelőségi követelményeknek kell megfelelniük a magyar vállalkozásoknak? Teljes checklist és gyakorlati példák.",
          category: "Jog & Compliance",
          date: "2025. január 18.",
          readTime: "12 perc",
          featured: true,
          externalLink: "https://indigo.ai/en/blog/ai-act/"
        },
        {
          title: "AI-alapú hiperperszonalizáció a marketingben valós példákkal",
          excerpt: "Valós idejű ügyféladat-elemzés és automatizált tartalomgenerálás. Hogyan viszik új szintre a Netflix és Amazon az ajánlórendszereket.",
          category: "Marketing AI",
          date: "2025. január 15.",
          readTime: "10 perc",
          featured: true,
          externalLink: "https://www.marketing-mentor.hu/mesterseges-intelligencia/varhato-marketing-ai-trendek-2025-ben/"
        }
      ];
    }
  };

  const getCategories = () => {
    if (language === 'en') { // English
      return ["All", "AI Trends", "Legal & Compliance", "Marketing AI", "Case Studies", "Technology", "SME Solutions", "Fintech"];
    } else { // Hungarian
      return ["Mind", "AI Trendek", "Jog & Compliance", "Marketing AI", "Esettanulmányok", "Technológia", "KKV Megoldások", "Fintech"];
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
                Friss AI hírek betöltése a Perplexity Discover-ből...
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