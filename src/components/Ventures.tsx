import { motion } from 'framer-motion';
import { statusLabel, ventures } from '../data/ventures';

export function Ventures() {
  return (
    <div className="ventures-grid">
      {ventures.map((v, i) => (
        <motion.article
          key={v.name}
          className={`venture status-${v.status}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
        >
          <div className="venture-head">
            <span className="venture-status">
              <span className="dot" />
              {statusLabel(v.status)}
            </span>
            <span className="venture-tag">{v.tagline}</span>
          </div>
          <h3 className="venture-name">{v.name}</h3>
          <p className="venture-desc">{v.description}</p>
          {v.focus.length > 0 && (
            <div className="venture-focus">
              {v.focus.map((f) => (
                <span key={f} className="ptag">
                  {f}
                </span>
              ))}
            </div>
          )}
          {v.url && (
            <a
              className="alink"
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 8, alignSelf: 'flex-start' }}
            >
              Visit →
            </a>
          )}
        </motion.article>
      ))}
    </div>
  );
}
