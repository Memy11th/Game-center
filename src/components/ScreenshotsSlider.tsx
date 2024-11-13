'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';



export default function ScreenshotSlider({ screenshots }: {screenshots :{id:number , image:string , width:number , height:number , is_deleted:boolean }[] }) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    // Initialize the swiper with autoplay
    useEffect(() => {
        if (swiper) {
            swiper.autoplay.start();
        }
    }, [swiper]);

    const handleMouseEnter = () => {
        if (swiper) swiper.autoplay.stop();
    };

    const handleMouseLeave = () => {
        if (swiper) swiper.autoplay.start();
    };

    return (
        <div 
            className=' w-full m-1 relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className='text-xl dark:text-rose-500 my-2'> 
                Screenshots from gameplay
            </h1>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: true }}
                speed={1000}
                spaceBetween={35}
                slidesPerView={4}
                className='h-96 rounded-2xl'
                onSwiper={setSwiper}
                loop={true}
            >
                {screenshots.map((screenshot) => (
                    <SwiperSlide key={screenshot.id}>
                            <div className='relative h-full   duration-300'>
                                <Image
                                    alt='screenshot'
                                    src={screenshot.image}
                                    height={screenshot.height}
                                    width={screenshot.width}
                                    loading='lazy'
                                    className='absolute  w-full h-full object-cover object-top rounded-2xl inset-0'
                                />
                                <div className='absolute inset-0 bg-rose-500 w-0 rounded-2xl group-hover:w-full h-full transition-all duration-300 opacity-40'></div>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
