import React from 'react'
import {  searchGameFn } from "@/Api/Api";
import Image from 'next/image';


export default async function PlatformSection({option}:{option:string}) {
    const {results,count,next,previous} = await searchGameFn('',1,20,3600,[{filterName:'platform',option:option}])
    return <>
    <div className='flex justify-center '>
    {results.map((result)=> <div className='relative w-full h-64'  key={result?.id}>
        <div>

        <Image  alt={result?.name} src={result?.background_image}  className='w-1/3' fill />
        </div>
    </div> 

 )}

    </div>
    </>
}
