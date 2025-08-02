import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, BarChart3, Target, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('solutions.page.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('solutions.page.subtitle')}
            </p>
          </div>

          {/* Platform Features Highlight */}
          <Card className="bg-gradient-subtle border-2 border-primary/20 mb-16 shadow-elegant">
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
            {/* Conversational Intelligence */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{t('solutions.customer.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('solutions.customer.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{t('platform.features.title')}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {t('solutions.customer.features').split('\n').map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature.replace('• ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-mocha/10 p-4 rounded-lg">
                  <p className="text-sm font-medium text-center">{t('solutions.customer.cta')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Predictive Analytics */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{t('solutions.analytics.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('solutions.analytics.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What you get:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {t('solutions.analytics.features').split('\n').map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature.replace('• ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-mocha/10 p-4 rounded-lg">
                  <p className="text-sm font-medium text-center">{t('solutions.analytics.cta')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Intelligence */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 lg:col-span-2">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{t('solutions.marketing.title')}</CardTitle>
                <CardDescription className="text-lg">
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
                  <div className="bg-gradient-mocha/10 p-4 rounded-lg flex items-center justify-center">
                    <p className="text-sm font-medium text-center">{t('solutions.marketing.cta')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Agentize */}
          <Card className="bg-gradient-primary text-white mb-16 shadow-elegant">
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
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t('common.freeConsultation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                {t('common.requestDemo')}
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

export default Solutions;