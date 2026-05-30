import { useState } from 'react';
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

/** Company logo via Clearbit, falling back to a monogram when there's no
 *  domain or the image fails to load. */
function CompanyLogo({ company, domain }: { company: string; domain?: string }) {
  const [failed, setFailed] = useState(false);
  if (domain && !failed) {
    return (
      <span className="role-logo">
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }
  return (
    <span className="role-logo role-logo-mono" aria-hidden="true">
      {company.charAt(0)}
    </span>
  );
}

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
            <p className="sec-sub">Open a result for the story behind the number.</p>
          </Reveal>
          <Reveal className="result-drops" stagger>
            {selectedResults.map((r, i) => (
              <details key={i} className="result-drop">
                <summary className="result-summary">
                  <span className="rs-metric">{r.metric}</span>
                  <span className="rs-chev" aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <div className="result-body">{r.description}</div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="roles">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Roles</h2>
            <p className="sec-sub">Most recent first — open one for the detail.</p>
          </Reveal>
          <Reveal className="role-drops" stagger>
            {roles.map((r) => (
              <details key={r.company} className="role-drop">
                <summary className="role-summary">
                  <CompanyLogo company={r.company} domain={r.domain} />
                  <span className="rd-head">
                    <span className="rd-co">
                      {r.company}
                      {r.sub && <span className="rd-sub"> · {r.sub}</span>}
                    </span>
                    <span className="rd-title">{r.roleTitle}</span>
                  </span>
                  <span className="rd-when">{r.dateRange}</span>
                  <span className="rd-chev" aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <div className="role-body">
                  <p className="role-summary-text">{r.summary}</p>
                  <ul className="role-bullets">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="role-tags">
                    {r.tags.map((tag) => (
                      <span key={tag} className="role-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </Reveal>
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
          <Reveal className="sec-head sec-head-sm">
            <h2 className="sec-title sec-title-sm">Fun facts</h2>
            <p className="sec-sub">Pieces of the path so far.</p>
          </Reveal>
          <Reveal className="fun-compact" stagger>
            {funFacts.map((h, i) => (
              <div key={i} className="fun-item">
                <span className="fun-n">{h.n}</span>
                <span className="fun-t" dangerouslySetInnerHTML={{ __html: h.t }} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Education &amp; activities</h2>
            <p className="sec-sub">Schools, fellowships, and where else my time goes.</p>
          </Reveal>
          <div className="edu-cols">
            <div className="edu-col">
              <h3 className="edu-col-title">Education</h3>
              <div className="edu-list">
                {education.map((e, i) => (
                  <Reveal key={i} as="div" className="edu-row">
                    <span className="edu-inst">{e.institution}</span>
                    <span className="edu-det">{e.details}</span>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="edu-col">
              <h3 className="edu-col-title">Activities</h3>
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
          </div>
        </div>
      </section>
    </>
  );
}
