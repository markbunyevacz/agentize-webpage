import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Settings, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageContainer, PageHeader, FeatureCard, CTASection } from '@/components/PageComponents';
import { useNavigation } from '@/hooks/useNavigation';

const Services = () => {
  const { t } = useLanguage();
  const { navigateToSolutions, openCalendlyBooking } = useNavigation();
  return (
    <PageContainer>
      <PageHeader 
        title={t('services.page.title')}
        subtitle={t('services.page.subtitle')}
      />

      <div className="grid grid-cols-1 gap-8 mb-16">
        <Card className="shadow-elegant hover:shadow-floating transition-all duration-300 animate-linkedin-fade">
          <CardHeader>
            <Bot className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">{t('services.agents.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-6">
              {t('services.agents.desc')}
            </CardDescription>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-lg">{t('services.key.capabilities')}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {t('services.agents.features').split('\n').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{feature.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-lg">{t('services.agents.benefits.title')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {t('services.agents.benefits').split('\n').map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{benefit.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant hover:shadow-floating transition-all duration-300">
          <CardHeader>
            <Settings className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">{t('services.prompt.title')}</CardTitle>
            <CardDescription className="text-lg text-primary/80 mt-2">
              {t('services.prompt.subtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-6 leading-relaxed">
              {t('services.prompt.desc')}
            </CardDescription>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-4 text-lg">{t('services.key.capabilities')}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {t('services.prompt.features').split('\n').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{feature.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-subtle p-4 rounded-lg mb-6">
              <p className="text-sm font-medium text-center">
                {t('services.prompt.outcome')}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant hover:shadow-floating transition-all duration-300">
          <CardHeader>
            <GraduationCap className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">{t('services.training.title')}</CardTitle>
            <CardDescription className="text-lg text-primary/80 mt-2">
              {t('services.training.subtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-6 leading-relaxed">
              {t('services.training.desc')}
            </CardDescription>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-4 text-lg">{t('services.features')}</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {t('services.training.features').split('\n').map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{feature.replace('• ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-subtle p-4 rounded-lg mb-6">
              <p className="text-sm font-medium text-center">
                {t('services.training.discover')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <CTASection
        title={t('common.readyForAI')}
        description={t('common.startJourney')}
        primaryButton={t('common.freeConsultation')}
        variant="gradient"
      />
    </PageContainer>
  );
};

export default Services;