'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlanCard } from '@/components';

const preciosPorSede = [
  {
    title: "Barrio Norte",
    mensual: 45000,
    trimestral: 114750,
    semestral: 216000,
  },
  {
    title: "Yerba Buena",
    mensual: 65000,
    trimestral: 175500,
    semestral: 331500,
  },
  {
    title: "Barrio Sur",
    mensual: 49400,
    trimestral: 126000,
    semestral: 237000,
  },
  {
    title: "Tafí Viejo",
    mensual: 55000,
    trimestral: 140400,
    semestral: 264000,
  },
  {
    title: "Terrazas",
    mensual: 70000,
    trimestral: 178500,
    semestral: 336000,
  },
];


export const Precios = () => {
    const [sede, setSede] = useState(preciosPorSede[0]);

    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl lg:text-8xl font-highrise-bold uppercase"
            >
                Elegí tu sede <br /> <span className="text__outline">y conocé los precios</span>
            </motion.h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                {preciosPorSede.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => setSede(p)}
                        className={`px-5 py-2 rounded-full border transition-all uppercase text-sm font-semibold ${
                        sede.title === p.title
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-zinc-800 border-white/20 hover:border-white/40'
                        }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={sede.title}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <PlanCard 
                        title="Mensual"
                        precio={sede.mensual}
                        subtitulo="Plan flexible"
                        descripcion="Ideal para aquellos que quieren tener su primer acercamiento a la familia RC."
                    />
                    <PlanCard 
                        title="Trimestral"
                        precio={sede.trimestral}
                        subtitulo="Compromiso que rinde"
                        descripcion="Entrená 3 meses con un solo pago. Perfecto para establecer una rutina constante."
                    />
                    <PlanCard 
                        title="Semestral"
                        precio={sede.semestral}
                        subtitulo="Mejor precio-beneficio"
                        descripcion="Plan ideal para quienes ya están decididos a buscar su bienestar. Ahorro y constancia asegurada."
                        destacado
                    />
                </motion.div>
            </AnimatePresence>
        </section>
    );
};