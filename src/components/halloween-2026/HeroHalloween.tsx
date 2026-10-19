import Image from 'next/image';
import { headlineFont } from './fonts';
import { HeroCTA } from './HeroCTA';
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
        quality={60}
        className="object-cover object-[center_38%] opacity-70"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <p
          className="hw-fade text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4"
        >
          {EVENTO.lugar} · Yerba Buena
        </p>

        <h2
          className={`hw-fade ${headlineFont.className} italic font-black uppercase leading-[0.82] text-[#f3ece2]`}
        >
          <span className="block text-[10vw] sm:text-6xl lg:text-8xl font-bold">Fiesta de</span>
          <span className="block text-[min(19vw,14rem)] text-[#f26b1d]">Halloween</span>
        </h2>

        <div
          className="hw-fade mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
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
            <HeroCTA />
            <p className="text-center text-xs uppercase tracking-[0.25em] text-[#f3ece2]/70">Socios y no socios</p>
          </div>
        </div>
      </div>
    </section>
  );
};
