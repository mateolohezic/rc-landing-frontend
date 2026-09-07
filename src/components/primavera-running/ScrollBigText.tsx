'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Texto grande que cambia de escala y opacidad con el scroll (parallax de tamaño).
export const ScrollBigText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.25, 1, 1, 0.4]);

  return (
    <div ref={ref}>
      <motion.div style={{ scale, opacity }}>{children}</motion.div>
    </div>
  );
};
