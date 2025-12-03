'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const preciosPorSede = [
  {
    title: "Terrazas",
    precioActualizado: 237000,
    precioBlackRC: 168000,
    ahorro: 69000,
  },
  {
    title: "Aconquija",
    precioActualizado: 216000,
    precioBlackRC: 156000,
    ahorro: 60000,
  },
  {
    title: "Barrio Sur",
    precioActualizado: 162000,
    precioBlackRC: 118560,
    ahorro: 43440,
  },
  {
    title: "Tafí Viejo",
    precioActualizado: 181500,
    precioBlackRC: 145200,
    ahorro: 36300,
  },
];

export const PreciosBlackRC = () => {
    const [sede, setSede] = useState(preciosPorSede[0]);

    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 pt-24 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase">
                    Elegí tu sede <br /><span className="text-red-500">y ahorrá en grande</span>
                </h2>
                <p className="mt-4 text-xl lg:text-2xl">Precio congelado + pago único en efectivo o transferencia</p>
            </motion.div>
            <div className="mt-4 lg:mt-8 grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3">
                {preciosPorSede.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setSede(s)}
                        className={`px-6 py-3 rounded-full border-2 transition-all uppercase text-base font-bold ${sede.title === s.title ? 'bg-red-600 border-red-600 text-white lg:scale-110' : 'bg-neutral-900 border-white/20 hover:border-red-500/50 hover:scale-105'}`}
                    >
                        {s.title}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={sede.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-neutral-900 to-black border-4 border-red-600 rounded-3xl p-8 lg:p-12 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="w-fit bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase">Ahorrás ${sede.ahorro.toLocaleString('es-AR')}</div>
                        <h3 className="mt-4 text-4xl lg:text-5xl font-bold uppercase mb-8">Pase Trimestral <br />{sede.title}</h3>
                        <div className="mb-6">
                            <p className="text-lg text-white/60 mb-2">Precio con actualización:</p>
                            <div className="text-4xl lg:text-5xl font-highrise-bold text-white/50 relative inline-block">
                                <span className="relative">
                                    <small className="text-2xl">$</small>
                                    {sede.precioActualizado.toLocaleString('es-AR')}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-1 bg-red-500 rotate-12" />
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="bg-red-600/20 border-2 border-red-500 rounded-2xl p-6 mb-8">
                            <p className="text-xl font-bold uppercase text-red-400 mb-2">Tu precio BLACK RC</p>
                            <div className="text-7xl lg:text-8xl font-highrise-bold text-white">
                                <small className="text-4xl">$</small>
                                {sede.precioBlackRC.toLocaleString('es-AR')}
                            </div>
                            <p className="mt-4 text-sm text-white/70">Pago único en efectivo o transferencia</p>
                        </div>
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full hidden lg:block" />
                                <span className="text-lg">Precio congelado (evitás el aumento de diciembre)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full hidden lg:block" />
                                <span className="text-lg">10 días para pausar por vacaciones</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full hidden lg:block" />
                                <span className="text-lg">Acceso a todas las clases y actividades</span>
                            </div>
                        </div>
                        <Link
                            href={process.env.NEXT_PUBLIC_FORM_BLACK_RC || '/'}
                            target="_blank"
                            className="w-full block text-center px-8 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-xl font-bold uppercase hover:shadow-xl hover:shadow-red-500/50 transition-all"
                        >
                            Contratar ahora
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 lg:mt-12 text-center"
            >
                <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-6 py-4">
                    <p className="text-yellow-500 font-semibold">⚡ Cupos limitados por sede • Válido solo del 28/11 al 5/12</p>
                </div>
            </motion.div>
        </section>
    );
};