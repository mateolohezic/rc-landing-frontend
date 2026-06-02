'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlanCard } from '@/components';

interface SedePrecios {
    title: string;
    mensual: number;
    debitoAutomatico?: number;
    trimestral: number;
    semestral: number;
    soloEfectivoPromos?: boolean;
}

const preciosPorSede: SedePrecios[] = [
    { title: "Barrio Norte", mensual: 70000, trimestral: 178500, semestral: 336000, soloEfectivoPromos: true },
    { title: "Aconquija", mensual: 80000, debitoAutomatico: 64000, trimestral: 200000, semestral: 380000 },
    { title: "Barrio Sur", mensual: 61000, debitoAutomatico: 48800, trimestral: 155400, semestral: 292800 },
    { title: "Tafí Viejo", mensual: 72000, debitoAutomatico: 57000, trimestral: 183000, semestral: 342000 },
    { title: "Terrazas", mensual: 90000, debitoAutomatico: 72000, trimestral: 243000, semestral: 459000 },
    { title: "Epico", mensual: 80000, debitoAutomatico: 64000, trimestral: 216000, semestral: 408000 },
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
                    Encontrá tu <span className="text-red-500">cuota</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 max-w-xl mx-auto text-white/50 text-lg"
                >
                    {sede.debitoAutomatico
                        ? "El precio más bajo siempre es con débito automático."
                        : "Seleccioná tu sede y conocé nuestros planes."}
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
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    <PlanCard
                        title="Mensual"
                        precio={sede.mensual}
                        precioDebito={sede.debitoAutomatico}
                        subtitulo={sede.debitoAutomatico ? "Tu cuota más baja" : "Mes a mes"}
                        descripcion={sede.debitoAutomatico
                            ? "La cuota más baja de RC, debitada cada mes."
                            : "Probá RC, mes a mes."}
                        cta={sede.debitoAutomatico ? "Sumate con débito" : "Sumate a RC"}
                        destacado={Boolean(sede.debitoAutomatico)}
                    />
                    <PlanCard
                        title="Trimestral"
                        precio={sede.trimestral}
                        subtitulo="Pago único · 3 meses"
                        descripcion="Pagás una vez y entrenás 3 meses."
                        cta="Entrenar 3 meses"
                    />
                    <PlanCard
                        title="Semestral"
                        precio={sede.semestral}
                        subtitulo="Pago único · 6 meses"
                        descripcion="Pagás una vez y entrenás 6 meses."
                        cta="Entrenar 6 meses"
                        destacado={!sede.debitoAutomatico}
                    />
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
                    * Trimestral y semestral disponibles únicamente abonando en efectivo.
                </motion.p>
            )}
        </section>
    );
};
