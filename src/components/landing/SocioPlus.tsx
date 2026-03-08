'use client'

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { MemberCardIcon, OfferIcon, QRIcon } from "@/icons";
import app_rcgym from "@/assets/home/app_rcgym.webp";
import apple_icon from "@/assets/home/apple_icon.webp";
import playstore_icon from "@/assets/home/playstore_icon.webp";

const appFeatures = [
    {
        Icon: MemberCardIcon,
        title: "Membresía digital",
        description: "Inspecciona tus datos en todo momento.",
    },
    {
        Icon: QRIcon,
        title: "Ingreso fácil y rápido",
        description: "Acceso dinámico a todas nuestras sedes.",
    },
    {
        Icon: OfferIcon,
        title: "Beneficios y descuentos",
        description: "Disfrutá de nuestros descuentos en comercios adheridos.",
    },
];

export const SocioPlus = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const phoneY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

    return (
        <section ref={ref} className="w-full relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />

            <div className="w-full max-w-7xl mx-auto px-6 section-padding relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                        >
                            Disfrutá la <span className="text-emerald-500">App</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-3 text-white/50 text-lg"
                        >
                            Conocé SocioPLUS® y llevá tu experiencia RC al siguiente nivel.
                        </motion.p>

                        <div className="mt-10 space-y-6">
                            {appFeatures.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex flex-col lg:flex-row items-center lg:items-start gap-4"
                                >
                                    <div className="size-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex justify-center items-center">
                                        <feature.Icon className="size-6 fill-emerald-500" />
                                    </div>
                                    <div className="lg:text-left">
                                        <h3 className="font-bold uppercase tracking-wider text-emerald-400">{feature.title}</h3>
                                        <p className="mt-1 text-sm text-white/50">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex justify-center lg:justify-start items-center gap-6"
                        >
                            <Link href="https://apps.apple.com/ar/app/socioplus-ux/id1621587015" target="_blank" className="group">
                                <Image src={apple_icon} alt="App Store" className="size-14 object-contain group-hover:scale-110 transition-transform duration-200" />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.socioplus&hl=es_AR&gl=US&pli=1" target="_blank" className="group">
                                <Image src={playstore_icon} alt="Play Store" className="size-14 object-contain group-hover:scale-110 transition-transform duration-200" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Phone mockup with parallax */}
                    <motion.div style={{ y: phoneY }} className="flex-1 max-w-sm lg:max-w-md relative">
                        <div className="absolute -inset-8 bg-emerald-500/5 rounded-[3rem] blur-3xl" />
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image src={app_rcgym} alt="Aplicación Socio Plus RC Gym" className="w-full relative z-10" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
