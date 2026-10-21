import Image from 'next/image';
import { headlineFont } from './fonts';
import { JURADO, PREMIOS, PREMIOS_EXTRA, PREMIO_DETALLE } from './constants';
import ganadores from '@/assets/halloween-2026/ganadores-desfile.jpeg';
import ganadoras from '@/assets/halloween-2026/ganadoras-desfile.jpeg';

export const ConcursoHalloween = () => (
  <section className="w-full bg-[#f3ece2] text-[#0a0a0a] px-6 py-20 sm:px-10 sm:py-28">
    <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4470a] mb-4">Concurso</p>
        <h2 className={`${headlineFont.className} italic font-black uppercase text-5xl sm:text-7xl leading-[0.88]`}>
          Mejor
          <br />
          disfraz
        </h2>
        <p className="mt-8 text-lg max-w-md leading-relaxed">
          Un jurado elige los mejores disfraces de la noche y se entregan premios. Podés marcar que querés
          participar cuando te inscribís.
        </p>

        {PREMIOS.length > 0 && (
          <div className="mt-10 grid grid-cols-3 items-end gap-2 sm:gap-3 max-w-md" role="list" aria-label="Premios del concurso">
            {[PREMIOS[1], PREMIOS[0], PREMIOS[2]].filter(Boolean).map((p) => {
              const primero = p === PREMIOS[0];
              const segundo = p === PREMIOS[1];
              return (
                <div
                  key={p.puesto}
                  role="listitem"
                  className={`flex flex-col items-center text-center px-1 pb-5 pt-5 ${
                    primero
                      ? 'bg-[#f26b1d] text-black min-h-[15.5rem] sm:min-h-[17rem]'
                      : segundo
                        ? 'bg-[#0a0a0a] text-[#f3ece2] min-h-[13.5rem] sm:min-h-[15rem]'
                        : 'border-2 border-[#0a0a0a] text-[#0a0a0a] min-h-[12rem] sm:min-h-[13.25rem]'
                  }`}
                >
                  <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]">{p.puesto}</span>
                  <span className={`${headlineFont.className} italic font-black leading-[0.85] mt-3 ${primero ? 'text-7xl sm:text-8xl' : 'text-6xl sm:text-7xl'}`}>
                    {p.meses}
                  </span>
                  <span className={`${headlineFont.className} italic font-extrabold uppercase text-xl sm:text-2xl mt-1`}>meses</span>
                  <span className="mt-3 text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] leading-tight">{PREMIO_DETALLE}</span>
                </div>
              );
            })}
          </div>
        )}

        {JURADO.length > 0 && (
          <div className="mt-10 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4470a] mb-3">Jurado</p>
            <ul className="space-y-1">
              {JURADO.map((j) => (
                <li key={j.nombre} className="text-lg font-medium">
                  {j.nombre}
                  {j.detalle && <span className="text-black/60 font-normal"> · {j.detalle}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 max-w-md text-base font-medium leading-relaxed">{PREMIOS_EXTRA}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image quality={60} src={ganadores} alt="Ganadores del desfile 2025 disfrazados de mariachi y catrina, con un chico en brazos" fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover object-[center_45%]" />
          </div>
          <figcaption className="mt-2 text-xs uppercase tracking-[0.25em] text-black/60">1° puesto 2025</figcaption>
        </figure>
        <figure className="mt-10">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image quality={60} src={ganadoras} alt="Ganadoras del desfile 2025 mostrando sus premios" fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover object-[center_50%]" />
          </div>
          <figcaption className="mt-2 text-xs uppercase tracking-[0.25em] text-black/60">2° y 3° puesto 2025</figcaption>
        </figure>
      </div>
    </div>
  </section>
);
