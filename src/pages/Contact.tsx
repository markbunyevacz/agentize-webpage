import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { LinkedInScraper } from '@/components/LinkedInScraper';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';

const Contact = () => {
  const { t } = useLanguage();
  const { openCalendlyBooking } = useNavigation();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.page.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {t('contact.form.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('contact.form.firstname')}</Label>
                    <Input id="firstName" placeholder={t('contact.form.placeholders.firstname')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('contact.form.lastname')}</Label>
                    <Input id="lastName" placeholder={t('contact.form.placeholders.lastname')} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input id="email" type="email" placeholder={t('contact.form.placeholders.email')} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">{t('contact.form.company')}</Label>
                  <Input id="company" placeholder={t('contact.form.placeholders.company')} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">{t('contact.form.position')}</Label>
                  <Input id="position" placeholder={t('contact.form.placeholders.position')} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input id="phone" type="tel" placeholder="+36 30 123 4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                  <Input id="subject" placeholder={t('contact.form.placeholders.subject')} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.placeholders.message')}
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="ai" className="w-full" size="lg">
                  {t('contact.send')}
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  * Kötelező mezők. Adataidat a GDPR előírásainak megfelelően kezeljük.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-primary" />
                    {t('contact.email')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Általános megkeresés:</p>
                  <a href="mailto:info@agentize.eu" className="text-primary hover:underline font-medium">
                    info@agentize.eu
                  </a>
                  <p className="text-muted-foreground mb-2 mt-4">Értékesítés:</p>
                  <a href="mailto:sales@agentize.eu" className="text-primary hover:underline font-medium">
                    sales@agentize.eu
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-primary" />
                    {t('contact.office')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Budapest, Magyarország<br />
                    1051 Budapest, Váci utca 47.<br />
                    3. emelet
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-primary" />
                    {t('contact.hours')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hétfő - Péntek: 9:00 - 18:00<br />
                    Hétvége: Előzetes egyeztetés alapján
                  </p>
                </CardContent>
              </Card>

              <div className="bg-gradient-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{t('contact.consultation.title')}</h3>
                <p className="opacity-90 mb-4">
                  {t('contact.consultation.desc')}
                </p>
                <Button 
                  variant="hero" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={openCalendlyBooking}
                >
                  Időpont foglalás
                </Button>
              </div>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">GYIK - Gyakori kérdések</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mennyi idő alatt implementálható egy AI megoldás?</h4>
                    <p className="text-sm text-muted-foreground">
                      Általában 2-6 hét, a projekt komplexitásától függően.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">GDPR kompatibilis a rendszer?</h4>
                    <p className="text-sm text-muted-foreground">
                      Igen, minden megoldásunk 100%-ban GDPR és EU AI Act kompatibilis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Milyen támogatást nyújtotok implementáció után?</h4>
                    <p className="text-sm text-muted-foreground">
                      24/7 technikai támogatás, rendszeres frissítések és folyamatos optimalizálás.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* LinkedIn Profile Scraper */}
        <div className="max-w-4xl mx-auto">
          <LinkedInScraper />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;