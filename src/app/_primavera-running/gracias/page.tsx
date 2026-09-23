'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buildWhatsappLink, buildCalendarLink } from '@/components/primavera-running/constants';
import { trackPrimavera } from '@/components/primavera-running';
import { headlineFont, labelFont } from '@/components/primavera-running/fonts';
import { trackMetaEvent } from '@/components';

export default function GraciasPrimaveraPage() {
  return (
    <Suspense fallback={<main className="min-h-screen w-full bg-black" />}>
      <GraciasContent />
    </Suspense>
  );
}

function GraciasContent() {
  const params = useSearchParams();
  const nombre = params.get('nombre') || '';
  const actividad = params.get('actividad') || '';
  const acompanantes = Number(params.get('acompanantes') || '0');

  const waLink = buildWhatsappLink({ nombre, actividad });
  const calendarLink = buildCalendarLink();

  useEffect(() => {
    trackPrimavera('gracias_view', { actividad });
    trackMetaEvent('CompleteRegistration', {
      content_name: 'primavera-running',
      content_category: actividad || 'sin-actividad',
      currency: 'ARS',
      value: 0,
    });
  }, [actividad]);

  return (
    <main
      className={`${headlineFont.variable} ${labelFont.variable} min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 py-20 overflow-x-hidden text-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <p style={{ fontFamily: 'var(--pr-label)' }} className="text-[#e2941f] text-sm uppercase tracking-[0.4em] mb-6">
          {nombre ? `Gracias, ${nombre.split(' ')[0]}` : 'Gracias'}
        </p>

        <h1 className={`${headlineFont.className} text-[#fbf1dd] text-5xl sm:text-7xl leading-[0.95] uppercase mb-6`}>
          Ya estás
          <br />
          adentro
        </h1>

        <p className="text-base text-white/75 mb-2">
          Te anotaste{actividad ? ` a ${actividad}` : ''}
          {acompanantes > 0 ? ` con ${acompanantes} acompañante${acompanantes > 1 ? 's' : ''}` : ''}.
        </p>
        <p className="text-base text-white/75 mb-10">Escribinos por WhatsApp para confirmar tu lugar.</p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPrimavera('gracias_wa_click', { actividad })}
          className="block w-full py-4 bg-[#25D366] text-black text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#1ebe5a] transition-colors mb-3"
        >
          Escribirnos por WhatsApp
        </a>

        <a
          href={calendarLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPrimavera('gracias_calendar_click', { actividad })}
          className="block w-full py-4 border border-white/30 text-white text-sm uppercase tracking-[0.3em] font-bold hover:border-white/60 transition-colors mb-6"
        >
          Agregar a mi calendario
        </a>

        <Link href="/primavera-running" className="text-sm text-white/60 hover:text-white/80 transition-colors underline">
          Volver a la página del evento
        </Link>

        <div className="mt-14 text-left border-t border-white/10 pt-8">
          <h2 style={{ fontFamily: 'var(--pr-label)' }} className="text-[#e2941f] text-sm uppercase tracking-[0.4em] mb-4">
            Para ese día
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Ropa cómoda, calzado deportivo, agua y protector solar.</li>
            <li>Domingo 20/09, en RC Gym Terrazas.</li>
            <li>Terminamos en la terraza de Alterpoint. Podés venir en familia.</li>
          </ul>
        </div>
      </motion.div>
    </main>
  );
}
