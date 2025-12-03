'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const HeroBlackRC = () => {
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
        <section className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-32 px-4">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-red-950" />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-6xl text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8 inline-block px-6 py-3 bg-red-600/20 border-2 border-red-500 rounded-full text-red-400 text-sm lg:text-base font-bold uppercase tracking-wider"
                >
                    Del 28 de noviembre <br className='lg:hidden'/> al 5 de diciembre
                </motion.div>
                <h1 className="text-8xl lg:text-[12rem] font-highrise-bold uppercase leading-[0.85]">
                    <span className="block text-white">BLACK</span>
                    <span className="block text-red-500">RC</span>
                </h1>
                <p className="mt-8 text-2xl lg:text-4xl font-light">Pase Trimestral <br className='lg:hidden'/> al <b className="font-bold text-red-500">precio anterior</b></p>
                <p className="mt-4 text-xl lg:text-2xl text-white/80">Ahorrá hasta <b className="font-bold text-red-500">$69.000</b> <br className='lg:hidden'/><span className='hidden lg:inline'>+</span> <b className="font-bold text-red-500">10 días</b> para congelar por vacaciones</p>
                <div className="mt-12 grid grid-cols-4 gap-1 lg:gap-4 max-w-2xl mx-auto">
                    {[
                        { label: 'Días', value: timeLeft.days },
                        { label: 'Horas', value: timeLeft.hours },
                        { label: 'Min', value: timeLeft.minutes },
                        { label: 'Seg', value: timeLeft.seconds }
                    ].map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="bg-gradient-to-br from-red-600 to-red-500 rounded-xl p-4 lg:p-6 border border-red-400/30"
                        >
                            <div className="text-4xl lg:text-6xl font-highrise-bold">{String(unit.value).padStart(2, '0')}</div>
                            <div className="text-xs lg:text-sm uppercase tracking-wider mt-2 text-white/90">{unit.label}</div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-12"
                >
                    <Link
                        href={process.env.NEXT_PUBLIC_FORM_BLACK_RC || '/'}
                        target="_blank"
                        className="inline-block px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-2xl font-bold uppercase hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105"
                    >
                        Quiero mi BLACK RC
                    </Link>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 text-sm lg:text-base text-red-400 uppercase tracking-wider font-semibold"
                >
                    ⚡ Cupos limitados por sede
                </motion.p>
            </motion.div>
        </section>
    );
};