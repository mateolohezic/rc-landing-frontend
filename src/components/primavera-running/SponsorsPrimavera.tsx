import { SPONSORS } from './constants';

// No renderiza nada hasta que SPONSORS tenga marcas confirmadas.
export const SponsorsPrimavera = () => {
  if (SPONSORS.length === 0) return null;

  return (
    <section className="w-full bg-black px-6 py-16 border-t border-white/10 text-center">
      <p style={{ fontFamily: 'var(--pr-label)' }} className="text-sm uppercase tracking-[0.4em] text-white/60 mb-6">
        Nos acompañan
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-2xl mx-auto">
        {SPONSORS.map((s) => (
          <span
            key={s}
            style={{ fontFamily: 'var(--pr-label)' }}
            className="text-white/80 text-base sm:text-lg tracking-wide"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
};
