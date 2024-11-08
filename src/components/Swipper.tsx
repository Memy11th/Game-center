'use client'
import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function Swipper({items,PaginationImgs}:{items:{src:string,card:ReactNode,name?:string}[],PaginationImgs?:boolean}) {
    return <>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((item,index)=> <SwiperSlide key={index}>
                <Image alt='Pagination-image' src={item?.src} height={40} width={40} loading='lazy'    />
                </SwiperSlide> )}
        
        


        
        ...
        </Swiper>
    </>
}
