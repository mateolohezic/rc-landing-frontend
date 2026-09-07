import Image from 'next/image';
import { headlineFont } from './fonts';
import { PRIMAVERA_FOTOS } from './constants';
import { ScrollBigText } from './ScrollBigText';

export const StoryIntroPrimavera = () => {
  return (
    <section className="relative w-full min-h-[70svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <Image src={PRIMAVERA_FOTOS.storyIntro} alt="" fill sizes="100vw" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-[#1a1f0d]/90"
      />

      <div className="relative z-10 flex flex-col items-center">
        <p style={{ fontFamily: 'var(--pr-label)' }} className="text-sm tracking-[0.4em] text-[#e2941f] mb-4">
          Un evento pensado
        </p>
        <ScrollBigText>
          <h2 className={`${headlineFont.className} text-[#fbf1dd] text-5xl sm:text-7xl lg:text-8xl leading-[0.95] uppercase`}>
            Para toda
            <br />
            la familia
          </h2>
        </ScrollBigText>
        <p style={{ fontFamily: 'var(--pr-label)' }} className="mt-6 text-lg sm:text-xl text-white/70 max-w-md">
          Arrancamos en RC Gym Terrazas para terminar en la terraza de Alterpoint.
        </p>
      </div>
    </section>
  );
};
