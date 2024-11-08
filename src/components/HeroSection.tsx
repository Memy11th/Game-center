import React from 'react'
import Swipper from './Swipper'

const ITEMS = [
    {
        name:'Spiderman',
        src:'/poster.webp',
        card:'/spidervideo.mp4'
    },
    {
        name:'Call of Duty',
        src:'/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp',
        card:'/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4'
    },
    {
        name:'Cyber PUNK',
        src:'/cyb.webp',
        card:'/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4'
    },
    {
        name:'Dragon balls',
        src:'/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp',
        
    },
]
export default function HeroSection() {
    return <>
    <div className='flex justify-center items-start min-h-screen'>

        <Swipper PaginationImgs items={ITEMS}  />

    </div>
    </>
}
