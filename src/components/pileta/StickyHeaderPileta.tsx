'use client';

import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
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
      <div
        className="px-3 pt-3 flex items-center gap-3"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold mb-0.5 flex items-center gap-1.5">
            <span className="size-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Pileta abierta · Sede Terrazas
          </p>
          <p className="text-xs text-white/85 font-semibold truncate">
            Empezá esta semana
          </p>
        </div>
        <Link
          href="#reservar"
          onClick={() => trackPileta('sticky_cta_click')}
          className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0"
        >
          Reservar clase
        </Link>
      </div>
    </motion.div>
  );
};
