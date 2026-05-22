'use client';

import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CountdownPileta } from './CountdownPileta';
import { trackPileta } from './PiletaTracker';

export const StickyHeaderPileta = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (v) => setVisible(v > 600));
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-md border-t border-red-500/30 z-40 lg:hidden shadow-2xl shadow-black/50"
    >
      <div className="px-3 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-0.5">
            Preventa cierra en
          </p>
          <CountdownPileta variant="inline" />
        </div>
        <Link
          href="#reservar"
          onClick={() => trackPileta('sticky_cta_click')}
          className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0"
        >
          Reservar cupo
        </Link>
      </div>
    </motion.div>
  );
};
