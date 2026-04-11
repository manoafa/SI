'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { TRANSLATIONS, type Language } from './translations';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const FALLBACK_TITLE = 'S.Innovation — Digital Solutions & Professional Training';

const SUPPORTED: readonly Language[] = ['en', 'fr', 'mg', 'ko', 'ru'];

function isSupportedLanguage(value: string): value is Language {
  return (SUPPORTED as readonly string[]).includes(value);
}

/** Maps navigator language tags to our app language; unsupported → English. */
function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';

  const candidates = [
    ...(navigator.languages?.length ? navigator.languages : []),
    navigator.language,
  ].filter(Boolean);

  for (const tag of candidates) {
    const primary = tag.split('-')[0]?.toLowerCase();
    if (primary && isSupportedLanguage(primary)) {
      return primary;
    }
  }

  return 'en';
}

function getTranslations(lang: Language): Record<string, string> {
  return TRANSLATIONS[lang] ?? TRANSLATIONS.en;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language');
    if (saved && isSupportedLanguage(saved)) {
      setLanguageState(saved);
      return;
    }
    setLanguageState(detectBrowserLanguage());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    const tr = getTranslations(language);
    document.title = tr['site.title'] ?? FALLBACK_TITLE;
  }, [language, mounted]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const tr = getTranslations(language);
      return tr[key] ?? key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
