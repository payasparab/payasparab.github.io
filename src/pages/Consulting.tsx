import { useMemo, useState } from 'react';
import { Reveal } from '../components/Reveal';
import {
  consultingPage,
  engagements,
  services,
  shippedTools,
  type ShippedTool,
} from '../data/consulting';

type Filter = 'all' | 'live' | 'video';

export function Consulting() {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTools: ShippedTool[] = useMemo(() => {
    if (filter === 'all') return shippedTools;
    return shippedTools.filter((t) => t.type === filter);
  }, [filter]);

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
          <Reveal as="p" className="ph-sub">
            {consultingPage.subtitle}
          </Reveal>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Selected engagements</h2>
            <p className="sec-sub">Specific work for specific clients.</p>
          </Reveal>
          <Reveal className="eng-list" stagger>
            {engagements.map((e, i) => (
              <article key={i} className="eng">
                <span className="who">
                  {e.client}
                  {e.scale && <> · {e.scale}</>}
                </span>
                <span className="what">{e.title}</span>
                <span className="why">{e.description}</span>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">How I help</h2>
            <p className="sec-sub">Where independents do the most useful work.</p>
          </Reveal>
          <Reveal className="svc-grid" stagger>
            {services.map((s, i) => (
              <article key={i} className="svc-card">
                <span className="cat">{s.category}</span>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Things I've shipped</h2>
            <p className="sec-sub">Live tools and walkthroughs — most built as fast, low-cost MVPs.</p>
          </Reveal>
          <Reveal className="tags" style={{ marginBottom: 22 }}>
            {(['all', 'live', 'video'] as const).map((f) => (
              <button
                key={f}
                className={`tag ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'live' ? 'Live apps' : 'Video demos'}
                <span className="ct">
                  {f === 'all'
                    ? shippedTools.length
                    : shippedTools.filter((t) => t.type === f).length}
                </span>
              </button>
            ))}
          </Reveal>
          <div className="tools-grid">
            {filteredTools.map((t) => (
              <Reveal key={t.url}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
