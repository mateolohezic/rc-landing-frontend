'use client';

import { useEffect, useState } from 'react';
import { trackHalloween } from './HalloweenTracker';

// Barra fija con el CTA. Se oculta cuando el formulario está en pantalla.
export const StickyCTAHalloween = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const form = document.getElementById('inscripcion');
    let obs: IntersectionObserver | undefined;
    if (form) {
      obs = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.1 });
      obs.observe(form);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      obs?.disconnect();
    };
  }, []);

  if (!scrolled || formVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-black/95 border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">
      <span className="text-[#f3ece2] text-sm truncate">Halloween · Vie 30/10 · 18:30</span>
      <a
        href="#inscripcion"
        onClick={() => trackHalloween('sticky_cta_click')}
        className="shrink-0 px-6 py-2 bg-[#c8ff2e] text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#dcff6e] transition-colors"
      >
        Anotarme gratis
      </a>
    </div>
  );
};
