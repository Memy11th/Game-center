'use client'
import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';



export default function Swipper({items,PaginationImgs}:{items:{src:string,card:string,name?:string}[],PaginationImgs?:boolean,NameClass?:string}) {
    return <>
    <div className='h-full w-full '>

    
        <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className={`  h-96  `}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        >
            <div className='flex items-start justify-start w-full h-full relative '>
            {items.map((item,index)=> <SwiperSlide key={index}  >
                {item.card ? <video className='absolute w-full h-full object-cover object-top  rounded-2xl  inset-0 ' autoPlay={true} muted={true} loop={true} src={item.card }>

                </video>:<Image alt='Pagination-image' src={item.src} fill loading='lazy' className=' absolute w-full h-full object-cover object-top  rounded-2xl  inset-0 '    />}
                </SwiperSlide> )}
            </div>
                

        </Swiper>
        <div className=' flex p-2 gap-4 mx-2'>
        {PaginationImgs && items.map((item,index)=>  <div className='rounded-xl overflow-hidden max-w-xl w-full h-40  hover:-translate-y-8 relative z-10 duration-300  ' key={index}>
                <Image alt='Pagination-image' src={item.src} fill loading='lazy' className=' cursor-pointer w-full h-full object-cover object-right-top rounded-2xl  inset-0  '    />
                </div> )}
        </div>
        
        </div>
    </>
}
