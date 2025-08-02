import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Target, Users, Shield, Lightbulb, Eye, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('about.page.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('about.page.subtitle')}
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="bg-background border-2 border-primary/20 mb-16 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t('about.mission.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {t('about.mission.desc')}
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('about.values.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovation */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                <CardHeader className="text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">Innováció</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    Folyamatosan kutatjuk és alkalmazzuk a mesterséges intelligencia legújabb technológiáit, hogy ügyfeleink versenyelőnyt szerezzenek.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Transparency */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">Transzparencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    Minden AI-fejlesztésünk átlátható: részletes dokumentációt, audit trail-t és magyarázható AI (XAI) modelleket biztosítunk.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Human-Centricity */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">Emberközpontúság</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    Megoldásaink és szolgáltatásaink célja, hogy az ember és a gép együttműködése hatékonyabb, biztonságosabb és fenntarthatóbb legyen.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Who We Are */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-lg bg-background">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl text-foreground">Kik vagyunk?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Több, mint 15 év szakmai tapasztalat az AI, üzleti informatika és folyamatautomatizálás területén.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Vállalati ügyfélkiszolgálás (B2B) Magyarországon és nemzetközi szinten.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Szakértő csapat, elismert AI fejlesztők, adatbiztonsági és compliance tanácsadók, folyamatoptimalizálási specialisták.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary text-primary-foreground">
              <CardHeader>
                <Target className="h-12 w-12 text-primary-foreground mb-4" />
                <CardTitle className="text-2xl">Célunk:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg opacity-90 leading-relaxed">
                  Hozzájárulni a magyar és európai vállalatok digitális átalakulásához, biztosítva számukra azokat a biztonságos, mérhető eredményt hozó AI eszközöket, amelyek hosszú távon növelik versenyképességüket.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values in Action */}
          <Card className="bg-background border-2 border-primary/20 mb-16 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                {t('about.intelligent')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{t('about.security')}</h3>
                  <p className="text-muted-foreground">{t('about.security.desc')}</p>
                </div>
                <div className="text-center">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{t('about.intelligent')}</h3>
                  <p className="text-muted-foreground">{t('about.intelligent.desc')}</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{t('about.human')}</h3>
                  <p className="text-muted-foreground">{t('about.human.desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('common.readyForAI')}</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              {t('common.startJourney')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t('common.freeConsultation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                {t('common.learnMore')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;