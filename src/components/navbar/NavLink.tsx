'use client'

import Link from "next/link"
import type { NavbarLink } from '@/interfaces'

interface Props{
    navLink: NavbarLink,
    isAtTop: boolean
}

export const NavLink = ({navLink, isAtTop}:Props) => {

    const { title, href } = navLink;

    return (
        <li key={title} className="relative">
            <Link href={href} aria-label={`Navegar a ${title}`} className='tracking-widest uppercase font-bold text-white peer'>
                {title}
            </Link>
            <div className={`w-0 peer-hover:w-full h-0.5 bg-gradient-to-r ${ isAtTop ? 'from-white to-transparent' : 'from-red-400 to-red-800'} rounded-full absolute bottom-0 left-0 transition-200`} />
        </li>
    )
}