'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { headlineFont } from './fonts';
import { trackHalloween } from './HalloweenTracker';
import { EVENTO } from './constants';
import heroFoto from '@/assets/halloween-2026/logo-terrazas.jpeg';

export const HeroHalloween = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black px-6 pb-12 pt-32 sm:px-10 lg:px-16 lg:pb-16">
      <Image
        src={heroFoto}
        alt="Logo de RC Terrazas con globos y lápidas decorativas de Halloween"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[center_38%] opacity-70"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4"
        >
          {EVENTO.lugar} · Yerba Buena
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${headlineFont.className} italic font-black uppercase leading-[0.82] text-[#f3ece2]`}
        >
          <span className="block text-[10vw] sm:text-6xl lg:text-8xl font-bold">Fiesta de</span>
          <span className="block text-[min(19vw,14rem)] text-[#f26b1d]">Halloween</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex items-end gap-5">
            <span className={`${headlineFont.className} italic font-black leading-[0.8] text-[22vw] sm:text-9xl text-[#f3ece2]`}>
              {EVENTO.fechaCorta}
            </span>
            <div className="pb-1 sm:pb-3">
              <p className={`${headlineFont.className} italic font-bold uppercase text-2xl sm:text-4xl leading-none text-[#f3ece2]`}>
                Viernes
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#f3ece2]/80">
                {EVENTO.horario} · {EVENTO.lugar}
                <br />
                {EVENTO.direccion}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-4 lg:items-center">
            <a
              href="#inscripcion"
              onClick={() => trackHalloween('hero_cta_click')}
              className="inline-flex justify-center whitespace-nowrap px-12 py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors"
            >
              Anotarme gratis
            </a>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-[#f3ece2]/70">Socios y no socios</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
