import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';

function fmt(d: string) {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="wrap" style={{ padding: '80px 28px' }}>
        <Link to="/blog" className="a-back">
          ← Back to writing
        </Link>
        <p className="empty">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="wrap">
      <article className="article">
        <Link to="/blog" className="a-back">
          ← Back to writing
        </Link>
        <div className="a-meta">
          {fmt(post.date)} · {post.read} · {post.category}
        </div>
        <h1>{post.title}</h1>
        <div className="a-tags">
          {post.tags.map((t) => (
            <span key={t} className="ptag">
              {t}
            </span>
          ))}
        </div>
        <div className="a-body" dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </div>
  );
}
