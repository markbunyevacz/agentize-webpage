import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, BarChart3, Target, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageContainer, PageHeader, FeatureCard, CTASection } from '@/components/PageComponents';
import { useNavigation } from '@/hooks/useNavigation';

const Solutions = () => {
  const { t } = useLanguage();
  const { openCalendlyBooking, openExternalDemo } = useNavigation();
  
  return (
    <PageContainer>
      <PageHeader 
        title={t('solutions.page.title')}
        subtitle={t('solutions.page.subtitle')}
        variant="gradient"
      />

      {/* Platform Features Highlight */}
      <Card className="bg-gradient-subtle border-2 border-primary/20 mb-16 shadow-elegant animate-linkedin-fade">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('platform.features.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-medium">{t('platform.multilingual')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-medium">{t('platform.complex')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-medium">{t('platform.crm')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-medium">{t('platform.handoff')}</p>
            </div>
          </div>
          <div className="text-center mt-8 p-4 bg-primary/10 rounded-lg">
            <p className="text-lg font-semibold text-primary">{t('platform.demo')}</p>
          </div>
        </CardContent>
      </Card>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <FeatureCard
          icon={<MessageSquare className="h-12 w-12 text-primary" />}
          title={t('solutions.customer.title')}
          description={t('solutions.customer.desc')}
          features={t('solutions.customer.features').split('\n').map(f => f.replace('• ', ''))}
        />

        <FeatureCard
          icon={<BarChart3 className="h-12 w-12 text-primary" />}
          title={t('solutions.analytics.title')}
          description={t('solutions.analytics.desc')}
          features={t('solutions.analytics.features').split('\n').map(f => f.replace('• ', ''))}
        />

        <Card className="shadow-elegant hover:shadow-floating transition-all duration-300 lg:col-span-2">
          <CardHeader>
            <Target className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl">{t('solutions.marketing.title')}</CardTitle>
            <CardDescription>
              {t('solutions.marketing.desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Services:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t('solutions.marketing.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-subtle p-4 rounded-lg flex items-center justify-center">
                <p className="text-sm font-medium text-center">{t('solutions.marketing.cta')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Agentize */}
      <Card className="bg-card mb-16 shadow-elegant">
        <CardContent className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 opacity-90" />
              <p className="font-medium">{t('why.implementation')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 opacity-90" />
              <p className="font-medium">{t('why.roi')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 opacity-90" />
              <p className="font-medium">{t('why.support')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 opacity-90" />
              <p className="font-medium">{t('why.compliance')}</p>
            </div>
            <div className="text-center lg:col-span-2">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 opacity-90" />
              <p className="font-medium">{t('why.consultation')}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center">
        <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">{t('why.booking.title')}</h2>
        <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
          {t('why.booking.desc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-scale"
            onClick={openExternalDemo}
          >
            {t('common.requestDemo')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Solutions;