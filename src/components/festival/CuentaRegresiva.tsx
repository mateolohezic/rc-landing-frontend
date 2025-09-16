'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const CuentaRegresiva = () => {
    const eventDate = new Date('2025-09-20T10:00:00-03:00').getTime();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isEventDay, setIsEventDay] = useState(false);

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
                setIsEventDay(false);
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsEventDay(true);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    const timeUnits = [
        { label: 'Días', value: timeLeft.days, color: 'from-red-500 to-orange-400' },
        { label: 'Horas', value: timeLeft.hours, color: 'from-orange-500 to-yellow-400' },
        { label: 'Minutos', value: timeLeft.minutes, color: 'from-yellow-500 to-green-400' },
        { label: 'Segundos', value: timeLeft.seconds, color: 'from-green-500 to-blue-400' }
    ];

    if (isEventDay) {
        return (
            <section className="w-full py-12 lg:py-24 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 relative overflow-hidden">
                <div className="w-full max-w-6xl px-4 xl:px-0 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase text-white">¡HOY ES EL DÍA!</h2>
                        <p className="text-2xl lg:text-4xl text-white/90">El Festival RC Club está sucediendo AHORA</p>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-2xl" />
                                <span className="text-xl">RC Terrazas, Yerba Buena</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock className="text-2xl" />
                                <span className="text-xl">10:00 a 18:00 hs</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-12 lg:py-24 bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="w-full max-w-6xl px-4 xl:px-0 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FiClock className="text-red-500 text-4xl" />
                        <h2 className="text-4xl lg:text-6xl font-highrise-bold uppercase">Faltan solo</h2>
                    </div>
                    <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">Para vivir el primer festival saludable sin alcohol de Tucumán</p>
                </motion.div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className={`bg-gradient-to-br ${unit.color} rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/10`}>
                                <motion.div
                                    key={unit.value}
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl lg:text-6xl font-highrise-bold text-white mb-2">{String(unit.value).padStart(2, '0')}</div>
                                    <div className="text-sm lg:text-lg font-semibold text-white/90 uppercase tracking-wider">{unit.label}</div>
                                </motion.div>
                            </div>
                            {unit.label === 'Segundos' && (
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                        opacity: [0.5, 0.8, 0.5] 
                                    }}
                                    transition={{ 
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }}
                                    className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-400 rounded-2xl lg:rounded-3xl -z-10"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-3 p-6 bg-neutral-800/50 rounded-xl border border-white/10">
                            <FiCalendar className="text-red-500 text-3xl" />
                            <div>
                                <div className="font-bold text-lg">Sábado 20 Sep</div>
                                <div className="text-white/70 text-sm">2025</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 bg-neutral-800/50 rounded-xl border border-white/10">
                            <FiClock className="text-orange-500 text-3xl" />
                            <div>
                                <div className="font-bold text-lg">10:00 - 18:00</div>
                                <div className="text-white/70 text-sm">8 horas de diversión</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 bg-neutral-800/50 rounded-xl border border-white/10">
                            <FiMapPin className="text-green-500 text-3xl" />
                            <div>
                                <div className="font-bold text-lg">RC Terrazas</div>
                                <div className="text-white/70 text-sm">Yerba Buena, Tucumán</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="p-8 lg:p-12 bg-gradient-to-r from-red-600/30 to-orange-500/30 rounded-2xl border border-red-500/50 backdrop-blur-sm relative overflow-hidden">
                        <motion.div
                            animate={{ 
                                scale: [1, 1.02, 1],
                                opacity: [0.3, 0.5, 0.3] 
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut" 
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl"
                        />
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-5xl font-highrise-bold mb-4">¡No te quedes afuera!</h3>
                            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">Los cupos se están agotando rápido. Asegurá tu lugar en el evento más esperado del año.</p>
                            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScl-SB63ECM9Hdm3t5kD7q4T4bSi-o7CIFPBG2oAjh69ABOWQ/viewform"
                                    target="_blank"
                                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-400 rounded-lg font-bold uppercase text-lg shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transition-all"
                                >
                                    Reservar ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};