import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, FileCheck, Eye, Users, Database, Lock, CheckCircle, ArrowRight, Calendar, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Technology = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technológia & Megfelelőség
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Az Agentize megoldásai több szempontból is a legmagasabb biztonsági követelményeknek felelnek meg, kifejezetten a vállalati szektor, az EU AI Act és a GDPR szabályozások figyelembevételével.
            </p>
          </div>

          {/* Security Introduction */}
          <Card className="bg-background border-2 border-primary/20 mb-16 shadow-lg">
            <CardContent className="p-8 text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Mi teszi valóban biztonságossá és jogilag megfelelővé az Agentize platformot:
              </h2>
            </CardContent>
          </Card>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Privacy by Design */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">1. Privacy by Design – Adatvédelem alapú tervezés</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Az adatvédelem minden fejlesztési és üzemeltetési fázisban központi szerepet kap.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Minden funkció és folyamat már alapvetően az adatbiztonságot és a felhasználói jogok védelmét szem előtt tartva kerül kialakításra, nem utólagos "foltozással"</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Adatminimalizálás, hozzáférés-szabályozás, titkosítás és anonimizálás beépített alapelvek</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* EU AI Act Compliance */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">2. EU AI Act Megfelelőség</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Az Agentize teljes mértékben megfelel az Európai Unió Mesterséges Intelligencia Törvényének (AI Act), amely 2025-től kötelező jelleggel szabályozza az AI rendszerek kockázati besorolását és átláthatóságát.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Kiemelt figyelmet kapnak a "limited risk" kategóriába tartozó szolgáltatások (pl. chatbotok), ahol kötelező a felhasználó tájékoztatása, hogy AI-val kommunikál</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Rendszeres megfelelőségi ellenőrzések (compliance auditok) és átlátható tájékoztatók minden ügyfélnél</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Transparent Decision Logic */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">3. Átlátható Döntési Logika, Audit Trail</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Minden AI döntési folyamat teljes mértékben követhető és magyarázható (explainable AI, XAI).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Részletes logging és audit trail minden ügyfélinterakciónál, így bármely döntés vagy művelet utólag visszakereshető és ellenőrizhető</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Megfelelő dokumentáció és auditálási lehetőség akár külső szakértők számára is</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Regular Audits */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">4. Rendszeres Auditok és Külső Szakértői Vizsgálatok</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Az Agentize technológiai és biztonsági infrastruktúráját folyamatosan auditálják akkreditált, külső szakértők.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Akkreditált külső szakértők (pl. ISO 27001, SOC2 auditori, adatbiztonsági tanácsadók) folyamatosan auditálják infrastruktúránkat</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Az eredményekről transzparens jelentés készül, amelyet a partnerek, ügyfelek is megismerhetnek</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Responsible Data Usage */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">5. Felelős Adathasználat és Adattudatosság</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Csak a működéshez feltétlenül szükséges személyes adatok kerülnek feldolgozásra.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Kizárólag szabályosan, a felhasználók előzetes tájékoztatásával és hozzájárulásával történik adatkezelés</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Lehetőség biztosított az adatkérésre, törlésre, visszavonásra és teljes átláthatóságra</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Technical Protection */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-foreground">6. Magas szintű technikai védelem</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Minden adatforgalom titkosított (TLS 1.3, end-to-end encryption).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Hozzáférés menedzsment (RBAC), többfaktoros hitelesítés, biztonságos felhőinfrastruktúra</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Proaktív behatolásvédelem, valós idejű monitoring, automatikus sérülékenységtesztek</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* XAI Section - Enhanced */}
          <Card className="bg-primary text-primary-foreground mb-16 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main XAI Description */}
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold mb-6">Magyarázható AI (XAI)</h3>
                  <p className="text-lg opacity-90 mb-8">
                    Minden AI döntésünk transzparens és érthető. Tudni fogod, hogyan és miért 
                    hozott döntést a rendszer.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">Főbb képességek:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary-foreground/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Döntési fa vizualizáció</h5>
                      <p className="text-sm opacity-80">Interaktív ábrák, amelyek megmutatják az egyes AI döntések logikáját.</p>
                    </div>
                    <div className="bg-primary-foreground/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Fontos változók kijelzése</h5>
                      <p className="text-sm opacity-80">Kiemeljük azokat az adatpontokat, amelyek leginkább befolyásolták a döntést.</p>
                    </div>
                    <div className="bg-primary-foreground/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Természetes nyelvű magyarázatok</h5>
                      <p className="text-sm opacity-80">Minden AI döntéshez emberi érthetőségű, közérthető magyarázatot adunk.</p>
                    </div>
                    <div className="bg-primary-foreground/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Interaktív dashboardok</h5>
                      <p className="text-sm opacity-80">Valós idejű, vizuális visszacsatolás és részletes elemzési lehetőség minden döntés mögött.</p>
                    </div>
                  </div>
                  
                  <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Próbálja ki magyarázó dashboardunkat élőben
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Compliance Score */}
                <div className="text-center lg:text-left">
                  <div className="bg-primary-foreground/10 p-8 rounded-xl border border-primary-foreground/20">
                    <div className="flex items-center justify-center mb-4">
                      <Star className="h-8 w-8 text-yellow-400 mr-2" />
                      <h4 className="text-xl font-semibold">Compliance Score</h4>
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
          <Card className="bg-background border-2 border-primary/20 mb-16 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Összegzés:</h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto text-center">
                Az Agentize rendszerei ötvözik a legmodernebb technológiai eszközöket és az aktuális szabályozók által előírt legmagasabb megfelelőségi szinteket. A Privacy by Design elve, az EU AI Act követelményeinek való megfelelés, az átlátható döntési logika és a rendszeres, külső auditok együttesen biztosítják, hogy ügyfelei jogilag és technikailag is védve legyenek a teljes AI életciklus alatt.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Vállalati Biztonsági Konzultáció</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              Tudjon meg többet átfogó biztonsági keretrendszerünkről és megfelelőségi protokolljainkról. Ütemezzen részletes biztonsági tájékoztatót szakértőinkkel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ingyenes konzultáció
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Kérjen demót
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