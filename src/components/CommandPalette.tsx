import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../data/site';
import { posts } from '../data/posts';
import { useTheme } from '../theme/ThemeProvider';
import { useI18n } from '../i18n/I18nProvider';

type CommandKind = 'nav' | 'post' | 'action' | 'social';

type Command = {
  id: string;
  kind: CommandKind;
  icon: string;
  title: string;
  sub?: string;
  keywords?: string;
  run: () => void;
};

type Ctx = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const C = createContext<Ctx | null>(null);

export function useCommandPalette(): Ctx {
  const c = useContext(C);
  if (!c) throw new Error('useCommandPalette must be used inside provider');
  return c;
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { toggle: toggleTheme, theme } = useTheme();
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [q, setQ] = useState('');
  const [cursor, setCursor] = useState(0);

  const open = useCallback(() => {
    setQ('');
    setCursor(0);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggleOpen = useCallback(() => setIsOpen((v) => !v), []);

  // Cmd/Ctrl+K + Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleOpen]);

  // Build the command list
  const commands: Command[] = useMemo(() => {
    const out: Command[] = [];

    site.nav.forEach((n) => {
      const label = t(`nav.${n.key}` as const);
      out.push({
        id: `nav:${n.to}`,
        kind: 'nav',
        icon: '→',
        title: label,
        sub: `Go to ${n.to}`,
        keywords: `${label} ${n.to} ${n.key}`,
        run: () => navigate(n.to),
      });
    });

    out.push({
      id: 'action:theme',
      kind: 'action',
      icon: theme === 'light' ? '☾' : '☀',
      title: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
      sub: 'Theme',
      keywords: 'theme dark light toggle mode',
      run: () => toggleTheme(),
    });

    out.push({
      id: 'action:copy-email',
      kind: 'action',
      icon: '✉',
      title: `Copy email: ${site.email}`,
      sub: 'Contact',
      keywords: 'email contact copy',
      run: () => {
        navigator.clipboard?.writeText(site.email).catch(() => {});
      },
    });

    site.socials.forEach((s) => {
      out.push({
        id: `social:${s.label}`,
        kind: 'social',
        icon: '↗',
        title: s.label,
        sub: s.href.replace(/^https?:\/\//, ''),
        keywords: `${s.label} social link`,
        run: () => window.open(s.href, '_blank', 'noopener,noreferrer'),
      });
    });

    posts.forEach((p) => {
      out.push({
        id: `post:${p.slug}`,
        kind: 'post',
        icon: '¶',
        title: p.title,
        sub: `${p.date} · ${p.category}`,
        keywords: `${p.title} ${p.excerpt} ${p.tags.join(' ')} ${p.category}`,
        run: () => navigate(`/blog/${p.slug}`),
      });
    });

    return out;
  }, [navigate, theme, toggleTheme, t]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return commands;
    return commands.filter((c) =>
      (c.title + ' ' + (c.sub ?? '') + ' ' + (c.keywords ?? ''))
        .toLowerCase()
        .includes(needle)
    );
  }, [commands, q]);

  // Reset cursor whenever filter changes
  useEffect(() => setCursor(0), [q, isOpen]);

  const grouped = useMemo(() => {
    const groups: Record<string, Command[]> = {};
    filtered.forEach((c) => {
      const key =
        c.kind === 'nav'
          ? 'Pages'
          : c.kind === 'post'
            ? 'Writing'
            : c.kind === 'social'
              ? 'Elsewhere'
              : 'Actions';
      (groups[key] ??= []).push(c);
    });
    return groups;
  }, [filtered]);

  const flatList = filtered;

  const runCursor = useCallback(
    (i: number) => {
      const cmd = flatList[i];
      if (cmd) {
        cmd.run();
        setIsOpen(false);
      }
    },
    [flatList]
  );

  // List-level keyboard handling (input has its own onKeyDown too; both work)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, flatList.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        runCursor(cursor);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, flatList.length, cursor, runCursor]);

  const ctxValue = useMemo<Ctx>(
    () => ({ open, close, toggle: toggleOpen }),
    [open, close, toggleOpen]
  );

  // Compute the absolute index of each cmd so cursor highlighting works under grouping
  let runningIndex = -1;

  return (
    <C.Provider value={ctxValue}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cmdk-backdrop"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="cmdk"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
              role="dialog"
              aria-label="Command palette"
            >
              <div className="cmdk-input-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
                <input
                  className="cmdk-input"
                  placeholder="Search pages, writing, actions…"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="cmdk-list">
                {flatList.length === 0 ? (
                  <div className="cmdk-empty">No matches for "{q}"</div>
                ) : (
                  Object.entries(grouped).map(([groupName, items]) => (
                    <div key={groupName}>
                      <div className="cmdk-group">{groupName}</div>
                      {items.map((cmd) => {
                        runningIndex += 1;
                        const idx = runningIndex;
                        const active = idx === cursor;
                        return (
                          <div
                            key={cmd.id}
                            className={`cmdk-item ${active ? 'active' : ''}`}
                            onMouseEnter={() => setCursor(idx)}
                            onClick={() => runCursor(idx)}
                          >
                            <span className="ic">{cmd.icon}</span>
                            <span className="title">{cmd.title}</span>
                            {cmd.sub && <span className="sub">{cmd.sub}</span>}
                          </div>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>
              <div className="cmdk-foot">
                <span>
                  <kbd>↑</kbd>
                  <kbd>↓</kbd> navigate · <kbd>↵</kbd> open · <kbd>esc</kbd> close
                </span>
                <span>{flatList.length} results</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </C.Provider>
  );
}
