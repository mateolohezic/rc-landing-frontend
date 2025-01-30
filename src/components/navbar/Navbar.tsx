'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { InstagramIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from "@/icons";
import type { NavbarLink } from "@/interfaces";
import { NavLink, RCIcon } from "@/components";

interface SocialMedia {
    label: string;
    href: string;
    Icon: IconType;
}

const links:Array<NavbarLink> = [
    { title: 'Sedes', href: '/#sedes' },
    { title: 'Beneficios', href: '/#beneficios' },
    { title: 'Planes', href: '/#planes' }
]

const socialMedias:Array<SocialMedia> = [
    { label: 'Instagram', href: 'https://www.instagram.com/rooftopcrossfit/', Icon: InstagramIcon },
    { label: 'TikTok', href: 'https://www.instagram.com/rooftopcrossfit/', Icon: TiktokIcon },
    { label: 'YouTube', href: 'https://www.instagram.com/rooftopcrossfit/', Icon: YoutubeIcon },
    { label: 'Whatsapp', href: 'https://www.instagram.com/rooftopcrossfit/', Icon: WhatsappIcon },
]

export const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    
    useEffect(() => {
        if(!window) return;

        const handleScroll = () => {
            setIsAtTop(window.scrollY < window.innerHeight/1.5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full ${ isAtTop ? 'bg-transparent' : 'bg-neutral-900 lg:bg-background-sidebar'} flex flex-col justify-center items-center fixed top-0 left-0 z-50 transition-200`}>
            <nav className="w-full max-w-7xl h-20 px-4 lg:px-0 flex justify-between items-center relative">
                <Link href={'/home'} className={`h-16 lg:h-20 aspect-square  ${ isAtTop ? 'lg:translate-y-1/4' : 'lg:p-2' } flex justify-center items-center lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:mx-auto lg:hover:scale-110 transition-200`}>
                    <RCIcon className={`${ isAtTop ? 'size-16 lg:size-24' : 'size-full' } overflow-visible fill-white transition-200`}/>
                </Link>
                <ul className="lg:flex gap-6 hidden">
                    { links.map(
                            (link:NavbarLink, i:number) => <NavLink navLink={link} isAtTop={isAtTop} index={i} key={i}/>
                    )}
                </ul>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125*3 }}
                    className="flex justify-end gap-6"
                >
                    <div className="lg:flex justify-end items-center gap-4 hidden">
                        {
                            socialMedias.map( ({label, href, Icon}:SocialMedia) =>
                                <Link
                                    href={href}
                                    className={`${!isAtTop && "text-white/25 hover:text-white"} transition-150`}
                                    aria-label={label}
                                    key={label}
                                >
                                    <Icon className="size-5"/>
                                </Link>
                            )
                        }
                    </div>
                    <Link href={'/sumate'} className={`px-2 py-1 h-10 rounded-md tracking-widest text-xs lg:text-base uppercase border ${ isAtTop ? 'border-transparent bg-white text-black' : 'border-red-500 bg-red-500 lg:bg-transparent lg:hover:bg-red-500 lg:text-red-500 lg:hover:text-white'} flex items-center transition-200`}>
                        Conseguí tu día de prueba
                    </Link>
                </motion.div>
            </nav>
        </div>
    )
}
