'use client'

import { motion } from 'framer-motion';
import { FiDollarSign, FiGift, FiLock } from 'react-icons/fi';

const beneficios = [
  {
    icon: <FiLock className="text-5xl" />,
    titulo: "Precio congelado",
    descripcion: "Evitás el aumento de diciembre y pagás al precio anterior durante todo el trimestre",
    color: "from-red-500 to-orange-400"
  },
  {
    icon: <FiDollarSign className="text-5xl" />,
    titulo: "Ahorro real",
    descripcion: "Hasta $69.000 de ahorro según tu sede. Un beneficio que impacta directo en tu bolsillo",
    color: "from-orange-500 to-yellow-400"
  },
  {
    icon: <FiGift className="text-5xl" />,
    titulo: "10 días de pausa",
    descripcion: "Te regalamos 10 días para congelar tu cuota por vacaciones. Descansá tranquilo",
    color: "from-yellow-500 to-green-400"
  }
];

export const BeneficiosBlackRC = () => {
    return (
        <section className="w-full pt-24 lg:py-32 bg-gradient-to-b from-black via-neutral-950 to-black">
            <div className="w-full max-w-7xl px-4 xl:px-0 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 lg:mb-12"
                >
                    <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase">
                        <span className="text-white">Elegí</span>{" "}
                        <span className="text-red-500">BLACK RC</span>
                    </h2>
                    <p className="mt-4 text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto">Tres razones contundentes para no dejar pasar esta oportunidad</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {beneficios.map((beneficio, index) => (
                        <motion.div
                            key={beneficio.titulo}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all group"
                        >
                            <div className={`w-20 h-20 bg-gradient-to-br ${beneficio.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                {beneficio.icon}
                            </div>
                            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-red-400 transition-colors">
                                {beneficio.titulo}
                            </h3>
                            <p className="text-lg text-white/70 leading-relaxed">
                                {beneficio.descripcion}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};