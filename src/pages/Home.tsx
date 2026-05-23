import { Link } from 'react-router-dom';
import { useRef, type MouseEvent } from 'react';
import { Reveal } from '../components/Reveal';
import { InteractiveParabola } from '../components/home/InteractiveParabola';
import { GitHubFeed } from '../components/home/GitHubFeed';
import { site } from '../data/site';

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
    title: 'Consulting',
    body: "The client engagements, the services, and the tools I've shipped.",
  },
  {
    to: '/service',
    k: 'Civic',
    title: 'Public Service',
    body: 'The Business & Innovation Committee, policy research, constituent resources, and outreach.',
  },
  {
    to: '/blog',
    k: 'Writing',
    title: 'The Notebook',
    body: 'Notes on data systems, AI, consulting, quant, and tech in public policy.',
  },
];

const highlights: { n: string; t: string }[] = [
  {
    n: '150,000',
    t: 'properties scored by an automated tax-appeals system I built at <b>Mainstay</b> — $1.5M+ in projected savings.',
  },
  {
    n: '$20–30M',
    t: 'saved at <b>TikTok</b> by negotiating commerce-platform integrations (Shopify, BigCommerce, Ticketmaster, DoorDash).',
  },
  {
    n: '3–5h → 5m',
    t: "model-testing time after I rebuilt a hedge fund's ML library in three months as its first engineering hire.",
  },
  {
    n: '+10%',
    t: 'gross-margin improvement at a Series A startup from a payment-routing algorithm I designed.',
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
  return (
    <>
      <header className="home-hero">
        <div className="parabola-wrap reveal">
          <InteractiveParabola />
        </div>
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">{site.location}</span>
          </Reveal>
          <Reveal as="h1" className="title">
            Payas <em>Parab</em>
          </Reveal>
          <Reveal as="p" className="lede">
            Full-stack applied data scientist. I build data and AI systems end to end —
            pipelines, models, and the tools people actually use.
          </Reveal>
          <Reveal as="p" className="intro">
            I lead analytics engineering at <b>Proper Hospitality</b>, run data science at{' '}
            <b>Mainstay</b>, and consult through <b>Handy Point Group</b> — and I serve on the
            Downtown LA Neighborhood Council. Previously: monetization at <b>TikTok</b>, quant
            infrastructure at a <b>$400M hedge fund</b>, and TMT investment banking.
          </Reveal>
          <Reveal className="hero-foot">
            <Link to="/consulting" className="btn primary">
              Work with me <span>→</span>
            </Link>
            <a href={`mailto:${site.email}`} className="btn ghost">
              Get in touch
            </a>
          </Reveal>
        </div>
      </header>

      <section id="approach">
        <div className="wrap">
          <Reveal as="p" className="thesis-quote">
            Most of what I do comes down to one idea — <em>management science</em>: bringing
            mathematical, data-based sophistication to organizations that have run on instinct,
            and leaving them measurably better.
          </Reveal>
          <Reveal as="p" className="intro" style={{ maxWidth: '62ch' }}>
            The same rigor belongs in civic life, so public service runs alongside the work
            rather than after it — and it stays honest through learning in the open:{' '}
            <Link className="alink" to="/blog">
              writing
            </Link>
            ,{' '}
            <Link className="alink" to="/experience">
              research
            </Link>
            , and staying a student on purpose.
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Selected wins</h2>
            <p className="sec-sub">A handful of numbers worth pointing at.</p>
          </Reveal>
          <Reveal className="highlights" stagger>
            {highlights.map((h, i) => (
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
            <h2 className="sec-title">Where to go</h2>
            <p className="sec-sub">Pick a thread.</p>
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
            <h2 className="sec-title">Get in touch</h2>
            <p className="sec-sub">Everything's @payasparab.</p>
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
          <Reveal className="gh">
            <span className="label">Latest on GitHub</span>
            <GitHubFeed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
