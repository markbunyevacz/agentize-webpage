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

  // Load Perplexity tech content directly
  useEffect(() => {
    const loadBlogContent = async () => {
      try {
        setLoading(true);
        setError('');
        
        console.log('=== LOADING PERPLEXITY TECH CONTENT ===');
        
        // Use the real Perplexity content directly
        setPosts(getRealPerplexityContent());
        console.log('SUCCESS: Using Perplexity tech content');
        
      } catch (err) {
        console.error('=== CONTENT LOAD FAILED ===', err);
        setError('Hiba történt a tartalom betöltésekor');
      } finally {
        setLoading(false);
      }
    };

    loadBlogContent();
  }, [language]);

  const getRealPerplexityContent = (): BlogPost[] => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const formatDate = (date: Date) => 
      language === 'hu' 
        ? date.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    if (language === 'en') {
      return [
        {
          title: "Cook calls AI Apple's next defining chapter at rare meeting",
          excerpt: "Tim Cook rallies Apple staff around AI strategy, calling it the company's next defining chapter during a rare company meeting.",
          category: "Apple AI",
          date: formatDate(today),
          readTime: "5 min",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover/tech/tim-cook-rallies-apple-staff-i-9K9ZxqPhRnWf1mzIqzrepA"
        },
        {
          title: "Manus AI launches Wide Research, deploying 100 agents simultaneously",
          excerpt: "Manus AI introduces Wide Research platform that can deploy 100 AI agents simultaneously for comprehensive research tasks.",
          category: "AI Research",
          date: formatDate(today),
          readTime: "6 min",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover/tech/manus-ai-launches-wide-researc-gRXS2P0HS6.G562uJ61gjw"
        },
        {
          title: "Anthropic cuts off OpenAI's Claude access over GPT-5 benchmarking claims",
          excerpt: "Anthropic blocks OpenAI from accessing Claude models following claims about GPT-5 benchmarking activities.",
          category: "AI Competition",
          date: formatDate(today),
          readTime: "7 min",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover/tech/anthropic-cuts-off-openai-s-cl-PzzIvxppTzeKzmXLwx24ag"
        },
        {
          title: "Reddit pushes to become 'go-to search engine'",
          excerpt: "CEO Steve Huffman announced pivot during earnings call, highlighting AI-powered Reddit Answers feature serving 6 million users globally.",
          category: "Search Tech",
          date: formatDate(yesterday),
          readTime: "4 min",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover/tech/reddit-pushes-to-become-go-to-mM0q_EeHTMGGPmCGAQ1IWQ"
        },
        {
          title: "OpenAI raises $8.3B in oversubscribed round at $300B valuation",
          excerpt: "Investor demand reached five times capacity as the AI company doubled revenue to $12-13 billion annually.",
          category: "OpenAI",
          date: formatDate(today),
          readTime: "8 min",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover/tech/openai-raises-8-3b-at-300b-val-m7.gWkSYT7ypd2i7xStMXg"
        },
        {
          title: "Google launches Gemini Deep Think AI multi-agent reasoning model",
          excerpt: "Google introduces advanced Gemini Deep Think model with sophisticated multi-agent reasoning capabilities.",
          category: "Google AI",
          date: formatDate(today),
          readTime: "6 min",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover/tech/google-launches-gemini-deep-th-1YhLmwImQIWeV4eQfQ2TyA"
        }
      ];
    } else {
      return [
        {
          title: "Cook az AI-t nevezi az Apple következő meghatározó fejezetének",
          excerpt: "Tim Cook ritka céges megbeszélésen az AI stratégia köré gyűjti az Apple munkatársait, a cég következő meghatározó fejezetének nevezve azt.",
          category: "Apple AI",
          date: formatDate(today),
          readTime: "5 perc",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover/tech/tim-cook-rallies-apple-staff-i-9K9ZxqPhRnWf1mzIqzrepA"
        },
        {
          title: "Manus AI elindítja a Wide Research-t, 100 ügynököt telepítve egyszerre",
          excerpt: "A Manus AI bemutatja a Wide Research platformot, amely 100 AI ügynököt tud egyszerre telepíteni átfogó kutatási feladatokhoz.",
          category: "AI Kutatás",
          date: formatDate(today),
          readTime: "6 perc",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover/tech/manus-ai-launches-wide-researc-gRXS2P0HS6.G562uJ61gjw"
        },
        {
          title: "Anthropic elvágja az OpenAI Claude hozzáférését a GPT-5 benchmark állítások miatt",
          excerpt: "Az Anthropic blokkolja az OpenAI hozzáférését a Claude modellekhez a GPT-5 benchmark tevékenységekkel kapcsolatos állítások következtében.",
          category: "AI Verseny",
          date: formatDate(today),
          readTime: "7 perc",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover/tech/anthropic-cuts-off-openai-s-cl-PzzIvxppTzeKzmXLwx24ag"
        },
        {
          title: "Reddit 'vezető keresőmotorrá' akar válni",
          excerpt: "Steve Huffman CEO bejelentette a váltást az eredményhívás során, kiemelve az AI-alapú Reddit Answers funkciót, amely 6 millió felhasználót szolgál ki globálisan.",
          category: "Keresés Tech",
          date: formatDate(yesterday),
          readTime: "4 perc",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover/tech/reddit-pushes-to-become-go-to-mM0q_EeHTMGGPmCGAQ1IWQ"
        },
        {
          title: "OpenAI 8,3 milliárd dollárt gyűjt 300 milliárd dolláros értékeléssel",
          excerpt: "A befektetői kereslet ötszörösen meghaladta a kapacitást, miközben az AI cég megduplázta bevételét évi 12-13 milliárd dollárra.",
          category: "OpenAI",
          date: formatDate(today),
          readTime: "8 perc",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover/tech/openai-raises-8-3b-at-300b-val-m7.gWkSYT7ypd2i7xStMXg"
        },
        {
          title: "Google elindítja a Gemini Deep Think AI multi-ügynök gondolkodási modellt",
          excerpt: "A Google bemutatja a fejlett Gemini Deep Think modellt kifinomult multi-ügynök gondolkodási képességekkel.",
          category: "Google AI",
          date: formatDate(today),
          readTime: "6 perc",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover/tech/google-launches-gemini-deep-th-1YhLmwImQIWeV4eQfQ2TyA"
        }
      ];
    }
  };

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

  const getHackerNewsCategory = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (language === 'hu') {
      if (lowerTitle.includes('google') || lowerTitle.includes('gemini')) return 'Google AI';
      if (lowerTitle.includes('openai') || lowerTitle.includes('chatgpt') || lowerTitle.includes('gpt')) return 'OpenAI';
      if (lowerTitle.includes('meta') || lowerTitle.includes('llama')) return 'Meta AI';
      if (lowerTitle.includes('microsoft') || lowerTitle.includes('copilot')) return 'Microsoft AI';
      if (lowerTitle.includes('apple')) return 'Apple AI';
      if (lowerTitle.includes('ai') || lowerTitle.includes('artificial intelligence')) return 'AI Tech';
      if (lowerTitle.includes('programming') || lowerTitle.includes('developer')) return 'Fejlesztés';
      return 'Technológia';
    } else {
      if (lowerTitle.includes('google') || lowerTitle.includes('gemini')) return 'Google AI';
      if (lowerTitle.includes('openai') || lowerTitle.includes('chatgpt') || lowerTitle.includes('gpt')) return 'OpenAI';
      if (lowerTitle.includes('meta') || lowerTitle.includes('llama')) return 'Meta AI';
      if (lowerTitle.includes('microsoft') || lowerTitle.includes('copilot')) return 'Microsoft AI';
      if (lowerTitle.includes('apple')) return 'Apple AI';
      if (lowerTitle.includes('ai') || lowerTitle.includes('artificial intelligence')) return 'AI Tech';
      if (lowerTitle.includes('programming') || lowerTitle.includes('developer')) return 'Development';
      return 'Technology';
    }
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
      return ["All", "Apple AI", "AI Research", "AI Competition", "Search Tech", "OpenAI", "Google AI"];
    } else {
      return ["Mind", "Apple AI", "AI Kutatás", "AI Verseny", "Keresés Tech", "OpenAI", "Google AI"];
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

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showContent, setShowContent] = useState(false);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setShowContent(true);
  };

  const closeContent = () => {
    setShowContent(false);
    setSelectedPost(null);
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

      {/* Content Modal */}
      {showContent && selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    {selectedPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedPost.readTime}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeContent}
                  className="ml-4"
                >
                  ✕
                </Button>
              </div>
              
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>
                
                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'hu' ? 'Főbb pontok:' : 'Key Points:'}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {selectedPost.category.includes('AI') && (
                      <>
                        <li>• {language === 'hu' ? 'Legújabb AI technológiai fejlesztések' : 'Latest AI technology developments'}</li>
                        <li>• {language === 'hu' ? 'Piaci befolyás és trendek elemzése' : 'Market impact and trend analysis'}</li>
                        <li>• {language === 'hu' ? 'Technikai részletek és lehetőségek' : 'Technical details and opportunities'}</li>
                      </>
                    )}
                    {selectedPost.category.includes('Google') && (
                      <>
                        <li>• {language === 'hu' ? 'Google mesterséges intelligencia fejlesztések' : 'Google artificial intelligence developments'}</li>
                        <li>• {language === 'hu' ? 'Gemini modell újdonságai' : 'Gemini model innovations'}</li>
                      </>
                    )}
                    {selectedPost.category.includes('OpenAI') && (
                      <>
                        <li>• {language === 'hu' ? 'OpenAI stratégiai lépések' : 'OpenAI strategic moves'}</li>
                        <li>• {language === 'hu' ? 'ChatGPT és GPT modellek fejlesztése' : 'ChatGPT and GPT model development'}</li>
                      </>
                    )}
                    <li>• {language === 'hu' ? 'Gyakorlati alkalmazási lehetőségek' : 'Practical application opportunities'}</li>
                    <li>• {language === 'hu' ? 'Jövőbeli kilátások és előrejelzések' : 'Future outlook and predictions'}</li>
                  </ul>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'hu' 
                      ? 'Ez egy összefoglaló a legfrissebb technológiai hírekről.' 
                      : 'This is a summary of the latest technology news.'}
                  </p>
                  {selectedPost.externalLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(selectedPost.externalLink, '_blank')}
                      className="gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {language === 'hu' ? 'Eredeti cikk megtekintése' : 'View Original Article'}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;