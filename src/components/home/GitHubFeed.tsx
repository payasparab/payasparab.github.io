import { useEffect, useState } from 'react';
import { site } from '../../data/site';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  fork: boolean;
};

type State =
  | { kind: 'loading' }
  | { kind: 'ok'; repos: Repo[] }
  | { kind: 'error' };

export function GitHubFeed({ limit = 6 }: { limit?: number }) {
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch(
          `https://api.github.com/users/${site.ghUser}/repos?sort=updated&per_page=${limit + 2}`
        );
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data: Repo[] = await r.json();
        const repos = data.filter((x) => !x.fork).slice(0, limit);
        if (!cancelled) setState({ kind: 'ok', repos });
      } catch {
        if (!cancelled) setState({ kind: 'error' });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return (
    <div className="gh-feed">
      {state.kind === 'loading' && (
        <div className="gh-fallback">Loading recent repositories…</div>
      )}
      {state.kind === 'error' && (
        <div className="gh-fallback">
          GitHub API not reachable from this preview frame.{' '}
          <a
            href={`https://github.com/${site.ghUser}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>
      )}
      {state.kind === 'ok' &&
        state.repos.map((r) => (
          <a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-repo"
          >
            <span className="rn">{r.name}</span>
            <span className="rd">{r.description ?? ''}</span>
            <span className="rf">
              {r.language && <span>● {r.language}</span>}
            </span>
          </a>
        ))}
    </div>
  );
}
