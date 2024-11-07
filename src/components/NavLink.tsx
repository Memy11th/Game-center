import Link from 'next/link'
import React from 'react'
import LinkProps from '@/interfaces/Links'
export default function NavLinkComp({Links}:LinkProps) {
    const {name,pathname,icon} = Links
    return (
    <Link href={pathname} className='flex gap-1 justify-start items-center p-2 rounded-lg' >
        {React.cloneElement(icon,{className:'w-6 h-6'})}
        {name}
    </Link>
    )
}
