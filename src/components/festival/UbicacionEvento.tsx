'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMapPin, FiClock, FiWifi, FiDroplet, FiSun } from 'react-icons/fi';

interface InfoUbicacion {
    direccion: string;
    coordenadas: {
        lat: number;
        lng: number;
    };
    transporte: {
        auto: string[];
        publico: string[];
    };
    servicios: {
        icon: React.ReactNode;
        nombre: string;
        descripcion: string;
    }[];
    horarioEvento: {
        inicio: string;
        fin: string;
        acreditacion: string;
    };
}

const infoSede: InfoUbicacion = {
    direccion: "Av. Perón 2400, Yerba Buena, Tucumán",
    coordenadas: {
        lat: -26.8167,
        lng: -65.3167
    },
    transporte: {
        auto: [
            "Estacionamiento gratuito disponible",
            "Acceso directo desde Av. Perón",
            "A 10 minutos del centro de Yerba Buena",
            "GPS: Av. Perón 2400, Yerba Buena"
        ],
        publico: [
            "Línea 121 - Parada Av. Perón",
            "Remises y taxis hasta la puerta",
            "Uber y Cabify disponibles",
            "Combo desde centro: $500"
        ]
    },
    servicios: [
        {
            icon: <FiClock className="text-2xl" />,
            nombre: "Estacionamiento gratuito",
            descripcion: "Amplio espacio para vehículos"
        },
        {
            icon: <FiWifi className="text-2xl" />,
            nombre: "WiFi libre",
            descripcion: "Conexión de alta velocidad"
        },
        {
            icon: <FiSun className="text-2xl" />,
            nombre: "Espacio verde outdoor",
            descripcion: "Terraza al aire libre"
        },
        {
            icon: <FiDroplet className="text-2xl" />,
            nombre: "Dispenser de agua",
            descripcion: "Agua fría y caliente"
        },
    ],
    horarioEvento: {
        inicio: "10:00",
        fin: "18:00",
        acreditacion: "10:00 - 10:30"
    }
};

export const UbicacionEvento = () => {
    return (
        <section className="w-full py-12 lg:py-24 bg-neutral-800">
            <div className="w-full max-w-7xl px-4 xl:px-0 mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-20"
                >
                    <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase leading-tight mb-6">
                        <span className="text__outline">Te esperamos en</span>
                        <br />
                        <span className="text-red-500">RC Terrazas</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
                        El lugar perfecto para vivir una experiencia única. Aire libre, naturaleza y las mejores instalaciones de Yerba Buena.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="aspect-video bg-neutral-700 rounded-2xl overflow-hidden relative pointer-events-none group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.3220555197965!2d-65.30396128390834!3d-26.80010087515163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242c13b357d5f%3A0xfb7fce5f1be7ff6c!2sTerrazas%20de%20San%20Jos%C3%A9%20Sal%C3%B3n%20Bailable!5e0!3m2!1ses!2sar!4v1758029665787!5m2!1ses!2sar"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='size-full pointer-events-auto'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-200" />
                            <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <FiMapPin className="text-red-500 text-xl" />
                                    <span className="font-bold text-lg">RC Terrazas</span>
                                </div>
                                <p className="text-sm text-white/80">{infoSede.direccion}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiClock className="text-red-500 text-xl" />
                            <div>
                                <div className="font-bold">Horario del evento</div>
                                <div className="text-white/80 text-sm">{infoSede.horarioEvento.inicio} - {infoSede.horarioEvento.fin} hs</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-neutral-900 rounded-2xl p-6">
                            <h3 className="text-4xl font-highrise-bold mb-6">
                                Instalaciones disponibles
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {infoSede.servicios.map((servicio, index) => (
                                    <motion.div
                                        key={servicio.nombre}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-neutral-800 rounded-xl"
                                    >
                                        <div className="text-red-400">
                                            {servicio.icon}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{servicio.nombre}</div>
                                            <div className="text-white/70 text-sm">{servicio.descripcion}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 lg:mt-16"
                >
                    <div className="p-8 lg:p-12 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-2xl border border-red-500/30">
                        <h3 className="text-3xl lg:text-5xl font-highrise-bold mb-4">
                            El lugar perfecto te está esperando
                        </h3>
                        <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                            Aire libre, instalaciones de primera y la energía única de RC. Todo está listo para que vivas el mejor día del año.
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScl-SB63ECM9Hdm3t5kD7q4T4bSi-o7CIFPBG2oAjh69ABOWQ/viewform"
                                target="_blank"
                                className="px-8 py-4 bg-red-500 hover:bg-red-600 rounded-lg font-bold uppercase text-lg transition-colors"
                            >
                                Confirmar mi asistencia
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}