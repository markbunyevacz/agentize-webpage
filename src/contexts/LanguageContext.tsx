import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hu';
  setLanguage: (lang: 'en' | 'hu') => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    en: string;
    hu: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', hu: 'Főoldal' },
  'nav.services': { en: 'Services', hu: 'Szolgáltatások' },
  'nav.solutions': { en: 'Solutions', hu: 'Megoldások' },
  'nav.technology': { en: 'Technology', hu: 'Technológia' },
  'nav.about': { en: 'About', hu: 'Rólunk' },
  'nav.blog': { en: 'Blog', hu: 'Blog' },
  'nav.contact': { en: 'Contact', hu: 'Kapcsolat' },
  'nav.demo': { en: 'Try Demo', hu: 'Próbáld ki demónkat!' },

  // Hero Section
  'hero.title': { en: 'Agentize', hu: 'Agentize' },
  'hero.subtitle': { en: 'AI solutions that accelerate your business future', hu: 'AI megoldások, amelyek felgyorsítják üzleted jövőjét' },
  'hero.description': { 
    en: 'Discover Agentize intelligent agents: clear, personalized and secure AI-based automation and decision support systems for every industry.',
    hu: 'Fedezd fel az Agentize intelligens ügynökeit: világos, személyre szabott és biztonságos AI-alapú automatizálási és döntéstámogató rendszerek minden iparágnak.'
  },
  'hero.cta.demo': { en: 'Try Our Demo!', hu: 'Próbáld ki demónkat!' },
  'hero.cta.consult': { en: 'Request Consultation', hu: 'Kérj tanácsadást' },
  'hero.badge': { en: 'AI-Driven Future', hu: 'AI-vezérelt jövő' },

  // Services
  'services.title': { en: 'Our Main Services', hu: 'Főbb Szolgáltatásaink' },
  'services.subtitle': { 
    en: 'Comprehensive AI solutions that transform your business processes',
    hu: 'Komprehenzív AI megoldások, amelyek átformálják üzleti folyamataidat'
  },
  'services.automation.title': { en: 'AI Automation', hu: 'AI Automatizálás' },
  'services.automation.desc': { 
    en: 'Automate routine tasks, customer service, and internal processes with Agentize artificial intelligence.',
    hu: 'Rutinfeladatok, ügyfélszolgálat, belső folyamatok automatizálása Agentize mesterséges intelligenciával.'
  },
  'services.decision.title': { en: 'AI-based Decision Support', hu: 'AI-alapú döntéstámogatás' },
  'services.decision.desc': { 
    en: 'Data-driven, fast and objective business decisions – with human oversight.',
    hu: 'Adatvezérelt, gyors és objektív üzleti döntések – humán felügyelettel.'
  },
  'services.security.title': { en: 'Secure AI Integration', hu: 'Biztonságos AI-integráció' },
  'services.security.desc': { 
    en: 'Compliance with EU AI Act and GDPR requirements – transparent, auditable AI systems.',
    hu: 'Megfelelőség az EU AI Act és GDPR elvárásoknak – transzparens, auditálható AI-rendszerek.'
  },
  'services.consulting.title': { en: 'Personalized AI Consulting', hu: 'Személyre szabott AI-tanácsadás' },
  'services.consulting.desc': { 
    en: 'Enterprise-level AI strategy, implementation roadmap and training.',
    hu: 'Vállalati szintű AI-stratégia, bevezetési roadmap és oktatás.'
  },

  // Testimonials
  'testimonial.quote': { 
    en: 'Thanks to Agentize, we were able to automate 40% of our processes – transparently and risk-free.',
    hu: 'Az Agentize-nek köszönhetően folyamataink 40%-át sikerült automatizálni – átláthatóan, kockázatmentesen.'
  },
  'testimonial.author': { en: 'Andrea Szabó', hu: 'Szabó Andrea' },
  'testimonial.company': { en: 'CEO, FutureTech Ltd.', hu: 'CEO, FutureTech Kft.' },
  'testimonial.title': { en: 'What our clients say?', hu: 'Mit mondanak ügyfeleink?' },

  // About
  'about.title': { en: 'About Us', hu: 'Rólunk' },
  'about.motto': { en: 'Innovation. Transparency. Human-centered AI.', hu: 'Innováció. Transzparencia. Emberközpontú AI.' },
  'about.description': { 
    en: 'The Agentize team believes that artificial intelligence creates value when it prioritizes security, ethics and user experience in every process.',
    hu: 'Az Agentize csapata hisz abban, hogy a mesterséges intelligencia értéket akkor teremt, ha minden folyamatban a biztonságot, etikusságot és a felhasználói élményt tartja szem előtt.'
  },
  'about.intelligent': { en: 'Intelligent solutions', hu: 'Intelligens megoldások' },
  'about.intelligent.desc': { en: 'All our AI solutions are built on the latest technologies', hu: 'Minden AI megoldásunk a legújabb technológiákra épül' },
  'about.security': { en: 'Security first', hu: 'Biztonság első' },
  'about.security.desc': { en: 'GDPR and EU AI Act compatible systems', hu: 'GDPR és EU AI Act kompatibilis rendszerek' },
  'about.human': { en: 'Human-centered', hu: 'Emberközpontú' },
  'about.human.desc': { en: 'AI complements, not replaces human work', hu: 'Az AI kiegészíti, nem helyettesíti az emberi munkát' },

  // Footer
  'footer.navigation': { en: 'Navigation', hu: 'Navigáció' },
  'footer.resources': { en: 'Resources', hu: 'Források' },
  'footer.contact': { en: 'Contact', hu: 'Kapcsolat' },
  'footer.career': { en: 'Career', hu: 'Karrier' },
  'footer.legal': { en: 'Legal Notice', hu: 'Jogi nyilatkozat' },
  'footer.imprint': { en: 'Imprint', hu: 'Impresszum' },
  'footer.copyright': { en: '© 2024 Agentize. All rights reserved.', hu: '© 2024 Agentize. Minden jog fenntartva.' },

  // Common
  'common.readyForAI': { en: 'Ready for the AI revolution?', hu: 'Készen állsz az AI forradalomra?' },
  'common.startJourney': { 
    en: 'Let\'s start the journey together towards more efficient and intelligent business processes.',
    hu: 'Kezdjük el együtt az utazást a hatékonyabb és intelligensebb üzleti folyamatok felé.'
  },
  'common.freeConsultation': { en: 'Free Consultation', hu: 'Ingyenes konzultáció' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'hu'>('hu');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;