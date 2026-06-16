'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, LocationIcon, FoodIcon } from '@/icons';
import { trackRunning } from './RunningTracker';
import heroImg from '@/assets/running/terrazas.webp';

const DATOS = [
  { Icon: CalendarIcon, txt: 'Domingo 28 de junio' },
  { Icon: ClockIcon, txt: '9:30 a 12:30 h' },
  { Icon: LocationIcon, txt: 'Sede Terrazas' },
  { Icon: FoodIcon, txt: 'Entrada: un alimento no perecedero' },
];

export const HeroRunning = () => {
  return (
    <section className="relative w-full min-h-[94svh] flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Sede RC Terrazas, donde se realiza el evento RC Running"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden className="absolute inset-0 z-[1] bg-black/60" />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/35 to-black/90"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center"
      >
        <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.35em] text-red-400 font-bold mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          RC Running
        </span>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Corré al aire libre
          <span className="block text-red-500">en familia</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-white/90 max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Running de 3K y 5K y una masterclass de spinning, para todos los ritmos.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          {DATOS.map(({ Icon, txt }) => (
            <span
              key={txt}
              className="inline-flex items-center gap-2 rounded-full bg-black/35 backdrop-blur-md border border-white/15 px-4 py-2 text-sm text-white/90 font-medium"
            >
              <Icon className="text-red-400 shrink-0" />
              {txt}
            </span>
          ))}
        </div>

        <a
          href="#inscripcion"
          onClick={() => trackRunning('hero_cta_click')}
          className="mt-9 px-10 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-black uppercase tracking-wider hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300"
        >
          Inscribite
        </a>

        <p className="mt-5 text-sm text-white/60 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Socios y no socios · Cupos limitados
        </p>
      </motion.div>
    </section>
  );
};
