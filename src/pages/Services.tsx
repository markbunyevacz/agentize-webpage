import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, Settings, GraduationCap, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Szolgáltatásaink</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Átfogó AI megoldások, amelyek minden üzleti területen segítenek az automatizálásban és hatékonyság növelésében.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Bot className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Intelligens Ügynökök</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Egyedi AI agentek, amelyek automatizálják az ismétlődő feladatokat, 
                  összekapcsolják rendszereidet, és proaktívan támogatják az üzletmenetet.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• 24/7 automatizált ügyfélszolgálat</li>
                  <li>• Belső folyamatok optimalizálása</li>
                  <li>• Rendszerek közötti integráció</li>
                  <li>• Valós idejű riportálás</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Tudj meg többet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Prompt Engineering & Testreszabás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Folyamatosan fejlesztett, személyre szabható promptok és 
                  workflow-k bármely felhasználási területre.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Iparág-specifikus promptok</li>
                  <li>• A/B testing és optimalizálás</li>
                  <li>• Workflow automatizálás</li>
                  <li>• Teljesítmény monitoring</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Tudj meg többet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Bevezetési és Oktatási Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Segítünk a cég egészét felkészíteni az AI-alapú munkavégzésre – 
                  workshop, tréning, tanácsadás.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Személyre szabott workshop-ok</li>
                  <li>• Vezetői tréningek</li>
                  <li>• Change management</li>
                  <li>• Hosszú távú támogatás</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Tudj meg többet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Készen állsz az AI forradalomra?</h2>
            <p className="text-lg mb-6 opacity-90">
              Kezdjük el együtt az utazást a hatékonyabb és intelligensebb üzleti folyamatok felé.
            </p>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Ingyenes konzultáció
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;