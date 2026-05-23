import { createElement, useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  stagger?: boolean;
  as?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'section' | 'article' | 'header';
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

export function Reveal({
  children,
  stagger = false,
  as = 'div',
  className = '',
  style,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (delay) {
            setTimeout(() => e.target.classList.add('in'), delay);
          } else {
            e.target.classList.add('in');
          }
          if (stagger) {
            const kids = Array.from((e.target as HTMLElement).children);
            kids.forEach((c, i) => {
              (c as HTMLElement).style.transitionDelay = `${i * 0.06}s`;
            });
          }
          io.unobserve(e.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [stagger, delay]);

  const cls = [stagger ? 'stagger' : 'reveal', className].filter(Boolean).join(' ');

  return createElement(as, { ref, className: cls, style }, children);
}
