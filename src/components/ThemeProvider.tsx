'use client'
import { ThemeProvider } from 'next-themes'
import React, { ReactElement } from 'react'
import { useEffect, useState } from 'react';

export default function Providers({ children }:ReactElement) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className=' dark:bg-black bg-white min-h-screen transition-colors duration-700 '>
            {children}
            </div>
            
        </ThemeProvider>
    );
}