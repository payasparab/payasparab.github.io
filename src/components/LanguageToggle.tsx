import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { LANGUAGES } from '../i18n/dict';

export function LanguageToggle() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div className="lang-wrap" ref={ref}>
      <button
        className="lang-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('lang.label')}
        title={t('lang.label')}
      >
        <span className="lang-short">{current.short}</span>
        <span className="lang-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="lang-menu"
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.14 }}
          >
            {LANGUAGES.map((l) => (
              <li
                key={l.code}
                role="option"
                aria-selected={l.code === lang}
                className={`lang-item ${l.code === lang ? 'active' : ''}`}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className="lang-short">{l.short}</span>
                <span className="lang-long">{l.long}</span>
                {l.code === lang && <span className="lang-check">●</span>}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
