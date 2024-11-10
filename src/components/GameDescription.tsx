import Image from 'next/image'
import React from 'react'

export default function GameDescription({Poster,Description,Name}:{Poster:string,Description:string,Name:string}) {
    return <>
    <div className='absolute top-20 left-20 z-200'>
        <Image height={280} width={480} src={Poster} alt={Name} />
        <p className='text-white w-1/3 text-xs font-semibold'>{Description}</p>
    </div>
    </>
}
