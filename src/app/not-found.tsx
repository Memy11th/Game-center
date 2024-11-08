'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NotFound() {
    const router = useRouter(); 

    const handleRedirect = () => {
        router.push('/'); // Redirect to the homepage
    };

    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <p className="text-black duration-300 dark:text-rose-500 text-4xl font-bold">Error 404 | Page not found</p>
            <button onClick={handleRedirect} className="underline mt-1 text-xl dark:text-rose-500 text-black">
                Try Again
            </button>
        </div>
    );
}
