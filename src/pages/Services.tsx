import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, Settings, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.page.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">{/* Agentic AI spans 2 columns */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 lg:col-span-2">
              <CardHeader>
                <Bot className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{t('services.agents.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  {t('services.agents.desc')}
                </CardDescription>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Key Capabilities:</h4>
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

                <Button variant="outline" className="w-full">
                  {t('common.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 lg:col-span-2">
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
                  <h4 className="font-semibold mb-4 text-lg">Key Capabilities:</h4>
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

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="ai" className="flex-1">
                    {t('services.prompt.cta1')}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    {t('services.prompt.cta2')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 lg:col-span-2">
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
                  <h4 className="font-semibold mb-4 text-lg">Szolgáltatások:</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {t('services.training.features').split('\n').map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature.replace('• ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-mocha/10 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-center">
                    {t('services.training.discover')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="ai" className="flex-1">
                    {t('services.training.cta1')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    {t('services.training.cta2')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('common.readyForAI')}</h2>
            <p className="text-lg mb-6 opacity-90">
              {t('common.startJourney')}
            </p>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              {t('common.freeConsultation')}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;