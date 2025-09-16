'use client'

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { LeafIcon, MusicIcon, HeartIcon, FitnessIcon } from "@/icons";
import img_1 from "@/assets/festival/picnic_1.webp";
import img_2 from "@/assets/festival/picnic_2.webp";
import img_3 from "@/assets/festival/training.webp";
import img_4 from "@/assets/festival/natural.webp";
import Link from 'next/link';

interface PilarFestival {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    image: StaticImageData;
    color: string;
    benefits: string[];
}

const pilares: PilarFestival[] = [
    {
        id: 'conexion',
        icon: <HeartIcon className="size-16" />,
        title: 'Conexión',
        subtitle: 'Espacio seguro para familias',
        description: 'Un ambiente libre de alcohol donde adultos, jóvenes y niños pueden disfrutar juntos en un entorno seguro y alegre.',
        image: img_1,
        color: 'from-red-500 to-orange-400',
        benefits: [
            'Ambiente libre de alcohol',
            'Actividades para todas las edades',
            'Zona kids especializada',
            'Espacio de encuentro familiar'
        ]
    },
    {
        id: 'ecocanje',
        icon: <LeafIcon className="size-16" />,
        title: 'Ecocanje',
        subtitle: 'Traé reciclables, llevate vida',
        description: 'Punto de intercambio sustentable: traé materiales reciclables y cambiálos por una plantita viva. Educación ambiental en acción.',
        image: img_2,
        color: 'from-green-500 to-emerald-400',
        benefits: [
            'Intercambio: reciclables por plantita',
            'Puesto de Ecocanje oficial',
            'Educación ambiental práctica',
            'Compromiso con el planeta'
        ]
    },
    {
        id: 'ritmo',
        icon: <MusicIcon className="size-16" />,
        title: 'Ritmo',
        subtitle: 'Música que conecta',
        description: 'DJ en vivo durante el evento, clases con música energizante y un ambiente sonoro diseñado para el bienestar.',
        image: img_4,
        color: 'from-purple-500 to-pink-400',
        benefits: [
            'DJ en vivo',
            'Playlist curada',
            'Clases musicalizadas',
            'Volumen consciente'
        ]
    },
    {
        id: 'movimiento',
        icon: <FitnessIcon className="size-16" />,
        title: 'Movimiento',
        subtitle: 'Actividades fitness',
        description: 'Desde yoga matutino hasta zumba nocturno, una programación completa de actividades físicas para todos los niveles.',
        image: img_3,
        color: 'from-blue-500 to-cyan-400',
        benefits: [
            'Yoga al aire libre',
            'Clases de spinning',
            'Entrenamiento funcional',
            'Actividades para niños'
        ]
    }
];

export const PropuestaValor = () => {
    const [pilarActivo, setPilarActivo] = useState(pilares[0]);
    const [inView, setInView] = useState(false);

    return (
        <section className="w-full px-4 py-12 lg:py-24 bg-neutral-800 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setInView(true)}
                    className="text-center mb-12 lg:mb-20"
                >
                    <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase leading-tight mb-6"><span className="text-red-500 block">Donde la diversión</span> <span>es saludable</span></h2>
                    <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">Cuatro pilares fundamentales que hacen del Festival RC Club una experiencia única en Tucumán</p>
                </motion.div>
                <div className="mb-12 lg:mb-16">
                    <div className="lg:hidden">
                        <select
                            value={pilarActivo.id}
                            onChange={(e) => setPilarActivo(pilares.find(p => p.id === e.target.value) || pilares[0])}
                            className="w-full px-4 py-3 bg-neutral-700 rounded-lg border border-white/20 text-white font-semibold"
                        >
                            {pilares.map((pilar) => (
                                <option key={pilar.id} value={pilar.id}>
                                    {pilar.title} - {pilar.subtitle}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden lg:grid grid-cols-4 gap-6">
                        {pilares.map((pilar, index) => (
                            <motion.button
                                key={pilar.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setPilarActivo(pilar)}
                                className={`p-6 rounded-xl border-2 transition-all duration-300 ${ pilarActivo.id === pilar.id ? 'border-red-500 bg-red-500/10' : 'border-white/20 hover:border-white/40 bg-neutral-700/50' }`}
                            >
                                <div className={`mb-4 ${pilarActivo.id === pilar.id && 'text-red-500'}`}>{pilar.icon}</div>
                                <h3 className="text-6xl font-highrise-bold uppercase mb-2">{pilar.title}</h3>
                                <p className="text-sm text-white/70">{pilar.subtitle}</p>
                            </motion.button>
                        ))}
                    </div>
                </div>
                <motion.div
                    key={pilarActivo.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                    <div className="order-2 lg:order-1">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                            <Image
                                src={pilarActivo.image}
                                alt={`Festival RC Club - ${pilarActivo.title}`}
                                fill
                                className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${pilarActivo.color} opacity-20`} />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 text-center lg:text-start">
                        <div className={`mx-auto lg:mx-0 w-fit flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${pilarActivo.color} bg-opacity-20 mb-6`}>
                            <div className="text-white">
                                {pilarActivo.icon}
                            </div>
                            <span className="font-bold uppercase text-lg">{pilarActivo.title}</span>
                        </div>

                        <h3 className="text-4xl lg:text-6xl font-highrise-bold mb-4">
                            {pilarActivo.subtitle}
                        </h3>

                        <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
                            {pilarActivo.description}
                        </p>
                        <div className="space-y-3">
                            <h4 className="text-xl font-bold uppercase tracking-wider mb-4 text-start">Incluye:</h4>
                            {pilarActivo.benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pilarActivo.color}`} />
                                    <span className="text-white/90">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 lg:mt-24"
                >
                    <div className="inline-block p-8 lg:p-12 bg-gradient-to-r from-neutral-700/80 to-neutral-800/80 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-3xl lg:text-5xl font-highrise-bold mb-4">¿Listo para vivir la experiencia?</h3>
                        <p className="text-lg text-white/80 mb-6 max-w-2xl">Un día que recordarás para siempre. Música, movimiento, naturaleza y conexión real.</p>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLScl-SB63ECM9Hdm3t5kD7q4T4bSi-o7CIFPBG2oAjh69ABOWQ/viewform"
                            target="_blank"
                            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-400 rounded-lg font-bold uppercase text-lg hover:shadow-lg transition-all"
                        >Reservar mi lugar</Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}