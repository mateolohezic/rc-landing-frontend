'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlanCard } from '@/components';
import { sedes } from '@/data/sedes';

// Los precios viven en src/data/sedes.ts (fuente única, también la usan /links/[sede]).
// Trimestral y semestral se pagan en 3 y 6 cuotas sin interes con tarjeta Macro.
// Barrio Norte no tiene debito automatico y sus planes trimestral/semestral son solo en efectivo.
const ORDEN = ['barrio-sur', 'barrio-norte', 'aconquija', 'tafi-viejo', 'terrazas', 'epico'];
const preciosPorSede = ORDEN.flatMap((slug) => {
    const s = sedes.find((x) => x.slug === slug);
    return s?.precios ? [{ title: s.title, ...s.precios }] : [];
});

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
