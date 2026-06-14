import { useState, useEffect, useRef } from 'react';
import { site } from '../../data/site';

type IGPost = {
  url: string;
  image: string; // relative to /public, e.g. /ig/post-1.jpg
  caption: string;
};

// For each post, set image to a Google Drive direct URL:
//   1. Upload photo to Drive, share as "Anyone with the link"
//   2. Copy the share URL: https://drive.google.com/file/d/FILE_ID/view
//   3. Paste as:           https://drive.google.com/uc?export=view&id=FILE_ID
const INSTAGRAM_POSTS: IGPost[] = [
  {
    url: 'https://www.instagram.com/p/CqOgYUivFuw/',
    image: '', // replace with https://drive.google.com/uc?export=view&id=FILE_ID
    caption: 'Smiling because the sun is out again',
  },
  {
    url: 'https://www.instagram.com/p/C6onyWnv4PC/',
    image: '', // replace with https://drive.google.com/uc?export=view&id=FILE_ID
    caption: 'Flew 8.5K miles for my shaadi.com profile pics',
  },
  {
    url: 'https://www.instagram.com/p/CjzLHhYOVRR/',
    image: '', // replace with https://drive.google.com/uc?export=view&id=FILE_ID
    caption: 'New big dawg in the house',
  },
];

const X_TWEETS: string[] = [
  'https://x.com/i/status/1804213243797520790',
  'https://x.com/i/status/2053172227676483781',
  'https://x.com/i/status/2058205629941235936',
  'https://x.com/i/status/2055102113064292713',
];

declare global {
  interface Window {
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

function InstagramCard({ post }: { post: IGPost }) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="ig-card"
    >
      <div className="ig-card-img">
        <img
          src={post.image}
          alt={post.caption}
          loading="lazy"
          onError={() => setHidden(true)}
        />
      </div>
      <div className="ig-card-footer">
        <span className="ig-caption">{post.caption}</span>
        <span className="ig-go">Instagram →</span>
      </div>
    </a>
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

const postsWithImages = INSTAGRAM_POSTS.filter((p) => p.image);

export function EmbeddedSocials() {
  return (
    <div className="embed-grid">
      {postsWithImages.length > 0 && (
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
          <div className="ig-grid">
            {postsWithImages.map((p) => (
              <InstagramCard key={p.url} post={p} />
            ))}
          </div>
        </div>
      )}
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
        <p className="embed-coming-soon">Tweets coming soon.</p>
        <a
          className="alink embed-profile-link"
          href={`https://x.com/${site.xHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View profile →
        </a>
      </div>
    </div>
  );
}
