'use client';

import { useEffect, useState } from 'react';
import { bodyFont, headlineFont } from '@/components/halloween-2026/fonts';
import { JUEGOS } from '@/components/halloween-2026/votacion';

type Paso = 'cargando' | 'elegir' | 'confirmar' | 'listo' | 'ya';

export default function VotacionPage() {
  const [paso, setPaso] = useState<Paso>('cargando');
  const [sel, setSel] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Al entrar: ¿este dispositivo ya votó? (cookie + base; el aviso local evita el parpadeo)
  useEffect(() => {
    try {
      if (localStorage.getItem('hw_voto')) setPaso('ya');
    } catch {
      /* sin localStorage */
    }
    fetch('/api/halloween-votacion', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setPaso(d.voto ? 'ya' : (p) => (p === 'ya' ? 'ya' : 'elegir')))
      .catch(() => setPaso((p) => (p === 'ya' ? 'ya' : 'elegir')));
  }, []);

  const juego = JUEGOS.find((j) => j.id === sel);

  const votar = async () => {
    if (!sel || enviando) return;
    setEnviando(true);
    setError(null);
    try {
      const res = await fetch('/api/halloween-votacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ juego: sel }),
      });
      if (res.ok) {
        try {
          localStorage.setItem('hw_voto', sel);
        } catch {
          /* sin localStorage */
        }
        setPaso('listo');
      } else if (res.status === 409) {
        setPaso('ya');
      } else {
        setError('No pudimos guardar tu voto. Probá de nuevo.');
      }
    } catch {
      setError('No pudimos guardar tu voto. Revisá tu conexión y probá de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  const titulo = `${headlineFont.className} italic font-black uppercase text-[#f3ece2] leading-[0.88]`;

  return (
    <main
      className={`${headlineFont.variable} ${bodyFont.variable} ${bodyFont.className} min-h-svh w-full bg-black text-[#f3ece2] px-6 pt-28 pb-40 flex flex-col items-center`}
    >
      <div className="w-full max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4">Fiesta de Halloween · RC Terrazas</p>

        {paso === 'cargando' && <p className="text-[#f3ece2]/60">Cargando…</p>}

        {(paso === 'elegir' || paso === 'confirmar') && (
          <>
            <h1 className={`${titulo} text-6xl sm:text-7xl`}>
              Votá el
              <br />
              <span className="text-[#f26b1d]">mejor juego</span>
            </h1>
            <p className="mt-5 text-[#f3ece2]/70">Elegí uno. Se vota una sola vez por celular.</p>

            {paso === 'elegir' && (
              <>
                <div role="radiogroup" aria-label="Juegos" className="mt-8 border-t border-white/15">
                  {JUEGOS.map((j, i) => {
                    const activo = sel === j.id;
                    return (
                      <button
                        key={j.id}
                        type="button"
                        role="radio"
                        aria-checked={activo}
                        onClick={() => setSel(j.id)}
                        className={`w-full flex items-center gap-5 border-b border-white/15 py-5 pl-4 pr-3 text-left transition-colors ${
                          activo ? 'bg-[#f26b1d] text-black' : 'hover:bg-white/5'
                        }`}
                      >
                        <span className={`${headlineFont.className} italic font-bold text-xl tabular-nums ${activo ? 'text-black' : 'text-[#f26b1d]'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`${headlineFont.className} italic font-extrabold uppercase text-3xl leading-none`}>{j.nombre}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="fixed inset-x-0 bottom-0 z-40 bg-black/95 border-t border-white/10 px-6 py-4">
                  <div className="max-w-md mx-auto">
                    <button
                      type="button"
                      disabled={!sel}
                      onClick={() => setPaso('confirmar')}
                      className="w-full py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {sel ? 'Votar' : 'Elegí un juego'}
                    </button>
                  </div>
                </div>
              </>
            )}

            {paso === 'confirmar' && juego && (
              <div className="mt-10 border border-white/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3ece2]/60">Tu voto</p>
                <p className={`${titulo} text-4xl mt-3 text-[#f26b1d]`}>{juego.nombre}</p>
                <p className="mt-4 text-sm text-[#f3ece2]/70">Una vez confirmado, no se puede cambiar.</p>
                {error && (
                  <p role="alert" className="mt-4 text-sm text-red-400">
                    {error}
                  </p>
                )}
                <button
                  type="button"
                  onClick={votar}
                  disabled={enviando}
                  className="mt-6 w-full py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                  {enviando ? 'Enviando…' : 'Confirmar voto'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setPaso('elegir');
                  }}
                  disabled={enviando}
                  className="mt-3 w-full py-4 border border-white/30 text-[#f3ece2] text-sm font-semibold uppercase tracking-[0.25em] hover:border-white/70 transition-colors"
                >
                  Cambiar
                </button>
              </div>
            )}
          </>
        )}

        {paso === 'listo' && (
          <>
            <h1 className={`${titulo} text-6xl sm:text-7xl`}>
              Voto
              <br />
              <span className="text-[#f26b1d]">registrado</span>
            </h1>
            <p className="mt-6 text-lg text-[#f3ece2]/80">Gracias por votar. Seguí disfrutando la fiesta.</p>
          </>
        )}

        {paso === 'ya' && (
          <>
            <h1 className={`${titulo} text-6xl sm:text-7xl`}>
              Ya
              <br />
              <span className="text-[#f26b1d]">votaste</span>
            </h1>
            <p className="mt-6 text-lg text-[#f3ece2]/80">Cada celular vota una sola vez. Gracias por participar.</p>
          </>
        )}
      </div>
    </main>
  );
}
