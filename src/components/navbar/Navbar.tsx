import Link from "next/link"
// import { motion } from "motion/react"
import type { NavbarLink } from "@/interfaces"
import { RCLogo } from "@/components"
import { NavLink } from "./NavLink"

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

    return (
        <div className="w-full bg-background-sidebar flex justify-center items-center fixed top-0 left-0 z-50">
            <nav className="w-full max-w-7xl h-20 flex justify-between items-center relative">
                <ul className="flex gap-6">
                    { links.map(
                            (link:NavbarLink, i:number) => <NavLink {...link} key={i}/>
                    )}
                </ul>
                <Link href={'/sumate'} className="px-2 py-1 border border-red-500 hover:bg-red-500 rounded-md text-red-500 hover:text-white tracking-widest uppercase transition-200">
                    Conseguí tu día de prueba
                </Link>
                <div className="h-20 aspect-square p-1 rounded-full absolute top-0 left-0 right-0 mx-auto translate-y-1/4 bg-background-sidebar">
                    <Link href={'/home'}>
                        <RCLogo className="w-full fill-white"/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
