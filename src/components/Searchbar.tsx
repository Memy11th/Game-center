import React from 'react'
import { FaSearchengin } from 'react-icons/fa'

export default function Searchbar({cols}:{cols:number}) {
    return <>
    <div className={`grid col-span-${cols}`}>
        <div className='flex justify-between w-full p-2 bg-gray-600 outline-1 outline-rose-500 my-2 rounded-lg'>
        <input className='bg-gray-600 w-full outline-0 text-white ' type="text" placeholder='Search...' />
        {React.cloneElement(<FaSearchengin/>,{className:'h-6 w-6 text-rose-500 '})}
        </div>
    </div>
    
    </>
}
