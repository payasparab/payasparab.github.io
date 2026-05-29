import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Bookshelf } from '../components/home/Bookshelf';
import { EmbeddedSocials } from '../components/home/EmbeddedSocials';
import { allTags, posts } from '../data/posts';

const ALL = 'All';

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
            Notes on data systems, AI, consulting, quant, and tech in public policy. Search the
            full text, narrow by tag, browse what I'm reading, or see what's recent on X and
            Instagram.
          </Reveal>
        </div>
      </header>

      <section style={{ paddingTop: 32 }}>
        <div className="wrap">
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
                placeholder="Search posts — title, body, tags…"
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
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Bookshelf</h2>
            <p className="sec-sub">What I've been reading.</p>
          </Reveal>
          <Bookshelf />
        </div>
      </section>

      <section>
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
