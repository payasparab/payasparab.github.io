import { useEffect, useRef } from 'react';
import { site } from '../../data/site';

// Replace these placeholder URLs with real post URLs (or wire to a feed).
// Embeds render properly only with real public post URLs.
const INSTAGRAM_POSTS: string[] = [
  'https://www.instagram.com/p/CqOgYUivFuw/',
  'https://www.instagram.com/p/C6onyWnv4PC/',
  'https://www.instagram.com/p/CjzLHhYOVRR/',
];
const X_TWEETS: string[] = [
  'https://x.com/i/status/1804213243797520790',
  'https://x.com/i/status/2053172227676483781',
  'https://x.com/i/status/2058205629941235936',
  'https://x.com/i/status/2055102113064292713',
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
    twttr?: {
      widgets: { load: (target?: HTMLElement) => void };
    };
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

function InstagramCarousel({ posts }: { posts: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!posts.length) return;
    let cancelled = false;
    (async () => {
      await loadScriptOnce('https://www.instagram.com/embed.js', 'instagram-embed-js');
      if (!cancelled) window.instgrm?.Embeds.process();
    })();
    return () => {
      cancelled = true;
    };
  }, [posts]);

  if (!posts.length) {
    return (
      <div className="embed-fallback">
        Drop your Instagram post URLs into <code>INSTAGRAM_POSTS</code> in{' '}
        <code>src/components/home/EmbeddedSocials.tsx</code>.{' '}
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
      {posts.map((url) => (
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

function XCarousel({ tweets }: { tweets: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      await loadScriptOnce(
        'https://platform.twitter.com/widgets.js',
        'twitter-widgets-js'
      );
      if (!cancelled && ref.current) {
        window.twttr?.widgets.load(ref.current);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [tweets]);

  if (!tweets.length) {
    // No tweet URLs: show the official timeline embed as a sensible default.
    return (
      <div className="x-timeline" ref={ref}>
        <a
          className="twitter-timeline"
          data-height="540"
          data-theme="light"
          href={`https://twitter.com/${site.xHandle}?ref_src=twsrc%5Etfw`}
        >
          Tweets by @{site.xHandle}
        </a>
        <div className="embed-fallback" style={{ marginTop: 14 }}>
          For a tweet carousel, paste tweet URLs into <code>X_TWEETS</code> in{' '}
          <code>src/components/home/EmbeddedSocials.tsx</code>.
        </div>
      </div>
    );
  }

  return (
    <div className="carousel" ref={ref}>
      {tweets.map((url) => (
        <div className="carousel-item" key={url}>
          <blockquote className="twitter-tweet" data-conversation="none">
            <a href={url}>View tweet</a>
          </blockquote>
        </div>
      ))}
    </div>
  );
}

export function EmbeddedSocials() {
  return (
    <div className="embed-grid">
      <div className="embed-col">
        <div className="embed-head">
          <span className="label">Instagram</span>
          <a
            className="alink"
            href={`https://instagram.com/${site.igHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{site.igHandle}
          </a>
        </div>
        <InstagramCarousel posts={INSTAGRAM_POSTS} />
      </div>
      <div className="embed-col">
        <div className="embed-head">
          <span className="label">X</span>
          <a
            className="alink"
            href={`https://x.com/${site.xHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{site.xHandle}
          </a>
        </div>
        <XCarousel tweets={X_TWEETS} />
      </div>
    </div>
  );
}
