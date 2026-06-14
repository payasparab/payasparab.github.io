import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import {
  committeeAssignments,
  constituentServices,
  councilOverview,
  initiatives,
  policyPositions,
  resources,
} from '../data/service';

const dtlaPage = {
  label: 'Civic',
  title: 'Fix DTLA',
  subtitle:
    "I'm an elected Board Director on the Downtown LA Neighborhood Council, where I represent business owners in the South Park neighborhood. I serve as Treasurer and Executive Committee member, Chair of Budget & Finance, and founder and Chair of the Business & Innovation Committee. I'm also a Budget Advocate.",
};

const dlancLinks = [
  { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  { text: 'DLANC website', url: 'https://dlanc.com/' },
  { text: 'Neighborhood Purpose Grants', url: 'https://dlanc.com/budget/' },
  { text: 'Contact DLANC', url: 'https://dlanc.com/contact/' },
];

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
          <Reveal as="p" className="ph-sub" style={{ marginTop: 12 }}>
            <a href="mailto:payas.parab@dlanc.com" style={{ fontWeight: 600 }}>
              payas.parab@dlanc.com
            </a>{' '}
            — I reply to every constituent email within a week.
          </Reveal>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{councilOverview.organization}</h2>
            <p className="sec-sub">Advisory body to the City of Los Angeles.</p>
          </Reveal>
          <Reveal as="p" className="ph-sub" style={{ maxWidth: '70ch', marginBottom: 24 }}>
            {councilOverview.description}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Committee assignments</h2>
            <p className="sec-sub">Where my seat actually sits on the board.</p>
          </Reveal>
          <Reveal className="svc-grid" stagger>
            {committeeAssignments.map((c) => (
              <article key={c.body} className="svc-card">
                <span className="cat">{c.role}</span>
                <h4>{c.body}</h4>
                <p>{c.description}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{withAmp('Positions & initiatives')}</h2>
            <p className="sec-sub">
              Where I stand and what I'm actively moving on the council.
            </p>
          </Reveal>
          <Reveal className="svc-grid" stagger>
            {policyPositions.map((p) => (
              <article key={p.title} className="svc-card">
                <span className="cat">{p.area}</span>
                <h4>{withAmp(p.title)}</h4>
                <p>{p.position}</p>
              </article>
            ))}
            {initiatives.map((i) => (
              <article key={i.title} className="svc-card">
                <span className="cat">{i.category}</span>
                <h4>{withAmp(i.title)}</h4>
                <p>{i.description}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{withAmp('Events & announcements')}</h2>
            <p className="sec-sub">
              Check the DLANC calendar for upcoming meeting dates, agendas, and community
              announcements. All board and committee meetings are open to the public.
            </p>
          </Reveal>
          <Reveal className="socials">
            {dlancLinks.map((l) => (
              <a
                key={l.url}
                href={l.url}
                className="clink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{l.text}</span>
                <span className="arr">↗</span>
              </a>
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
