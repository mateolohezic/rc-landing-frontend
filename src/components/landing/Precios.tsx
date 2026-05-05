'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlanCard } from '@/components';

interface SedePrecios {
    title: string;
    mensual: number;
    trimestral: number;
    semestral: number;
    anual?: number;
    soloEfectivoPromos?: boolean;
}

const preciosPorSede: SedePrecios[] = [
    { title: "Barrio Norte", mensual: 60000, trimestral: 153000, semestral: 288000, anual: 540000, soloEfectivoPromos: true },
    { title: "Aconquija", mensual: 72000, trimestral: 183600, semestral: 345600 },
    { title: "Barrio Sur", mensual: 56000, trimestral: 142800, semestral: 268800 },
    { title: "Tafí Viejo", mensual: 66000, trimestral: 168300, semestral: 316800 },
    { title: "Terrazas", mensual: 80000, trimestral: 204000, semestral: 384000 },
    { title: "Epico", mensual: 72000, trimestral: 194400, semestral: 367200 },
];

export const Precios = () => {
    const [sede, setSede] = useState(preciosPorSede[0]);

    return (
        <section id="precios" className="w-full max-w-7xl mx-auto px-6 section-padding">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Elegí tu <span className="text-red-500">plan</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 max-w-xl mx-auto text-white/50 text-lg"
                >
                    Seleccioná tu sede y conocé nuestros precios.
                </motion.p>
            </div>

            {/* Sede selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {preciosPorSede.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => setSede(p)}
                        className={`px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-medium ${
                            sede.title === p.title
                                ? 'bg-red-600/20 border-red-500/50 text-white shadow-lg shadow-red-600/10'
                                : 'glass-card hover:bg-white/[0.06] text-white/60 hover:text-white'
                        }`}
                    >
                        {p.title}
                    </button>
                ))}
            </div>

            {/* Plans */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={sede.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`grid grid-cols-1 gap-6 ${sede.anual ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}
                >
                    <PlanCard
                        title="Mensual"
                        precio={sede.mensual}
                        subtitulo="Plan flexible"
                        descripcion="Ideal para tu primer acercamiento a la familia RC."
                    />
                    <PlanCard
                        title="Trimestral"
                        precio={sede.trimestral}
                        subtitulo="Compromiso que rinde"
                        descripcion="Entrená 3 meses con un solo pago. Perfecto para establecer una rutina."
                    />
                    <PlanCard
                        title="Semestral"
                        precio={sede.semestral}
                        subtitulo="Mejor precio-beneficio"
                        descripcion="Plan ideal para quienes ya están decididos. Ahorro y constancia asegurada."
                        destacado
                    />
                    {sede.anual && (
                        <PlanCard
                            title="Anual"
                            precio={sede.anual}
                            subtitulo="Máximo ahorro"
                            descripcion="El mejor precio del año. Para los que viven el RC todo el año."
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {sede.soloEfectivoPromos && (
                <motion.p
                    key={`nota-${sede.title}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center text-sm text-white/40"
                >
                    * Trimestral, semestral y anual disponibles únicamente abonando en efectivo.
                </motion.p>
            )}
        </section>
    );
};
