'use client'

import { LeafIcon } from '@/icons';
import { motion } from 'framer-motion';
import { FaShirt } from 'react-icons/fa6';
import { FiCheck, FiX, FiDroplet, FiSun, FiCamera, FiHeart, FiAlertCircle } from 'react-icons/fi';

interface ItemRecomendado {
    id: string;
    nombre: string;
    descripcion: string;
    icon: React.ReactNode;
    esencial: boolean;
    categoria: 'ropa' | 'hidratacion' | 'proteccion' | 'extras';
}

interface ItemProhibido {
    id: string;
    nombre: string;
    razon: string;
    icon: React.ReactNode;
}

const itemsRecomendados: ItemRecomendado[] = [
    {
        id: '1',
        nombre: 'Ropa deportiva cómoda',
        descripcion: 'Zapatillas con buen soporte, ropa que permita movimiento libre',
        icon: <FaShirt className="text-2xl" />,
        esencial: true,
        categoria: 'ropa'
    },
    {
        id: '2',
        nombre: 'Botella de agua',
        descripcion: 'Te damos una en el kit, pero traé la tuya también por las dudas',
        icon: <FiDroplet className="text-2xl" />,
        esencial: true,
        categoria: 'hidratacion'
    },
    {
        id: '3',
        nombre: 'Protector solar',
        descripcion: 'Factor 50+ mínimo, vamos a estar al aire libre todo el día',
        icon: <FiSun className="text-2xl" />,
        esencial: true,
        categoria: 'proteccion'
    },
    {
        id: '4',
        nombre: 'Toalla personal',
        descripcion: 'Incluimos una en el kit, pero podés traer una extra',
        icon: <FaShirt className="text-2xl" />,
        esencial: false,
        categoria: 'ropa'
    },
    {
        id: '5',
        nombre: 'Gorra o visera',
        descripcion: 'Para protegerte del sol durante las actividades outdoor',
        icon: <FiSun className="text-2xl" />,
        esencial: false,
        categoria: 'proteccion'
    },
    {
        id: '6',
        nombre: 'Cámara o celular',
        descripcion: 'Para capturar los mejores momentos del festival',
        icon: <FiCamera className="text-2xl" />,
        esencial: false,
        categoria: 'extras'
    },
    {
        id: '7',
        nombre: 'Snacks saludables',
        descripcion: 'Frutas, frutos secos, barritas. También hay food trucks',
        icon: <FiHeart className="text-2xl" />,
        esencial: false,
        categoria: 'extras'
    },
    {
        id: '8',
        nombre: 'Cambio de ropa',
        descripcion: 'Para después de las actividades, tenemos vestuarios completos',
        icon: <FaShirt className="text-2xl" />,
        esencial: false,
        categoria: 'ropa'
    },
    {
        id: '9',
        nombre: 'Lona o manta para el pasto',
        descripcion: 'Para sentarte cómodo durante las actividades al aire libre y el almuerzo',
        icon: <LeafIcon className="text-2xl" />,
        categoria: 'proteccion',
        esencial: false
    }
];

const itemsProhibidos: ItemProhibido[] = [
    {
        id: '1',
        nombre: 'Bebidas alcohólicas',
        razon: 'Evento 100% libre de alcohol para ambiente familiar seguro',
        icon: <FiX className="text-xl" />
    },
    {
        id: '2',
        nombre: 'Mascotas',
        razon: 'Por seguridad y comodidad de todos los participantes',
        icon: <FiX className="text-xl" />
    },
    {
        id: '3',
        nombre: 'Objetos de vidrio',
        razon: 'Por seguridad en las zonas de actividad física',
        icon: <FiX className="text-xl" />
    },
    {
        id: '4',
        nombre: 'Equipos de sonido propios',
        razon: 'Contamos con sonorización profesional para todo el evento',
        icon: <FiX className="text-xl" />
    }
];

const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
        case 'ropa': return 'from-blue-500 to-cyan-400';
        case 'hidratacion': return 'from-cyan-500 to-blue-400';
        case 'proteccion': return 'from-orange-500 to-red-400';
        case 'extras': return 'from-purple-500 to-pink-400';
        default: return 'from-gray-500 to-gray-400';
    }
};

export const QueTraerFestival = () => {
    const itemsEsenciales = itemsRecomendados.filter(item => item.esencial);
    const itemsOpcionales = itemsRecomendados.filter(item => !item.esencial);

    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 lg:mb-16"
            >
                <h2 className="text-4xl lg:text-6xl font-highrise-bold uppercase leading-tight mb-6">
                    <span className="text-red-500 block">Preparate para</span>
                    <span>el mejor día</span>
                </h2>
                <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">Todo lo que necesitás saber para disfrutar al máximo el Festival RC Club</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FiCheck className="text-green-500 text-3xl" />
                            <h3 className="text-3xl lg:text-4xl font-highrise-bold text-green-400">
                                ESENCIALES
                            </h3>
                        </div>
                        <p className="text-white/80">No te olvides de estos básicos</p>
                    </div>
                    <div className="space-y-4">
                        {itemsEsenciales.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-green-400 mt-1">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold mb-2 text-green-400">
                                            {item.nombre}
                                        </h4>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {item.descripcion}
                                        </p>
                                    </div>
                                    <div className="bg-green-500 rounded-full p-1">
                                        <FiCheck className="text-sm text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FiHeart className="text-blue-500 text-3xl" />
                            <h3 className="text-3xl lg:text-4xl font-highrise-bold text-blue-400">
                                RECOMENDADOS
                            </h3>
                        </div>
                        <p className="text-white/80">Para que la experiencia sea perfecta</p>
                    </div>
                    <div className="space-y-4">
                        {itemsOpcionales.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-800 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`bg-gradient-to-r ${getCategoriaColor(item.categoria)} p-2 rounded-lg text-white`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                            {item.nombre}
                                        </h4>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FiAlertCircle className="text-red-500 text-3xl" />
                        <h3 className="text-3xl lg:text-4xl font-highrise-bold text-red-400">
                            NO PERMITIDOS
                        </h3>
                    </div>
                    <p className="text-white/80">Para mantener un ambiente seguro y familiar</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {itemsProhibidos.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center"
                        >
                            <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-red-400">
                                {item.nombre}
                            </h4>
                            <p className="text-white/70 text-sm">
                                {item.razon}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};