'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiNavigation } from 'react-icons/fi';

const MAPS_URL = 'https://www.google.com/maps/place/RC+GYM+Terrazas/@-26.81417,-65.323835,15z';

export const ComoLlegar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="como-llegar" className="w-full py-20 lg:py-28 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Cómo llegar
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            En el corazón de
            <span className="block text-red-500">Yerba Buena</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8 items-stretch">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col"
          >
            <div className="flex items-start gap-3 mb-6">
              <div className="size-10 rounded-lg bg-red-500/15 border border-red-500/40 flex items-center justify-center shrink-0">
                <FiMapPin className="text-red-400 size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
                  RC Sede Terrazas
                </p>
                <p className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight">
                  Av. Perón 2400
                </p>
                <p className="text-sm text-white/70 mt-1">Yerba Buena, Tucumán</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                  Estacionamiento
                </p>
                <p className="text-sm lg:text-base text-white/85">
                  Estacionamiento gratuito en la sede.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                  Referencia
                </p>
                <p className="text-sm lg:text-base text-white/85">
                  Sobre Av. Perón, frente a la zona comercial de Yerba Buena.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                  Horario de la sede
                </p>
                <p className="text-sm lg:text-base text-white/85">
                  Lunes a viernes · 5:00 a 23:00
                </p>
                <p className="text-sm lg:text-base text-white/85">
                  Sábados · 9 a 13 y 16 a 20
                </p>
                <p className="text-sm lg:text-base text-white/85">
                  Domingos · 9 a 12 y 17 a 20
                </p>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.02] transition-transform duration-200 text-sm lg:text-base font-black uppercase tracking-wider shadow-lg shadow-red-500/30"
            >
              <FiNavigation className="size-4" />
              Abrir en Google Maps
            </a>
          </motion.div>

          {/* Map iframe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl overflow-hidden border border-white/10 min-h-[320px] lg:min-h-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28486.481761324674!2d-65.32383571424013!3d-26.814170809155144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242c13b357d5f%3A0xfb7fce5f1be7ff6c!2sRC%20GYM%20Terrazas!5e0!3m2!1ses!2sar!4v1780093943345!5m2!1ses!2sar"
              title="Mapa de RC Gym Terrazas"
              className="w-full h-full min-h-[320px] lg:min-h-[480px] block"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
