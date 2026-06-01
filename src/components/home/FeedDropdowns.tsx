import { useEffect, useRef, useState, type ReactNode } from 'react';
import { site } from '../../data/site';
import { GitHubFeed } from './GitHubFeed';

// ─────────────────────────────────────────────────────────────────────────
// MANUAL FEEDS. Paste recent permalinks here (newest first). A static site
// can't pull these dynamically for free, so list the posts/tweets you want
// shown and they render as real embeds. Empty = falls back to a profile link.
// ─────────────────────────────────────────────────────────────────────────

// e.g. 'https://www.instagram.com/p/POSTID/'
const INSTAGRAM_POSTS: string[] = [
  'https://www.instagram.com/p/CqOgYUivFuw/',
  'https://www.instagram.com/p/CoaBO50r4l5/',
];

// Recent tweet permalinks (newest first). Individual tweets embed reliably,
// unlike the profile timeline. e.g. 'https://twitter.com/payasparab/status/ID'
const X_TWEETS: string[] = [
  // paste tweet URLs here
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
    twttr?: { widgets: { load: (target?: HTMLElement) => void } };
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

function LinkedInPanel() {
  useEffect(() => {
    loadScriptOnce('https://platform.linkedin.com/badges/js/profile.js', 'linkedin-badge-js');
  }, []);
  return (
    <div className="li-panel">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
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
      <GitHubFeed limit={4} />
    </div>
  );
}

// Embeds the specific tweets listed in X_TWEETS (reliable, unlike the timeline).
function XPanel() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!X_TWEETS.length) return;
    let cancelled = false;
    (async () => {
      await loadScriptOnce('https://platform.twitter.com/widgets.js', 'twitter-widgets-js');
      if (!cancelled && ref.current) window.twttr?.widgets.load(ref.current);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!X_TWEETS.length) {
    return (
      <div className="embed-fallback">
        Tweets coming soon.{' '}
        <a href={`https://x.com/${site.xHandle}`} target="_blank" rel="noopener noreferrer">
          View profile →
        </a>
      </div>
    );
  }
  return (
    <div className="ig-stack" ref={ref}>
      {X_TWEETS.map((url) => (
        <blockquote key={url} className="twitter-tweet" data-conversation="none" data-theme="light">
          <a href={url}>View tweet</a>
        </blockquote>
      ))}
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
        <a href={`https://instagram.com/${site.igHandle}`} target="_blank" rel="noopener noreferrer">
          View profile →
        </a>
      </div>
    );
  }
  return (
    <div className="ig-stack" ref={ref}>
      {INSTAGRAM_POSTS.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        />
      ))}
    </div>
  );
}

const PANELS: Record<string, (() => ReactNode) | undefined> = {
  LinkedIn: () => <LinkedInPanel />,
  GitHub: () => <GitHubPanel />,
  X: () => <XPanel />,
  Instagram: () => <InstagramPanel />,
};

function HeroSocial({ social }: { social: (typeof site.socials)[number] }) {
  const [hovered, setHovered] = useState(false);
  const panel = PANELS[social.label];
  const external = social.href.startsWith('http');

  return (
    <span
      className={`hero-social-wrap${panel ? ' has-feed' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onFocus={() => setHovered(true)}
    >
      <a
        href={social.href}
        className="hero-social"
        target={external ? '_blank' : undefined}
        rel="noopener noreferrer"
        aria-label={social.label}
        title={social.label}
      >
        <span className="hsi" aria-hidden="true">
          {social.icon}
        </span>
        <span className="hsl">{social.label}</span>
      </a>
      {panel && (
        <span className="hero-feed-pop" role="dialog" aria-label={`${social.label} feed`}>
          <span className="hfp-head">{social.label}</span>
          <span className="hfp-body">{hovered ? panel() : null}</span>
        </span>
      )}
    </span>
  );
}

export function HeroSocialLinks() {
  return (
    <div className="hero-socials">
      {site.socials.map((s) => (
        <HeroSocial key={s.label} social={s} />
      ))}
    </div>
  );
}
