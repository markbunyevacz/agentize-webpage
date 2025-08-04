import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { baseTranslations } from '@/translations';

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

// Start with base translations only - others loaded on demand
let loadedTranslations: Translations = { ...baseTranslations };

// Cache for lazy-loaded translation modules
const translationCache = new Map<string, Translations>();

const loadTranslationsForPage = async (page: string): Promise<void> => {
  if (translationCache.has(page)) {
    Object.assign(loadedTranslations, translationCache.get(page));
    return;
  }

  try {
    let pageTranslations: Translations = {};
    
    switch (page) {
      case 'services':
        const { serviceTranslations } = await import('@/translations/services');
        pageTranslations = serviceTranslations;
        break;
      case 'hero':
        const { heroTranslations } = await import('@/translations/hero');
        pageTranslations = heroTranslations;
        break;
      // Add other pages as needed when files are created
    }
    
    translationCache.set(page, pageTranslations);
    Object.assign(loadedTranslations, pageTranslations);
  } catch (error) {
    console.warn(`Failed to load translations for page: ${page}`, error);
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'hu'>('en');

  const t = (key: string): string => {
    const translation = loadedTranslations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[language] || translation.en || key;
  };

  // Load translations based on current route
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('/services')) {
      loadTranslationsForPage('services');
    } else if (currentPath === '/' || currentPath.includes('hero')) {
      loadTranslationsForPage('hero');
    }
  }, []);

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