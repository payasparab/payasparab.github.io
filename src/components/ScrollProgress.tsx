import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 22,
    mass: 0.4,
  });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
