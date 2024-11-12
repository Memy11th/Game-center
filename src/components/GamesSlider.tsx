'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import Game from '@/interfaces/Game';

export default function GamesSlider({ items }: { items: Game[] }) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (
        <div className='min-h-screen w-full m-1 relative'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1000 }}
                speed={1000}
                spaceBetween={10}
                slidesPerView={5.25}
                className='h-96 rounded-2xl'
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                loop={true}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link href={`/games/${item.id}`}>
                            <Image
                                alt={item.name}
                                src={item.background_image}
                                fill
                                loading='lazy'
                                className='absolute w-full h-full object-cover object-top rounded-2xl inset-0'
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
