'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const EVENT_DATE = new Date('2025-10-31T19:00:00').getTime();

export const UrgencySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="w-full py-24 bg-gradient-to-br from-red-950 via-red-900 to-red-950">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-7xl font-highrise-bold uppercase mb-6">
            Quedan pocos cupos disponibles
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Este evento tiene capacidad limitada.
          </p>
          <p className="text-2xl lg:text-3xl font-black mb-10">
            Si no reservás ahora, te quedás afuera.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 lg:gap-4 mb-10"
        >
          {[
            { value: timeLeft.days, label: 'D' },
            { value: timeLeft.hours, label: 'H' },
            { value: timeLeft.minutes, label: 'M' },
            { value: timeLeft.seconds, label: 'S' },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1 }}
              className="lg:bg-black/50 lg:border-2 LG:border-orange-400 rounded-lg lg:p-8 lg:min-w-[120px]"
            >
              <div className="text-6xl font-highrise-bold text-orange-400">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-2xl lg:text-base uppercase mt-2">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={process.env.NEXT_PUBLIC_FORM_HALLOWEEN || '/'}
            target="_blank"
            className="inline-block px-10 py-4 text-2xl lg:text-3xl font-black bg-orange-200 text-black rounded-lg uppercase hover:bg-orange-300 transition-colors duration-300 shadow-2xl shadow-orange-400/50"
          >
            Asegurar mi cupo ahora 
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 text-sm lg:text-base text-white/70"
        >
          CUPOS LIMITADOS
        </motion.p>
      </div>
    </section>
  );
}