'use client';

import { headlineFont } from './fonts';
import { trackHalloween } from './HalloweenTracker';
import { EVENTO } from './constants';

export const CTAFinalHalloween = () => (
  <section className="w-full bg-[#f26b1d] text-black px-6 py-20 sm:px-10 sm:py-28">
    <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] mb-4">
          {EVENTO.fechaLarga} · {EVENTO.horario}
        </p>
        <p className={`${headlineFont.className} italic font-black uppercase text-5xl sm:text-8xl leading-[0.85]`}>
          {EVENTO.lugar}
        </p>
        <p className="mt-4 text-base sm:text-lg">{EVENTO.direccion}</p>
      </div>
      <a
        href="#inscripcion"
        onClick={() => trackHalloween('cta_final_click')}
        className="inline-flex justify-center whitespace-nowrap px-12 py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors"
      >
        Anotarme gratis
      </a>
    </div>
  </section>
);
