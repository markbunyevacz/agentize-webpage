import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Target, Users, Shield, Lightbulb, Eye, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageContainer, PageHeader, FeatureCard, CTASection } from '@/components/PageComponents';
import { useNavigation } from '@/hooks/useNavigation';

const About = () => {
  const { t } = useLanguage();
  const { openCalendlyBooking, navigateToServices } = useNavigation();
  
  
  return (
    <PageContainer>
      <PageHeader 
        title={t('about.page.title')}
        subtitle={t('about.page.subtitle')}
      />

      {/* Mission Statement */}
      <Card className="bg-background border-2 border-primary/20 mb-16 shadow-elegant animate-linkedin-fade">
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
          <FeatureCard
            icon={<Lightbulb className="h-12 w-12 text-primary" />}
            title={t('about.innovation.title')}
            description={t('about.innovation.desc')}
          />
          <FeatureCard
            icon={<Eye className="h-12 w-12 text-primary" />}
            title={t('about.transparency.title')}
            description={t('about.transparency.desc')}
          />
          <FeatureCard
            icon={<Heart className="h-12 w-12 text-primary" />}
            title={t('about.human.title')}
            description={t('about.human.desc')}
          />
        </div>
      </div>

      {/* Who We Are & Goal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <Card className="shadow-elegant bg-background">
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

        <FeatureCard
          icon={<Target className="h-12 w-12 text-white" />}
          title={t('about.goal.title')}
          description={t('about.goal.desc')}
          variant="primary"
        />
      </div>

      {/* Statistics/Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="shadow-elegant text-center bg-background hover:scale-105 transition-all duration-300">
          <CardHeader>
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-foreground">100%</CardTitle>
            <CardDescription className="text-muted-foreground">GDPR & EU AI Act Megfelelőség</CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-elegant text-center bg-background hover:scale-105 transition-all duration-300">
          <CardHeader>
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-foreground">15+</CardTitle>
            <CardDescription className="text-muted-foreground">Év Szakmai Tapasztalat</CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-elegant text-center bg-background hover:scale-105 transition-all duration-300">
          <CardHeader>
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-foreground">B2B</CardTitle>
            <CardDescription className="text-muted-foreground">Vállalati Ügyfélkör</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* CTA Section */}
      <CTASection
        title={t('common.readyForAI')}
        description={t('common.startJourney')}
        primaryButton={t('common.freeConsultation')}
        secondaryButton={t('common.learnMore')}
      />
    </PageContainer>
  );
};

export default About;