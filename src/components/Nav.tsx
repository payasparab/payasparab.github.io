import { NavLink } from 'react-router-dom';
import { site } from '../data/site';
import { ThemeToggle } from './ThemeToggle';
// Language toggle temporarily disabled. Re-enable when translations are ready.
// import { LanguageToggle } from './LanguageToggle';
import { useCommandPalette } from './CommandPalette';
import { useI18n } from '../i18n/I18nProvider';

export function Nav() {
  const { open } = useCommandPalette();
  const { t } = useI18n();
  const isMac =
    typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  return (
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
      </div>
    </nav>
  );
}
