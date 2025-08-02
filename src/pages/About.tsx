import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const team = [
    {
      name: "Dr. Nagy Péter",
      role: "CEO & AI Stratégiai Tanácsadó",
      description: "15 év tapasztalat mesterséges intelligencia és gépi tanulás területén."
    },
    {
      name: "Kovács Anna",
      role: "CTO & Lead AI Engineer",
      description: "Korábbi Google AI fejlesztő, specializáció: NLP és computer vision."
    },
    {
      name: "Dr. Szabó Márton",
      role: "Adatvédelmi és Compliance Vezető",
      description: "Jogi és technológiai expertise GDPR és EU AI Act területén."
    },
    {
      name: "Tóth Eszter",
      role: "Business Development Manager",
      description: "10+ év üzletfejlesztési tapasztalat technológiai szektorban."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.page.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Target className="mr-3 h-8 w-8 text-primary" />
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.mission.desc')}
              </p>
              <div className="bg-gradient-subtle p-6 rounded-xl">
                <h3 className="font-semibold mb-3 text-lg bg-gradient-primary bg-clip-text text-transparent">
                  {t('about.motto')}
                </h3>
                <p className="text-muted-foreground">
                  Ez a három alappillér határozza meg minden tevékenységünket és 
                  fejlesztésünket az Agentize-nél.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Award className="mr-3 h-8 w-8 text-primary" />
                {t('about.values.title')}
              </h2>
              <div className="space-y-4">
                <Card className="shadow-elegant">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Etikus AI fejlesztés</h4>
                    <p className="text-sm text-muted-foreground">
                      Minden algoritmusunk fair, átlátható és elszámoltatható.
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-elegant">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Adatvédelem by design</h4>
                    <p className="text-sm text-muted-foreground">
                      Az adatvédelem nem utólagos kiegészítés, hanem alapvető tervezési elv.
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-elegant">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Folyamatos innováció</h4>
                    <p className="text-sm text-muted-foreground">
                      Mindig a legfrissebb AI technológiákat integráljuk megoldásainkba.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Users className="mr-3 h-8 w-8 text-primary" />
              {t('about.team.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-elegant text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>50+</CardTitle>
                <CardDescription>Sikeres projekt</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-elegant text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>25+</CardTitle>
                <CardDescription>Elégedett ügyfél</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-elegant text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>100%</CardTitle>
                <CardDescription>GDPR megfelelőség</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Csatlakozz hozzánk!</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Keresünk tehetséges AI fejlesztőket, adattudósokat és üzleti szakértőket, 
              akik szeretnének része lenni az AI forradalom élvonalának.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Álláslehetőségek
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Partnerség lehetőségek
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;