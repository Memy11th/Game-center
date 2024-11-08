'use client'
import { useTheme } from 'next-themes';
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function ThemeSwitch() {
    const {theme,setTheme,systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return <>
    <div className='mt-7'>
    {currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-rose-500'/>
        : <MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-rose-500'/> }
    </div>
        
    </>
}