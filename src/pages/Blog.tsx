import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const getPosts = () => {
    if (t('nav.home') === 'Home') { // English
      return [
        {
          title: "AI and Law: What to Watch for in 2025?",
          excerpt: "With the EU AI Act coming into effect, new challenges and opportunities are opening up for companies. Here are the most important things to know.",
          category: "Legal & Compliance",
          date: "January 15, 2024",
          readTime: "8 min",
          featured: true
        },
        {
          title: "Chatbot VS Intelligent Agent – What's the Difference?",
          excerpt: "Many people confuse chatbots with AI agents. We show the key differences and when to use which.",
          category: "Technology",
          date: "January 10, 2024",
          readTime: "5 min",
          featured: true
        },
        {
          title: "10 Questions to Ask AI Providers Before Purchasing",
          excerpt: "A practical guide for business leaders: what to look for when purchasing AI solutions to avoid unpleasant surprises.",
          category: "Business",
          date: "January 8, 2024",
          readTime: "6 min",
          featured: false
        },
        {
          title: "How is AI Changing Customer Service?",
          excerpt: "Real case studies and statistics on the impact of AI-driven customer service. ROI calculations and implementation tips.",
          category: "Customer Service",
          date: "January 5, 2024",
          readTime: "7 min",
          featured: false
        },
        {
          title: "Prompt Engineering Basics for Beginners",
          excerpt: "Step-by-step guide to writing effective AI prompts. With practical examples and do's and don'ts list.",
          category: "Technology",
          date: "January 3, 2024",
          readTime: "4 min",
          featured: false
        },
        {
          title: "GDPR and AI: What You Need to Know About Data Protection?",
          excerpt: "Detailed overview of how artificial intelligence use aligns with GDPR requirements.",
          category: "Legal & Compliance",
          date: "January 1, 2024",
          readTime: "9 min",
          featured: false
        }
      ];
    } else { // Hungarian
      return [
        {
          title: "AI és jog: mire figyelj 2025-ben?",
          excerpt: "Az EU AI Act életbelépésével új kihívások és lehetőségek nyílnak meg a vállalatok előtt. Íme a legfontosabb tudnivalók.",
          category: "Jog & Compliance",
          date: "2024. január 15.",
          readTime: "8 perc",
          featured: true
        },
        {
          title: "Chatbot VS intelligens agent – mi a különbség?",
          excerpt: "Sokan összetévesztik a chatbotokat az AI ügynökökkel. Megmutatjuk a kulcsfontosságú különbségeket és mikor melyiket érdemes használni.",
          category: "Technológia",
          date: "2024. január 10.",
          readTime: "5 perc",
          featured: true
        },
        {
          title: "10 kérdés, amit AI-vásárlás előtt fel kell tenned a szolgáltatónak",
          excerpt: "Praktikus útmutató vállalati vezetőknek: mire figyelj AI megoldás beszerzésekor, hogy ne érjen kellemetlen meglepetés.",
          category: "Üzlet",
          date: "2024. január 8.",
          readTime: "6 perc",
          featured: false
        },
        {
          title: "Hogyan változtatja meg az AI a customer service-t?",
          excerpt: "Valós esettanulmányok és statisztikák az AI-vezérelt ügyfélszolgálat hatásairól. ROI számítások és implementációs tippek.",
          category: "Ügyfélszolgálat",
          date: "2024. január 5.",
          readTime: "7 perc",
          featured: false
        },
        {
          title: "Prompt engineering alapok kezdőknek",
          excerpt: "Lépésről lépésre útmutató hatékony AI promptok írásához. Gyakorlati példákkal és do's and don'ts listával.",
          category: "Technológia",
          date: "2024. január 3.",
          readTime: "4 perc",
          featured: false
        },
        {
          title: "GDPR és AI: mit kell tudni az adatvédelemről?",
          excerpt: "Részletes áttekintés arról, hogyan fér össze a mesterséges intelligencia használata a GDPR előírásaival.",
          category: "Jog & Compliance",
          date: "2024. január 1.",
          readTime: "9 perc",
          featured: false
        }
      ];
    }
  };

  const getCategories = () => {
    if (t('nav.home') === 'Home') { // English
      return ["All", "Technology", "Legal & Compliance", "Business", "Customer Service"];
    } else { // Hungarian
      return ["Mind", "Technológia", "Jog & Compliance", "Üzlet", "Ügyfélszolgálat"];
    }
  };

  const posts = getPosts();
  const categories = getCategories();

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

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "Mind" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{t('blog.featured')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {posts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer group">
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
                      <ArrowRight className="ml-2 h-4 w-4" />
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
              {posts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer group">
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