import { useState, type FormEvent } from 'react';
import { site } from '../../data/site';

// Common reasons people reach out — mirrors the site's main threads.
const TOPICS = [
  'Consulting / project work',
  'DTLA / civic',
  'Ventures / collaboration',
  'Speaking / teaching',
  'Just saying hi',
  'Something else',
] as const;

type Status = 'idle' | 'sending' | 'ok' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const endpoint = `https://formspree.io/f/${site.formspreeId}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="contact-form contact-done">
        <p className="cf-thanks">Thanks — your message is on its way. I'll be in touch.</p>
        <button type="button" className="btn ghost" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="cf-row">
        <label className="cf-field">
          <span className="cf-label">Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="cf-field">
          <span className="cf-label">Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <label className="cf-field">
        <span className="cf-label">What's this about?</span>
        <select name="topic" defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="cf-field">
        <span className="cf-label">Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <div className="cf-foot">
        <button type="submit" className="btn primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'} <span>→</span>
        </button>
        <a href={`mailto:${site.email}`} className="cf-direct">
          or email {site.email} directly
        </a>
      </div>
      {status === 'error' && (
        <p className="cf-error">
          Couldn't send just now — please email {site.email} directly.
        </p>
      )}
    </form>
  );
}
