import { headlineFont } from './fonts';
import { QUE_HAY } from './constants';

export const QueHayHalloween = () => (
  <section className="w-full bg-[#0a0a0a] px-6 py-20 sm:px-10 sm:py-28">
    <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4">La fiesta</p>
        <h2 className={`${headlineFont.className} italic font-black uppercase text-5xl sm:text-7xl leading-[0.88] text-[#f3ece2]`}>
          Qué hay
        </h2>
      </div>
      <ol className="border-t border-white/15">
        {QUE_HAY.map((item, i) => (
          <li key={item.titulo} className="flex items-baseline gap-6 border-b border-white/15 py-6 sm:py-8">
            <span className={`${headlineFont.className} italic font-bold text-xl sm:text-2xl text-[#f26b1d] tabular-nums`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className={`${headlineFont.className} italic font-extrabold uppercase text-3xl sm:text-5xl leading-none text-[#f3ece2]`}>
                {item.titulo}
              </h3>
              <p className="mt-3 text-base sm:text-lg text-[#f3ece2]/75 max-w-md">{item.detalle}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
