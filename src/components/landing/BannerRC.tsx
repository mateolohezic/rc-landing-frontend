'use client'

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import banner_stock from "@/assets/home/banner_stock.webp";

export const BannerRC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section ref={ref} className="w-full relative overflow-hidden h-[50vh] lg:h-[60vh] flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0 scale-125">
                <Image src={banner_stock} alt="RC Gym" className="size-full object-cover object-center" />
            </motion.div>
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-[2]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center relative z-10 px-6"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase">
                    Tu transformación<br />
                    <span className="text-red-500">empieza hoy</span>
                </h2>
                <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
                    Más de 1000 personas ya cambiaron su vida con RC Gym. Vos podés ser el próximo.
                </p>
                <Link
                    href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
                    target="_blank"
                    className="mt-8 inline-block px-8 py-4 bg-red-600 hover:bg-red-500 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30"
                >
                    Conseguí tu día de prueba
                </Link>
            </motion.div>
        </section>
    );
};
