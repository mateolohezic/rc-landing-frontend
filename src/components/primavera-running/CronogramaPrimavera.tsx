import { headlineFont } from './fonts';
import { CRONOGRAMA } from './constants';

export const CronogramaPrimavera = () => {
  return (
    <section className="w-full bg-black px-6 py-24 border-t border-white/10">
      <div className="max-w-2xl mx-auto">
        <p style={{ fontFamily: 'var(--pr-label)' }} className="text-center text-sm uppercase tracking-[0.4em] text-[#e2941f] mb-4">
          El día
        </p>
        <h2 className={`${headlineFont.className} text-[#fbf1dd] text-4xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase text-center mb-14`}>
          Cronograma
        </h2>

        <div className="space-y-0">
          {CRONOGRAMA.map((c, i) => (
            <div key={i} className="flex gap-6 py-5 border-b border-white/10 last:border-b-0">
              <span
                className={`${headlineFont.className} text-[#e2941f] text-xl sm:text-2xl shrink-0 w-20`}
              >
                {c.hora}
              </span>
              <div>
                <p className="text-white text-base sm:text-lg font-medium">{c.actividad}</p>
                {c.detalle && (
                  <p style={{ fontFamily: 'var(--pr-label)' }} className="text-white/60 text-sm mt-1">
                    {c.detalle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
