import { useRef, type MouseEvent, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

// Wrap any element to make it gently follow the cursor inside its bounds.
export function MagneticLink({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.18;
    const dy = (e.clientY - cy) * 0.18;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0,0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.35s cubic-bezier(.2,.7,.2,1)', display: 'inline-block' }}
    >
      {children}
    </div>
  );
}
