import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Agentize
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('about.motto')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/agentize" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@agentize.eu" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.navigation')}</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('nav.services')}
              </Link>
              <Link to="/solutions" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('nav.solutions')}
              </Link>
              <Link to="/technology" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('nav.technology')}
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('nav.about')}
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <div className="space-y-2">
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('nav.blog')}
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('footer.career')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('footer.legal')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                {t('footer.imprint')}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail size={16} className="mr-2" />
                info@agentize.eu
              </div>
              <div className="flex items-start text-muted-foreground text-sm">
                <MapPin size={16} className="mr-2 mt-0.5" />
                Budapest, Magyarország
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;