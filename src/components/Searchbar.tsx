'use client';
import React, { useEffect, useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';

    export default function Searchbar() {
    const [searchParam, setSearchParam] = useState('');

    function handleTyping(e) {
        setSearchParam(e.target.value);
    }

    useEffect(() => {
        console.log(searchParam);
    }, [searchParam]);

    return (
        <div className="grid col-span-8">
        <div className="flex justify-between w-full p-2 bg-black/10  my-2 rounded-lg">
            <input
            onChange={handleTyping}
            className="bg-black/10 rounded-2xl p-2 font-semibold w-full outline-none text-rose-500"
            type="text"
            placeholder="Search..."
            />
            <FaSearchengin className="h-5 w-5 text-rose-500 my-auto" />
        </div>
        </div>
    );
}
