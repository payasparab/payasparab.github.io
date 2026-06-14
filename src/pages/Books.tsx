import { Reveal } from '../components/Reveal';
import { currentlyReading, topBooks, readBooks, toReadBooks, goodreadsUrl } from '../data/bookshelf';

function stars(n: number) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function BookRow({ title, author, rating, rank }: { title: string; author: string; rating?: number; rank?: number }) {
  return (
    <a
      href={goodreadsUrl(title, author)}
      target="_blank"
      rel="noopener noreferrer"
      className="brow"
    >
      {rank != null && <span className="brow-rank">#{rank}</span>}
      <span className="brow-body">
        <span className="brow-title">{title}</span>
        <span className="brow-author">{author}</span>
      </span>
      {rating != null && (
        <span className="brow-stars" aria-label={`${rating} out of 5`}>{stars(rating)}</span>
      )}
      <span className="brow-go">↗</span>
    </a>
  );
}

export function Books() {
  const fiveStars = readBooks.filter((b) => b.rating === 5);
  const fourStars = readBooks.filter((b) => b.rating === 4);
  const threeAndBelow = readBooks.filter((b) => (b.rating ?? 0) <= 3);

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal className="ey">
            <span className="ln" />
            <span className="label">Reading</span>
          </Reveal>
          <Reveal as="h1" className="ph">
            Bookshelf
          </Reveal>
          <Reveal as="p" className="ph-sub">
            Everything I've read, ranked. Links go to Goodreads.
          </Reveal>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Currently reading</h2>
          </Reveal>
          <Reveal className="blist" stagger>
            {currentlyReading.map((b) => (
              <BookRow key={b.title} title={b.title} author={b.author} />
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">Top 10 of all time</h2>
          </Reveal>
          <Reveal className="blist blist-top" stagger>
            {topBooks.map((b) => (
              <BookRow key={b.title} title={b.title} author={b.author} rating={b.rating} rank={b.rank} />
            ))}
          </Reveal>
        </div>
      </section>

      {fiveStars.length > 0 && (
        <section>
          <div className="wrap">
            <Reveal className="sec-head">
              <h2 className="sec-title">Read · ★★★★★</h2>
            </Reveal>
            <Reveal className="blist" stagger>
              {fiveStars.map((b) => (
                <BookRow key={b.title} title={b.title} author={b.author} rating={b.rating} />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {fourStars.length > 0 && (
        <section>
          <div className="wrap">
            <Reveal className="sec-head">
              <h2 className="sec-title">Read · ★★★★</h2>
            </Reveal>
            <Reveal className="blist" stagger>
              {fourStars.map((b) => (
                <BookRow key={b.title} title={b.title} author={b.author} rating={b.rating} />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {threeAndBelow.length > 0 && (
        <section>
          <div className="wrap">
            <Reveal className="sec-head">
              <h2 className="sec-title">Read · ★★★ and below</h2>
            </Reveal>
            <Reveal className="blist" stagger>
              {threeAndBelow.map((b) => (
                <BookRow key={b.title} title={b.title} author={b.author} rating={b.rating} />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <h2 className="sec-title">To read</h2>
            <p className="sec-sub">{toReadBooks.length} books in the queue.</p>
          </Reveal>
          <Reveal className="blist" stagger>
            {toReadBooks.map((b) => (
              <BookRow key={b.title} title={b.title} author={b.author} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
