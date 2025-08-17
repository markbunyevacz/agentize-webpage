import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Zap, Shield, Users, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';
import heroBackground from '@/assets/hero-bg.jpg';
import automationIcon from '@/assets/automation-icon.jpg';
import decisionIcon from '@/assets/decision-icon.jpg';
import securityIcon from '@/assets/security-icon.jpg';
import consultingIcon from '@/assets/consulting-icon.jpg';

const Index = () => {
  const { t } = useLanguage();
  const { openExternalDemo, openCalendlyBooking } = useNavigation();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 animate-fade-in">
            <Zap className="mr-2 h-4 w-4" />
            {t('hero.badge')}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4 animate-fade-in">
            {t('hero.main.title')}
          </h1>
          
          <h2 className="hero-text mb-6 animate-float text-gradient bg-clip-text">
            {t('hero.title')}
          </h2>
          
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in">
            {t('hero.subtitle')}
          </p>
          
          <h3 className="text-lg font-semibold mb-4 text-primary-glow animate-fade-in">
            {t('hero.strategic.title')}
          </h3>
          
          <p className="text-base mb-6 opacity-80 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 animate-scale-in">
            <h4 className="text-lg font-semibold mb-3 text-ethereal-blue">
              {t('hero.experience.title')}
            </h4>
            <p className="text-sm opacity-90">
              {t('hero.experience.desc')}
            </p>
          </div>
          
          <div className="flex justify-center animate-scale-in">
            <Button 
              variant="linkedin" 
              size="lg" 
              className="animate-glow hover-scale"
              onClick={() => {
                openExternalDemo();
                // Vagy ha mindkettőt szeretnéd:
                // openCalendlyBooking();
              }}
            >
              {t('hero.cta.demo')} / {t('hero.cta.consult')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <img src={automationIcon} alt="AI Automation" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">{t('services.automation.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('services.automation.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <img src={decisionIcon} alt="Decision Support" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">{t('services.decision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('services.decision.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <img src={securityIcon} alt="Security" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">{t('services.security.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('services.security.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <img src={consultingIcon} alt="Consulting" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">{t('services.consulting.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t('services.consulting.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">{t('testimonial.title')}</h2>
          <Card className="bg-gradient-primary text-white shadow-glow animate-scale-in">
            <CardContent className="p-8">
              <blockquote className="text-xl mb-6">
                "{t('testimonial.quote')}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold">{t('testimonial.author')}</p>
                  <p className="text-sm opacity-90">{t('testimonial.company')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">{t('about.title')}</h2>
          <h3 className="text-2xl font-semibold mb-4 text-gradient animate-fade-in">
            {t('about.motto')}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            {t('about.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center animate-scale-in">
              <Brain className="h-12 w-12 text-primary mb-4 animate-pulse-slow" />
              <h4 className="font-semibold mb-2">{t('about.intelligent')}</h4>
              <p className="text-muted-foreground text-sm">{t('about.intelligent.desc')}</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in">
              <Shield className="h-12 w-12 text-primary mb-4 animate-pulse-slow" />
              <h4 className="font-semibold mb-2">{t('about.security')}</h4>
              <p className="text-muted-foreground text-sm">{t('about.security.desc')}</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in">
              <Users className="h-12 w-12 text-primary mb-4 animate-pulse-slow" />
              <h4 className="font-semibold mb-2">{t('about.human')}</h4>
              <p className="text-muted-foreground text-sm">{t('about.human.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
