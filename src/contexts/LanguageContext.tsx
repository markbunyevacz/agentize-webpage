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
  'common.learnMore': { en: 'Learn More', hu: 'Tudj meg többet' },
  'common.getStarted': { en: 'Get Started', hu: 'Kezdd el most' },
  'common.requestDemo': { en: 'Request Demo', hu: 'Demó kérése' },
  'common.bookMeeting': { en: 'Book Meeting', hu: 'Időpont foglalás' },

  // Services Page
  'services.page.title': { en: 'Our Services', hu: 'Szolgáltatásaink' },
  'services.page.subtitle': { 
    en: 'Comprehensive AI solutions that help with automation and efficiency improvement in all business areas.',
    hu: 'Átfogó AI megoldások, amelyek minden üzleti területen segítenek az automatizálásban és hatékonyság növelésében.'
  },
  'services.agents.title': { en: 'Intelligent Agents', hu: 'Intelligens Ügynökök' },
  'services.agents.desc': { 
    en: 'Custom AI agents that automate repetitive tasks, connect your systems, and proactively support business operations.',
    hu: 'Egyedi AI agentek, amelyek automatizálják az ismétlődő feladatokat, összekapcsolják rendszereidet, és proaktívan támogatják az üzletmenetet.'
  },
  'services.agents.features': { 
    en: '• 24/7 automated customer service\n• Internal process optimization\n• Cross-system integration\n• Real-time reporting',
    hu: '• 24/7 automatizált ügyfélszolgálat\n• Belső folyamatok optimalizálása\n• Rendszerek közötti integráció\n• Valós idejű riportálás'
  },
  'services.prompt.title': { en: 'Prompt Engineering & Customization', hu: 'Prompt Engineering & Testreszabás' },
  'services.prompt.desc': { 
    en: 'Continuously developed, customizable prompts and workflows for any use case.',
    hu: 'Folyamatosan fejlesztett, személyre szabható promptok és workflow-k bármely felhasználási területre.'
  },
  'services.training.title': { en: 'AI Implementation and Training Program', hu: 'AI Bevezetési és Oktatási Program' },
  'services.training.desc': { 
    en: 'We help prepare the entire company for AI-based work - workshops, training, consulting.',
    hu: 'Segítünk a cég egészét felkészíteni az AI-alapú munkavégzésre – workshop, tréning, tanácsadás.'
  },

  // Solutions Page
  'solutions.page.title': { en: 'Our Solutions', hu: 'Megoldásaink' },
  'solutions.page.subtitle': { 
    en: 'Industry-specific AI solutions that immediately create value for your business.',
    hu: 'Iparág-specifikus AI megoldások, amelyek azonnal értéket teremtenek üzleted számára.'
  },
  'solutions.customer.title': { en: 'AI Customer Service', hu: 'AI Ügyfélszolgálat' },
  'solutions.customer.desc': { 
    en: '24/7 automated assistance – in real time. Intelligent chatbots and agents that respond at human level.',
    hu: '24/7 automatizált segítségnyújtás – valós időben. Intelligens chatbotok és ügynökök, amelyek emberi színvonalon válaszolnak.'
  },
  'solutions.analytics.title': { en: 'Data Mining and Reporting', hu: 'Adatbányászat és Riportálás' },
  'solutions.analytics.desc': { 
    en: 'Instant, visually powerful reports, decision support for leadership. AI-driven data analysis and predictive analytics.',
    hu: 'Azonnali, vizuálisan erős riportok, döntéstámogatás a vezetőség számára. AI-vezérelt adatelemzés és prediktív analitika.'
  },
  'solutions.marketing.title': { en: 'AI Marketing Automation', hu: 'AI Marketing Automatizáció' },
  'solutions.marketing.desc': { 
    en: 'Personalized campaigns, content generation and customer journey optimization with AI.',
    hu: 'Személyre szabott kampányok, tartalomgenerálás és customer journey optimalizálás AI segítségével.'
  },

  // Technology Page
  'technology.page.title': { en: 'Technology & Compliance', hu: 'Technológia & Megfelelőség' },
  'technology.page.subtitle': { 
    en: 'Every Agentize AI solution operates according to the highest security and compliance standards.',
    hu: 'Az Agentize minden AI megoldása a legmagasabb biztonsági és compliance standardok szerint működik.'
  },
  'technology.security.title': { en: 'What makes Agentize solutions secure?', hu: 'Mi teszi biztonságossá az Agentize megoldásait?' },
  'technology.privacy.title': { en: 'Privacy by Design', hu: 'Privacy by Design' },
  'technology.privacy.desc': { 
    en: 'Privacy-based design in every development phase. Data protection is not an afterthought, but a built-in function.',
    hu: 'Adatvédelem alapú tervezés minden fejlesztési fázisban. Az adatok védelme nem utólagos, hanem beépített funkció.'
  },
  'technology.compliance.title': { en: 'EU AI Act Compliance', hu: 'EU AI Act Megfelelőség' },
  'technology.compliance.desc': { 
    en: 'We fully comply with the requirements of the EU Artificial Intelligence Act.',
    hu: 'Teljes mértékben megfelelünk az EU mesterséges intelligencia törvényének követelményeinek.'
  },
  'technology.transparency.title': { en: 'Transparent Decision Logic', hu: 'Átlátható Döntési Logika' },
  'technology.transparency.desc': { 
    en: 'Every AI decision is traceable and explainable. Audit trail and detailed logging for every operation.',
    hu: 'Minden AI döntés követhető és magyarázható. Audit trail és részletes logging minden művelethez.'
  },
  'technology.audits.title': { en: 'Regular Audits', hu: 'Rendszeres Auditok' },
  'technology.audits.desc': { 
    en: 'Continuous security reviews and compliance checks involving external experts.',
    hu: 'Folyamatos biztonsági felülvizsgálatok és compliance ellenőrzések külső szakértők bevonásával.'
  },

  // About Page
  'about.page.title': { en: 'About Us', hu: 'Rólunk' },
  'about.page.subtitle': { 
    en: 'The Agentize team consists of artificial intelligence and business automation experts who believe in ethical and transparent AI development.',
    hu: 'Az Agentize csapata a mesterséges intelligencia és üzleti automatizálás szakértőiből áll, akik hisznek az etikus és átlátható AI fejlesztésben.'
  },
  'about.mission.title': { en: 'Our Mission', hu: 'Küldetésünk' },
  'about.mission.desc': { 
    en: 'Our goal is for every company to have access to ethical, transparent AI solutions tailored to their own business processes.',
    hu: 'Célunk, hogy minden vállalat a saját üzleti folyamataihoz illeszkedő, etikus, átlátható AI-megoldásokhoz férjen hozzá.'
  },
  'about.values.title': { en: 'Our Values', hu: 'Értékeink' },
  'about.team.title': { en: 'Our Team', hu: 'Csapatunk' },
  'about.join.title': { en: 'Join Us!', hu: 'Csatlakozz hozzánk!' },
  'about.join.desc': { 
    en: 'We are looking for talented AI developers, data scientists and business experts who want to be part of the forefront of the AI revolution.',
    hu: 'Keresünk tehetséges AI fejlesztőket, adattudósokat és üzleti szakértőket, akik szeretnének része lenni az AI forradalom élvonalának.'
  },

  // Blog Page
  'blog.page.title': { en: 'Blog & Insights', hu: 'Blog & Insights' },
  'blog.page.subtitle': { 
    en: 'Latest AI trends, case studies, guides and expert opinions from the world of artificial intelligence.',
    hu: 'Legfrissebb AI trendek, esettanulmányok, útmutatók és szakértői vélemények a mesterséges intelligencia világából.'
  },
  'blog.featured': { en: 'Featured Articles', hu: 'Kiemelt cikkek' },
  'blog.all': { en: 'All Articles', hu: 'Minden cikk' },
  'blog.newsletter.title': { en: 'Subscribe to our newsletter!', hu: 'Iratkozz fel hírlevelünkre!' },
  'blog.newsletter.desc': { 
    en: 'Be among the first to learn about the latest AI trends, case studies and Agentize news.',
    hu: 'Legyél az elsők között, akik értesülnek a legújabb AI trendekről, esettanulmányokról és az Agentize újdonságairól.'
  },
  'blog.subscribe': { en: 'Subscribe', hu: 'Feliratkozás' },

  // Contact Page
  'contact.page.title': { en: 'Contact', hu: 'Kapcsolat' },
  'contact.page.subtitle': { 
    en: 'We are ready to help you every step of your AI journey. Contact us for a free consultation or any questions.',
    hu: 'Készen állunk segíteni AI utazásod minden lépésében. Vedd fel velünk a kapcsolatot ingyenes konzultációért vagy bármilyen kérdéssel.'
  },
  'contact.form.title': { en: 'Contact Form', hu: 'Kapcsolatfelvétel' },
  'contact.form.desc': { 
    en: 'Fill out the form below and we will contact you within 24 hours.',
    hu: 'Töltsd ki az alábbi űrlapot és 24 órán belül felvesszük veled a kapcsolatot.'
  },
  'contact.email': { en: 'Email', hu: 'E-mail' },
  'contact.office': { en: 'Office', hu: 'Iroda' },
  'contact.hours': { en: 'Office Hours', hu: 'Ügyfélfogadás' },
  'contact.send': { en: 'Send Message', hu: 'Üzenet küldése' },
  'contact.consultation.title': { en: 'Free Consultation', hu: 'Ingyenes konzultáció' },
  'contact.consultation.desc': { 
    en: 'Book a 30-minute free consultation with our AI experts.',
    hu: 'Foglalj időpontot 30 perces ingyenes konzultációra AI szakértőinkkel.'
  },
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