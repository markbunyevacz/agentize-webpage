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
                  <CardTitle className="text-xl text-foreground">{t('about.innovation.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {t('about.innovation.desc')}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Transparency */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">{t('about.transparency.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {t('about.transparency.desc')}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Human-Centricity */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">{t('about.human.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {t('about.human.desc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Who We Are & Goal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-lg bg-background">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl text-foreground">{t('about.team.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('about.experience')}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('about.clients')}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('about.expertise')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary text-primary-foreground">
              <CardHeader>
                <Target className="h-12 w-12 text-primary-foreground mb-4" />
                <CardTitle className="text-2xl">{t('about.goal.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg opacity-90 leading-relaxed">
                  {t('about.goal.desc')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Statistics/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-lg text-center bg-background">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-foreground">100%</CardTitle>
                <CardDescription className="text-muted-foreground">GDPR & EU AI Act Megfelelőség</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-lg text-center bg-background">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-foreground">15+</CardTitle>
                <CardDescription className="text-muted-foreground">Év Szakmai Tapasztalat</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-lg text-center bg-background">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-foreground">B2B</CardTitle>
                <CardDescription className="text-muted-foreground">Vállalati Ügyfélkör</CardDescription>
              </CardHeader>
            </Card>
          </div>

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