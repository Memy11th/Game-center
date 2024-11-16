import Link from 'next/link'
import React from 'react'

export default function Button() {
    
    return <>
        <Link href={'/auth/login'}  className={` grid col-span-2 justify-center md:text-base  text-xs items-center  bg-black/15 h-fit my-auto p-2 text-rose-500 rounded-3xl `}>
            Game on
        </Link>
    </>
}
