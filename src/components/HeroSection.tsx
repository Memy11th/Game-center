import React from 'react'
import Swipper from './Swipper'

const ITEMS = [
    {
        name:'',
        src:'',
        
    }
]
export default function HeroSection() {
    return <>
    <div className='flex justify-center items-center min-h-screen'>

        <Swipper items={ITEMS}  />

    </div>
    </>
}
