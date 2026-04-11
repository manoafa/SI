import type { Language } from './types';
import { en } from './locales/en';
import { fr } from './locales/fr';
import { mg } from './locales/mg';
import { ko } from './locales/ko';
import { ru } from './locales/ru';

export type { Language } from './types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en,
  fr,
  mg,
  ko,
  ru,
};
