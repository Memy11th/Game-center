'use client'
import Link from 'next/link'
import React from 'react'
import LinkProps from '@/interfaces/Links'
import { usePathname } from 'next/navigation'


export default function NavLinkComp({ Links }: LinkProps) {
    const { name, pathname, icon } = Links;
    const activePathname = usePathname();

    const isActive = activePathname === pathname ; 
    return (
        <Link href={pathname} className="flex gap-2 items-center p-2 rounded-lg">
            <div className={`w-6 h-6 flex items-center justify-center duration-300 ${isActive ? 'text-rose-500' : null} `}>
                {React.cloneElement(icon, { className: 'w-full h-full' })}
            </div>  
            <span className={` duration-300 ${isActive ? 'text-rose-500' : null} `}>{name}</span>
        </Link>
    )
}
