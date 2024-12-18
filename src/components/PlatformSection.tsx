import React from 'react'
import {  searchGameFn } from "@/Api/Api";
import GamesSlider from './GamesSlider';



export default async function PlatformSection({option}:{option:string }) {
    const {results} = await searchGameFn(1,200,'',3600,[{filterName:'platform',option:option}])
    console.log(results)
    return <>
    <GamesSlider Platform={option} items={results} />
    
    
    </>
}
