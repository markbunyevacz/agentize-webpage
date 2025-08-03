import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight, Search, ExternalLink } from 'lucide-react';
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

  // Initialize with fresh AI content immediately
  useEffect(() => {
    setPosts(getFreshAIContent());
  }, [language]);

  const getFreshAIContent = (): BlogPost[] => {
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;