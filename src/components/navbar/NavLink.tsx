'use client'

import Link from "next/link"
import type { NavbarLink } from '@/interfaces'

export const NavLink = ({title, href}:NavbarLink) => {
    return (
        <li key={title} className="relative">
            <Link href={href} aria-label={`Navegar a ${title}`} className='tracking-widest uppercase font-bold text-white/75 hover:text-white transition-200 peer'>
                {title}
            </Link>
            <div className="w-0 peer-hover:w-full h-0.5 bg-gradient-to-r from-red-400 to-red-800 rounded-full absolute bottom-0 left-0 transition-200"></div>
        </li>
    )
}