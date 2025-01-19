'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { IconType } from "react-icons"
import { InstagramIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from "@/icons"
import type { NavbarLink } from "@/interfaces"
import { RCIcon } from "@/components"
import { NavLink } from "./NavLink"

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
        <div className={`w-full ${ isAtTop ? 'bg-transparent' : 'bg-background-sidebar'} flex flex-col justify-center items-center fixed top-0 left-0 z-50 transition-200`}>
            <nav className="w-full max-w-7xl h-20 flex justify-between items-center relative">
                <ul className="flex gap-6">
                    { links.map(
                            (link:NavbarLink, i:number) => <NavLink navLink={link} isAtTop={isAtTop} key={i}/>
                    )}
                </ul>
                <div className="flex justify-end gap-6">
                    <div className="flex justify-end items-center gap-4">
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
                    <Link href={'/sumate'} className={`px-2 py-1 rounded-md tracking-widest uppercase border ${ isAtTop ? 'border-transparent bg-white text-black' : 'border-red-500 hover:bg-red-500 text-red-500 hover:text-white'} transition-200`}>
                        Conseguí tu día de prueba
                    </Link>
                </div>
                <Link href={'/home'} className={`h-20 aspect-square ${ isAtTop ? 'translate-y-1/4' : 'p-2' } flex justify-center items-center absolute top-0 left-0 right-0 mx-auto hover:scale-110 transition-200`}>
                    <RCIcon className={`${ isAtTop ? 'size-24' : 'size-full' } overflow-visible fill-white transition-200`}/>
                </Link>
            </nav>
        </div>
    )
}
