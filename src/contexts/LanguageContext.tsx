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

  // Hero Section - Enterprise positioning
  'hero.title': { en: 'Agentize', hu: 'Agentize' },
  'hero.subtitle': { 
    en: 'Data Intelligence Platform that accelerates business outcomes through agentic AI orchestration', 
    hu: 'Adatintelligencia platform, amely üzleti eredményeket gyorsít fel ügynöki AI orchestrációval' 
  },
  'hero.description': { 
    en: 'Strategic AI transformation partner delivering intelligent automation, predictive analytics, and enterprise-grade governance for measurable business value.',
    hu: 'Stratégiai AI transzformációs partner, amely intelligens automatizálást, prediktív analitikát és vállalati szintű irányítást nyújt mérhető üzleti értékért.'
  },
  'hero.cta.demo': { en: 'Experience AI Orchestration', hu: 'Tapasztalja meg az AI Orchestrációt' },
  'hero.cta.consult': { en: 'Strategic Partnership Consultation', hu: 'Stratégiai Partnerség Konzultáció' },
  'hero.badge': { en: 'Enterprise AI Governance', hu: 'Vállalati AI Irányítás' },

  // Services - Enterprise positioning
  'services.title': { en: 'Enterprise AI Capabilities', hu: 'Vállalati AI Képességek' },
  'services.subtitle': { 
    en: 'Comprehensive data intelligence platform delivering measurable business outcomes through responsible AI governance',
    hu: 'Átfogó adatintelligencia platform, amely mérhető üzleti eredményeket nyújt felelős AI irányításon keresztül'
  },
  'services.automation.title': { en: 'Intelligent Process Orchestration', hu: 'Intelligens Folyamat Orchestráció' },
  'services.automation.desc': { 
    en: 'Streamline operations through agentic AI systems that optimize workflow automation and drive operational excellence.',
    hu: 'Optimalizálja működését ügynöki AI rendszerekkel, amelyek automatizálják a munkafolyamatokat és működési kiválóságot eredményeznek.'
  },
  'services.decision.title': { en: 'Predictive Business Intelligence', hu: 'Prediktív Üzleti Intelligencia' },
  'services.decision.desc': { 
    en: 'Data-driven insights platform enabling faster decision-making through advanced analytics and risk management capabilities.',
    hu: 'Adatvezérelt betekintés platform, amely gyorsabb döntéshozatalt tesz lehetővé fejlett analitikai és kockázatkezelési képességekkel.'
  },
  'services.security.title': { en: 'Enterprise AI Governance', hu: 'Vállalati AI Irányítás' },
  'services.security.desc': { 
    en: 'Responsible AI framework ensuring security, scalability, and compliance across your data intelligence infrastructure.',
    hu: 'Felelős AI keretrendszer, amely biztonságot, skálázhatóságot és megfelelőséget biztosít adatintelligencia infrastruktúrájában.'
  },
  'services.consulting.title': { en: 'AI Transformation Partnership', hu: 'AI Transzformációs Partnerség' },
  'services.consulting.desc': { 
    en: 'Strategic partnership for enterprise-wide AI adoption, governance frameworks, and measurable business value creation.',
    hu: 'Stratégiai partnerség vállalati szintű AI bevezetéshez, irányítási keretrendszerekhez és mérhető üzleti értékteremtéshez.'
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
  'common.readyForAI': { en: 'Ready for AI transformation?', hu: 'Készen áll az AI transzformációra?' },
  'common.startJourney': { 
    en: 'Partner with us to accelerate business outcomes through enterprise-grade AI orchestration and governance.',
    hu: 'Partnerségben velünk gyorsítsa fel az üzleti eredményeket vállalati szintű AI orchestráción és irányításon keresztül.'
  },
  'common.freeConsultation': { en: 'Strategic Partnership Consultation', hu: 'Stratégiai Partnerség Konzultáció' },
  'common.learnMore': { en: 'Explore Capabilities', hu: 'Fedezze fel a képességeket' },
  'common.getStarted': { en: 'Begin Transformation', hu: 'Kezdje el a transzformációt' },
  'common.requestDemo': { en: 'Experience Platform Demo', hu: 'Tapasztalja meg a Platform Demót' },
  'common.bookMeeting': { en: 'Schedule Strategic Consultation', hu: 'Ütemezzen Stratégiai Konzultációt' },

  // Services Page
  'services.page.title': { en: 'Our Services', hu: 'Szolgáltatásaink' },
  'services.page.subtitle': { 
    en: 'Comprehensive AI solutions that help with automation and efficiency improvement in all business areas.',
    hu: 'Átfogó AI megoldások, amelyek minden üzleti területen segítenek az automatizálásban és hatékonyság növelésében.'
  },
  'services.agents.title': { en: 'Agentic AI Systems', hu: 'Ügynöki AI Rendszerek' },
  'services.agents.desc': { 
    en: 'Enterprise-grade agentic AI platform that orchestrates intelligent automation, connects enterprise systems, and drives operational excellence.',
    hu: 'Vállalati szintű ügynöki AI platform, amely intelligens automatizálást koordinál, vállalati rendszereket kapcsol össze és működési kiválóságot eredményez.'
  },
  'services.agents.features': { 
    en: '• Autonomous process orchestration\n• Enterprise system integration\n• Real-time business intelligence\n• Predictive workflow optimization',
    hu: '• Autonóm folyamat orchestráció\n• Vállalati rendszer integráció\n• Valós idejű üzleti intelligencia\n• Prediktív munkafolyamat optimalizálás'
  },
  'services.prompt.title': { en: 'AI Orchestration Framework', hu: 'AI Orchestrációs Keretrendszer' },
  'services.prompt.desc': { 
    en: 'Advanced AI orchestration capabilities with enterprise governance, continuous optimization, and measurable business outcomes.',
    hu: 'Fejlett AI orchestrációs képességek vállalati irányítással, folyamatos optimalizálással és mérhető üzleti eredményekkel.'
  },
  'services.training.title': { en: 'Enterprise AI Transformation', hu: 'Vállalati AI Transzformáció' },
  'services.training.desc': { 
    en: 'Comprehensive transformation partnership for enterprise-wide AI adoption, governance frameworks, and strategic value creation.',
    hu: 'Átfogó transzformációs partnerség vállalati szintű AI bevezetéshez, irányítási keretrendszerekhez és stratégiai értékteremtéshez.'
  },

  // Solutions Page - Outcome-driven positioning
  'solutions.page.title': { en: 'Business Outcomes Platform', hu: 'Üzleti Eredmények Platformja' },
  'solutions.page.subtitle': { 
    en: 'Industry-specific data intelligence capabilities that deliver measurable business value through responsible AI governance.',
    hu: 'Iparág-specifikus adatintelligencia képességek, amelyek mérhető üzleti értéket nyújtanak felelős AI irányításon keresztül.'
  },
  'solutions.customer.title': { en: 'Conversational Intelligence Platform', hu: 'Beszélgetési Intelligencia Platform' },
  'solutions.customer.desc': { 
    en: 'Enterprise-grade conversational AI that drives customer experience excellence through personalized, scalable interactions.',
    hu: 'Vállalati szintű beszélgetési AI, amely kiváló ügyfélélményt eredményez személyre szabott, skálázható interakciókon keresztül.'
  },
  'solutions.analytics.title': { en: 'Predictive Analytics Engine', hu: 'Prediktív Analitikai Motor' },
  'solutions.analytics.desc': { 
    en: 'Advanced business intelligence platform delivering real-time insights, risk management, and data-driven decision support.',
    hu: 'Fejlett üzleti intelligencia platform, amely valós idejű betekintéseket, kockázatkezelést és adatvezérelt döntéstámogatást nyújt.'
  },
  'solutions.marketing.title': { en: 'Marketing Intelligence Orchestration', hu: 'Marketing Intelligencia Orchestráció' },
  'solutions.marketing.desc': { 
    en: 'AI-driven marketing platform that optimizes customer journeys, content generation, and campaign performance for measurable ROI.',
    hu: 'AI-vezérelt marketing platform, amely optimalizálja az ügyfélutakat, tartalomgenerálást és kampányteljesítményt mérhető ROI-ért.'
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