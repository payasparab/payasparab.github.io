import { motion } from 'framer-motion';
import { teaching } from '../../data/teaching';

export function Teaching() {
  return (
    <div className="teaching-grid">
      {teaching.map((t, i) => (
        <motion.article
          key={i}
          className="teach-card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <div className="teach-head">
            <span className="teach-format">{t.format}</span>
            <span className="teach-year">{t.year}</span>
          </div>
          <h4 className="teach-title">{t.title}</h4>
          <p className="teach-venue">{t.venue}</p>
          {t.description && <p className="teach-desc">{t.description}</p>}
          {t.url && t.url !== '#' && (
            <a
              className="alink"
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 8, alignSelf: 'flex-start' }}
            >
              Open →
            </a>
          )}
        </motion.article>
      ))}
    </div>
  );
}
