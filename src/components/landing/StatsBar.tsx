'use client'

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { value: 6, suffix: "", label: "Sedes en Tucumán" },
    { value: 10, suffix: "+", label: "Años de experiencia" },
    { value: 1000, suffix: "+", label: "Miembros activos" },
    { value: 50, suffix: "+", label: "Clases semanales" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span className="text-4xl lg:text-5xl font-highrise-bold tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export const StatsBar = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <section ref={ref} className="w-full relative z-10">
            <div className="w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 py-12 lg:py-16 glass-card lg:rounded-2xl lg:divide-x lg:divide-white/[0.08]"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                            <span className="text-xs lg:text-sm text-white/40 uppercase tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
