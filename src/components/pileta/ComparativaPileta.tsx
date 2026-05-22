'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { RCLogo } from '../RCLogo';

interface Row {
  feature: string;
  rc: string;
  otros: string;
  rcStrong?: boolean;
}

const rows: Row[] = [
  {
    feature: 'Pileta climatizada',
    rc: 'Todo el año, todos los días',
    otros: 'Estacional o no climatizada',
    rcStrong: true,
  },
  {
    feature: 'Cupos por clase',
    rc: '15 adultos · 10 niños',
    otros: 'Clases masivas (30+)',
    rcStrong: true,
  },
  {
    feature: 'Acompañamiento profesional',
    rc: 'Corrigen técnica clase a clase',
    otros: 'Te tiran a nadar y miran al fondo',
  },
  {
    feature: 'Ubicación',
    rc: 'Corazón de Yerba Buena · Terrazas',
    otros: 'En otras zonas de la ciudad',
    rcStrong: true,
  },
  {
    feature: 'Combo Gym + Pileta',
    rc: 'Sumás pileta a tu cuota actual',
    otros: 'Solo pileta · sin gimnasio',
  },
  {
    feature: 'Vestuarios, duchas, lockers',
    rc: 'Como en RC, calidad gym premium',
    otros: 'Básico · uso compartido',
  },
  {
    feature: 'Trayectoria',
    rc: '+30 años · +3.000 socios · 6 sedes',
    otros: 'Varía según el lugar',
  },
];

export const ComparativaPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            ¿Por qué RC?
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            Lo que vas a
            <span className="block text-red-500">encontrar</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Mismo deporte, distinta experiencia. Lo que vas a encontrar acá y normalmente no
            está junto en otro lado.
          </p>
        </motion.div>

        {/* Tabla comparativa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-white/10 bg-neutral-950/60 overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1.5fr_1fr_1fr] border-b border-white/10 bg-black/40">
            <div className="p-3 lg:p-5" />
            <div className="p-3 lg:p-5 text-center bg-gradient-to-b from-red-600/15 to-transparent border-l border-white/10">
              <div className="size-8 lg:size-10 mx-auto mb-1.5 lg:mb-2 rounded-lg bg-black/50 border border-red-500/40 flex items-center justify-center p-1">
                <RCLogo className="w-full h-full text-red-500 fill-red-500" />
              </div>
              <p className="text-[10px] lg:text-sm font-black uppercase tracking-widest text-red-400 leading-tight">
                Con nosotros
              </p>
            </div>
            <div className="p-3 lg:p-5 text-center border-l border-white/10">
              <div className="size-8 lg:size-10 mx-auto mb-1.5 lg:mb-2 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/40 text-base lg:text-lg">
                ?
              </div>
              <p className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-white/50 leading-tight">
                Otros
              </p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <motion.div
              key={r.feature}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
              className={`grid grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1.5fr_1fr_1fr] ${
                i !== rows.length - 1 ? 'border-b border-white/5' : ''
              }`}
            >
              <div className="p-3 lg:p-5 flex items-center">
                <span className="text-xs lg:text-base text-white/85 font-bold leading-tight">
                  {r.feature}
                </span>
              </div>
              <div
                className={`p-3 lg:p-5 border-l border-white/10 flex items-start gap-2 lg:gap-3 ${
                  r.rcStrong ? 'bg-red-600/[0.06]' : ''
                }`}
              >
                <FiCheck className="text-red-500 shrink-0 mt-0.5 text-lg lg:text-xl" />
                <span
                  className={`text-xs lg:text-sm leading-snug ${
                    r.rcStrong ? 'text-white font-bold' : 'text-white/90'
                  }`}
                >
                  {r.rc}
                </span>
              </div>
              <div className="p-3 lg:p-5 border-l border-white/10 flex items-start gap-2 lg:gap-3">
                <FiX className="text-white/30 shrink-0 mt-0.5 text-lg lg:text-xl" />
                <span className="text-xs lg:text-sm text-white/50 leading-snug">{r.otros}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
