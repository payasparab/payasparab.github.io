import { useEffect, useRef, useState, type ReactNode } from 'react';
import { site } from '../../data/site';
import { GitHubFeed } from './GitHubFeed';

// Drop real Instagram post URLs here to render photo embeds; otherwise the
// panel falls back to a profile link. Embeds need real public post URLs.
const INSTAGRAM_POSTS: string[] = [
  // 'https://www.instagram.com/p/POSTID/',
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
    twttr?: { widgets: { load: (target?: HTMLElement) => void } };
    LI?: unknown;
  }
}

function loadScriptOnce(src: string, id: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.async = true;
    s.id = id;
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

/** Native <details> disclosure; mounts children only after first open so the
 *  heavier embeds don't run until requested. */
function Drop({
  label,
  badge,
  children,
}: {
  label: string;
  badge: string;
  children: ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  return (
    <details
      className="feed-drop"
      onToggle={(e) => {
        if ((e.currentTarget as HTMLDetailsElement).open) setOpened(true);
      }}
    >
      <summary className="feed-summary">
        <span className="fs-label">{label}</span>
        <span className="fs-badge">{badge}</span>
        <span className="fs-chev" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="feed-body">{opened ? children : null}</div>
    </details>
  );
}

function LinkedInPanel() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await loadScriptOnce(
        'https://platform.linkedin.com/badges/js/profile.js',
        'linkedin-badge-js'
      );
      // The badge script auto-scans the DOM on load; nothing else to do.
      if (cancelled) return;
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <div className="li-panel" ref={ref}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity={site.linkedinHandle}
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href={`https://www.linkedin.com/in/${site.linkedinHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View my LinkedIn profile →
        </a>
      </div>
    </div>
  );
}

function GitHubPanel() {
  return (
    <div className="gh-panel">
      <a
        href={`https://github.com/${site.ghUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="gh-chart-link"
      >
        <img
          className="gh-chart"
          src={`https://ghchart.rshah.org/409ba5/${site.ghUser}`}
          alt={`${site.ghUser} GitHub contribution chart`}
          loading="lazy"
        />
      </a>
      <GitHubFeed limit={6} />
    </div>
  );
}

function XPanel() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await loadScriptOnce(
        'https://platform.twitter.com/widgets.js',
        'twitter-widgets-js'
      );
      if (!cancelled && ref.current) window.twttr?.widgets.load(ref.current);
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <div className="x-timeline" ref={ref}>
      <a
        className="twitter-timeline"
        data-height="500"
        data-theme="light"
        href={`https://twitter.com/${site.xHandle}?ref_src=twsrc%5Etfw`}
      >
        Tweets by @{site.xHandle}
      </a>
    </div>
  );
}

function InstagramPanel() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!INSTAGRAM_POSTS.length) return;
    let cancelled = false;
    (async () => {
      await loadScriptOnce('https://www.instagram.com/embed.js', 'instagram-embed-js');
      if (!cancelled) window.instgrm?.Embeds.process();
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!INSTAGRAM_POSTS.length) {
    return (
      <div className="embed-fallback">
        Latest photos live on Instagram.{' '}
        <a
          href={`https://instagram.com/${site.igHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View profile →
        </a>
      </div>
    );
  }
  return (
    <div className="carousel" ref={ref}>
      {INSTAGRAM_POSTS.map((url) => (
        <div className="carousel-item" key={url}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          />
        </div>
      ))}
    </div>
  );
}

export function FeedDropdowns() {
  return (
    <div className="feed-drops">
      <Drop label="LinkedIn" badge={`in/${site.linkedinHandle}`}>
        <LinkedInPanel />
      </Drop>
      <Drop label="GitHub" badge={`@${site.ghUser}`}>
        <GitHubPanel />
      </Drop>
      <Drop label="X / Twitter" badge={`@${site.xHandle}`}>
        <XPanel />
      </Drop>
      <Drop label="Instagram" badge={`@${site.igHandle}`}>
        <InstagramPanel />
      </Drop>
    </div>
  );
}
