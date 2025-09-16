'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';

interface FAQ {
    id: string;
    pregunta: string;
    respuesta: string;
}

const faqs: FAQ[] = [
    {
        id: '1',
        pregunta: '¿Qué incluye exactamente la entrada?',
        respuesta: 'Tu entrada incluye: acceso a todas las actividades del cronograma, kit oficial (toalla + botella RC, bebida energética, barrita, stickers), plantita viva de regalo, acceso a charlas y talleres, estacionamiento gratuito y WiFi libre.',
    },
    {
        id: '2',
        pregunta: '¿Hay descuentos para familias?',
        respuesta: 'Sí! Ofrecemos descuentos especiales: 15% off para familias de 3 o más personas, y los niños menores de 6 años ingresan gratis acompañados de un adulto con entrada paga.',
    },
    {
        id: '3',
        pregunta: '¿Qué pasa si llueve el día del evento?',
        respuesta: 'RC Terrazas cuenta con espacios cubiertos amplios. En caso de lluvia intensa, trasladaremos las actividades principales al salón interno. El evento se realiza con lluvia o sol.',
    },
    {
        id: '4',
        pregunta: '¿Se puede comprar comida durante el evento?',
        respuesta: 'Absolutamente. Tendremos food trucks y stands gastronómicos con opciones saludables: bowls, wraps, jugos naturales, smoothies y opciones veganas. También puedes traer tu propia comida.',
    },
    {
        id: '5',
        pregunta: '¿Hay límite de edad para las actividades?',
        respuesta: 'Las actividades fitness están diseñadas para mayores de 12 años. Los niños tienen su zona KIDS exclusiva con actividades apropiadas para todas las edades. Siempre deben estar acompañados por un adulto.',
    },
    {
        id: '6',
        pregunta: '¿Necesito experiencia previa en fitness?',
        respuesta: 'Para nada! Todas las clases están adaptadas para principiantes y avanzados. Nuestros instructores ofrecen modificaciones para todos los niveles. Solo necesitas ganas de moverte y divertirte.',
    },
    {
        id: '7',
        pregunta: '¿Puedo cancelar mi entrada si no puedo asistir?',
        respuesta: 'Sí, ofrecemos reembolso del 100% hasta 48 horas antes del evento. Después de ese plazo, puedes transferir tu entrada a otra persona sin costo adicional.',
    },
    {
        id: '8',
        pregunta: '¿Hay vestuarios y duchas disponibles?',
        respuesta: 'RC Terrazas cuenta con vestuarios completos, duchas con agua caliente, lockers y zona de descanso. Ideal para cambiarte antes o después de las actividades.',
    },
    {
        id: '9',
        pregunta: '¿El evento es realmente libre de alcohol?',
        respuesta: 'Completamente. Es un ambiente 100% libre de alcohol, diseñado para que familias con niños disfruten sin preocupaciones. Tenemos bebidas refrescantes naturales, aguas saborizadas y opciones energéticas.',
    },
    {
        id: '10',
        pregunta: '¿Cómo funciona el Ecocanje?',
        respuesta: 'Traé materiales reciclables (botellas plásticas, latas, papel, cartón) al puesto de Ecocanje y los cambiamos por una plantita viva. Es una forma práctica de aprender sobre sustentabilidad mientras contribuís al cuidado del ambiente.',
    },
];

export const FAQFestival = () => {
    const [preguntaAbierta, setPreguntaAbierta] = useState<string | null>(null);

    const togglePregunta = (id: string) => {
        setPreguntaAbierta(preguntaAbierta === id ? null : id);
    };

    return (
        <section className="w-full max-w-6xl px-4 xl:px-0 py-12 lg:py-24 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 lg:mb-16"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FiHelpCircle className="text-red-500 text-4xl" />
                    <h2 className="text-4xl lg:text-6xl font-highrise-bold uppercase">Preguntas frecuentes</h2>
                </div>
                <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">Resolvemos todas tus dudas sobre el Festival RC Club</p>
            </motion.div>
            <div className="space-y-4">
                <AnimatePresence>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-neutral-800 rounded-xl border border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => togglePregunta(faq.id)}
                                className={`w-full p-6 text-left flex items-center justify-between ${ preguntaAbierta === faq.id ? "bg-neutral-700/50" : "hover:bg-neutral-700/50" } transition-colors group`}
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg lg:text-xl font-bold group-hover:text-red-400 transition-colors inline">{faq.pregunta}</h3>
                                </div>
                                <div className="text-red-500 ml-4">
                                    {preguntaAbierta === faq.id ? ( <FiMinus className="text-xl" /> ) : ( <FiPlus className="text-xl" /> )}
                                </div>
                            </button>
                            <AnimatePresence>
                                {preguntaAbierta === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4">
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
                </AnimatePresence>
            </div>
        </section>
    );
};