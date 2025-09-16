'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const sponsors = [
    { id: '1', logo: '🥗' },
    { id: '2', logo: '💧' },
    { id: '3', logo: '👕' },
    { id: '4', logo: '🥜' },
    { id: '5', logo: '🎵' },
    { id: '6', logo: '🧘' },
    { id: '7', logo: '🌱' },
    { id: '8', logo: '🛡️' }
];

export const SponsorsFestival = () => {
    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 lg:mb-16"
            >
                <h2 className="text-4xl lg:text-6xl font-highrise-bold uppercase leading-tight mb-6">
                    <span className="text-red-500 block">Marcas que</span>
                    <span>confían en nosotros</span>
                </h2>
                <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">
                    Empresas comprometidas con el bienestar y la vida saludable que hacen posible este evento
                </p>
            </motion.div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
                {sponsors.map((sponsor, index) => (
                    <motion.div
                        key={sponsor.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-red-500/30 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                    >
                        <div className="w-full h-20 lg:h-24 flex items-center justify-center text-4xl lg:text-5xl">
                            <span className="filter grayscale group-hover:grayscale-0 transition-all">
                                {sponsor.logo}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16 lg:mt-20"
            >
                <div className="p-8 lg:p-12 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-2xl border border-purple-500/30">
                    <h3 className="text-3xl lg:text-5xl font-highrise-bold mb-4">
                        Sumate a ser parte
                    </h3>
                    <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                        Sumate a las marcas que apuestan al bienestar y conecta con una audiencia comprometida con la vida saludable. 
                        Diferentes paquetes de sponsorship disponibles.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <Link href="https://api.whatsapp.com/send/?phone=5493816463912&text&type=phone_number&app_absent=0" target='_blank' className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-bold uppercase text-lg transition-colors">
                            Info para sponsors
                        </Link>
                    </div>
                    <div className="mt-6 text-white/60 text-sm">
                        <p>sofiamorenorc@gmail.com | +54 9 3816 46-3912</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};