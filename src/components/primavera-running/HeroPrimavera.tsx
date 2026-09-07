'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { headlineFont } from './fonts';
import { trackPrimavera } from './PrimaveraTracker';
import { PRIMAVERA_FOTOS } from './constants';
import logoLockup from '@/assets/primavera-running/logo-lockup.png';

export const HeroPrimavera = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-between overflow-hidden px-6 py-16">
      <Image src={PRIMAVERA_FOTOS.hero} alt="" fill sizes="100vw" priority className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#e2941f]/85 via-[#c47420]/80 to-[#2e3712]/90"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[240px] pt-8"
      >
        <Image src={logoLockup} alt="RC Gym × Alterpoint" className="w-full h-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center"
      >
        <p
          style={{ fontFamily: 'var(--pr-label)' }}
          className="text-[#fbf1dd] text-sm sm:text-base uppercase tracking-[0.4em] mb-6"
        >
          Sumate
        </p>

        <h2
          className={`${headlineFont.className} text-[#fbf1dd] text-6xl sm:text-8xl lg:text-[9rem] leading-[0.9] uppercase`}
        >
          Primavera
          <br />
          Running
        </h2>

        <p
          style={{ fontFamily: 'var(--pr-label)' }}
          className="mt-6 text-[#fbf1dd] text-lg sm:text-2xl max-w-lg"
        >
          Recibí la primavera en un día al aire libre con tu familia de siempre.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-xl flex flex-col items-center gap-8 pb-4"
      >
        <div
          style={{ fontFamily: 'var(--pr-label)' }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[#fbf1dd] text-sm sm:text-base tracking-wide"
        >
          <span>Domingo 20 de septiembre</span>
          <span className="text-[#fbf1dd]/70">·</span>
          <span>RC Gym Terrazas</span>
          <span className="text-[#fbf1dd]/70">·</span>
          <span>Abierto a todo el público</span>
        </div>

        <a
          href="#inscripcion"
          onClick={() => trackPrimavera('hero_cta_click')}
          className="px-12 py-4 bg-[#fbf1dd] text-[#2e3712] text-sm uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors"
        >
          Quiero ir
        </a>
      </motion.div>
    </section>
  );
};
