import React from 'react'
import {  searchGameFn } from "@/Api/Api";
import Image from 'next/image';


export default async function PlatformSection({option}:{option:string}) {
    const {results,count,next,previous} = await searchGameFn('',1,1,3600,[{filterName:'platform',option:option}])
    console.log(results)
    return <>

    <div className='w-full grid-cols-12 grid min-h-screen'>
        <div className='relative col-span-3 h-64  group rounded-lg '>

            <Image fill alt={results[0].name} src={results[0].background_image} className='rounded-lg  group-hover:rotate-3  group-hover:scale-125 duration-300  ' />

        </div>
        <p>{results[0].name}</p>

    </div>
    
    </>
}
