'use client';

import Image from 'next/image';
import { headlineFont } from './fonts';
import { trackPrimavera } from './PrimaveraTracker';
import { PRIMAVERA_FOTOS } from './constants';
import logoLockup from '@/assets/primavera-running/logo-lockup.png';

export const CTAFinalPrimavera = () => {
  return (
    <section className="relative w-full min-h-[90svh] flex flex-col items-center justify-between px-6 py-16 text-center overflow-hidden">
      <Image src={PRIMAVERA_FOTOS.ctaFinal} alt="" fill sizes="100vw" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#2e3712]/85 via-[#5a4a12]/80 to-[#e2941f]/85"
      />

      <div className="relative z-10" />

      <div className="relative z-10 flex flex-col items-center">
        <h2 className={`${headlineFont.className} text-[#fbf1dd] text-4xl sm:text-6xl lg:text-8xl leading-[0.95] uppercase break-words`}>
          +Deporte
          <br />
          Diversión+
          <br />
          +Gastronomía
        </h2>

        <div className="w-24 h-px bg-[#fbf1dd]/40 my-8" />

        <p style={{ fontFamily: 'var(--pr-label)' }} className="text-[#fbf1dd] text-lg tracking-[0.4em] uppercase">
          [ Domingo ideal ]
        </p>

        <a
          href="#inscripcion"
          onClick={() => trackPrimavera('cta_final_click')}
          className="mt-10 px-12 py-4 bg-[#fbf1dd] text-[#2e3712] text-sm uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors"
        >
          Anotarme
        </a>
        <p style={{ fontFamily: 'var(--pr-label)' }} className="mt-4 text-[#fbf1dd]/80 text-base tracking-wide">
          20.09.2026
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[240px]">
        <Image src={logoLockup} alt="RC Gym × Alterpoint" className="w-full h-auto" />
      </div>
    </section>
  );
};
