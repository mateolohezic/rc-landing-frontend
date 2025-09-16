'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CrossIcon, InstagramIcon, MenuIcon, TiktokIcon, YoutubeIcon } from "@/icons";
import { RCIcon, NavLink } from "@/components";
import type { NavbarLink } from "@/interfaces";

const links: Array<NavbarLink> = [
    { title: 'Inicio', href: '/' },
    { title: 'Planes', href: '/planes' },
    { title: 'Festival RC', href: '/festival' }
];

const socialMedias = [
    { label: 'Instagram', href: 'https://www.instagram.com/rcgym/', Icon: InstagramIcon },
    { label: 'TikTok', href: 'https://www.tiktok.com/@rc.gym', Icon: TiktokIcon },
    { label: 'YouTube', href: 'https://www.youtube.com/@RCGym-t4v', Icon: YoutubeIcon }
];

export const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsAtTop(window.scrollY < window.innerHeight / 1.5);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`w-full ${isAtTop ? 'bg-transparent' : 'bg-gradient-to-b from-neutral-900 to-neutral-900'} flex justify-center items-center fixed top-0 left-0 z-50 transition-200`}>
                <nav className="w-full max-w-7xl h-20 px-4 flex justify-between items-center relative">
                    <Link href="/" className="h-16 aspect-square flex justify-center items-center lg:absolute lg:left-0 lg:right-0 lg:mx-auto">
                        <RCIcon className={`${isAtTop ? 'scale-150 left-4 lg:left-0 top-4' : 'scale-100 left-0 top-0'} size-full fill-white transition-200 relative`} />
                    </Link>
                    <ul className="lg:flex gap-6 hidden">
                        {links.map((link, i) => (
                            <NavLink navLink={link} isAtTop={isAtTop} index={i} key={i} />
                        ))}
                    </ul>
                    <div className="hidden lg:flex items-center gap-4">
                        {socialMedias.map(({ label, href, Icon }) => 
                            <Link href={href} key={label} aria-label={label} className="hover:opacity-75 transition-150">
                                <Icon className="size-5" />
                            </Link>
                        )}
                        <Link href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/" } target="_blank" className={`px-2 py-1 h-10 rounded-md tracking-widest text-xs lg:text-base uppercase ${ isAtTop ? 'bg-white text-black' : 'bg-red-500 lg:hover:bg-red-400'} flex items-center transition-200`}>
                            Conseguí tu día de prueba
                        </Link>
                    </div>
                    <button className="lg:hidden z-50" onClick={() => setMenuOpen(prev => !prev)} aria-label="Abrir menú">
                        {menuOpen ? <CrossIcon className="size-10"/> : <MenuIcon className="size-10" />}
                    </button>
                </nav>
            </div>
            <AnimatePresence>
                { menuOpen &&
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100vh' }}
                        exit={{ height: 0 }}
                        className="fixed top-0 left-0 w-full px-4 bg-neutral-900 z-40 overflow-hidden lg:hidden"
                    >
                        <div className="h-full font-bold uppercase tracking-widest flex flex-col justify-center items-center gap-8">
                            {links.map((link, i) => (
                                <Link key={i} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
                                    {link.title}
                                </Link>
                            ))}
                            <Link href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"} onClick={() => setMenuOpen(false)} target="_blank" className="p-2 bg-red-500 rounded-md tracking-widest uppercase text-center hover:bg-red-400 transition-200">
                                Conseguí tu día de prueba
                            </Link>
                            <div className="mt-8 flex gap-4">
                                {socialMedias.map(({ label, href, Icon }) => (
                                    <Link href={href} key={label} aria-label={label} className="hover:opacity-75 transition-150">
                                        <Icon className="size-6" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    );
};
