'use client';

import { trackHalloween } from './HalloweenTracker';

// Único trozo del hero que necesita JavaScript: el evento de medición del clic.
export const HeroCTA = () => (
  <a
    href="#inscripcion"
    onClick={() => trackHalloween('hero_cta_click')}
    className="inline-flex justify-center whitespace-nowrap px-12 py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors"
  >
    Anotarme gratis
  </a>
);
