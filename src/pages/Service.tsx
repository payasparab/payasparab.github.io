import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import { PageNav } from '../components/PageNav';
import {
  councilOverview,
  initiatives,
  policyPositions,
} from '../data/service';

const NAV_SECTIONS = [
  { id: 'news', label: 'News' },
  { id: 'positions', label: 'Positions' },
  { id: 'links', label: 'Links' },
];

const dtlaPage = {
  label: 'Civic',
  title: 'Fix DTLA',
  subtitle:
    "I'm an elected Board Director on the Downtown LA Neighborhood Council, where I represent business owners in the South Park neighborhood. I serve as Treasurer and Executive Committee member, Chair of Budget & Finance, and founder and Chair of the Business & Innovation Committee. I'm also a Budget Advocate.",
};

const allLinks = [
  { text: 'DLANC calendar & agendas', url: 'https://dlanc.com/calendar/' },
  { text: 'DLANC website', url: 'https://dlanc.com/' },
  { text: 'Neighborhood Purpose Grants', url: 'https://dlanc.com/budget/' },
  { text: 'Contact DLANC', url: 'https://dlanc.com/contact/' },
  { text: 'MyLA311: report an issue', url: 'http://myla311.lacity.org/' },
  { text: 'Neighborhood Info LA', url: 'https://neighborhoodinfo.lacity.gov/' },
  { text: 'Social Services & Resource Map', url: 'https://dlanc.com/resource-map/' },
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

      <PageNav sections={NAV_SECTIONS} />

      <section>
        <div className="wrap">
          <Reveal as="p" className="intro" style={{ maxWidth: '70ch' }}>
            {councilOverview.description}
          </Reveal>
        </div>
      </section>

      <section id="news">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">News &amp; updates</h2>
            <p className="sec-sub">Updates and announcements coming soon.</p>
          </Reveal>
          <Reveal>
            <p className="embed-coming-soon">Coming soon.</p>
          </Reveal>
        </div>
      </section>

      <section id="positions">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Initiatives</h2>
            <p className="sec-sub">
              What I'm actively moving on the council.
            </p>
          </Reveal>
          <Reveal className="svc-grid svc-grid--2col" stagger>
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

      <section id="links">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Events, announcements &amp; resources</h2>
            <p className="sec-sub">
              DLANC calendar, city services, and community resources. All board and committee
              meetings are open to the public.
            </p>
          </Reveal>
          <Reveal className="socials">
            {allLinks.map((l) => (
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
    </>
  );
}
