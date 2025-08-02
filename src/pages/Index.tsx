import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Zap, Shield, Users, Brain } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import automationIcon from '@/assets/automation-icon.jpg';
import decisionIcon from '@/assets/decision-icon.jpg';
import securityIcon from '@/assets/security-icon.jpg';
import consultingIcon from '@/assets/consulting-icon.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Zap className="mr-2 h-4 w-4" />
            AI-vezérelt jövő
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Agentize
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            AI megoldások, amelyek felgyorsítják üzleted jövőjét
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Fedezd fel az Agentize intelligens ügynökeit: világos, személyre szabott és biztonságos 
            AI-alapú automatizálási és döntéstámogató rendszerek minden iparágnak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="animate-glow">
              Próbáld ki demónkat!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Kérj tanácsadást
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Főbb Szolgáltatásaink</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Komprehenzív AI megoldások, amelyek átformálják üzleti folyamataidat
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <img src={automationIcon} alt="AI Automatizálás" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">AI Automatizálás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rutinfeladatok, ügyfélszolgálat, belső folyamatok automatizálása 
                  Agentize mesterséges intelligenciával.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <img src={decisionIcon} alt="Döntéstámogatás" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">AI-alapú döntéstámogatás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Adatvezérelt, gyors és objektív üzleti döntések – humán felügyelettel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <img src={securityIcon} alt="Biztonság" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Biztonságos AI-integráció</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Megfelelőség az EU AI Act és GDPR elvárásoknak – transzparens, auditálható AI-rendszerek.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <img src={consultingIcon} alt="Tanácsadás" className="w-16 h-16 rounded-lg mb-4" />
                <CardTitle className="text-xl">Személyre szabott AI-tanácsadás</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vállalati szintű AI-stratégia, bevezetési roadmap és oktatás.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Mit mondanak ügyfeleink?</h2>
          <Card className="bg-gradient-primary text-white shadow-glow">
            <CardContent className="p-8">
              <blockquote className="text-xl mb-6">
                "Az Agentize-nek köszönhetően folyamataink 40%-át sikerült automatizálni – 
                átláthatóan, kockázatmentesen."
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold">Szabó Andrea</p>
                  <p className="text-sm opacity-90">CEO, FutureTech Kft.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Rólunk</h2>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Innováció. Transzparencia. Emberközpontú AI.
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Az Agentize csapata hisz abban, hogy a mesterséges intelligencia értéket akkor teremt, 
            ha minden folyamatban a biztonságot, etikusságot és a felhasználói élményt tartja szem előtt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Intelligens megoldások</h4>
              <p className="text-muted-foreground text-sm">Minden AI megoldásunk a legújabb technológiákra épül</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Biztonság első</h4>
              <p className="text-muted-foreground text-sm">GDPR és EU AI Act kompatibilis rendszerek</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Emberközpontú</h4>
              <p className="text-muted-foreground text-sm">Az AI kiegészíti, nem helyettesíti az emberi munkát</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
