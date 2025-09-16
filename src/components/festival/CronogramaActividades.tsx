'use client'

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiClock, FiUsers, FiSun, FiTarget, FiHeart, FiUser, FiMapPin } from 'react-icons/fi';

interface Actividad {
    id: string;
    hora: string;
    zona: string;
    actividad: string;
    publico: 'adultos' | 'niños' | 'ambos' | 'general';
    instructor?: string;
}

const actividades: Actividad[] = [
    {
        id: '1',
        hora: '10:00',
        zona: 'Zona de ingreso',
        actividad: 'Acreditaciones + Limpieza energética',
        publico: 'general'
    },
    {
        id: '2',
        hora: '10:30',
        zona: 'Zona Zen',
        actividad: 'Yoga',
        publico: 'adultos'
    },
    {
        id: '3',
        hora: '10:30',
        zona: 'Foniculares',
        actividad: 'Trekking',
        publico: 'adultos'
    },
    {
        id: '4',
        hora: '10:30',
        zona: 'Zona KIDS',
        actividad: 'Arte KIDS',
        publico: 'niños'
    },
    {
        id: '5',
        hora: '11:30',
        zona: 'Zona de charlas',
        actividad: 'Charla: Salud y Quiropraxia',
        publico: 'adultos'
    },
    {
        id: '6',
        hora: '12:00',
        zona: 'Zona Spinning',
        actividad: 'Spinning',
        publico: 'adultos'
    },
    {
        id: '7',
        hora: '12:00',
        zona: 'Zona Funcional',
        actividad: 'Funcional',
        publico: 'adultos'
    },
    {
        id: '8',
        hora: '12:00',
        zona: 'Zona KIDS',
        actividad: 'Juegos KIDS',
        publico: 'niños'
    },
    {
        id: '9',
        hora: '13:00',
        zona: 'Zona Zen',
        actividad: 'Meditación con Mantras Recitados',
        publico: 'adultos'
    },
    {
        id: '10',
        hora: '13:00',
        zona: 'Zona KIDS',
        actividad: 'Arte KIDS',
        publico: 'niños'
    },
    {
        id: '11',
        hora: '15:00',
        zona: 'Zona Spinning',
        actividad: 'Spinning',
        publico: 'adultos'
    },
    {
        id: '12',
        hora: '15:00',
        zona: 'Zona Funcional',
        actividad: 'Funcional',
        publico: 'adultos'
    },
    {
        id: '13',
        hora: '15:00',
        zona: 'Zona KIDS',
        actividad: 'Juegos KIDS',
        publico: 'niños'
    },
    {
        id: '14',
        hora: '16:00',
        zona: 'Zona de charlas',
        actividad: 'Charla: Vida Saludable',
        publico: 'adultos'
    },
    {
        id: '15',
        hora: '16:00',
        zona: 'Zona KIDS',
        actividad: 'Arte KIDS',
        publico: 'niños'
    },
    {
        id: '16',
        hora: '17:00',
        zona: 'Zona de Baile',
        actividad: 'Zumba con Sergio Queiro',
        publico: 'adultos',
        instructor: 'Sergio Queiro'
    },
    {
        id: '17',
        hora: '17:00',
        zona: 'Zona KIDS',
        actividad: 'Juegos KIDS',
        publico: 'niños'
    }
];

const getPublicoIcon = (publico: string) => {
    switch (publico) {
        case 'adultos': return <FiUser className="text-lg" />;
        case 'niños': return <FiHeart className="text-lg" />;
        case 'ambos': return <FiUsers className="text-lg" />;
        case 'general': return <FiSun className="text-lg" />;
        default: return <FiTarget className="text-lg" />;
    }
};

const getZonaColor = (zona: string) => {
    if (zona.includes('KIDS')) return 'from-pink-500 to-purple-400';
    if (zona.includes('Zen')) return 'from-green-500 to-emerald-400';
    if (zona.includes('Spinning') || zona.includes('Funcional')) return 'from-blue-500 to-cyan-400';
    if (zona.includes('charlas')) return 'from-yellow-500 to-orange-400';
    if (zona.includes('Baile')) return 'from-red-500 to-pink-400';
    return 'from-gray-500 to-gray-400';
};

export const CronogramaActividades = () => {

    const actividadesPorHora = actividades.reduce((acc, actividad) => {
        if (!acc[actividad.hora]) acc[actividad.hora] = [];
        acc[actividad.hora].push(actividad);
        return acc;
    }, {} as Record<string, Actividad[]>);

    return (
        <section className="w-full max-w-6xl px-4 xl:px-0 py-12 lg:py-24 mx-auto" id='cronograma'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 lg:mb-16"
            >
                <h2 className="text-4xl lg:text-6xl font-bold uppercase leading-tight mb-6">
                    Cronograma
                    <span className="text-red-500 block">Festival RC</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">Un día completo de actividades diseñadas para toda la familia</p>
            </motion.div>
            <div className="relative">
                <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-400 to-red-500 rounded-full" />
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {Object.entries(actividadesPorHora)
                            .sort(([horaA], [horaB]) => horaA.localeCompare(horaB))
                            .map(([hora, actividadesHora], horaIndex) => (
                            <motion.div
                                key={hora}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: horaIndex * 0.1 }}
                                className="relative lg:ml-20"
                            >
                                <div className="hidden lg:block absolute -left-20 top-6 w-4 h-4 bg-red-500 rounded-full border-4 border-neutral-900" />
                                <div className="flex items-center gap-3 mb-4">
                                    <FiClock className="text-red-500 text-xl" />
                                    <h3 className="text-2xl lg:text-3xl font-bold text-red-400">{hora}</h3>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {actividadesHora.map((actividad, actIndex) => (
                                        <motion.div
                                            key={actividad.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: (horaIndex * 0.1) + (actIndex * 0.05) }}
                                            className="bg-neutral-800 rounded-lg p-6 border border-white/10 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10 group"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <FiMapPin className="text-sm" />
                                                <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${getZonaColor(actividad.zona)} text-white`}>
                                                    {actividad.zona}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-bold mb-3 group-hover:text-red-400 transition-colors">{actividad.actividad}</h4>
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2">
                                                    {getPublicoIcon(actividad.publico)}
                                                    <span className="text-white/70 capitalize">{actividad.publico}</span>
                                                </div>
                                                {actividad.instructor && ( <span className="text-white/60 text-xs">{actividad.instructor}</span> )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16 lg:mt-24"
            >
                <div className="p-8 lg:p-12 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-2xl border border-red-500/30">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-4">¡Viví la experiencia completa!</h3>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Desde las 10:00 hasta las 18:00, un día lleno de actividades para conectarte con tu mejor versión.</p>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScl-SB63ECM9Hdm3t5kD7q4T4bSi-o7CIFPBG2oAjh69ABOWQ/viewform"
                        target="_blank"
                        className="px-8 py-4 bg-red-500 hover:bg-red-600 rounded-lg font-bold uppercase text-lg transition-colors"
                    >Reservar mi lugar</Link>
                </div>
            </motion.div>
        </section>
    )
}