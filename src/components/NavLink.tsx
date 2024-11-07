import Link from 'next/link'
import React from 'react'
import LinkProps from '@/interfaces/Links'

export default function NavLinkComp({ Links }: LinkProps) {
    const { name, pathname, icon } = Links
    return (
        <Link href={pathname} className="flex gap-2 items-center p-2 rounded-lg">
            <div className="w-6 h-6 flex items-center justify-center">
                {React.cloneElement(icon, { className: 'w-full h-full' })}
            </div>  
            <span className="leading-none">{name}</span>
        </Link>
    )
}
