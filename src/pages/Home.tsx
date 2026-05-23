import { Link } from 'react-router-dom';
import { useRef, type MouseEvent } from 'react';
import { Reveal } from '../components/Reveal';
import { InteractiveParabola } from '../components/home/InteractiveParabola';
import { ArtifactsTabs } from '../components/home/ArtifactsTabs';
import { Bookshelf } from '../components/home/Bookshelf';
import { Teaching } from '../components/home/Teaching';
import { EmbeddedSocials } from '../components/home/EmbeddedSocials';
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
    body: 'Full-time and embedded roles across data science, product, quant, and finance — with the specifics.',
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
    body: 'Business & Innovation Committee, policy research, constituent resources, and outreach.',
  },
  {
    to: '/blog',
    k: 'Writing',
    title: 'Blog',
    body: 'Notes on data systems, AI, consulting, quant, and tech in public policy.',
  },
];

// Fun facts pulled from the resume — the first is a placeholder for the
// billionaire-roommate story; fill it in when you have a moment.
const funFacts: { n: string; t: string }[] = [
  {
    n: '[ edit me ]',
    t: '<b>Roommates with a future billionaire</b> — [ add the story: who, when, what they went on to build, your role in the transition ].',
  },
  {
    n: 'Employee #1',
    t: '<b>First non-founder hire at a $400M hedge fund.</b> Rebuilt the ML library in three months — model-testing dropped from 3–5 hours to 5 minutes.',
  },
  {
    n: '$20–30M',
    t: '<b>Negotiated commerce-platform integrations at TikTok</b> — Shopify, BigCommerce, Ticketmaster, DoorDash.',
  },
  {
    n: '150,000',
    t: '<b>Properties scored</b> by an automated tax-appeals system at Mainstay — $1.5M+ in projected client savings.',
  },
  {
    n: 'Triple major',
    t: '<b>UC Berkeley</b> — Business, Applied Math / CS, and Economics.',
  },
  {
    n: '4 languages',
    t: 'English · Marathi · Spanish · Mandarin — and yes, the language toggle in the nav actually works.',
  },
  {
    n: 'Capitol Hill',
    t: '<b>Helped prep TikTok\'s congressional testimony</b> on teen-ad safety, EU advertiser transparency, and data-privacy compliance.',
  },
  {
    n: 'Homeboy',
    t: '<b>Mentor at Firme Coding / Homeboy Industries</b> — teaching aspiring technologists through the program.',
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
          <Reveal
            as="p"
            className="intro"
            // intro contains <b> tags from the dict
          >
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
          <Reveal
            as="p"
            className="thesis-quote"
          >
            <span dangerouslySetInnerHTML={{ __html: t('sec.approach') }} />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.fun.title')}</h2>
            <p className="sec-sub">{t('sec.fun.sub')}</p>
          </Reveal>
          <Reveal className="highlights" stagger>
            {funFacts.map((h, i) => (
              <div key={i} className="hl-item">
                <div className="n">{h.n}</div>
                <div className="t" dangerouslySetInnerHTML={{ __html: h.t }} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.artifacts.title')}</h2>
            <p className="sec-sub">{t('sec.artifacts.sub')}</p>
          </Reveal>
          <Reveal>
            <ArtifactsTabs />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.bookshelf.title')}</h2>
            <p className="sec-sub">{t('sec.bookshelf.sub')}</p>
          </Reveal>
          <Bookshelf />
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.teaching.title')}</h2>
            <p className="sec-sub">{t('sec.teaching.sub')}</p>
          </Reveal>
          <Teaching />
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

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{t('sec.embed.title')}</h2>
            <p className="sec-sub">{t('sec.embed.sub')}</p>
          </Reveal>
          <EmbeddedSocials />
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
