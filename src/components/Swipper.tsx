'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import GameDescription from './GameDescription';


export default function Swipper({ items, PaginationImgs  }: { items: { src: string, card: string, name?:string , poster:string , description:string }[], PaginationImgs?: boolean, NameClass?: string }) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // creating increamental behaviour 
        const t = setInterval(() => {
            setProgress((prev) => prev >= 100 ? 100 : prev + 3.7);
        }, 101);

        return () => clearInterval(t); // clear the t interval to avoid memory leakage when the component un-mounts
    }, [progress]); 

    useEffect(() => {
        // Reset progress to 0 when slide changes
            swiper?.on('slideChange', () => setProgress(0));
        
    }, [swiper]);

    return (
        <div className='h-full w-full relative'>

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                speed={1000}
                spaceBetween={10}
                slidesPerView={1}
                className='h-96 rounded-2xl'
                onSwiper={(swiperInstance) => setSwiper(swiperInstance)} 
                loop={true}
            >
                <div className='flex items-start justify-start w-full h-full relative'>
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item.card ? (
                                <video
                                    className='absolute w-full h-full object-cover object-top rounded-2xl inset-0'
                                    autoPlay
                                    muted
                                    loop
                                    src={item.card}
                                />
                            ) : (
                                <Image
                                    alt='Pagination-image'
                                    src={item.src}
                                    fill
                                    loading='lazy'
                                    className='absolute w-full h-full object-cover object-top rounded-2xl inset-0'
                                />
                            )}
                        <GameDescription  Poster={item?.poster} Description={item?.description} Name={item?.name}  />  
                        </SwiperSlide>
                    ))}

                </div>
            </Swiper>

            {PaginationImgs && (
                <div className='flex p-2 gap-4 mx-2'>
                    {items.map((item, index) => (
                        
                        <div
                        onClick={()=>swiper?.slideTo(index)}
                        className='rounded-xl overflow-hidden max-w-xl w-full h-40 hover:-translate-y-8  relative z-10 duration-300'
                        key={index}
                        >
                            {swiper?.realIndex === index ? <div style={{ width: `${progress}%` }} className='absolute top-0 left-0 h-full duration-300 transition-all bg-black/35 z-20' > 
                            </div> : null}
                        

                        <Image
                            alt='Pagination-image'
                            src={item.src}
                            fill
                            loading='lazy'
                            className='cursor-pointer w-full h-full object-cover object-right-top rounded-2xl inset-0'
                        />
                        
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}
