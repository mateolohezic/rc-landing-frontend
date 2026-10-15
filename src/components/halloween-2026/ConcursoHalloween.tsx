import Image from 'next/image';
import { headlineFont } from './fonts';
import { JURADO, PREMIOS } from './constants';
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
          <ul className="mt-10 border-t border-black/20 max-w-md">
            {PREMIOS.map((p) => (
              <li key={p.puesto} className="flex items-baseline justify-between gap-6 border-b border-black/20 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4470a]">{p.puesto}</span>
                <span className={`${headlineFont.className} italic font-extrabold uppercase text-2xl sm:text-3xl text-right`}>
                  {p.premio}
                </span>
              </li>
            ))}
          </ul>
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

        <p className="mt-10 pt-6 border-t border-black/20 max-w-md text-sm text-black/70 leading-relaxed">
          Edición 2025: los tres primeros puestos se llevaron 1 año, 6 meses y 3 meses gratis de entrenamiento en RC.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={ganadores} alt="Ganadores del desfile 2025 disfrazados de mariachi y catrina, con un chico en brazos" fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover object-[center_45%]" />
          </div>
          <figcaption className="mt-2 text-xs uppercase tracking-[0.25em] text-black/60">1° puesto 2025</figcaption>
        </figure>
        <figure className="mt-10">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={ganadoras} alt="Ganadoras del desfile 2025 mostrando sus premios" fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover object-[center_50%]" />
          </div>
          <figcaption className="mt-2 text-xs uppercase tracking-[0.25em] text-black/60">2° y 3° puesto 2025</figcaption>
        </figure>
      </div>
    </div>
  </section>
);
