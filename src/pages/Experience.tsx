import { Reveal } from '../components/Reveal';
import {
  activities,
  education,
  experiencePage,
  publications,
  roles,
  selectedResults,
  technicalSkills,
} from '../data/experience';

export function Experience() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">{experiencePage.label}</span>
          </Reveal>
          <Reveal as="h1" className="ph">
            {experiencePage.title}
          </Reveal>
          <Reveal as="p" className="ph-sub">
            {experiencePage.subtitle}
          </Reveal>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Technical skills</h2>
            <p className="sec-sub">The stack I reach for, by category.</p>
          </Reveal>
          <Reveal className="skills-grid" stagger>
            {technicalSkills.map((g) => (
              <article key={g.category} className="skill-card">
                <h4 className="skill-cat">{g.category}</h4>
                <div className="skill-items">
                  {g.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Selected results</h2>
            <p className="sec-sub">Specific outcomes from specific work.</p>
          </Reveal>
          <Reveal className="results-grid" stagger>
            {selectedResults.map((r, i) => (
              <div key={i} className="result-card">
                <div className="metric">{r.metric}</div>
                <div className="desc">{r.description}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="roles">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Roles</h2>
            <p className="sec-sub">Full-time and embedded, most recent first.</p>
          </Reveal>
          <div className="roles">
            {roles.map((r) => (
              <Reveal key={r.company} as="article" className="role">
                <div className="role-head">
                  <h3 className="co">
                    {r.company}
                    {r.sub && <span className="sub"> — {r.sub}</span>}
                  </h3>
                  <span className="yr">{r.dateRange}</span>
                </div>
                <div className="meta">{r.roleTitle}</div>
                <ul>
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="tagrow">
                  {r.tags.map((t) => (
                    <span key={t} className="role-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Education &amp; service</h2>
            <p className="sec-sub">Schools, fellowships, and where else my time goes.</p>
          </Reveal>
          <div
            className="results-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))' }}
          >
            {education.map((e, i) => (
              <Reveal key={i} className="result-card">
                <div className="metric" style={{ fontSize: '1.1rem' }}>
                  {e.institution}
                </div>
                <div className="desc">{e.details}</div>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-head" style={{ marginTop: 40 }}>
            <h3 className="sec-title" style={{ fontSize: '1.4rem' }}>
              Activities
            </h3>
          </Reveal>
          <div className="eng-list">
            {activities.map((a, i) => (
              <Reveal key={i} className="eng">
                <span className="who">{a.organization}</span>
                <span className="what">{a.role}</span>
                {a.details && <span className="why">{a.details}</span>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="publications">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Publications &amp; research</h2>
            <p className="sec-sub">Where the work overlaps with public questions.</p>
          </Reveal>
          <div className="results-grid">
            {publications.map((p, i) => (
              <Reveal key={i} className="result-card">
                <div className="metric" style={{ fontSize: '1.2rem' }}>
                  {p.year}
                </div>
                <div className="desc">
                  <b style={{ color: 'var(--ink)' }}>{p.title}</b>
                  <br />
                  {p.authors}
                  <br />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.85em' }}>
                    {p.venue}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
