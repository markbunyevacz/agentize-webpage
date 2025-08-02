import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, FileCheck, Eye, Users, Database, Lock, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Technology = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('technology.page.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('technology.page.subtitle')}
            </p>
          </div>

          {/* Security Introduction */}
          <Card className="bg-gradient-subtle border-2 border-primary/20 mb-16 shadow-elegant">
            <CardContent className="p-8 text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">{t('technology.security.intro')}</h2>
            </CardContent>
          </Card>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Privacy by Design */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{t('technology.privacy.title')}</CardTitle>
                <CardDescription className="text-base">
                  {t('technology.privacy.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {t('technology.privacy.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* EU AI Act Compliance */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{t('technology.aiact.title')}</CardTitle>
                <CardDescription className="text-base">
                  {t('technology.aiact.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {t('technology.aiact.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Transparent Decision Logic */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{t('technology.transparency.title')}</CardTitle>
                <CardDescription className="text-base">
                  {t('technology.transparency.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {t('technology.transparency.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Regular Audits */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{t('technology.audits.title')}</CardTitle>
                <CardDescription className="text-base">
                  {t('technology.audits.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {t('technology.audits.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsible Data Usage */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{t('technology.data.title')}</CardTitle>
                <CardDescription className="text-base">
                  {t('technology.data.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {t('technology.data.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Protection */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{t('technology.technical.title')}</CardTitle>
                <CardDescription className="text-base">
                  {t('technology.technical.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {t('technology.technical.features').split('\n').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{feature.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* XAI Section */}
          <Card className="bg-gradient-primary text-white mb-16 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Magyarázható AI (XAI)</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Minden AI döntésünk transzparens és érthető. Tudni fogod, hogyan és miért 
                    hozott döntést a rendszer.
                  </p>
                  <ul className="space-y-2 opacity-90">
                    <li>• Döntési fa vizualizáció</li>
                    <li>• Fontos változók kijelzése</li>
                    <li>• Természetes nyelvű magyarázatok</li>
                    <li>• Interaktív dashboard-ok</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 p-8 rounded-xl">
                    <h4 className="text-xl font-semibold mb-4">Compliance Score</h4>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <p className="text-sm opacity-80">GDPR & EU AI Act</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Section */}
          <Card className="bg-gradient-primary text-white mb-16 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">{t('technology.summary.title')}</h2>
              <p className="text-lg leading-relaxed opacity-95 max-w-4xl mx-auto text-center">
                {t('technology.summary.desc')}
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t('technology.cta.title')}</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              {t('technology.cta.desc')}
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

export default Technology;