import Image from 'next/image';
import { FaPersonBiking, FaPersonRunning } from 'react-icons/fa6';
import { IoMdMusicalNote } from 'react-icons/io';
import { headlineFont } from './fonts';
import { PRIMAVERA_FOTOS } from './constants';
import { ScrollBigText } from './ScrollBigText';
import cyclingPlaceholder from '@/assets/primavera-running/cycling-placeholder.jpg';
import alterpointPlaceholder from '@/assets/primavera-running/alterpoint-placeholder.jpg';

const MOMENTOS = [
  {
    paso: '01',
    titulo: ['Indoor', 'Cycling'],
    bajada: 'Al aire libre, en RC Terrazas.',
    Icon: FaPersonBiking,
    foto: cyclingPlaceholder,
    overlay: 'bg-gradient-to-b from-black/80 via-black/70 to-[#1a1f0d]/90',
    text: 'text-[#fbf1dd]',
    sub: 'text-white/70',
    paso_c: 'text-[#e2941f]',
  },
  {
    paso: '02',
    titulo: ['Circuito de', 'Running'],
    bajada: 'Por paisajes de Yerba Buena.',
    Icon: FaPersonRunning,
    foto: PRIMAVERA_FOTOS.running,
    overlay: 'bg-gradient-to-b from-[#fbf1dd]/90 via-[#fbf1dd]/85 to-[#f0dcae]/90',
    text: 'text-[#2e3712]',
    sub: 'text-[#2e3712]/70',
    paso_c: 'text-[#b85e12]',
  },
  {
    paso: '03',
    titulo: ['After en', 'Alterpoint'],
    bajada: 'El mall gastronómico más innovador del momento. Música, gastronomía y una charla de bienestar.',
    Icon: IoMdMusicalNote,
    foto: alterpointPlaceholder,
    posicion: '50% 30%',
    overlay: 'bg-gradient-to-br from-[#e2941f]/85 via-[#b85e12]/85 to-[#2e3712]/90',
    text: 'text-[#fbf1dd]',
    sub: 'text-[#fbf1dd]/80',
    paso_c: 'text-[#fbf1dd]',
  },
];

export const MomentosPrimavera = () => {
  return (
    <>
      {MOMENTOS.map((m) => (
        <section key={m.titulo.join(' ')} className="relative w-full min-h-[70svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <Image
            src={m.foto}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={m.posicion ? { objectPosition: m.posicion } : undefined}
          />
          <div className={`absolute inset-0 ${m.overlay}`} aria-hidden />

          <div className="relative z-10 flex flex-col items-center">
            <m.Icon className={`text-3xl mb-4 ${m.paso_c}`} aria-hidden />
            <p style={{ fontFamily: 'var(--pr-label)' }} className={`text-sm tracking-[0.4em] mb-4 ${m.paso_c}`}>
              {m.paso}
            </p>
            <ScrollBigText>
              <h2
                className={`${headlineFont.className} ${m.text} text-5xl sm:text-7xl lg:text-8xl leading-[0.95] uppercase`}
              >
                {m.titulo[0]}
                <br />
                {m.titulo[1]}
              </h2>
            </ScrollBigText>
            <p style={{ fontFamily: 'var(--pr-label)' }} className={`mt-6 text-lg sm:text-xl max-w-md ${m.sub}`}>
              {m.bajada}
            </p>
          </div>
        </section>
      ))}
    </>
  );
};
