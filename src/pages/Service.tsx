import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import { constituentServices, councilOverview, news, resources } from '../data/service';

const dtlaPage = {
  label: 'Civic',
  title: 'Fix DTLA',
  subtitle:
    "I'm an elected Board Director on the Downtown LA Neighborhood Council and serve on its Business & Innovation Committee. This is the home for the council work, the organizations I serve with, policy research, constituent resources, and community outreach.",
};

export function Service() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">{dtlaPage.label}</span>
          </Reveal>
          <Reveal as="h1" className="ph">
            {dtlaPage.title}
          </Reveal>
          <Reveal as="p" className="ph-sub">
            {dtlaPage.subtitle}
          </Reveal>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{councilOverview.organization}</h2>
            <p className="sec-sub">Advisory body to the City of Los Angeles.</p>
          </Reveal>
          <Reveal as="p" className="ph-sub" style={{ maxWidth: '70ch', marginBottom: 18 }}>
            {councilOverview.description}
          </Reveal>
          <Reveal as="p" className="ph-sub" style={{ maxWidth: '70ch', marginBottom: 24 }}>
            {councilOverview.focus}
          </Reveal>
          <Reveal className="tags">
            {councilOverview.committees.map((c) => (
              <span key={c} className="tag">
                {c}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{withAmp('News & updates')}</h2>
            <p className="sec-sub">What I'm working on with the council, most recent first.</p>
          </Reveal>
          <Reveal className="news-list" stagger>
            {news.map((n, i) => (
              <article key={i} className="news-item">
                <span className="news-date">{n.date}</span>
                <div className="news-main">
                  <h4 className="news-title">{n.title}</h4>
                  <p className="news-body">{n.body}</p>
                  {n.link && (
                    <a
                      className="news-link"
                      href={n.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {n.link.text} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Constituent services</h2>
            <p className="sec-sub">How to reach me, raise a concern, or get connected.</p>
          </Reveal>
          <Reveal className="svc-grid" stagger>
            {constituentServices.map((s, i) => (
              <article key={i} className="svc-card">
                <span className="cat">{s.category}</span>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </article>
            ))}
          </Reveal>
          <Reveal className="sec-head" style={{ marginTop: 40, marginBottom: 20 }}>
            <h3 className="sec-title" style={{ fontSize: '1.3rem' }}>
              {withAmp('City & community resources')}
            </h3>
          </Reveal>
          <Reveal className="socials">
            {resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                className="clink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{r.text}</span>
                <span className="arr">↗</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
