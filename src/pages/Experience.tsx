import { Reveal } from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';
import { site } from '../data/site';
import {
  activities,
  capabilities,
  education,
  experiencePage,
  funFacts,
  roles,
  selectedResults,
} from '../data/experience';

export function Experience() {
  const { t } = useI18n();

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
          <Reveal as="p" className="intro" style={{ maxWidth: '70ch' }}>
            <span dangerouslySetInnerHTML={{ __html: t('sec.approach.detail') }} />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Fun facts</h2>
            <p className="sec-sub">Pieces of the path so far.</p>
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
            <h2 className="sec-title">What I'm good at</h2>
            <p className="sec-sub">Broader strokes — full tooling list on request.</p>
          </Reveal>
          <Reveal className="cap-grid" stagger>
            {capabilities.map((c) => (
              <article key={c.title} className="cap-card">
                <h4 className="cap-title">{c.title}</h4>
                <p className="cap-desc">{c.description}</p>
                <p className="cap-stack">{c.stack}</p>
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
            <p className="sec-sub">A one-line view, most recent first.</p>
          </Reveal>
          <div className="roles-list">
            {roles.map((r) => (
              <Reveal key={r.company} as="article" className="role-row">
                <span className="role-when">{r.dateRange}</span>
                <div className="role-main">
                  <div className="role-line">
                    <span className="role-co">
                      {r.company}
                      {r.sub && <span className="role-sub"> · {r.sub}</span>}
                    </span>
                    <span className="role-title">{r.roleTitle}</span>
                  </div>
                  <p className="role-summary">{r.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="resume-cta">
            <div className="cta-card">
              <div className="cta-text">
                <h3>Want the full résumé?</h3>
                <p>
                  Detailed bullets, metrics, tooling lists, and references aren't on this page on
                  purpose. Email me with a sentence about what you're looking at and I'll send the
                  PDF — usually same day.
                </p>
              </div>
              <a
                className="btn primary"
                href={`mailto:${site.email}?subject=Request%20for%20full%20r%C3%A9sum%C3%A9`}
              >
                Request full résumé <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Education &amp; activities</h2>
            <p className="sec-sub">Schools, fellowships, and where else my time goes.</p>
          </Reveal>
          <div className="edu-list">
            {education.map((e, i) => (
              <Reveal key={i} as="div" className="edu-row">
                <span className="edu-inst">{e.institution}</span>
                <span className="edu-det">{e.details}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-head" style={{ marginTop: 36 }}>
            <h3 className="sec-title" style={{ fontSize: '1.2rem' }}>
              Activities
            </h3>
          </Reveal>
          <div className="edu-list">
            {activities.map((a, i) => (
              <Reveal key={i} as="div" className="edu-row">
                <span className="edu-inst">{a.organization}</span>
                <span className="edu-det">
                  {a.role}
                  {a.details && ` · ${a.details}`}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
