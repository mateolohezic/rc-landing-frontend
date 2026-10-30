'use client';

import { useState } from 'react';
import { bodyFont, headlineFont } from '@/components/halloween-2026/fonts';

type Resultado = { id: string; nombre: string; votos: number };
type Datos = { total: number; resultados: Resultado[]; ganadores: Resultado[] };

export default function AdminVotacionPage() {
  const [datos, setDatos] = useState<Datos | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ver = async () => {
    setCargando(true);
    setError(null);
    try {
      const res = await fetch('/api/halloween-votacion/resultados', { cache: 'no-store' });
      if (!res.ok) throw new Error('fallo');
      setDatos(await res.json());
    } catch {
      setError('No se pudieron leer los resultados. Probá de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  const titulo = `${headlineFont.className} italic font-black uppercase text-[#f3ece2] leading-[0.88]`;
  const max = datos ? Math.max(1, ...datos.resultados.map((r) => r.votos)) : 1;
  const empate = !!datos && datos.ganadores.length > 1;

  return (
    <main className={`${headlineFont.variable} ${bodyFont.variable} ${bodyFont.className} min-h-svh w-full bg-black text-[#f3ece2] px-6 pt-28 pb-24 flex flex-col items-center`}>
      <div className="w-full max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4">Votación · Resultados</p>
        <h1 className={`${titulo} text-6xl sm:text-7xl`}>
          Mejor
          <br />
          <span className="text-[#f26b1d]">juego</span>
        </h1>

        <button
          type="button"
          onClick={ver}
          disabled={cargando}
          className="mt-8 w-full py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          {cargando ? 'Leyendo…' : datos ? 'Actualizar' : 'Ver resultados'}
        </button>

        {error && (
          <p role="alert" className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        {datos && (
          <div className="mt-10">
            {datos.total === 0 ? (
              <p className="text-[#f3ece2]/70">Todavía no hay votos.</p>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3ece2]/60">{empate ? 'Empate' : 'Ganó'}</p>
                <div className="mt-2 space-y-1">
                  {datos.ganadores.map((g) => (
                    <p key={g.id} className={`${titulo} text-5xl text-[#f26b1d]`}>
                      {g.nombre}
                    </p>
                  ))}
                </div>
                <p className="mt-3 text-[#f3ece2]/70">
                  {datos.ganadores[0].votos} {datos.ganadores[0].votos === 1 ? 'voto' : 'votos'} · {datos.total} en total
                </p>
              </>
            )}

            <ul className="mt-10 border-t border-white/15">
              {datos.resultados.map((r) => (
                <li key={r.id} className="border-b border-white/15 py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className={`${headlineFont.className} italic font-bold uppercase text-xl`}>{r.nombre}</span>
                    <span className={`${headlineFont.className} italic font-black text-2xl tabular-nums text-[#f26b1d]`}>{r.votos}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-white/10">
                    <div className="h-full bg-[#f26b1d]" style={{ width: `${(r.votos / max) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
