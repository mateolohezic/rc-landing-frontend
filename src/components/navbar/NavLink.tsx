'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import type { NavbarLink } from '@/interfaces';

interface Props{
    navLink: NavbarLink,
    isAtTop: boolean,
    index: number
}

export const NavLink = ({navLink, isAtTop, index}:Props) => {

    const { title, href } = navLink;

    return (
        <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.125 * index }}
            key={title}
            className="relative"
        >
            <Link href={href} aria-label={`Navegar a ${title}`} className='tracking-widest uppercase font-bold text-white peer'>
                {title}
            </Link>
            <div className={`w-0 peer-hover:w-full h-0.5 bg-gradient-to-r ${ isAtTop ? 'from-white to-transparent' : 'from-red-400 to-red-800'} rounded-full absolute bottom-0 left-0 transition-200`} />
        </motion.li>
    )
}