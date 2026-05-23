import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dict, type Lang, type TKey } from './dict';

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
};

const Ctx = createContext<I18nCtx | null>(null);
const STORAGE_KEY = 'payasparab.lang';

function readInitial(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && (stored === 'en' || stored === 'es' || stored === 'zh' || stored === 'mr')) {
    return stored;
  }
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('mr')) return 'mr';
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback(
    (key: TKey) => dict[lang][key] ?? dict.en[key] ?? key,
    [lang]
  );

  const value = useMemo<I18nCtx>(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('useI18n must be used inside I18nProvider');
  return c;
}
