import { Link } from 'react-router-dom';
import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot">
        <div className="fm">
          {site.name}
          <span className="dot">.</span>
        </div>
        <div className="fl">
          <Link to="/">Home</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.socials
            .filter((s) => s.label !== 'Email')
            .map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          <span>© {new Date().getFullYear()} · Los Angeles</span>
        </div>
      </div>
    </footer>
  );
}
