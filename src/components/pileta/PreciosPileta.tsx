'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon, MemberCardIcon } from '@/icons';
import { PLANES, type PlanId } from './constants';
import { trackPileta } from './PiletaTracker';

const formatPrice = (n: number) => n.toLocaleString('es-AR');

const STACK_INCLUYE = [
  { t: 'Pileta climatizada todo el año', d: '25 m semiolímpica' },
  { t: 'Vestuarios + duchas + lockers', d: 'Como en RC, premium' },
  { t: 'Sede Terrazas · Yerba Buena', d: 'En el corazón de la ciudad' },
  { t: 'Comunidad RC', d: '+30 años · 4.5 en Google · +1.000 socios' },
  { t: 'Primera clase gratis', d: 'Si no te gusta, no pagás nada' },
  { t: 'Atención por WhatsApp', d: 'Te escribimos para confirmar tu plan' },
];

const planById = (id: PlanId) => PLANES.find((p) => p.id === id)!;

export const PreciosPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nat2 = planById('natacion-2x');
  const nat3 = planById('natacion-3x');
  const libre = planById('libre');
  const aqua = planById('aquagym');

  return (
    <section id="planes" className="w-full py-20 lg:py-28 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Planes de preventa · Mayo 2026
          </p>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tight uppercase leading-tight">
            Elegí cómo querés
            <span className="block text-red-500">entrenar</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Precios fijos hasta el lunes 25 de mayo. Después de la apertura los planes
            pueden ajustarse.
          </p>
        </motion.div>

        {/* Stack — qué incluye cualquier plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 lg:mb-14 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 lg:p-8"
        >
          <p className="text-center text-xs lg:text-sm uppercase tracking-widest text-red-400 font-bold mb-5">
            Cualquier plan que elijas, te llevás todo esto
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm lg:text-base">
            {STACK_INCLUYE.map((b) => (
              <li key={b.t} className="flex items-start gap-3">
                <CheckIcon className="text-red-500 shrink-0 mt-1" />
                <div className="flex-1 leading-tight">
                  <p className="text-white font-bold">{b.t}</p>
                  <p className="text-white/55 text-xs lg:text-sm mt-0.5">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3 planes: Natación dirigida (con 2 frecuencias) · Nado libre · Aquagym */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {/* Natación dirigida — destacado, con dual pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative rounded-2xl p-6 lg:p-7 flex flex-col bg-gradient-to-br from-red-600/15 via-neutral-900 to-neutral-900 border-2 border-red-500 shadow-2xl shadow-red-600/20 lg:scale-[1.03]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-red-500 text-xs font-black uppercase tracking-widest whitespace-nowrap">
              Más elegido
            </div>
            <h3 className="text-lg lg:text-xl font-bold uppercase leading-tight">
              Natación dirigida
            </h3>
            <p className="text-xs lg:text-sm text-white/50 uppercase tracking-wider mt-1">
              Con profe que te corrige
            </p>

            {/* Dual pricing: 2x y 3x semana */}
            <div className="mt-6 mb-6 space-y-3">
              <div className="flex items-baseline justify-between gap-2 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10">
                <span className="text-xs lg:text-sm uppercase tracking-wider text-white/70 font-bold">
                  2x semana
                </span>
                <div className="flex items-baseline">
                  <span className="text-xs text-white/50 mr-0.5">$</span>
                  <span className="text-2xl lg:text-3xl font-black tracking-tight tabular-nums">
                    {formatPrice(nat2.precio)}
                  </span>
                  <span className="text-xs text-white/50 ml-1">/mes</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/40">
                <span className="text-xs lg:text-sm uppercase tracking-wider text-red-300 font-bold">
                  3x semana
                </span>
                <div className="flex items-baseline">
                  <span className="text-xs text-red-300/70 mr-0.5">$</span>
                  <span className="text-2xl lg:text-3xl font-black tracking-tight tabular-nums text-white">
                    {formatPrice(nat3.precio)}
                  </span>
                  <span className="text-xs text-red-300/70 ml-1">/mes</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 mb-6 flex-1">
              {nat3.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                  <CheckIcon className="text-red-500 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#reservar"
              onClick={() => trackPileta('plan_click', { plan: 'natacion' })}
              className="block w-full py-3 rounded-lg text-sm font-black uppercase tracking-wider text-center bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 transition-colors duration-300"
            >
              Quiero este plan
            </Link>
          </motion.div>

          {/* Nado libre */}
          <PlanCard plan={libre} delay={0.35} isInView={isInView} />

          {/* Aquagym */}
          <PlanCard plan={aqua} delay={0.45} isInView={isInView} />
        </div>

        {/* Combo socio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 lg:mt-14 relative overflow-hidden rounded-2xl border-2 border-red-500/40 bg-gradient-to-r from-red-950/40 via-neutral-900 to-red-950/40 p-6 lg:p-10"
        >
          <div className="grid lg:grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-10 text-center lg:text-left">
            <div className="size-16 lg:size-20 rounded-full bg-red-600/20 border border-red-500/50 flex items-center justify-center shrink-0 mx-auto lg:mx-0">
              <MemberCardIcon className="text-2xl lg:text-3xl text-red-500" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-red-400 uppercase tracking-widest text-xs font-bold mb-2">
                Si ya sos socio del gym
              </p>
              <h3 className="text-2xl lg:text-4xl font-black tracking-tight uppercase leading-tight">
                Sumá pileta con
                <span className="block text-red-500 mt-1">20% off en tu cuota actual</span>
              </h3>
              <p className="mt-4 text-white/85 lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Si ya pagás el gym, sumar pileta te queda más barato que pagar los dos por separado.
                <span className="text-white/60"> El monto exacto depende del plan que elijas — te lo calculamos por WhatsApp.</span>
              </p>

              {/* Ejemplo */}
              <div className="mt-5 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs lg:text-sm">
                <span className="text-white/50 uppercase tracking-wider font-bold">Ejemplo:</span>
                <span className="text-white/85 text-center sm:text-left">
                  Si tu plan de gym es <b className="text-white">$100.000</b>, sumar pileta te queda en{' '}
                  <b className="text-red-300">+$80.000/mes</b> (en vez de +$100.000).
                </span>
              </div>
            </div>

            <Link
              href="#reservar"
              onClick={() => trackPileta('combo_socio_click')}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-sm lg:text-base font-black uppercase tracking-wider whitespace-nowrap transition-colors duration-300 mx-auto lg:mx-0"
            >
              Quiero el combo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: ReturnType<typeof planById>;
  delay: number;
  isInView: boolean;
}

const PlanCard = ({ plan, delay, isInView }: PlanCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.5, delay }}
    className="relative rounded-2xl p-6 lg:p-7 flex flex-col bg-neutral-900/70 border border-white/10 hover:border-red-500/30 transition-colors duration-300"
  >
    <h3 className="text-lg lg:text-xl font-bold uppercase leading-tight">{plan.titulo}</h3>
    <p className="text-xs lg:text-sm text-white/50 uppercase tracking-wider mt-1">
      {plan.bajada}
    </p>

    <div className="mt-6 mb-6 flex items-baseline gap-1">
      <span className="text-sm text-white/50 self-start mt-2">$</span>
      <span className="text-4xl lg:text-5xl font-black tracking-tight text-white tabular-nums">
        {formatPrice(plan.precio)}
      </span>
      <span className="text-sm text-white/60 ml-1">{plan.unidad}</span>
    </div>

    <ul className="space-y-2.5 mb-6 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-white/80">
          <CheckIcon className="text-red-500 shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <Link
      href="#reservar"
      onClick={() => trackPileta('plan_click', { plan: plan.id })}
      className="block w-full py-3 rounded-lg text-sm font-black uppercase tracking-wider text-center bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors duration-300"
    >
      Quiero este plan
    </Link>
  </motion.div>
);
