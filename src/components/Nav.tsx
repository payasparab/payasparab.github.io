import { NavLink } from 'react-router-dom';
import { site } from '../data/site';
import { ThemeToggle } from './ThemeToggle';
import { useCommandPalette } from './CommandPalette';

export function Nav() {
  const { open } = useCommandPalette();
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
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="nav-actions">
        <button
          className="kbd"
          onClick={open}
          aria-label="Open command palette"
          title="Open command palette"
        >
          <span>Search</span>
          <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
          <kbd>K</kbd>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
