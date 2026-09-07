'use client';

import { useEffect, useState } from 'react';
import { trackPrimavera } from './PrimaveraTracker';

// Barra fija con CTA, para no obligar a bajar las 6 pantallas si ya se decidió anotarse.
export const StickyCTAPrimavera = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-black/95 border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">
      <span style={{ fontFamily: 'var(--pr-label)' }} className="text-white text-sm truncate">
        Primavera Running · 20 de septiembre
      </span>
      <a
        href="#inscripcion"
        onClick={() => trackPrimavera('sticky_cta_click')}
        className="shrink-0 px-6 py-2 bg-[#fbf1dd] text-[#2e3712] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
      >
        Anotarme
      </a>
    </div>
  );
};
