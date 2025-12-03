'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiClock } from 'react-icons/fi';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const EpicoSpecialBlackRC = () => {
    const eventDate = new Date('2025-12-05T23:00:00-03:00').getTime();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    return (
        <section className="w-full py-24 lg:py-32 bg-gradient-to-br from-orange-950 via-black to-orange-950 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            </div>
            <div className="w-full max-w-6xl px-4 xl:px-0 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-4 lg:p-12 border-4 border-orange-400 relative overflow-hidden"
                >
                    <div className="lg:absolute lg:top-6 lg:right-6 flex flex-col lg:flex-row items-center gap-2">
                        <div className="w-fit bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-bold uppercase">Exclusivo</div>
                        <div className="w-fit bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold uppercase">Cupos ultra limitados</div>
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-8 lg:mt-0 text-center mb-8"
                    >
                        <FiZap className="text-6xl lg:text-8xl text-yellow-300 mx-auto mb-4" />
                        <h2 className="text-5xl lg:text-7xl font-highrise-bold uppercase text-white">BLACK RC <span className="text-yellow-300">ÉPICO</span></h2>
                        <p className="mt-4 text-2xl lg:text-3xl font-bold text-white">40% OFF - Nueva Sede ÉPICO</p>
                    </motion.div>
                    {/* {isEventActive ? (
                        <div className="text-center py-8">
                            <p className="text-3xl lg:text-5xl font-bold text-yellow-300 mb-4">
                                ¡LA PREVENTA ESTÁ ACTIVA!
                            </p>
                            <Link
                                href={process.env.NEXT_PUBLIC_FORM_BLACK_RC || '/'}
                                target="_blank"
                                className="inline-block px-12 py-6 bg-yellow-400 text-black rounded-xl text-2xl font-bold uppercase hover:bg-yellow-300 transition-all transform hover:scale-105"
                            >
                                Contratar ahora
                            </Link>
                        </div>
                    ) : (
                        <> */}
                            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 mb-8 text-center">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <FiClock className="text-3xl text-yellow-300 hidden lg:block" />
                                    <p className="text-xl lg:text-2xl font-bold uppercase">Viernes 5 de Diciembre <span className='hidden lg:inline'>•</span> 15:00 hs</p>
                                </div>
                                <div className="flex justify-center gap-3 lg:gap-4">
                                    {[
                                        { label: 'Días', value: timeLeft.days },
                                        { label: 'Horas', value: timeLeft.hours },
                                        { label: 'Min', value: timeLeft.minutes },
                                        { label: 'Seg', value: timeLeft.seconds }
                                    ].map((unit) => (
                                        <div key={unit.label} className="bg-yellow-500 text-black rounded-lg p-1 lg:p-3 min-w-[60px] lg:min-w-[70px]">
                                            <div className="text-3xl lg:text-4xl font-black">
                                                {String(unit.value).padStart(2, '0')}
                                            </div>
                                            <div className="text-xs uppercase font-semibold">
                                                {unit.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-3xl font-black text-yellow-300">50%</p>
                                    <p className="text-sm uppercase">Descuento exclusivo</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-3xl font-black text-yellow-300">1 día</p>
                                    <p className="text-sm uppercase">Solo el viernes 5</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-3xl font-black text-yellow-300">Épico</p>
                                    <p className="text-sm uppercase">Nueva sede</p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-lg lg:text-xl text-white/90">
                                    Prepará tu método de pago. La preventa dura solo unas horas.
                                </p>
                            </div>
                        {/* </>
                    )} */}
                </motion.div>
            </div>
        </section>
    );
};