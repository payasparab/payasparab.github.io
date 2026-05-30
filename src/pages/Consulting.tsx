import { useMemo, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import {
  caseStudies,
  consultingPage,
  engagements,
  services,
  shippedTools,
  type Service,
  type ShippedTool,
} from '../data/consulting';

type Filter = 'all' | 'live' | 'video' | 'project';

const HPG_URL = 'https://www.handypointgroup.com/';

function loomEmbedUrl(url: string): string | null {
  const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  return match ? `https://www.loom.com/embed/${match[1]}` : null;
}

function ShippedToolCard({ t }: { t: ShippedTool }) {
  const embed = loomEmbedUrl(t.url);
  const [open, setOpen] = useState(false);

  if (embed) {
    return (
      <div className="tool tool-embed">
        <span className="badge">{t.badge}</span>
        <span className="tname">{t.title}</span>
        <span className="tdesc">{t.description}</span>
        <button
          type="button"
          className="svc-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'Hide video' : 'Watch video'}
          <span className="svc-tchev" aria-hidden="true">
            ▾
          </span>
        </button>
        {open && (
          <div className="loom-embed">
            <iframe
              src={embed}
              title={t.title}
              frameBorder={0}
              allow="fullscreen"
              allowFullScreen
            />
          </div>
        )}
        <a
          href={t.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-openlink"
        >
          Open on Loom ↗
        </a>
      </div>
    );
  }

  return (
    <a
      href={t.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool"
      style={{ height: '100%' }}
    >
      <span className="badge">{t.badge}</span>
      <span className="tname">{t.title}</span>
      <span className="tdesc">{t.description}</span>
    </a>
  );
}

// Inline label for Handy Point Group with a hover card explaining what it is.
function HpgLabel({ suffix }: { suffix?: string }) {
  return (
    <span className="hpg-wrap">
      Handy Point Group
      <span className="hpg-info" tabIndex={0} aria-label="About Handy Point Group">
        ⓘ
        <span className="hpg-pop" role="tooltip">
          Analytics consultancy I founded with high-school friends.{' '}
          <a href={HPG_URL} target="_blank" rel="noopener noreferrer">
            handypointgroup.com →
          </a>
        </span>
      </span>
      {suffix}
    </span>
  );
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="svc-card">
      <span className="cat">{s.category}</span>
      <h4>{withAmp(s.title)}</h4>
      <p>{s.description}</p>
    </article>
  );
}

export function Consulting() {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTools: ShippedTool[] = useMemo(() => {
    if (filter === 'all') return shippedTools;
    return shippedTools.filter((t) => t.type === filter);
  }, [filter]);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'live', label: 'Live apps' },
    { key: 'video', label: 'Demos' },
    { key: 'project', label: 'Open source libraries' },
  ];

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">{consultingPage.label}</span>
          </Reveal>
          <Reveal as="h1" className="ph">
            {consultingPage.title}
          </Reveal>
          {consultingPage.subtitle && (
            <Reveal as="p" className="ph-sub">
              {consultingPage.subtitle}
            </Reveal>
          )}
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">How I help</h2>
          </Reveal>
          <Reveal className="svc-grid" stagger>
            {services.map((s) => (
              <ServiceCard key={s.category} s={s} />
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Selected engagements</h2>
            <p className="sec-sub">
              Specific work for specific clients, tagged by category — written-up case studies link
              out.
            </p>
          </Reveal>
          <Reveal className="eng-list" stagger>
            {engagements.map((e, i) => (
              <article key={`eng-${i}`} className="eng">
                <span className="eng-cat">{e.category}</span>
                <span className="who">
                  {e.client}
                  {e.scale && <> · {e.scale}</>}
                </span>
                <span className="what">{withAmp(e.title)}</span>
                <span className="why">{e.description}</span>
                {e.caseStudyUrl && (
                  <a
                    className="eng-link"
                    href={e.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read case study →
                  </a>
                )}
              </article>
            ))}
            {caseStudies.map((c) => (
              <article key={c.url} className="eng eng-case">
                <span className="eng-cat">{c.category}</span>
                <span className="who">
                  {c.source === 'Handy Point Group' ? (
                    <HpgLabel suffix=" · case study" />
                  ) : (
                    `${c.source} · case study`
                  )}
                </span>
                <span className="what">{withAmp(c.title)}</span>
                <span className="why">{c.description}</span>
                <a className="eng-link" href={c.url} target="_blank" rel="noopener noreferrer">
                  Read case study →
                </a>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Things I've shipped</h2>
            <p className="sec-sub">
              Live tools, demos, open-source projects, and decks — most built as fast, low-cost
              MVPs.
            </p>
          </Reveal>
          <Reveal className="tags" style={{ marginBottom: 22 }}>
            {filters.map((f) => (
              <button
                key={f.key}
                className={`tag ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                <span className="ct">
                  {f.key === 'all'
                    ? shippedTools.length
                    : shippedTools.filter((t) => t.type === f.key).length}
                </span>
              </button>
            ))}
          </Reveal>
          <div className="tools-grid">
            {filteredTools.map((t) => (
              <Reveal key={t.url}>
                <ShippedToolCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
