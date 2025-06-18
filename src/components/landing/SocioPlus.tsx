'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { MemberCardIcon, OfferIcon, QRIcon } from "@/icons";
import app_rcgym from "@/assets/home/app_rcgym.webp";
import apple_icon from "@/assets/home/apple_icon.webp";
import playstore_icon from "@/assets/home/playstore_icon.webp";

export const SocioPlus = () => {
    return (
        <section className="mt-24 w-full px-4 pt-12 flex flex-col justify-center items-center bg-neutral-800 text-center lg:text-start">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch relative z-20 overflow-hidden">
                <div className="grow flex flex-col justify-start pb-4 lg:pb-12">
                    <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8]">Disfruta la App</h2>
                    <p className="text-pretty w-full max-w-lg">Conocé SocioPLUS®.</p>
                    <div className="mt-8 w-full flex flex-col gap-8 lg:gap-6">
                        <div className="w-full flex flex-col lg:flex-row gap-4 justify-start items-center">
                            <MemberCardIcon className="size-14 shrink-0 fill-[#2ECD70]"/>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-black uppercase tracking-widest text-[#2ECD70]">Membresía digital</h3>
                                <p className="text-base text-white/75">Inspecciona tus datos en todo momento.</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-4 justify-start items-center">
                            <QRIcon className="size-14 shrink-0 fill-[#2ECD70]"/>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-black uppercase tracking-widest text-[#2ECD70]">Ingreso fácil y rápido</h3>
                                <p className="text-base text-white/75">Acceso dinámico a todas nuestras sedes.</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-4 justify-start items-center">
                            <OfferIcon className="size-14 shrink-0 fill-[#2ECD70]"/>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-black uppercase tracking-widest text-[#2ECD70]">Beneficios y descuentos</h3>
                                <p className="text-base text-white/75">Disfrutá de nuestros descuentos en comercios adheridos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-8 flex justify-center lg:justify-start items-center gap-8">
                        <Link href={"https://apps.apple.com/ar/app/socioplus-ux/id1621587015"} target="_blank" className="group">
                            <Image src={apple_icon} alt="Descargar Socio Plus RC Gym Apple iOS" className="size-16 object-contain group-hover:scale-110 transition-150"/>
                        </Link>
                        <Link href={"https://play.google.com/store/apps/details?id=com.socioplus&hl=es_AR&gl=US&pli=1"} target="_blank" className="group">
                            <Image src={playstore_icon} alt="Descargar Socio Plus RC Gym Play Store Android" className="size-16 object-contain group-hover:scale-110 transition-150"/>
                        </Link>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="w-full max-w-lg flex flex-col justify-end items-end"
                >
                    <Image src={app_rcgym} alt="Aplicación Socio Plus RC Gym" className="w-full"/>
                </motion.div>
            </div>
        </section>
    )
}
