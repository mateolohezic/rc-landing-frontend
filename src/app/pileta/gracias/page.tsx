'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buildWhatsappLink } from '@/components/pileta/constants';
import { trackPileta } from '@/components/pileta/PiletaTracker';

export default function GraciasPage() {
  return (
    <Suspense fallback={<main className="min-h-screen w-full bg-black" />}>
      <GraciasContent />
    </Suspense>
  );
}

function GraciasContent() {
  const params = useSearchParams();
  const nombre = params.get('nombre') || '';
  const plan = params.get('plan') || '';

  const waLink = buildWhatsappLink({ nombre, plan });

  useEffect(() => {
    trackPileta('gracias_view', { plan });
  }, [plan]);

  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 py-20 overflow-x-hidden">
      {/* Radial glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg text-center"
      >
        {/* Check icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          className="mx-auto mb-6 w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl shadow-red-500/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h1 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95] mb-4">
          {nombre ? `¡Listo${nombre ? `, ${nombre.split(' ')[0]}` : ''}!` : '¡Listo!'}
          <span className="block text-red-500">Tu cupo está reservado</span>
        </h1>

        <p className="text-base lg:text-lg text-white/75 mb-10">
          Te contactamos por <span className="text-white font-bold">WhatsApp</span> para
          confirmar tu plan{plan ? ` (${plan})` : ''} y coordinar el pago.
        </p>

        {/* Primary CTA */}
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPileta('gracias_wa_click', { plan })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] transition-colors text-black font-black uppercase tracking-wider text-base mb-4"
        >
          Escribirnos por WhatsApp
        </motion.a>

        <Link
          href="/pileta"
          className="text-sm text-white/40 hover:text-white/70 transition-colors underline"
        >
          Volver a la página de la pileta
        </Link>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-left"
        >
          <h2 className="text-sm uppercase tracking-widest text-red-400 font-bold mb-3">
            ¿Qué pasa ahora?
          </h2>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">1.</span>
              Recibís un mensaje nuestro por WhatsApp.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">2.</span>
              Confirmamos tu plan y te explicamos las opciones de pago.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold shrink-0">3.</span>
              Cuando abra la pileta, sos de los primeros en entrar.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  );
}
