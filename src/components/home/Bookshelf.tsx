import { motion } from 'framer-motion';
import { bookshelf } from '../../data/bookshelf';

const STATUS_LABEL: Record<string, string> = {
  reading: 'Reading',
  read: 'Read',
  queue: 'Up next',
};

export function Bookshelf() {
  return (
    <div className="shelf">
      {bookshelf.map((b, i) => (
        <motion.article
          key={i}
          className="book"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
        >
          <div className="book-spine" aria-hidden="true">
            <span className="book-spine-title">{b.title}</span>
            <span className="book-spine-author">{b.author}</span>
          </div>
          <div className="book-meta">
            <span className="book-status">{STATUS_LABEL[b.status]}</span>
            <span className="book-tag">{b.tag}</span>
          </div>
          <h4 className="book-title">{b.title}</h4>
          <p className="book-author">by {b.author}</p>
          {b.note && <p className="book-note">{b.note}</p>}
        </motion.article>
      ))}
    </div>
  );
}
