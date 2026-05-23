import { useRef, type MouseEvent, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  to?: string;
};

// Card with a radial spotlight that tracks the cursor (uses CSS vars --mx/--my).
export function SpotlightCard({ children, className, href }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
    >
      {children}
    </a>
  );
}
