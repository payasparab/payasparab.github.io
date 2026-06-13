import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { site } from '../data/site';
import { ThemeToggle } from './ThemeToggle';
import { useCommandPalette } from './CommandPalette';
import { useI18n } from '../i18n/I18nProvider';

export function Nav() {
  const { open } = useCommandPalette();
  const { t } = useI18n();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMac =
    typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="site-nav">
        <NavLink to="/" className="brand" end>
          <span className="dot" />
          {site.brand}
        </NavLink>
        <div className="navlinks">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t(`nav.${item.key}` as const)}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="kbd"
            onClick={open}
            aria-label={t('nav.search')}
            title={t('nav.search')}
          >
            <span>{t('nav.search')}</span>
            <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
            <kbd>K</kbd>
          </button>
          {/* <LanguageToggle /> */}
          <ThemeToggle />
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {site.nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {t(`nav.${item.key}` as const)}
          </NavLink>
        ))}
      </div>
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
