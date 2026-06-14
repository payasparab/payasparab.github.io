import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { withAmp } from '../components/Amp';
import { PageNav } from '../components/PageNav';
import { Bookshelf } from '../components/home/Bookshelf';
import { EmbeddedSocials } from '../components/home/EmbeddedSocials';
import { allTags, externalWriting, posts, talks, type Talk } from '../data/posts';

const ALL = 'All';

const NAV_SECTIONS = [
  { id: 'posts', label: 'Posts' },
  { id: 'research', label: 'Research' },
  { id: 'talks', label: 'Talks' },
  { id: 'bookshelf', label: 'Bookshelf' },
  { id: 'lately', label: 'Lately' },
];

// A presentation card that only loads the (heavy) embed once clicked.
function DeckCard({ t }: { t: Talk }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="deck">
      <div className="deck-frame">
        {loaded ? (
          <iframe
            src={t.embedUrl}
            title={t.title}
            loading="lazy"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="deck-poster" onClick={() => setLoaded(true)}>
            <span className="deck-play" aria-hidden="true">
              ▶
            </span>
            <span className="deck-poster-title">{t.title}</span>
            <span className="deck-poster-cta">Click to load presentation</span>
          </button>
        )}
      </div>
      <div className="deck-foot">
        <span className="deck-title">{t.title}</span>
        <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="deck-go">
          Open →
        </a>
      </div>
    </article>
  );
}

function fmt(d: string) {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

export function Blog() {
  const [q, setQ] = useState('');
  const [tag, setTag] = useState<string>(ALL);

  const tagCounts = useMemo(() => {
    const map: Record<string, number> = { [ALL]: posts.length };
    allTags.forEach((t) => {
      map[t] = posts.filter((p) => p.tags.includes(t)).length;
    });
    return map;
  }, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesTag = tag === ALL || p.tags.includes(tag);
      if (!matchesTag) return false;
      if (!needle) return true;
      const hay = `${p.title} ${p.excerpt} ${p.body} ${p.tags.join(' ')}`.toLowerCase();
      return hay.includes(needle);
    });
  }, [q, tag]);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">The Notebook</span>
          </Reveal>
          <Reveal as="h1" className="ph">
            Blog
          </Reveal>
          <Reveal as="p" className="ph-sub">
            A place to brain dump all of my various thoughts and ideas. No theme — essays, random thought pieces, ranging from data and technology to philosophy.
          </Reveal>
        </div>
      </header>

      <PageNav sections={NAV_SECTIONS} />

      <section id="posts" style={{ paddingTop: 32 }}>
        <div className="wrap">
          {posts.length === 0 ? (
            <Reveal className="blog-empty">
              <p className="be-title">Nothing published yet.</p>
              <p className="be-sub">
                Notes on data systems, AI, consulting, quant, and civic tech are on the way. In the
                meantime, see what I'm reading below or what's recent on X and Instagram.
              </p>
            </Reveal>
          ) : (
            <>
          <div className="blog-controls">
            <label className="search" htmlFor="blog-search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                id="blog-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search posts by title, body, tags…"
                autoComplete="off"
              />
            </label>
            <div className="tags">
              {[ALL, ...allTags].map((t) => (
                <button
                  key={t}
                  className={`tag ${tag === t ? 'active' : ''}`}
                  onClick={() => setTag(t)}
                >
                  {t}
                  <span className="ct">{tagCounts[t] ?? 0}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="count">
            {filtered.length} {filtered.length === 1 ? 'post' : 'posts'}
            {q && ` matching "${q}"`}
            {tag !== ALL && ` · tagged ${tag}`}
          </p>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                className="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No posts match your filters.
              </motion.div>
            ) : (
              filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link to={`/blog/${p.slug}`} className="post">
                    <div className="meta">
                      {fmt(p.date)}
                      <br />
                      {p.read}
                      <br />
                      {p.category}
                    </div>
                    <div>
                      <h2>{p.title}</h2>
                      <p className="ex">{p.excerpt}</p>
                      <div className="ptags">
                        {p.tags.map((t) => (
                          <span key={t} className="ptag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </AnimatePresence>
            </>
          )}
        </div>
      </section>

      <section id="research">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Research</h2>
            <p className="sec-sub">Commentary and research published elsewhere.</p>
          </Reveal>
          <Reveal className="writing-list" stagger>
            {externalWriting.map((w) => (
              <a
                key={w.url}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-card"
              >
                <span className="writing-venue">{w.venue}</span>
                <h4 className="writing-title">{w.title}</h4>
                <p className="writing-desc">{w.description}</p>
                <span className="writing-go">Read it →</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="talks">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">{withAmp('Talks & presentations')}</h2>
            <p className="sec-sub">Decks I've put together, embedded below.</p>
          </Reveal>
          <Reveal className="deck-grid" stagger>
            {talks.map((t) => (
              <DeckCard key={t.embedUrl} t={t} />
            ))}
          </Reveal>
        </div>
      </section>

      <section id="bookshelf">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Bookshelf</h2>
            <p className="sec-sub">What I've been reading.</p>
          </Reveal>
          <Bookshelf />
        </div>
      </section>

      <section id="lately">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Lately</h2>
            <p className="sec-sub">Recent on X and Instagram.</p>
          </Reveal>
          <EmbeddedSocials />
        </div>
      </section>
    </>
  );
}
