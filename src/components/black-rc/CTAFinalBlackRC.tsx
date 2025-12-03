'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

export const CTAFinalBlackRC = () => {
    return (
        <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-black via-red-950 to-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
            <div className="w-full max-w-5xl px-4 xl:px-0 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase leading-none mb-6">
                        <span className="block text-white">No te quedes</span>
                        <span className="block text-red-500">afuera</span>
                    </h2>
                    <p className="text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto">
                        Esta es <b className="text-red-500">tu oportunidad</b> de entrenar todo el trimestre sin que el aumento te afecte
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6 mb-12"
                >
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <FiCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
                        <p className="font-bold text-xl">Hasta $69.000</p>
                        <p className="text-sm text-white/70">de ahorro real</p>
                    </div>
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <FiCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
                        <p className="font-bold text-xl">10 días gratis</p>
                        <p className="text-sm text-white/70">para congelar</p>
                    </div>
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <FiCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
                        <p className="font-bold text-xl">Precio congelado</p>
                        <p className="text-sm text-white/70">3 meses garantizados</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <Link
                        href={process.env.NEXT_PUBLIC_FORM_BLACK_RC || '/'}
                        target="_blank"
                        className="inline-block px-4 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl text-xl lg:text-3xl font-bold uppercase hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105"
                    >
                        Contratar BLACK RC ahora
                    </Link>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ 
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                    className="text-lg lg:text-xl font-bold uppercase text-yellow-500"
                >
                    Válido solo hasta el <br />5 de diciembre a las 23:00
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 text-lg text-white/70 max-w-2xl mx-auto"
                >
                    Elegí tu sede, aprovechá el ahorro, y asegurá tu lugar en la familia RC al mejor precio.
                </motion.p>
            </div>
        </section>
    );
};