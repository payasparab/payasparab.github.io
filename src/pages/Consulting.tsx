import { useMemo, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import { PageNav } from '../components/PageNav';
import {
  caseStudies,
  consultingPage,
  engagements,
  services,
  shippedTools,
  type Service,
  type ShippedTool,
  type ServiceCategory,
} from '../data/consulting';

type Filter = 'all' | 'live' | 'video' | 'project';
type ServiceGroup = 'All' | 'Strategy' | 'Engineering' | 'Product';

const SERVICE_GROUP_MAP: Record<ServiceCategory, ServiceGroup> = {
  STRATEGY: 'Strategy',
  FINANCE: 'Strategy',
  VENTURE: 'Strategy',
  EXPERT: 'Strategy',
  SYSTEMS: 'Engineering',
  BUILD: 'Engineering',
  DATA: 'Engineering',
  PRODUCT: 'Product',
};

const NAV_SECTIONS = [
  { id: 'services', label: 'Services' },
  { id: 'engagements', label: 'Engagements' },
  { id: 'shipped', label: 'Work Samples' },
];

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
  const [open, setOpen] = useState(false);
  return (
    <article className="svc-card svc-card-expandable">
      <span className="cat">{s.category}</span>
      <h4>{withAmp(s.title)}</h4>
      <p>{s.description}</p>
      {s.details && (
        <>
          <button
            type="button"
            className="svc-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? 'Less ▴' : 'More ▾'}
          </button>
          {open && <p className="svc-details">{s.details}</p>}
        </>
      )}
    </article>
  );
}

export function Consulting() {
  const [filter, setFilter] = useState<Filter>('all');
  const [svcGroup, setSvcGroup] = useState<ServiceGroup>('All');
  const [engCat, setEngCat] = useState<ServiceCategory | 'All'>('All');

  const filteredTools: ShippedTool[] = useMemo(() => {
    if (filter === 'all') return shippedTools;
    return shippedTools.filter((t) => t.type === filter);
  }, [filter]);

  const filteredServices = useMemo(() => {
    if (svcGroup === 'All') return services;
    return services.filter((s) => SERVICE_GROUP_MAP[s.category] === svcGroup);
  }, [svcGroup]);

  const engCategories = useMemo(
    () => Array.from(new Set(engagements.map((e) => e.category))).sort(),
    []
  );

  const filteredEngagements = useMemo(() => {
    if (engCat === 'All') return engagements;
    return engagements.filter((e) => e.category === engCat);
  }, [engCat]);

  const svcGroups: ServiceGroup[] = ['All', 'Strategy', 'Engineering', 'Product'];

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

      <PageNav sections={NAV_SECTIONS} />

      <section id="services">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">How I help</h2>
          </Reveal>
          <Reveal className="tags" style={{ marginBottom: 22 }}>
            {svcGroups.map((g) => (
              <button
                key={g}
                className={`tag ${svcGroup === g ? 'active' : ''}`}
                onClick={() => setSvcGroup(g)}
              >
                {g}
              </button>
            ))}
          </Reveal>
          <Reveal className="svc-grid" stagger>
            {filteredServices.map((s) => (
              <ServiceCard key={s.category} s={s} />
            ))}
          </Reveal>
        </div>
      </section>

      <section id="engagements">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Selected engagements</h2>
            <p className="sec-sub">
              Specific work for specific clients, tagged by category. Written-up case studies link
              out.
            </p>
          </Reveal>
          <Reveal className="tags" style={{ marginBottom: 22 }}>
            {(['All', ...engCategories] as (ServiceCategory | 'All')[]).map((c) => (
              <button
                key={c}
                className={`tag ${engCat === c ? 'active' : ''}`}
                onClick={() => setEngCat(c)}
              >
                {c}
              </button>
            ))}
          </Reveal>
          <Reveal className="eng-list" stagger>
            {filteredEngagements.map((e, i) => (
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

      <section id="shipped">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Things I've shipped</h2>
            <p className="sec-sub">
              Live tools, demos, open-source projects, and decks. Most built as fast, low-cost
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
