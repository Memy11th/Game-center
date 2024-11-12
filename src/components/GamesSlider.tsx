'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import Game from '@/interfaces/Game';

export default function GamesSlider({ items , Platform }: { items: Game[] ,Platform:string}) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (
        <div className='min-h-screen w-full m-1 relative'>
            <h1 className='text-xl dark:text-rose-500'> 
                {Platform}
            </h1>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1000 }}
                speed={1000}
                spaceBetween={35}
                slidesPerView={4}
                className='h-96 rounded-2xl'
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                loop={true}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}   >
                        <Link className='group  ' href={`/games/${item.id}`}>
                            <Image
                                alt={item.name}
                                src={item.background_image}
                                fill
                                loading='lazy'
                                className='absolute   group-hover:rotate-2 group-hover:scale-105 duration-300  w-full h-full object-cover object-top rounded-2xl inset-0'
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
