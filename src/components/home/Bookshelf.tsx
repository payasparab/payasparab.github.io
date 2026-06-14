import { Link } from 'react-router-dom';
import { currentlyReading, topBooks, goodreadsUrl } from '../../data/bookshelf';

function stars(n: number) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

export function Bookshelf() {
  return (
    <div className="bookshelf">
      <div className="bs-section">
        <p className="bs-label">Currently reading</p>
        <ul className="bs-reading">
          {currentlyReading.map((b) => (
            <li key={b.title}>
              <a
                href={goodreadsUrl(b.title, b.author)}
                target="_blank"
                rel="noopener noreferrer"
                className="bs-book-link"
              >
                <span className="bs-btitle">{b.title}</span>
                <span className="bs-bauthor">{b.author}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bs-section">
        <p className="bs-label">Top 10 of all time</p>
        <ol className="bs-top10">
          {topBooks.map((b) => (
            <li key={b.title}>
              <a
                href={goodreadsUrl(b.title, b.author)}
                target="_blank"
                rel="noopener noreferrer"
                className="bs-book-link"
              >
                <span className="bs-btitle">{b.title}</span>
                <span className="bs-bauthor">{b.author}</span>
              </a>
              <span className="bs-stars" aria-label={`${b.rating} stars`}>{stars(b.rating ?? 5)}</span>
            </li>
          ))}
        </ol>
      </div>

      <Link to="/books" className="clink bs-more">
        <span>Full reading list</span>
        <span className="arr">→</span>
      </Link>
    </div>
  );
}
