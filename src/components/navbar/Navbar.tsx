'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CrossIcon, InstagramIcon, MenuIcon, TiktokIcon, YoutubeIcon } from "@/icons";
import { RCIcon } from "@/components";

const links = [
    { title: 'Inicio', href: '/' },
    { title: 'Sedes', href: '#sedes' },
    { title: 'Entrenamientos', href: '#entrenamientos' },
    { title: 'Planes', href: '/planes' },
];

const socialMedias = [
    { label: 'Instagram', href: 'https://www.instagram.com/rcgym/', Icon: InstagramIcon },
    { label: 'TikTok', href: 'https://www.tiktok.com/@rc.gym', Icon: TiktokIcon },
    { label: 'YouTube', href: 'https://www.youtube.com/@RCGym-t4v', Icon: YoutubeIcon }
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[0.06]'
                        : 'bg-transparent'
                }`}
            >
                <nav className="w-full max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">
                    {/* Left: Logo + Links */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="relative z-10 group shrink-0">
                            <RCIcon className={`fill-white transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} group-hover:scale-110`} />
                        </Link>
                        <ul className="hidden lg:flex items-center gap-1">
                            {links.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Social + CTA */}
                    <div className="hidden lg:flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            {socialMedias.map(({ label, href, Icon }) => (
                                <Link href={href} key={label} target="_blank" aria-label={label} className="text-white/40 hover:text-white transition-colors duration-200">
                                    <Icon className="size-[18px]" />
                                </Link>
                            ))}
                        </div>
                        <Link
                            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
                            target="_blank"
                            className="px-5 py-2.5 bg-red-600 hover:bg-red-500 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
                        >
                            Día de prueba gratis
                        </Link>
                    </div>

                    <button className="lg:hidden relative z-50" onClick={() => setMenuOpen(prev => !prev)} aria-label="Abrir menú">
                        {menuOpen ? <CrossIcon className="size-8" /> : <MenuIcon className="size-8" />}
                    </button>
                </nav>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 lg:hidden flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-3xl font-highrise-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4"
                            >
                                <Link
                                    href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
                                    onClick={() => setMenuOpen(false)}
                                    target="_blank"
                                    className="px-8 py-3 bg-red-600 rounded-full text-lg font-semibold tracking-wide inline-block hover:bg-red-500 transition-all"
                                >
                                    Día de prueba gratis
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 flex gap-6"
                            >
                                {socialMedias.map(({ label, href, Icon }) => (
                                    <Link href={href} key={label} target="_blank" aria-label={label} className="text-white/50 hover:text-white transition-colors">
                                        <Icon className="size-6" />
                                    </Link>
                                ))}
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
