import React from 'react'
import Swipper from './Swipper'

const ITEMS = [
    {
        name:'Spiderman',
        src:'/poster.webp',
        card:'/spidervideo.mp4',
        poster:'/news1title.webp',
        description:'The plot follows Peter Parker and Miles Morales as they come into conflict with Kraven the Hunter, who transforms New York City into a hunting ground for super-powered individuals; and with the extraterrestrial Venom symbiote, which bonds itself to Peter and negatively influences him, threatening to destroy his personal relationships.'

    },
    {
        name:'Call of Duty',
        src:'/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp',
        card:'/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4',
        poster:'/call-of-duty-black-ops-6-logo-01-en-21may24.webp',
        description:'Set in 1991, Black Ops 6s single-player story follows rogue operatives Troy Marshall and Frank Woods as they assemble a team of agents to hunt down Pantheon, a paramilitary group that intends to enact a false flag attack on the United States in order to discredit and replace the Deputy Director of the CIA.'
    },
    {
        name:'Cyber PUNK',
        src:'/cyb.webp',
        card:'/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4',
        poster:'/iconcyber.webp',
        description:'Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. Play as V, a cyberpunk mercenary, and take on the most powerful forces of the city in a fight for glory and survival',
    },
    {
        name:'Dragon balls',
        src:'/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp',
        poster:'/Dragon-Ball-Sparking-Zero-logo-01-03oct24.webp',
        description:'Dragon Balls are the namesake artifact of the Dragon Ball series. They are orange, crystalline spheres with the ability to call forth the Eternal Dragon Shenron which has the ability to grant wishes to anyone who gathers all seven of them'

        
    },
]
export default function HeroSection() {
    return <>
    <div className='flex justify-center items-start min-h-screen'>

        <Swipper PaginationImgs items={ITEMS}  />

    </div>
    </>
}
