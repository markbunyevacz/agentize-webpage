import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, BarChart3, Megaphone, ArrowRight } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Megoldásaink</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Iparág-specifikus AI megoldások, amelyek azonnal értéket teremtenek üzleted számára.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Ügyfélszolgálat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  24/7 automatizált segítségnyújtás – valós időben. Intelligens chatbotok 
                  és ügynökök, amelyek emberi színvonalon válaszolnak.
                </CardDescription>
                <div className="space-y-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Főbb funkciók:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Többnyelvű támogatás</li>
                      <li>• Komplex kérdések kezelése</li>
                      <li>• CRM integráció</li>
                      <li>• Emberi átadás ha szükséges</li>
                    </ul>
                  </div>
                </div>
                <Button variant="ai" className="w-full">
                  Demó kérése
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Adatbányászat és Riportálás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Azonnali, vizuálisan erős riportok, döntéstámogatás a vezetőség számára. 
                  AI-vezérelt adatelemzés és prediktív analitika.
                </CardDescription>
                <div className="space-y-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mit kapsz:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Valós idejű dashboard-ok</li>
                      <li>• Prediktív modelling</li>
                      <li>• Automatikus jelentések</li>
                      <li>• Trend-elemzés</li>
                    </ul>
                  </div>
                </div>
                <Button variant="ai" className="w-full">
                  Példa riportok
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Megaphone className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Marketing Automatizáció</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Személyre szabott kampányok, tartalomgenerálás és customer journey 
                  optimalizálás AI segítségével.
                </CardDescription>
                <div className="space-y-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Szolgáltatások:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Személyre szabott email kampányok</li>
                      <li>• Dinamikus tartalom generálás</li>
                      <li>• Lead scoring és nurturing</li>
                      <li>• A/B testing automatizálás</li>
                    </ul>
                  </div>
                </div>
                <Button variant="ai" className="w-full">
                  Kampány tervezés
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Miért válaszd az Agentize megoldásait?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>Gyors implementáció - 2-4 hét alatt élőben</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>Mérhető ROI - átlagosan 300% megtérülés első évben</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>Folyamatos fejlesztés és támogatás</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span>GDPR és EU AI Act kompatibilitás</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-subtle shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Ingyenes konzultáció</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Beszéljük meg, hogyan segíthetnek AI megoldásaink az üzleted növelésében. 
                  30 perces szakértői konzultáció teljesen ingyenesen.
                </p>
                <Button variant="ai" className="w-full">
                  Időpont foglalás
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Solutions;