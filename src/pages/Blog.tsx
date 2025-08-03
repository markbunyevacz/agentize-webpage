import { useState } from 'react';
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
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getPosts = (): BlogPost[] => {
    if (t('nav.home') === 'Home') { // English
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
        },
        {
          title: "Generative AI in Corporate Practice - Hungarian Case Studies",
          excerpt: "How are Hungarian SMEs implementing AI solutions in their daily operations? Real examples from administration, customer service and content creation.",
          category: "Case Studies",
          date: "January 12, 2025",
          readTime: "7 min",
          featured: false,
          externalLink: "https://blog.skillbot.hu/ai-hirek/5-ai-trend-amire-magyar-vallalkozokent-erdemes-odafigyelned-2025-ben/"
        },
        {
          title: "AI Agents vs. Traditional Automation - When to Use Which?",
          excerpt: "The key differences between chatbots and intelligent agents. When are autonomous AI systems more effective than traditional rule-based automation?",
          category: "Technology",
          date: "January 10, 2025",
          readTime: "6 min",
          featured: false,
          url: "/blog/ai-agents-vs-automation"
        },
        {
          title: "Predictive Analytics in the SME Sector",
          excerpt: "How can small and medium enterprises leverage AI for forecasting, inventory management, and customer behavior prediction?",
          category: "SME Solutions",
          date: "January 8, 2025",
          readTime: "5 min",
          featured: false,
          url: "/blog/predictive-analytics-sme"
        },
        {
          title: "Compliance Checklist: EU AI Act Step by Step",
          excerpt: "Detailed guide for businesses: risk assessment, documentation requirements, and audit preparation for AI Act compliance.",
          category: "Legal & Compliance",
          date: "January 5, 2025",
          readTime: "15 min",
          featured: false,
          externalLink: "https://ogletree.com/insights-resources/blog-posts/eu-ai-act-update-navigating-the-future/"
        },
        {
          title: "AI in Fintech: Fraud Prevention with Real Examples",
          excerpt: "How are banks using AI for fraud detection? Real examples from Bank of America prototypes and Hungarian fintech companies.",
          category: "Fintech",
          date: "January 3, 2025",
          readTime: "8 min",
          featured: false,
          externalLink: "https://fintechzone.hu/fintech-trendek-amik-atirjak-a-bankszakma-jovojet-2025-elso-felevenek-legfontosabb-tanulsagai/"
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
        },
        {
          title: "Generatív AI a vállalati gyakorlatban - magyar esettanulmányok",
          excerpt: "Hogyan vezetik be a magyar KKV-k az AI megoldásokat napi működésükbe? Valós példák adminisztrációból, ügyfélszolgálatból és tartalomkészítésből.",
          category: "Esettanulmányok",
          date: "2025. január 12.",
          readTime: "7 perc",
          featured: false,
          externalLink: "https://blog.skillbot.hu/ai-hirek/5-ai-trend-amire-magyar-vallalkozokent-erdemes-odafigyelned-2025-ben/"
        },
        {
          title: "AI-ügynökök vs. hagyományos automatizáció - mikor melyiket?",
          excerpt: "A chatbotok és intelligens ügynökök közötti kulcsfontosságú különbségek. Mikor hatékonyabbak az autonóm AI rendszerek a hagyományos szabályalapú automatizációnál?",
          category: "Technológia",
          date: "2025. január 10.",
          readTime: "6 perc",
          featured: false,
          url: "/blog/ai-ugynokök-vs-automatizacio"
        },
        {
          title: "Prediktív analitika a KKV szektorban",
          excerpt: "Hogyan használhatják ki a kis- és középvállalkozások az AI-t előrejelzésekhez, készletgazdálkodáshoz és ügyféli viselkedés elemzéshez?",
          category: "KKV Megoldások",
          date: "2025. január 8.",
          readTime: "5 perc",
          featured: false,
          url: "/blog/prediktiv-analitika-kkv"
        },
        {
          title: "Compliance checklist: EU AI Act lépésről lépésre",
          excerpt: "Részletes útmutató vállalkozásoknak: kockázatelemzés, dokumentációs követelmények és audit felkészülés az AI Act megfelelőséghez.",
          category: "Jog & Compliance",
          date: "2025. január 5.",
          readTime: "15 perc",
          featured: false,
          externalLink: "https://ogletree.com/insights-resources/blog-posts/eu-ai-act-update-navigating-the-future/"
        },
        {
          title: "AI a fintechben: Csalásmegelőzés valós példákon",
          excerpt: "Hogyan használják a bankok az AI-t csalásdetektálásra? Valós példák a Bank of America prototípusaitól és magyar fintech cégeknél.",
          category: "Fintech",
          date: "2025. január 3.",
          readTime: "8 perc",
          featured: false,
          externalLink: "https://fintechzone.hu/fintech-trendek-amik-atirjak-a-bankszakma-jovojet-2025-elso-felevenek-legfontosabb-tanulsagai/"
        }
      ];
    }
  };

  const getCategories = () => {
    if (t('nav.home') === 'Home') { // English
      return ["All", "AI Trends", "Legal & Compliance", "Marketing AI", "Case Studies", "Technology", "SME Solutions", "Fintech"];
    } else { // Hungarian
      return ["Mind", "AI Trendek", "Jog & Compliance", "Marketing AI", "Esettanulmányok", "Technológia", "KKV Megoldások", "Fintech"];
    }
  };

  const posts = getPosts();
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