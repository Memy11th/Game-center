'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import SimilarResponse from '@/interfaces/SimilarResponse';

export default function SimilarSlider({ Similar }: { Similar :SimilarResponse[] }) {
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
                Similar Games
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
                {Similar.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link href={`/games/${item.id}`}>
                            <div className='relative h-full group hover:scale-105 duration-300'>
                                <Image
                                    alt={item.name}
                                    src={item.background_image}
                                    fill
                                    loading='lazy'
                                    className='absolute duration-300 w-full h-full object-cover object-top rounded-2xl inset-0'
                                />
                                <div className='absolute inset-0 bg-gray-600 w-0 rounded-2xl group-hover:w-full h-full transition-all duration-300 opacity-40'></div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
