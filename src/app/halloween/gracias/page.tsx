'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { trackMetaEvent } from '@/components';
import { trackHalloween } from '@/components/halloween-2026';
import { DIA_DE_PRUEBA_URL, EVENTO, MAPS_URL, buildCalendarLink, buildShareLink, buildWhatsappLink } from '@/components/halloween-2026/constants';
import { bodyFont, headlineFont } from '@/components/halloween-2026/fonts';

export default function GraciasHalloweenPage() {
  return (
    <Suspense fallback={<main className="min-h-screen w-full bg-black" />}>
      <GraciasContent />
    </Suspense>
  );
}

function GraciasContent() {
  const params = useSearchParams();
  const nombre = (params.get('nombre') || '').trim();
  const acompanantes = Number(params.get('acompanantes') || '0');
  const concurso = params.get('concurso') === '1';
  const socio = params.get('socio') || '';
  const primerNombre = nombre.split(/\s+/)[0];

  useEffect(() => {
    // Evita contar dos veces si la persona recarga la página de gracias.
    try {
      if (sessionStorage.getItem('hw_gracias_tracked')) return;
      sessionStorage.setItem('hw_gracias_tracked', '1');
    } catch {
      /* sin sessionStorage: se dispara igual */
    }
    trackHalloween('gracias_view', { concurso, socio });
    // Evento estándar de Meta que optimiza la campaña: inscripción confirmada.
    trackMetaEvent('Lead', {
      content_name: 'halloween-2026',
      content_category: socio === 'si' ? 'socio' : 'no-socio',
      currency: 'ARS',
      value: 0,
    });
  }, [concurso, socio]);

  const botonPrincipal =
    'block w-full py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] transition-colors';

  return (
    <main
      className={`${headlineFont.variable} ${bodyFont.variable} ${bodyFont.className} min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 py-28 overflow-x-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-5">
          {primerNombre ? `Gracias, ${primerNombre}` : 'Gracias'}
        </p>
        <h1 className={`${headlineFont.className} italic font-black uppercase text-6xl sm:text-8xl leading-[0.85] text-[#f3ece2] mb-8`}>
          Ya estás
          <br />
          adentro
        </h1>

        <p className="text-[#f3ece2]/80 leading-relaxed">
          Tu inscripción quedó registrada
          {acompanantes > 0 ? `, con ${acompanantes} ${acompanantes > 1 ? 'personas' : 'persona'} más` : ''}.
          {concurso ? ' Marcaste que querés participar del concurso de disfraces.' : ''}
        </p>

        <dl className="mt-8 border-t border-white/15">
          {[
            ['Cuándo', `${EVENTO.fechaLarga}, ${EVENTO.horario.toLowerCase()}`],
            ['Dónde', `${EVENTO.lugar}, ${EVENTO.direccion}`],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-6 border-b border-white/15 py-4">
              <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.3em] text-[#f26b1d] pt-0.5">{k}</dt>
              <dd className="text-[#f3ece2]">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 space-y-3">
          <a
            href={buildCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHalloween('gracias_calendar_click')}
            className={`${botonPrincipal} bg-[#c8ff2e] text-black hover:bg-[#dcff6e]`}
          >
            Agregar a mi calendario
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHalloween('gracias_maps_click')}
            className={`${botonPrincipal} border border-white/30 text-[#f3ece2] hover:border-white/70`}
          >
            Cómo llegar
          </a>
          <a
            href={buildShareLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHalloween('gracias_share_click')}
            className={`${botonPrincipal} border border-white/30 text-[#f3ece2] hover:border-white/70`}
          >
            Invitar a alguien por WhatsApp
          </a>
        </div>

        {socio === 'no' && DIA_DE_PRUEBA_URL && (
          <div className="mt-10 border-t border-white/15 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f26b1d] mb-3">Antes de la fiesta</p>
            <p className="text-[#f3ece2]/80 leading-relaxed mb-4">
              Si todavía no entrenás en RC, podés venir antes a probar un día gratis y conocer las instalaciones.
            </p>
            <a
              href={DIA_DE_PRUEBA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackHalloween('gracias_dia_prueba_click')}
              className={`${botonPrincipal} border border-[#f26b1d] text-[#f26b1d] hover:bg-[#f26b1d] hover:text-black`}
            >
              Pedir mi día de prueba gratis
            </a>
          </div>
        )}

        <p className="mt-8 text-sm text-[#f3ece2]/60">
          ¿Alguna consulta? Escribinos por{' '}
          <a
            href={buildWhatsappLink(nombre)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHalloween('gracias_wa_click')}
            className="underline underline-offset-4 hover:text-[#f3ece2]"
          >
            WhatsApp
          </a>
          .
        </p>

        <Link href="/halloween" className="mt-6 inline-block text-sm text-[#f3ece2]/60 underline underline-offset-4 hover:text-[#f3ece2]">
          Volver a la página de la fiesta
        </Link>
      </motion.div>
    </main>
  );
}
