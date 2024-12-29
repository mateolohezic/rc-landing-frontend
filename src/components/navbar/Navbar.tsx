import Link from "next/link"
// import { motion } from "motion/react"
import type { NavbarLink } from "@/interfaces"
import { RCLogo } from "@/components"
import { NavLink } from "./NavLink"
import { InstagramIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from "@/icons"
import { IconType } from "react-icons"

interface SocialMedia {
    label: string;
    href: string;
    Icon: IconType;
}

export const Navbar = () => {

    const links:Array<NavbarLink> = [
        {
            title: 'Sedes',
            href: '/#sedes'
        },
        {
            title: 'Beneficios',
            href: '/#beneficios'
        },
        {
            title: 'Planes',
            href: '/#planes'
        },
    ]

    const socialMedias:Array<SocialMedia> = [
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/rooftopcrossfit/',
            Icon: InstagramIcon
        },
        {
            label: 'TikTok',
            href: 'https://www.instagram.com/rooftopcrossfit/',
            Icon: TiktokIcon
        },
        {
            label: 'YouTube',
            href: 'https://www.instagram.com/rooftopcrossfit/',
            Icon: YoutubeIcon
        },
        {
            label: 'Whatsapp',
            href: 'https://www.instagram.com/rooftopcrossfit/',
            Icon: WhatsappIcon
        },
    ]

    return (
        <div className="w-full bg-background-sidebar flex flex-col justify-center items-center fixed top-0 left-0 z-50">
            <nav className="w-full max-w-7xl h-20 flex justify-between items-center relative">
                <ul className="flex gap-6">
                    { links.map(
                            (link:NavbarLink, i:number) => <NavLink {...link} key={i}/>
                    )}
                </ul>
                <div className="flex justify-end gap-6">
                    <div className="flex justify-end items-center gap-4">
                        {
                            socialMedias.map( ({label, href, Icon}:SocialMedia) =>
                                <Link
                                    href={href}
                                    className="text-white/25 hover:text-white transition-150"
                                    aria-label={label}
                                    key={label}
                                >
                                    <Icon className="size-5"/>
                                </Link>
                            )
                        }
                    </div>
                    <Link href={'/sumate'} className="px-2 py-1 border border-red-500 hover:bg-red-500 rounded-md text-red-500 hover:text-white tracking-widest uppercase transition-200">
                        Conseguí tu día de prueba
                    </Link>
                </div>
                <Link href={'/home'} className="h-20 aspect-square p-1 bg-background-sidebar rounded-full flex justify-center items-center absolute top-0 left-0 right-0 mx-auto translate-y-1/4 hover:scale-125 transition-200">
                    <RCLogo className="overflow-visible size-full fill-white"/>
                </Link>
            </nav>
        </div>
    )
}
