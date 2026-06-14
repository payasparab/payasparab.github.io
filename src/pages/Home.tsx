import { Link } from 'react-router-dom';
import { useRef, type MouseEvent } from 'react';
import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import { InteractiveParabola } from '../components/home/InteractiveParabola';
import { HeroSocialLinks } from '../components/home/FeedDropdowns';
import { ContactForm } from '../components/home/ContactForm';
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
    body: 'Learn more about my frenetic (albeit interesting) career.',
  },
  {
    to: '/consulting',
    k: 'Independent',
    title: 'Consulting & Ventures',
    body: 'The receipts: consulting projects and demos.',
  },
  {
    to: '/longdtla',
    k: 'Civic',
    title: 'Fix DTLA',
    body: 'Work with me on fixing DTLA.',
  },
  {
    to: '/blog',
    k: 'Writing',
    title: 'Blog',
    body: 'Learn how I think, and who I am.',
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
      <h3>{withAmp(card.title)}</h3>
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
          <Reveal className="hero-top">
            <img
              className="hero-avatar"
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt="Payas Parab"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="ey">
              <span className="ln" />
              <span className="label">{t('hero.eyebrow')}</span>
            </span>
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
          <Reveal>
            <HeroSocialLinks />
            <p className="hero-feeds-hint">Hover a link for the live feed.</p>
            <p className="hero-location">Los Angeles, California</p>
          </Reveal>
          <Reveal as="p" className="hero-email">
            <a href={`mailto:${site.email}`}>{site.email}</a>
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
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className="socials" stagger>
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
