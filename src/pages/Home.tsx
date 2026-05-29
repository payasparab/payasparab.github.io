import { Link } from 'react-router-dom';
import { useRef, type MouseEvent } from 'react';
import { Reveal } from '../components/Reveal';
import { InteractiveParabola } from '../components/home/InteractiveParabola';
import { site } from '../data/site';
import { useI18n } from '../i18n/I18nProvider';

type NavCard = {
  to: string;
  k: string;
  title: string;
  body: string;
};

const cards: NavCard[] = [
  {
    to: '/experience',
    k: 'Career',
    title: 'Experience',
    body: 'Roles, results, skills, work artifacts, teaching, and fun facts — the full picture.',
  },
  {
    to: '/consulting',
    k: 'Independent',
    title: 'Consulting & Ventures',
    body: "Client engagements, sub-brands like Handy Point Group, services, and tools I've shipped.",
  },
  {
    to: '/dlanc',
    k: 'Civic',
    title: 'DTLA Council',
    body: 'Business & Innovation Committee, organizations, policy research, and constituent resources.',
  },
  {
    to: '/blog',
    k: 'Writing',
    title: 'Blog',
    body: 'Notes, reading, and recent posts from X and Instagram.',
  },
];

function NavCardLink({ card }: { card: NavCard }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  return (
    <Link ref={ref} to={card.to} className="navcard" onMouseMove={onMove}>
      <span className="nc-k">{card.k}</span>
      <h3>{card.title}</h3>
      <p>{card.body}</p>
      <span className="go">View →</span>
    </Link>
  );
}

export function Home() {
  const { t } = useI18n();

  return (
    <>
      <header className="home-hero">
        <div className="parabola-wrap reveal">
          <InteractiveParabola />
        </div>
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">{t('hero.eyebrow')}</span>
          </Reveal>
          <Reveal as="h1" className="title">
            Payas <em>Parab</em>
          </Reveal>
          <Reveal as="p" className="lede">
            {t('hero.lede')}
          </Reveal>
          <Reveal as="p" className="intro">
            <span dangerouslySetInnerHTML={{ __html: t('hero.intro') }} />
          </Reveal>
          <Reveal className="hero-foot">
            <Link to="/consulting" className="btn primary">
              {t('hero.cta.primary')} <span>→</span>
            </Link>
            <a href={`mailto:${site.email}`} className="btn ghost">
              {t('hero.cta.secondary')}
            </a>
          </Reveal>
          <Reveal className="hero-socials" stagger>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="hero-social"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <span className="hsi" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="hsl">{s.label}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </header>

      <section id="approach">
        <div className="wrap">
          <Reveal as="p" className="thesis-quote">
            <span dangerouslySetInnerHTML={{ __html: t('sec.approach.quote') }} />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.where.title')}</h2>
            <p className="sec-sub">{t('sec.where.sub')}</p>
          </Reveal>
          <Reveal className="navcards" stagger>
            {cards.map((c) => (
              <NavCardLink key={c.to} card={c} />
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.contact.title')}</h2>
            <p className="sec-sub">{t('sec.contact.sub')}</p>
          </Reveal>
          <Reveal className="socials">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="clink"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <span>{s.label}</span>
                <span className="arr">↗</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
