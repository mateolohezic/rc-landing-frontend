'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQ {
    pregunta: string;
    respuesta: string;
}

const faqs: FAQ[] = [
    {
        pregunta: "¿Cómo funciona el pago único?",
        respuesta: "Pagás el trimestre completo en un solo pago (efectivo o transferencia) y listo. No tenés que preocuparte por cuotas mensuales ni ajustes durante ese período."
    },
    {
        pregunta: "¿Puedo usar los 10 días de congelamiento en cualquier momento?",
        respuesta: "Sí, podés usar esos 10 días cuando quieras durante tu período trimestral. Ideal para vacaciones de verano o cualquier momento que necesites pausar sin perder tu membresía."
    },
    {
        pregunta: "¿El precio BLACK RC se mantiene después del 5 de diciembre?",
        respuesta: "No. BLACK RC es una promoción exclusiva del 28 de noviembre al 5 de diciembre. Después de esa fecha, vuelve el precio actualizado regular."
    },
    {
        pregunta: "¿Qué incluye el pase trimestral?",
        respuesta: "Incluye acceso completo a todas las clases, salón de aparatos, instructor en sala, y todas las actividades de tu sede durante 3 meses completos."
    },
    {
        pregunta: "¿Puedo cambiar de sede con este pase?",
        respuesta: "El pase trimestral BLACK RC es específico para la sede que elijas al momento de la compra. Si necesitás cambiar de sede, consultá con recepción las opciones disponibles."
    },
    {
        pregunta: "¿Qué pasa con BLACK RC ÉPICO del viernes 5?",
        respuesta: "Es una preventa especial de 40% OFF exclusiva para la nueva sede ÉPICO. Solo disponible el viernes 5 de diciembre a las 15hs. Cupos ultra limitados."
    }
];

export const FAQBlackRC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-24 lg:py-32 bg-neutral-950">
            <div className="w-full max-w-4xl px-4 xl:px-0 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase">
                        Preguntas <span className="text-red-500">frecuentes</span>
                    </h2>
                    <p className="mt-4 text-xl text-white/80">
                        Todo lo que necesitás saber sobre BLACK RC
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left group"
                            >
                                <h3 className="text-lg lg:text-xl font-bold pr-4 group-hover:text-red-400 transition-colors">
                                    {faq.pregunta}
                                </h3>
                                <div className="text-red-500 text-2xl shrink-0">
                                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="pl-4 border-l-2 border-red-500/30">
                                                <p className="text-white/80 leading-relaxed">
                                                    {faq.respuesta}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};