import { useState, useEffect } from 'react';

type Section = { id: string; label: string };

export function PageNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="page-nav" aria-label="Page sections">
      <div className="page-nav-inner">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`page-nav-item ${active === id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setActive(id);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
