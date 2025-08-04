// Base translations - only navigation and common elements
export const baseTranslations = {
  // Navigation
  'nav.home': { en: 'Home', hu: 'Főoldal' },
  'nav.services': { en: 'Services', hu: 'Szolgáltatások' },
  'nav.solutions': { en: 'Solutions', hu: 'Megoldások' },
  'nav.technology': { en: 'Technology', hu: 'Technológia' },
  'nav.about': { en: 'About', hu: 'Rólunk' },
  'nav.blog': { en: 'Blog', hu: 'Blog' },
  'nav.contact': { en: 'Contact', hu: 'Kapcsolat' },
  'nav.demo': { en: 'Try Demo', hu: 'Próbáld ki demónkat!' },

  // Common elements
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
};

// Lazy load other translations - only services and hero are currently implemented
export const loadServiceTranslations = () => import('./services').then(m => m.serviceTranslations);
export const loadHeroTranslations = () => import('./hero').then(m => m.heroTranslations);