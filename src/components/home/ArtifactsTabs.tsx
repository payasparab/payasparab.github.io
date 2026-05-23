import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { presentations, publicationsList, resumeFormats } from '../../data/artifacts';
import { teaching } from '../../data/teaching';
import { GitHubFeed } from './GitHubFeed';

type TabKey = 'opensource' | 'publications' | 'presentations' | 'teaching';

const TABS: TabKey[] = ['opensource', 'publications', 'presentations', 'teaching'];

export function ArtifactsTabs() {
  const { t } = useI18n();
  const [tab, setTab] = useState<TabKey>('opensource');
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resumeOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!resumeRef.current?.contains(e.target as Node)) setResumeOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setResumeOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [resumeOpen]);

  return (
    <div className="artifacts">
      <div className="artifacts-tabs">
        <div className="artifacts-tab-row">
          {/* Résumé is a dropdown, not a tab */}
          <div className="resume-wrap" ref={resumeRef}>
            <button
              className={`artifacts-tab is-dropdown ${resumeOpen ? 'is-open' : ''}`}
              onClick={() => setResumeOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={resumeOpen}
            >
              {t('tab.resume')}
              <span className="chev" aria-hidden="true">
                ▾
              </span>
            </button>
            <AnimatePresence>
              {resumeOpen && (
                <motion.ul
                  className="resume-menu"
                  role="menu"
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                >
                  {resumeFormats.map((r) => (
                    <li key={r.label} className="resume-item" role="none">
                      <a
                        role="menuitem"
                        href={r.url}
                        target={r.external ? '_blank' : undefined}
                        rel={r.external ? 'noopener noreferrer' : undefined}
                        onClick={() => setResumeOpen(false)}
                      >
                        <span className="r-label">{r.label}</span>
                        <span className="r-desc">{r.description}</span>
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Real tabs */}
          {TABS.map((k) => (
            <button
              key={k}
              className={`artifacts-tab ${tab === k ? 'active' : ''}`}
              onClick={() => setTab(k)}
            >
              {t(`tab.${k}` as const)}
            </button>
          ))}
        </div>
      </div>

      <div className="artifacts-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
          >
            {tab === 'opensource' && (
              <div>
                <GitHubFeed limit={6} />
              </div>
            )}
            {tab === 'publications' && (
              <div className="eng-list">
                {publicationsList.map((p, i) => (
                  <article key={i} className="eng">
                    <span className="who">
                      {p.year}
                      {p.status && <> · {p.status}</>}
                    </span>
                    <span className="what">{p.title}</span>
                    <span className="why">
                      {p.authors}
                      <br />
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.85em' }}>
                        {p.venue}
                      </span>
                    </span>
                    {p.url && (
                      <a href={p.url} className="alink" target="_blank" rel="noopener noreferrer">
                        Read →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
            {tab === 'presentations' && (
              <div className="eng-list">
                {presentations.map((p, i) => (
                  <article key={i} className="eng">
                    <span className="who">
                      {p.year}
                      {p.audience && <> · {p.audience}</>}
                    </span>
                    <span className="what">{p.title}</span>
                    <span className="why">{p.venue}</span>
                    {p.url && (
                      <a href={p.url} className="alink" target="_blank" rel="noopener noreferrer">
                        Watch →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
            {tab === 'teaching' && (
              <div className="eng-list">
                {teaching.map((t, i) => (
                  <article key={i} className="eng">
                    <span className="who">
                      {t.year} · {t.format}
                    </span>
                    <span className="what">{t.title}</span>
                    <span className="why">
                      {t.venue}
                      {t.description && (
                        <>
                          <br />
                          {t.description}
                        </>
                      )}
                    </span>
                    {t.url && t.url !== '#' && (
                      <a href={t.url} className="alink" target="_blank" rel="noopener noreferrer">
                        Open →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
