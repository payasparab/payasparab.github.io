import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const W = 400;
const H = 400;
const AX_Y = 320;       // x-axis y-coordinate (in SVG units)
const VERTEX_X = 200;   // vertex x in SVG units
const A = 0.012;        // parabola scale: y = A*(x - VERTEX_X)^2 + B
const B = 40;           // y at vertex (in SVG units, top-down)

// y in SVG coords (top-down). Lower y = higher up visually.
function curveY(x: number) {
  // visual parabola opens downward from a low vertex; flip A for upward-opening visual.
  // Using upward opening: vertex at top, ends low.
  // We'll go with downward-opening: vertex at top, ends below — but we want a U-shape, so:
  return A * (x - VERTEX_X) * (x - VERTEX_X) + B;
}

function curvePath(): string {
  const pts: string[] = [];
  for (let x = 30; x <= 370; x += 4) {
    const y = curveY(x);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return 'M ' + pts.join(' L ');
}

const PATH = curvePath();

export function InteractiveParabola() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Mouse-driven X (in SVG units), clamped to [30, 370].
  const mvX = useMotionValue(VERTEX_X);
  const sx = useSpring(mvX, { stiffness: 160, damping: 22, mass: 0.6 });
  const sy = useTransform(sx, (x) => curveY(x));

  // Tangent slope dy/dx = 2A(x - VERTEX_X), used to rotate the tangent line.
  const angleDeg = useTransform(sx, (x) => {
    const slope = 2 * A * (x - VERTEX_X);
    return (Math.atan(slope) * 180) / Math.PI;
  });

  const [label, setLabel] = useState({ x: VERTEX_X, y: curveY(VERTEX_X) });

  // Curve-draw animation on mount
  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const L = p.getTotalLength();
    p.style.strokeDasharray = String(L);
    p.style.strokeDashoffset = String(L);
    p.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.4,.1,.2,1) .3s';
    requestAnimationFrame(() => (p.style.strokeDashoffset = '0'));
  }, []);

  // Track mouse position relative to svg viewBox
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const xRatio = (e.clientX - rect.left) / rect.width;
      const x = Math.max(30, Math.min(370, xRatio * W));
      mvX.set(x);
      setLabel({ x, y: curveY(x) });
    };

    const onLeave = () => {
      mvX.set(VERTEX_X);
      setLabel({ x: VERTEX_X, y: curveY(VERTEX_X) });
    };

    svg.addEventListener('mousemove', onMove);
    svg.addEventListener('mouseleave', onLeave);

    return () => {
      svg.removeEventListener('mousemove', onMove);
      svg.removeEventListener('mouseleave', onLeave);
    };
  }, [mvX]);

  // Normalize label values for display (origin at vertex, y up)
  const dispX = ((label.x - VERTEX_X) / 30).toFixed(2);
  const dispY = ((AX_Y - label.y) / 30).toFixed(2);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      data-cursor="hover"
    >
      {/* axes */}
      <line x1="0" y1={AX_Y} x2={W} y2={AX_Y} className="grid" />
      <line x1={VERTEX_X} y1="20" x2={VERTEX_X} y2={H} className="grid" />

      {/* faint gridlines */}
      {[60, 120, 240, 300].map((g) => (
        <line key={`v${g}`} x1={g} y1="20" x2={g} y2={H} className="grid" opacity="0.35" />
      ))}
      {[80, 160, 240].map((g) => (
        <line key={`h${g}`} x1="0" y1={g} x2={W} y2={g} className="grid" opacity="0.35" />
      ))}

      {/* the parabola */}
      <path ref={pathRef} d={PATH} className="curve" />

      {/* tangent line at the moving point */}
      <motion.g
        style={{
          x: sx,
          y: sy,
          rotate: angleDeg,
        }}
      >
        <line
          x1={-60}
          y1={0}
          x2={60}
          y2={0}
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </motion.g>

      {/* drop line to axis */}
      <motion.line
        x1={sx}
        y1={sy}
        x2={sx}
        y2={AX_Y}
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      {/* moving point */}
      <motion.circle r="6" cx={sx} cy={sy} className="pt" />

      {/* vertex marker */}
      <circle cx={VERTEX_X} cy={curveY(VERTEX_X)} r="2.5" fill="currentColor" opacity="0.4" />

      {/* live coordinate label */}
      <g transform={`translate(${W - 8} ${H - 10})`} textAnchor="end">
        <text className="label">
          ({dispX}, {dispY})
        </text>
      </g>
      <g transform={`translate(8 18)`}>
        <text className="label">y = x²</text>
      </g>
    </svg>
  );
}
