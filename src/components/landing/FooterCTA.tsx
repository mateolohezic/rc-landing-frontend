'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { RCIcon } from "@/components/RCIcon";

export const FooterCTA = () => {
    return (
        <section className="w-full relative overflow-hidden">
            {/* Red glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[120px]" />

            <div className="w-full max-w-4xl mx-auto px-6 py-24 lg:py-32 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <RCIcon className="w-16 h-16 fill-white/10 mx-auto" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    ¿Listo para el cambio?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-lg lg:text-xl text-white/50 max-w-xl mx-auto"
                >
                    Empezá hoy con tu día de prueba gratuito. Sin compromiso, sin excusas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-10"
                >
                    <Link
                        href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
                        target="_blank"
                        className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-red-600 hover:bg-red-500 rounded-full text-base sm:text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30 pulse-glow"
                    >
                        Conseguí tu día de prueba
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-xs text-white/20 uppercase tracking-[0.3em]"
                >
                    RC Gym — Tucumán, Argentina
                </motion.p>
            </div>
        </section>
    );
};
