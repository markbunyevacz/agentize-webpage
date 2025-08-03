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
  'hero.main.title': { 
    en: 'Enterprise AI Governance & Data Intelligence', 
    hu: 'Vállalati AI Irányítás & Adatintelligencia' 
  },
  'hero.title': { en: 'Agentize', hu: 'Agentize' },
  'hero.subtitle': { 
    en: 'Data Intelligence Platform that accelerates business outcomes through agentic AI orchestration', 
    hu: 'Adatintelligencia platform, amely üzleti eredményeket gyorsít fel ügynöki AI orchestrációval' 
  },
  'hero.strategic.title': { en: 'Strategic AI Transformation Partner', hu: 'Stratégiai AI transzformációs partner' },
  'hero.description': { 
    en: 'For digitally evolving enterprises, we deliver intelligent automation, predictive analytics, and enterprise-grade AI governance – all with measurable business value and sustainable competitive advantage. Our services support organizational efficiency, accelerated decision-making, and conscious risk management across all sectors.',
    hu: 'Digitálisan fejlődő vállalatok számára kínálunk intelligens automatizálást, prediktív analitikát és vállalati szintű AI irányítást – mindezt mérhető üzleti érték és fenntartható versenyelőny mellett. Szolgáltatásaink minden szektorban támogatják a szervezeti hatékonyság növelését, a döntéshozatal felgyorsítását és a kockázatok tudatos kezelését.'
  },
  'hero.experience.title': { 
    en: 'Experience AI Orchestration', 
    hu: 'Tapasztalja meg az AI Orchestrációt' 
  },
  'hero.experience.desc': {
    en: 'Experience live how agentic AI systems connect with your existing processes and how continuous optimization is achieved.',
    hu: 'Kipróbálhatja élőben, hogyan kapcsolódnak össze az ügynöki AI rendszerek a meglévő folyamataival, s miként valósul meg a folyamatos optimalizáció.'
  },
  'hero.cta.demo': { en: 'Try the Demo', hu: 'Próbálja ki a demót' },
  'hero.cta.consult': { en: 'Request Consultation', hu: 'Kérjen konzultációt' },
  'hero.badge': { en: 'Enterprise AI Governance', hu: 'Vállalati AI Irányítás' },

  // Main Capabilities - Homepage
  'capabilities.title': { en: 'Key Capabilities:', hu: 'Főbb képességek:' },
  'capabilities.orchestration.title': { 
    en: 'Intelligent Process Orchestration', 
    hu: 'Intelligens folyamat orchestráció' 
  },
  'capabilities.orchestration.desc': { 
    en: 'Automated, transparent workflow management with agentic AI platform – less manual intervention, greater efficiency.',
    hu: 'Automatizált, átlátható workflow irányítás ügynöki AI platformmal – kevesebb kézi beavatkozás, nagyobb hatékonyság.'
  },
  'capabilities.intelligence.title': { 
    en: 'Predictive Business Intelligence', 
    hu: 'Prediktív üzleti intelligencia' 
  },
  'capabilities.intelligence.desc': { 
    en: 'Advanced analytics, risk management, and faster decision-making with real-time data processing.',
    hu: 'Fejlett analitika, kockázatkezelés és gyorsabb döntéshozatal valós idejű adatfeldolgozással.'
  },
  'capabilities.governance.title': { 
    en: 'Enterprise AI Governance and Compliance', 
    hu: 'Vállalati AI irányítás és compliance' 
  },
  'capabilities.governance.desc': { 
    en: 'Secure, scalable, full GDPR/EU AI Act and audit compliance with high-level transparency and human oversight.',
    hu: 'Biztonságos, skálázható, teljes GDPR/EU AI Act és audit-megfelelőség, magas szintű átláthatósággal, emberi felügyelettel.'
  },
  'capabilities.partnership.title': { 
    en: 'AI Transformation Partnership', 
    hu: 'AI transzformációs partnerség' 
  },
  'capabilities.partnership.desc': { 
    en: 'Comprehensive consulting, workshops, training, continuous support – strategic AI implementation for long-term value creation.',
    hu: 'Átfogó tanácsadás, workshopok, tréningek, folyamatos támogatás – stratégiai AI bevezetés a hosszú távú értékteremtésért.'
  },

  // Testimonials
  'testimonial.title': { en: 'What our clients say?', hu: 'Mit mondanak ügyfeleink?' },
  'testimonial.quote': { 
    en: "Thanks to Agentize, we were able to automate 40% of our processes – transparently and risk-free.",
    hu: "Az Agentize-nek köszönhetően folyamataink 40%-át sikerült automatizálni – átláthatóan, kockázatmentesen."
  },
  'testimonial.author': { en: 'Andrea Szabó', hu: 'Szabó Andrea' },
  'testimonial.company': { en: 'CEO, FutureTech Ltd.', hu: 'CEO, FutureTech Kft.' },

  // About
  'about.title': { en: 'About Us:', hu: 'Rólunk:' },
  'about.motto': { en: 'Innovation. Transparency. Human-centered AI.', hu: 'Innováció. Transzparencia. Emberközpontú AI.' },
  'about.description': { 
    en: 'The Agentize team believes that artificial intelligence creates value when it prioritizes security, ethical operation, and user experience at the center of every process. All our AI solutions are built on the latest technologies, treating GDPR/EU AI Act compliance as a primary concern, and supporting the augmentation of human work – not replacement.',
    hu: 'Az Agentize csapata hisz abban, hogy a mesterséges intelligencia akkor teremt értéket, ha a biztonságot, etikus működést és a felhasználói élményt helyezi minden folyamat középpontjába. Minden AI megoldásunk a legújabb technológiákra épül, elsődleges szempontként kezelve a GDPR/EU AI Act megfelelést, és támogatva az emberi munka kiegészítését – nem helyettesítését.'
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

  // Services Section (Homepage)
  'services.title': { en: 'Our Services', hu: 'Szolgáltatásaink' },
  'services.subtitle': { 
    en: 'Comprehensive AI solutions that help with automation and efficiency improvement in all business areas.',
    hu: 'Átfogó AI megoldások, amelyek minden üzleti területen segítenek az automatizálásban és hatékonyság növelésében.'
  },
  'services.automation.title': { en: 'AI Automation', hu: 'AI Automatizáció' },
  'services.automation.desc': { 
    en: 'Intelligent automation of business processes with advanced AI algorithms.',
    hu: 'Üzleti folyamatok intelligens automatizálása fejlett AI algoritmusokkal.'
  },
  'services.decision.title': { en: 'Decision Support', hu: 'Döntéstámogatás' },
  'services.decision.desc': { 
    en: 'Data-driven insights and recommendations for strategic business decisions.',
    hu: 'Adatvezérelt betekintések és javaslatok stratégiai üzleti döntésekhez.'
  },
  'services.security.title': { en: 'Security', hu: 'Biztonság' },
  'services.security.desc': { 
    en: 'Enterprise-grade security solutions with AI-powered threat detection.',
    hu: 'Vállalati szintű biztonsági megoldások AI-alapú fenyegetésészleléssel.'
  },
  'services.consulting.title': { en: 'Consulting', hu: 'Tanácsadás' },
  'services.consulting.desc': { 
    en: 'Expert guidance for successful AI transformation and implementation.',
    hu: 'Szakértői útmutatás a sikeres AI transzformációhoz és megvalósításhoz.'
  },

  // Services Page
  'services.page.title': { en: 'Our Services', hu: 'Szolgáltatásaink' },
  'services.page.subtitle': { 
    en: 'Comprehensive AI solutions that help with automation and efficiency improvement in all business areas.',
    hu: 'Átfogó AI megoldások, amelyek minden üzleti területen segítenek az automatizálásban és hatékonyság növelésében.'
  },
  'services.agents.title': { en: 'Agentic AI Systems', hu: 'Agentic AI Rendszerek' },
  'services.agents.desc': { 
    en: 'Enterprise-grade agentic AI platform that orchestrates intelligent automation, connects enterprise systems, and drives operational excellence.',
    hu: 'Vállalati szintű agentikus AI platform, amely intelligens automatizálással, rendszerösszekapcsolással és folyamati kiválósággal gyorsítja fel az üzleti működést.'
  },
  'services.agents.features': { 
    en: '• Autonomous process orchestration: Seamlessly automate and coordinate business workflows across functions\n• Enterprise system integration: Effortlessly bridge existing business software, databases, and cloud tools\n• Real-time business intelligence: Gain actionable, live insights with predictive analytics\n• Predictive workflow optimization: Leverage AI to anticipate bottlenecks and optimize resources',
    hu: '• Autonóm folyamat-orchesztráció: Üzleti munkafolyamatok zökkenőmentes automatizálása és koordinációja\n• Vállalati rendszerek integrációja: Meglévő üzleti szoftverek, adatbázisok és felhőszolgáltatások összekötése\n• Valós idejű üzleti intelligencia: Azonnali, cselekvésre kész elemzések és előrejelzések\n• Prediktív workflow-optimalizálás: AI segítségével előre jelezhetőek a szűk keresztmetszetek'
  },
  'services.agents.benefits.title': { en: 'Why choose Agentize Agentic AI?', hu: 'Miért az Agentize Agentic AI?' },
  'services.agents.benefits': {
    en: '• Enterprise readiness: Built for reliability, scalability, and security at every level\n• Outcome-driven: Focused on accelerating business transformation and measurable ROI\n• Governance & compliance: Designed with robust AI governance and full GDPR/EU AI Act compliance',
    hu: '• Vállalati felkészültség: Magas szintű megbízhatóság, skálázhatóság és biztonság\n• Eredményorientáltság: Az üzleti transzformáció gyorsítását és mérhető megtérülést helyezi előtérbe\n• Governance & compliance: Szabályozott AI-keretrendszerrel és teljes GDPR/EU AI Act megfelelőséggel'
  },
  'services.prompt.title': { en: 'AI Orchestration Framework', hu: 'AI Orchestration Framework' },
  'services.prompt.subtitle': { 
    en: 'Next-generation orchestration for enterprise AI transformation, governance, and business excellence.',
    hu: 'Új generációs AI-orchesztráció vállalati transzformációhoz, governance-hez és üzleti kiválósághoz.'
  },
  'services.prompt.desc': { 
    en: 'Agentize delivers an enterprise-grade AI orchestration framework that empowers your organization to coordinate, optimize, and govern AI-powered workflows across the entire business. Designed for measurable impact and continuous improvement, the framework ensures industry compliance, operational transparency, and real-time performance monitoring.',
    hu: 'Az Agentize vállalati szintű AI-orchesztrációs keretrendszere lehetővé teszi, hogy szervezete egységesen koordinálja, optimalizálja és átláthatóan irányítsa az AI-alapú folyamatokat. A keretrendszer mérhető üzleti eredményeket, folyamatos fejlődést és iparági megfelelőséget biztosít valós idejű teljesítménymonitoringgal.'
  },
  'services.prompt.features': {
    en: '• Industry-tailored prompts: Pre-built and customizable prompts for every sector, accelerating deployments\n• A/B testing & optimization: Run controlled experiments to refine AI workflows and maximize business results\n• Automated workflow orchestration: Seamlessly automate business processes end-to-end\n• Performance monitoring: Real-time analytics and automated performance dashboards\n• Enterprise governance: Centralized controls for compliance (GDPR, EU AI Act) and audit trails\n• Continuous improvement: Data-driven insights to enable rapid iteration and sustained ROI',
    hu: '• Iparág-specifikus promptok: Előre definiált, testre szabható promptok minden szektorra\n• A/B tesztelés és optimalizálás: Kontrollált kísérletek az AI munkafolyamatok finomhangolásához\n• Automatizált workflow orchesztráció: Üzleti folyamatok teljes körű automatizálása\n• Teljesítménymonitoring: Valós idejű elemzés és automatizált dashboardok\n• Vállalati governance: Centralizált compliance (GDPR, EU AI Act) és auditálhatóság\n• Folyamatos fejlődés: Adatalapú visszacsatolás a gyors iterációért és fenntartható megtérülésért'
  },
  'services.prompt.outcome': {
    en: 'Achieve operational excellence and measurable ROI with Agentize\'s AI Orchestration Framework.',
    hu: 'Érje el az üzleti kiválóságot és mérhető ROI-t az Agentize AI Orchestration Framework segítségével!'
  },
  'services.prompt.cta1': { en: 'Book a Consultation', hu: 'Kérjen konzultációt' },
  'services.prompt.cta2': { en: 'Experience a Live Demo', hu: 'Válassza a bemutatót!' },
  'services.training.title': { en: 'Enterprise AI Transformation', hu: 'Vállalati AI Transzformáció' },
  'services.training.subtitle': {
    en: 'Comprehensive transformation partnership for enterprise-scale AI adoption, governance frameworks, and strategic value creation.',
    hu: 'Átfogó transzformációs partnerség vállalati szintű AI bevezetéshez, irányítási keretrendszerekhez és stratégiai értékteremtéshez.'
  },
  'services.training.desc': { 
    en: 'Agentize delivers an end-to-end enterprise AI transformation program to support your organization in the strategic, secure, and results-driven implementation of artificial intelligence. Our senior consultants offer a bespoke approach for every leadership and expert level, emphasizing long-term innovation and competitive edge.',
    hu: 'Az Agentize teljes körű vállalati AI transzformációs programja segíti szervezetét a mesterséges intelligencia stratégiai, biztonságos és eredmény-orientált bevezetésében. Tapasztalt tanácsadóink személyre szabott megközelítést kínálnak minden vezetői és szakértői szintre, kiemelve a hosszú távú innovációt és versenyelőnyt.'
  },
  'services.training.features': {
    en: '• Tailored Workshops & Trainings: Interactive, industry-specific workshops for decision-makers and key stakeholders\n• Executive Training & Strategic Advisory: C-level and mid-management programs to support strategic AI adoption\n• Change Management: Organization-wide services ensuring AI is smoothly integrated and resistance minimized\n• Long-term Support: Continuous professional guidance, audits, feedback loops, and ongoing AI governance',
    hu: '• Személyre szabott workshopok és tréningek: Interaktív, iparágspecifikus workshopok döntéshozóknak és kulcsembereknek\n• Vezetői tréningek & stratégiai tanácsadás: Felsővezetői és középvezetői szintű képzések az AI stratégiai adaptálásához\n• Change management: Szervezeti átalakulást segítő szolgáltatások a zökkenőmentes AI bevezetésért\n• Hosszú távú támogatás: Folyamatos szakmai támogatás, auditok, visszacsatolási mechanizmusok és AI governance felügyelet'
  },
  'services.training.discover': {
    en: 'Discover our capabilities:',
    hu: 'Fedezze fel a képességeket:'
  },
  'services.training.cta1': { en: 'Book a Consultation', hu: 'Kérjen konzultációt' },
  'services.training.cta2': { en: 'Request Demo', hu: 'Bemutatót kérek' },

  // Solutions Page - Updated professional B2B content
  'solutions.page.title': { en: 'Business Outcomes Platform', hu: 'Üzleti Eredmények Platformja' },
  'solutions.page.subtitle': { 
    en: 'Industry-specific data intelligence capabilities delivering measurable business value through responsible AI governance.',
    hu: 'Iparág-specifikus adatintelligencia = mérhető üzleti érték felelős AI irányításon keresztül.'
  },
  
  // Conversational Intelligence
  'solutions.customer.title': { en: 'Conversational Intelligence Platform', hu: 'Beszélgetési Intelligencia Platform' },
  'solutions.customer.desc': { 
    en: 'Enterprise-grade conversational AI for exceptional customer experience through personalized, scalable interactions.',
    hu: 'Vállalati szintű beszélgetési AI = kiváló ügyfélélmény, személyre szabott, skálázható interakciók.'
  },
  'solutions.customer.features': {
    en: '• Multilingual conversations\n• Advanced complex case handling\n• CRM integration for seamless data sync\n• Immediate escalation to human agents if needed',
    hu: '• Többnyelvű beszélgetés\n• Összetett ügyfélkérések gyors kezelése\n• CRM-integráció az ügyféladatok szinkronizálásához\n• Igény esetén azonnali emberi ügyintéző bevonás'
  },
  'solutions.customer.cta': { 
    en: 'Demo: Discover how conversational AI can transform your customer service!',
    hu: 'Demó kérése: Próbálja ki, hogyan javíthatja a beszélgetési élményt vállalatánál!'
  },
  
  // Predictive Analytics
  'solutions.analytics.title': { en: 'Predictive Analytics Engine', hu: 'Prediktív Analitikai Motor' },
  'solutions.analytics.desc': { 
    en: 'Advanced business intelligence platform for real-time insights, risk management, and data-driven decision support.',
    hu: 'Fejlett üzleti intelligencia – valós idejű betekintések, kockázatkezelés, adatvezérelt döntéstámogatás.'
  },
  'solutions.analytics.features': {
    en: '• Real-time dashboards\n• Predictive modeling & analytics\n• Automated reporting\n• Trend & anomaly analysis',
    hu: '• Valós idejű dashboard-ok\n• Prediktív modellezés és elemzés\n• Automatikus rendszeres jelentések\n• Trend- és anomáliaelemzés'
  },
  'solutions.analytics.cta': {
    en: 'Sample reports: View live sample dashboards!',
    hu: 'Példa riportok: Tekintsen meg mintariportokat élőben!'
  },
  
  // Marketing Intelligence
  'solutions.marketing.title': { en: 'Marketing Intelligence Orchestration', hu: 'Marketing Intelligencia Orchestráció' },
  'solutions.marketing.desc': { 
    en: 'AI-powered marketing platform to optimize customer journeys, content generation, and campaign performance with measurable ROI.',
    hu: 'AI-vezérelt marketing platform az ügyfélutak, tartalomgenerálás, kampányok optimalizálására, mérhető megtérüléssel.'
  },
  'solutions.marketing.features': {
    en: '• Personalized email campaigns\n• Dynamic content generation with AI\n• Lead scoring & nurturing\n• Automated A/B testing with instant reporting',
    hu: '• Személyre szabott email-kampányok\n• Dinamikus, AI-alapú tartalomgenerálás\n• Lead scoring & nurturing\n• Automatizált A/B tesztelés és eredményértékelés'
  },
  'solutions.marketing.cta': {
    en: 'Campaign planning: Book a session with our marketing experts!',
    hu: 'Kampány tervezés: Kérjen konzultációt marketing szakértőnktől!'
  },
  
  // Platform Features (for homepage)
  'platform.features.title': { en: 'Key Features:', hu: 'Főbb funkciók:' },
  'platform.multilingual': { en: 'Multilingual support', hu: 'Többnyelvű támogatás' },
  'platform.complex': { en: 'Handling complex queries', hu: 'Komplex kérdések kezelése' },
  'platform.crm': { en: 'CRM integration', hu: 'CRM-integráció' },
  'platform.handoff': { en: 'Instant human handoff option when required', hu: 'Emberi átadás lehetősége szükség esetén' },
  'platform.demo': { 
    en: 'Offer: Request a live demo – experience our platform in action!',
    hu: 'Ajánlat: Azonnali demó elérhető – tapasztalja meg az élő platformot!'
  },
  
  // Why Choose Agentize
  'why.title': { en: 'Why choose Agentize Solutions?', hu: 'Miért az Agentize?' },
  'why.implementation': { 
    en: 'Fast implementation: Go live in 2–4 weeks',
    hu: 'Gyors implementáció: 2–4 hét alatt éles rendszer'
  },
  'why.roi': { 
    en: 'Measurable ROI: Average 300% return in the first year',
    hu: 'Mérhető ROI: Átlagosan 300% megtérülés már az első évben'
  },
  'why.support': { 
    en: 'Continuous development & support: Live support and active improvement',
    hu: 'Folyamatos fejlesztés és támogatás: Élesben működő support'
  },
  'why.compliance': { 
    en: 'GDPR & EU AI Act compliance: All systems fully compliant with current regulations',
    hu: 'GDPR/EU AI Act megfelelőség: Minden rendszer megfelel az aktuális jogszabályoknak'
  },
  'why.consultation': { 
    en: 'Free consultation: 30-minute expert session – no obligations',
    hu: 'Ingyenes konzultáció: 30 perces szakértői egyeztetés – kötelezettség nélkül'
  },
  'why.booking.title': { en: 'Book a call:', hu: 'Időpontfoglalás:' },
  'why.booking.desc': { 
    en: 'Schedule your expert consultation and discover how our AI solutions can boost your business growth!',
    hu: 'Foglaljon szakértői konzultációt, és ismerje meg, hogyan támogatjuk üzleti növekedését innovatív AI megoldásokkal!'
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

  // About Page - Professional B2B content
  'about.page.title': { en: 'About Us', hu: 'Rólunk' },
  'about.page.subtitle': { 
    en: 'The Agentize team consists of experts in artificial intelligence and business automation, committed to developing ethical, transparent, and business value-driven AI technologies.',
    hu: 'Az Agentize csapata a mesterséges intelligencia és üzleti automatizálás szakértőiből áll, akik elkötelezettek az etikus, átlátható és üzleti értéket teremtő AI-technológiák fejlesztése mellett.'
  },
  'about.mission.title': { en: 'Our Mission', hu: 'Küldetésünk' },
  'about.mission.desc': {
    en: 'Our mission is to make AI solutions accessible and operational for every company, enabling seamless integration with their unique business processes – all while upholding the highest ethical standards, full transparency, and a human-centered approach.',
    hu: 'Küldetésünk, hogy minden vállalat számára elérhetővé és működtethetővé tegyük azokat az AI-megoldásokat, amelyek hatékonyan illeszkednek egyedi üzleti folyamataikhoz – mindezt a legmagasabb etikai normák, teljes transzparencia és emberközpontú szemlélet mentén.'
  },
  'about.values.title': { en: 'Our Core Values:', hu: 'Alapelveink:' },
  'about.innovation.title': { en: 'Innovation', hu: 'Innováció' },
  'about.innovation.desc': {
    en: 'We continuously research and apply the latest advances in AI to deliver a measurable competitive advantage for our clients.',
    hu: 'Folyamatosan kutatjuk és alkalmazzuk a mesterséges intelligencia legújabb technológiáit, hogy ügyfeleink versenyelőnyt szerezzenek.'
  },
  'about.transparency.title': { en: 'Transparency', hu: 'Transzparencia' },
  'about.transparency.desc': {
    en: 'Every AI solution we build is explainable and fully documented, delivering comprehensive audit trails and leveraging explainable AI (XAI) models.',
    hu: 'Minden AI-fejlesztésünk átlátható: részletes dokumentációt, audit trail-t és magyarázható AI (XAI) modelleket biztosítunk.'
  },
  'about.human.title': { en: 'Human-Centricity', hu: 'Emberközpontúság' },
  'about.human.desc': {
    en: 'Our products and services empower the synergy between people and intelligent machines, always supporting human oversight, control, and decision-making.',
    hu: 'Megoldásaink és szolgáltatásaink célja, hogy az ember és a gép együttműködése hatékonyabb, biztonságosabb és fenntarthatóbb legyen – a humán döntéshozást és kontrollt mindig támogatjuk.'
  },
  'about.team.title': { en: 'Who are we?', hu: 'Kik vagyunk?' },
  'about.experience': {
    en: '15+ years of combined experience in AI, business IT, and process automation.',
    hu: 'Több, mint 15 év szakmai tapasztalat az AI, üzleti informatika és folyamatautomatizálás területén.'
  },
  'about.clients': {
    en: 'Serving corporate (B2B) clients in Hungary and internationally.',
    hu: 'Vállalati ügyfélkiszolgálás (B2B) Magyarországon és nemzetközi szinten.'
  },
  'about.expertise': {
    en: 'A team of recognized AI developers, data security & compliance advisors, and process optimization specialists.',
    hu: 'Szakértő csapat, elismert AI fejlesztők, adatbiztonsági és compliance tanácsadók, folyamatoptimalizálási specialisták.'
  },
  'about.goal.title': { en: 'Our Goal:', hu: 'Célunk:' },
  'about.goal.desc': {
    en: 'To empower Hungarian and European enterprises in their digital transformation by providing secure, measurable AI technologies that sustainably boost competitiveness.',
    hu: 'Hozzájárulni a magyar és európai vállalatok digitális átalakulásához, biztosítva számukra azokat a biztonságos, mérhető eredményt hozó AI eszközöket, amelyek hosszú távon növelik versenyképességüket.'
  },
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