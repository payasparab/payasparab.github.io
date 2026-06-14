import { Link } from 'react-router-dom';
import { currentlyReading, topBooks, goodreadsUrl } from '../../data/bookshelf';

export function Bookshelf() {
  return (
    <div className="bookshelf">
      <div className="bs-section">
        <p className="bs-label">Currently reading</p>
        <div className="bs-tile-grid">
          {currentlyReading.map((b) => (
            <a
              key={b.title}
              href={goodreadsUrl(b.title, b.author)}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-tile"
            >
              <span className="bs-tile-status">Reading</span>
              <span className="bs-tile-title">{b.title}</span>
              <span className="bs-tile-author">{b.author}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="bs-section">
        <p className="bs-label">Top 10 of all time</p>
        <div className="bs-tile-grid">
          {topBooks.map((b) => (
            <a
              key={b.title}
              href={goodreadsUrl(b.title, b.author)}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-tile bs-tile-ranked"
            >
              <span className="bs-tile-rank">#{b.rank}</span>
              <span className="bs-tile-title">{b.title}</span>
              <span className="bs-tile-author">{b.author}</span>
            </a>
          ))}
        </div>
      </div>

      <Link to="/books" className="clink bs-more">
        <span>Full reading list</span>
        <span className="arr">→</span>
      </Link>
    </div>
  );
}
