'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const StickyHeader = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-red-500/50 z-50 shadow-lg shadow-black/50"
    >
      <div className="max-w-7xl mx-auto p-2 lg:p-4 flex items-center justify-between">
        <div className="flex items-center gap-1 lg:gap-4">
          <span className="text-lg lg:text-2xl">🎃</span>
          <div>
            <p className="text-xs lg:text-3xl font-black uppercase">
              Gana 1 Año Gratis
            </p>
            <p className="text-xs text-white/70">31 Octubre | RC Terrazas</p>
          </div>
        </div>

        <Link
          href={process.env.NEXT_PUBLIC_FORM_HALLOWEEN || '/'}
          target="_blank"
          className="px-3 py-2 lg:px-8 lg:py-3 text-xs lg:text-xl font-black bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase"
        >
          Reservar mi cupo
        </Link>
      </div>
    </motion.div>
  );
}