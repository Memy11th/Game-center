import Image from 'next/image'
import React from 'react'
import * as motion from "framer-motion/client"

export default function GameDescription({Poster,Description,Name}:{Poster:string,Description:string,Name:string}) {
    return <>
    <motion.div initial={{opacity:0,y:150,scale:0.7}} whileInView={{opacity:1,y:0,scale:1,transition:{duration:1}}}  className='absolute duration-150 top-20 left-20 z-200'>
        <Image height={280} width={480} src={Poster} alt={Name} />
        <p className='text-white w-1/3 text-xs font-semibold'>{Description}</p>
    </motion.div>
    </>
}
