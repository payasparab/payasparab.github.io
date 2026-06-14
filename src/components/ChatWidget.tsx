import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type Message = { role: 'user' | 'assistant'; content: string };

const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.1-8b-instant';
const API_KEY = import.meta.env.VITE_GROQ_API_KEY ?? '';

const SYSTEM_PROMPT = `You are a concise, helpful assistant for Payas Parab's personal website (www.payasparab.com). Answer questions about Payas and guide visitors to the right page using markdown links.

ABOUT PAYAS:
Payas Parab is an applied data scientist and builder based in Los Angeles, California.
- Analytics Engineer at Proper Hospitality (joined 2026) — building the unified data warehouse, canonical models, and guest identity foundation
- Elected Board Director, Downtown LA Neighborhood Council — Treasurer, Chair of Budget & Finance, founder/Chair of Business & Innovation Committee, Budget Advocate
- Harvard Kennedy School Technology & Human Rights Fellow
- Former: TikTok/ByteDance (Data Scientist), quantitative hedge fund (first outside hire), investment banking, Haas School of Business (lecturer)
- UC Berkeley triple major: Statistics, Computer Science, Business (281 credits)
- M.S. Statistics candidate

SITE PAGES (use exact paths):
- [Home](/) — Overview and contact
- [Experience](/experience) — Work history, education, volunteering
- [Consulting](/consulting) — A decade of data/AI/product consulting, case studies, shipped tools
- [Fix DTLA](/longdtla) — DLANC board work, policy positions, constituent services
- [Blog](/blog) — Writing, talks, research, bookshelf

BLOG POSTS:
- [Why I joined Proper Hospitality](/blog/joining-proper-hospitality) — career move into hospitality data
- [The data science degree trap](/blog/data-science-degree-trap) — DS career advice
- [Cloud vs. own: the 24TB storage paradox](/blog/cloud-vs-own-storage-paradox) — cloud cost bloat
- [The one thing early quant candidates get wrong](/blog/quant-finance-reading) — reading in quant finance
- [Tech's most dangerous myth: newer means better](/blog/tech-newer-means-better) — tech decision-making
- ["First employee" sounds exciting. It's not.](/blog/first-employee) — early-stage startup experience
- [You overestimate what you can do in a day](/blog/overestimate-day-underestimate-months) — learning Mandarin, long-game thinking

CONSULTING SERVICES:
Systems design, product consulting & advisory, fractional CTO, end-to-end AI MVPs, dashboards & pipelines, automated finance, venture scouting & due diligence, expert calls (e-commerce, AdTech, fintech, PropTech, quant, payments)

CONTACT:
- me@payasparab.com
- DLANC: payas.parab@dlanc.com

RULES:
- 2–4 sentences max unless the user asks for detail
- Always link to the most relevant page using markdown: [Page name](/path)
- Don't invent facts not listed above; if unsure, say so and point to the relevant page
- Be warm but direct — match Payas's tone`;

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
      if (url.startsWith('/')) {
        return `<a href="${url}" class="chat-ilink" data-internal="true">${label}</a>`;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    })
    .replace(/\n/g, '<br />');
}

function MessageBubble({ msg, onNav }: { msg: Message; onNav: (path: string) => void }) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.dataset.internal) {
        e.preventDefault();
        onNav(target.getAttribute('href') ?? '/');
      }
    },
    [onNav]
  );

  return (
    <div className={`chat-msg chat-msg-${msg.role}`}>
      <div
        className="chat-bubble"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }}
        onClick={handleClick}
      />
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streaming]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput('');

    const next: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setStreaming(true);

    try {
      const res = await fetch(GROQ_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          stream: true,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...next],
        }),
      });

      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let reply = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        for (const line of chunk.split('\n')) {
          const data = line.replace(/^data: /, '').trim();
          if (!data || data === '[DONE]') continue;
          try {
            const delta = JSON.parse(data).choices?.[0]?.delta?.content ?? '';
            reply += delta;
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: 'assistant', content: reply };
              return updated;
            });
          } catch {
            // malformed chunk, skip
          }
        }
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Try again in a moment.' },
      ]);
    } finally {
      setStreaming(false);
    }
  }, [input, messages, streaming]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  if (!API_KEY) return null;

  return (
    <div className="chat-root">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Site assistant">
          <div className="chat-head">
            <span className="chat-head-title">Ask about the site</span>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-empty">
                Ask me anything — about Payas's work, blog posts, consulting, or DTLA civic work.
              </div>
            )}
            {messages.map((m, i) => (
              <MessageBubble key={i} msg={m} onNav={(path) => { navigate(path); setOpen(false); }} />
            ))}
            {streaming && messages[messages.length - 1]?.role === 'assistant' && messages[messages.length - 1]?.content === '' && (
              <div className="chat-typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-foot">
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask a question…"
              disabled={streaming}
              autoComplete="off"
            />
            <button
              type="button"
              className="chat-send"
              onClick={send}
              disabled={!input.trim() || streaming}
              aria-label="Send"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`chat-fab ${open ? 'chat-fab-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open site assistant"
      >
        {open ? '✕' : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
