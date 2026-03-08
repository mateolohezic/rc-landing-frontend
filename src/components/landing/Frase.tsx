'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export const Frase = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

    return (
        <section ref={ref} className="w-full overflow-hidden py-16 lg:py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />

            <div className="relative z-10 flex flex-col gap-2 lg:gap-4">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap">
                    <p className="text-5xl lg:text-[7rem] font-highrise-bold leading-[0.9] text-center">
                        Resultados <span className="text-white/20">que hablan.</span> Resultados <span className="text-white/20">que hablan.</span>
                    </p>
                </motion.div>
                <motion.div style={{ x: x2 }} className="whitespace-nowrap">
                    <p className="text-5xl lg:text-[7rem] font-highrise-bold leading-[0.9] text-center text-red-500">
                        Entrenamientos <span className="text-red-500/30">que transforman.</span> Entrenamientos <span className="text-red-500/30">que transforman.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
