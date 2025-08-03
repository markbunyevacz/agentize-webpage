import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileCheck, Eye, Users, Database, Lock, CheckCircle, ArrowRight, Calendar, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageContainer, PageHeader, FeatureCard, CTASection } from '@/components/PageComponents';

const Technology = () => {
  const { t } = useLanguage();
  
  return (
    <PageContainer>
      <PageHeader 
        title={t('technology.page.title')}
        subtitle={t('technology.page.subtitle')}
      />

      {/* Security Introduction */}
      <Card className="bg-background border-2 border-primary/20 mb-16 shadow-elegant animate-linkedin-fade">
        <CardContent className="p-8 text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            {t('technology.security.title')}
          </h2>
        </CardContent>
      </Card>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <FeatureCard
          icon={<Shield className="h-12 w-12 text-primary" />}
          title={`1. ${t('technology.privacy.title')}`}
          description={t('technology.privacy.desc')}
          features={[
            'Minden funkció és folyamat már alapvetően az adatbiztonságot és a felhasználói jogok védelmét szem előtt tartva kerül kialakításra, nem utólagos "foltozással"',
            'Adatminimalizálás, hozzáférés-szabályozás, titkosítás és anonimizálás beépített alapelvek'
          ]}
        />

        <FeatureCard
          icon={<FileCheck className="h-12 w-12 text-primary" />}
          title={`2. ${t('technology.compliance.title')}`}
          description={t('technology.compliance.desc')}
          features={[
            'Kiemelt figyelmet kapnak a "limited risk" kategóriába tartozó szolgáltatások (pl. chatbotok), ahol kötelező a felhasználó tájékoztatása, hogy AI-val kommunikál',
            'Rendszeres megfelelőségi ellenőrzések (compliance auditok) és átlátható tájékoztatók minden ügyfélnél'
          ]}
        />

        <FeatureCard
          icon={<Eye className="h-12 w-12 text-primary" />}
          title={`3. ${t('technology.transparency.title')}`}
          description={t('technology.transparency.desc')}
          features={[
            'Részletes logging és audit trail minden ügyfélinterakciónál, így bármely döntés vagy művelet utólag visszakereshető és ellenőrizhető',
            'Megfelelő dokumentáció és auditálási lehetőség akár külső szakértők számára is'
          ]}
        />

        <FeatureCard
          icon={<Users className="h-12 w-12 text-primary" />}
          title={`4. ${t('technology.audits.title')}`}
          description={t('technology.audits.desc')}
          features={[
            'Akkreditált külső szakértők (pl. ISO 27001, SOC2 auditori, adatbiztonsági tanácsadók) folyamatosan auditálják infrastruktúránkat',
            'Az eredményekről transzparens jelentés készül, amelyet a partnerek, ügyfelek is megismerhetnek'
          ]}
        />

        <FeatureCard
          icon={<Database className="h-12 w-12 text-primary" />}
          title={`5. ${t('technology.data.title')}`}
          description={t('technology.data.desc')}
          features={[
            'Kizárólag szabályosan, a felhasználók előzetes tájékoztatásával és hozzájárulásával történik adatkezelés',
            'Lehetőség biztosított az adatkérésre, törlésre, visszavonásra és teljes átláthatóságra'
          ]}
        />

        <FeatureCard
          icon={<Lock className="h-12 w-12 text-primary" />}
          title={`6. ${t('technology.technical.title')}`}
          description={t('technology.technical.desc')}
          features={[
            'Hozzáférés menedzsment (RBAC), többfaktoros hitelesítés, biztonságos felhőinfrastruktúra',
            'Proaktív behatolásvédelem, valós idejű monitoring, automatikus sérülékenységtesztek'
          ]}
        />
      </div>

      {/* XAI Section - Enhanced */}
      <Card className="bg-gradient-linkedin text-white mb-16 shadow-elegant">
        <CardContent className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6">{t('technology.xai.title')}</h3>
              <p className="text-lg opacity-90 mb-8">
                {t('technology.xai.desc')}
              </p>
              
              <h4 className="text-xl font-semibold mb-4">{t('technology.xai.capabilities')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">{t('technology.xai.tree')}</h5>
                  <p className="text-sm opacity-80">{t('technology.xai.tree.desc')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">{t('technology.xai.variables')}</h5>
                  <p className="text-sm opacity-80">{t('technology.xai.variables.desc')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">{t('technology.xai.language')}</h5>
                  <p className="text-sm opacity-80">{t('technology.xai.language.desc')}</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">{t('technology.xai.dashboard')}</h5>
                  <p className="text-sm opacity-80">{t('technology.xai.dashboard.desc')}</p>
                </div>
              </div>
              
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 hover-scale">
                {t('technology.xai.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-white/10 p-8 rounded-xl border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-400 mr-2" />
                  <h4 className="text-xl font-semibold">{t('technology.compliance.score')}</h4>
                </div>
                <div className="text-5xl font-bold mb-4">100%</div>
                <div className="space-y-2 mb-6">
                  <div className="bg-green-500/20 text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ GDPR Compliant
                  </div>
                  <div className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ EU AI Act Ready
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  Az Agentize AI platform teljes mértékben megfelel az európai adatvédelmi és AI jogszabályoknak – garantált adatbiztonság, auditálhatóság, felhasználói jogok érvényesítése.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Section */}
      <Card className="bg-background border-2 border-primary/20 mb-16 shadow-elegant">
        <CardContent className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">{t('technology.summary.title')}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto text-center">
            {t('technology.summary.desc')}
          </p>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <CTASection
        title={t('technology.cta.title')}
        description={t('technology.cta.desc')}
        primaryButton={t('technology.cta.button')}
        secondaryButton={t('technology.cta.demo')}
      />
    </PageContainer>
  );
};

export default Technology;