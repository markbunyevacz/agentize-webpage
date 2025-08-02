import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileCheck, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Technology = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Shield className="mr-2 h-4 w-4" />
              Compliance Ready
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('technology.page.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('technology.page.subtitle')}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">{t('technology.security.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Privacy by Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Adatvédelem alapú tervezés minden fejlesztési fázisban. 
                    Az adatok védelme nem utólagos, hanem beépített funkció.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">EU AI Act Megfelelőség</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Teljes mértékben megfelelünk az EU mesterséges intelligencia 
                    törvényének követelményeinek.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Átlátható Döntési Logika</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Minden AI döntés követhető és magyarázható. 
                    Audit trail és részletes logging minden művelethez.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Rendszeres Auditok</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Folyamatos biztonsági felülvizsgálatok és compliance 
                    ellenőrzések külső szakértők bevonásával.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">GDPR Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Adatkezelési elvek</h4>
                    <p className="text-muted-foreground text-sm">
                      Minimális adatgyűjtés, célhoz kötött feldolgozás, korlátozott tárolási idő
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Adatsubjektum jogai</h4>
                    <p className="text-muted-foreground text-sm">
                      Hozzáférés, helyesbítés, törlés, hordozhatóság teljes támogatása
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Adatvédelmi hatásvizsgálat</h4>
                    <p className="text-muted-foreground text-sm">
                      Minden új AI funkcióhoz kötelező DPIA elvégzése
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">EU AI Act Megfelelőség</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Kockázat-alapú megközelítés</h4>
                    <p className="text-muted-foreground text-sm">
                      Minden AI rendszer kockázati besorolása és megfelelő védintézkedések
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Emberi felügyelet</h4>
                    <p className="text-muted-foreground text-sm">
                      Kritikus döntésekhez mindig emberi jóváhagyás szükséges
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Dokumentáció és nyomon követhetőség</h4>
                    <p className="text-muted-foreground text-sm">
                      Teljes AI életciklus dokumentálása és auditálhatósága
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12">
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Technology;