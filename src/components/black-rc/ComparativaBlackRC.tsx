'use client'

import { motion } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';

const comparativas = [
  {
    sede: "Terrazas",
    sinBlackRC: 237000,
    conBlackRC: 168000,
    ahorro: 69000
  },
  {
    sede: "Aconquija",
    sinBlackRC: 216000,
    conBlackRC: 156000,
    ahorro: 60000
  },
  {
    sede: "Barrio Sur",
    sinBlackRC: 162000,
    conBlackRC: 118560,
    ahorro: 43440
  },
  {
    sede: "Tafí Viejo",
    sinBlackRC: 181500,
    conBlackRC: 145200,
    ahorro: 36300
  }
];

export const ComparativaBlackRC = () => {
    return (
        <section className="w-full py-24 lg:py-32 bg-black">
            <div className="w-full max-w-7xl px-4 xl:px-0 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 lg:mb-12"
                >
                    <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase">El impacto <span className="text-red-500">es real</span></h2>
                    <p className="mt-4 text-xl lg:text-2xl text-white">Mirá cuánto ahorrás en tu sede</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {comparativas.map((comp, index) => (
                        <motion.div
                            key={comp.sede}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-900 border border-white/10 rounded-2xl p-4 lg:p-8"
                        >
                            <h3 className="text-3xl font-bold uppercase mb-6 text-center">{comp.sede}</h3>
                            <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-4">
                                <div className="bg-neutral-800/50 border border-red-500/30 rounded-xl p-4 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <FiX className="text-red-500 text-xl hidden lg:block" />
                                        <p className="text-sm uppercase text-white/60 font-semibold">Sin BLACK RC</p>
                                    </div>
                                    <p className="text-3xl font-highrise-bold text-white/70">
                                        <small className="text-lg">$</small>
                                        {comp.sinBlackRC.toLocaleString('es-AR')}
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-xl p-4 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <FiCheck className="text-white text-xl hidden lg:block" />
                                        <p className="text-sm uppercase text-white font-semibold">
                                          Con BLACK RC
                                        </p>
                                    </div>
                                    <p className="text-3xl font-highrise-bold text-white">
                                        <small className="text-lg">$</small>
                                        {comp.conBlackRC.toLocaleString('es-AR')}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-green-500/10 border-2 border-green-500 rounded-xl p-4 text-center">
                                <p className="text-sm uppercase text-green-400 font-semibold mb-1">
                                    Tu ahorro real
                                </p>
                                <p className="text-4xl font-highrise-bold text-green-400">
                                    <small className="text-2xl">$</small>
                                    {comp.ahorro.toLocaleString('es-AR')}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-4 lg:mt-12 text-center"
                >
                    <div className="inline-block bg-red-600/10 border border-red-500/50 rounded-xl px-8 py-6">
                        <p className="text-xl lg:text-2xl font-bold uppercase">
                            Además, sumás <span className="text-red-500">10 días</span> para congelar por vacaciones
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};