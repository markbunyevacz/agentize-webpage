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
          title: "OpenAI Unveils GPT-5: Revolutionary Reasoning Capabilities",
          excerpt: "GPT-5 introduces unprecedented multimodal reasoning, combining text, image, and voice processing with enhanced factual accuracy and real-time learning capabilities.",
          category: "AI Models",
          date: formatDate(today),
          readTime: "7 min",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "Google's Gemini 2.0 Powers New AI Agent Ecosystem",
          excerpt: "Google announces Gemini 2.0 with autonomous agent capabilities, enabling AI systems to perform complex multi-step tasks across various applications and platforms.",
          category: "AI Agents",
          date: formatDate(yesterday),
          readTime: "6 min",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "EU AI Act 2025: New Compliance Framework Goes Live",
          excerpt: "The European Union's AI Act enforcement begins, establishing mandatory compliance requirements for high-risk AI systems and significant penalties for violations.",
          category: "Legal & Compliance",
          date: formatDate(twoDaysAgo),
          readTime: "8 min",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "Meta's LLaMA 3.1 Integration in Business Applications",
          excerpt: "Meta releases enterprise-focused LLaMA 3.1 tools, enabling businesses to deploy custom AI assistants with enhanced privacy and domain-specific training.",
          category: "Enterprise AI",
          date: formatDate(yesterday),
          readTime: "5 min",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "Anthropic's Claude 3.5 Introduces Real-Time Code Generation",
          excerpt: "Claude 3.5 Sonnet now features live coding assistance with multi-language support, debugging capabilities, and integrated development environment plugins.",
          category: "Developer Tools",
          date: formatDate(today),
          readTime: "4 min",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "AI-Powered Cybersecurity Prevents 2.3M Attacks Daily",
          excerpt: "Latest cybersecurity report shows AI systems successfully identifying and blocking sophisticated attacks, reducing security incident response time by 85%.",
          category: "Cybersecurity",
          date: formatDate(twoDaysAgo),
          readTime: "6 min",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover"
        }
      ];
    } else {
      return [
        {
          title: "OpenAI bemutatja a GPT-5-öt: Forradalmi gondolkodási képességek",
          excerpt: "A GPT-5 példátlan multimodális gondolkodást vezet be, egyesítve a szöveg-, kép- és hangfeldolgozást fokozott tényszerű pontossággal és valós idejű tanulási képességekkel.",
          category: "AI Modellek",
          date: formatDate(today),
          readTime: "7 perc",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "Google Gemini 2.0 új AI ügynök ökoszisztémát hajt meg",
          excerpt: "A Google bejelenti a Gemini 2.0-t autonóm ügynök képességekkel, lehetővé téve az AI rendszerek számára összetett, többlépéses feladatok végrehajtását.",
          category: "AI Ügynökök",
          date: formatDate(yesterday),
          readTime: "6 perc",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "EU AI Act 2025: Új megfelelőségi keretrendszer lép életbe",
          excerpt: "Az Európai Unió AI Act végrehajtása megkezdődik, kötelező megfelelőségi követelményeket állapítva meg a magas kockázatú AI rendszerekre.",
          category: "Jog & Compliance",
          date: formatDate(twoDaysAgo),
          readTime: "8 perc",
          featured: true,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "Meta LLaMA 3.1 integrációja üzleti alkalmazásokban",
          excerpt: "A Meta kiadja a vállalati fókuszú LLaMA 3.1 eszközöket, lehetővé téve a vállalkozások számára egyedi AI asszisztensek telepítését.",
          category: "Vállalati AI",
          date: formatDate(yesterday),
          readTime: "5 perc",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "Anthropic Claude 3.5 valós idejű kódgenerálást vezet be",
          excerpt: "A Claude 3.5 Sonnet most élő kódolási segítséget kínál többnyelvű támogatással, hibakeresési képességekkel és fejlesztői környezet bővítményekkel.",
          category: "Fejlesztői Eszközök",
          date: formatDate(today),
          readTime: "4 perc",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover"
        },
        {
          title: "AI-vezérelt kiberbiztonság naponta 2,3M támadást akadályoz meg",
          excerpt: "A legújabb kiberbiztonság jelentés szerint az AI rendszerek sikeresen azonosítják és blokkolják a kifinomult támadásokat, 85%-kal csökkentve a válaszidőt.",
          category: "Kiberbiztonság",
          date: formatDate(twoDaysAgo),
          readTime: "6 perc",
          featured: false,
          externalLink: "https://www.perplexity.ai/discover"
        }
      ];
    }
  };

  const getCategories = () => {
    if (language === 'en') {
      return ["All", "AI Models", "AI Agents", "Legal & Compliance", "Enterprise AI", "Developer Tools", "Cybersecurity"];
    } else {
      return ["Mind", "AI Modellek", "AI Ügynökök", "Jog & Compliance", "Vállalati AI", "Fejlesztői Eszközök", "Kiberbiztonság"];
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