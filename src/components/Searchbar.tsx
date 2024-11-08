import React from 'react'
import { FaSearchengin } from 'react-icons/fa'

export default function Searchbar() {
    return <>
    <div className={`grid col-span-8`}>
        <div className='flex justify-between w-full p-2 bg-black/15 outline-1 outline-rose-500 my-2 rounded-lg'>
        <input className=' bg-black/15 w-full outline-0 text-white ' type="text" placeholder='Search...' />
        {React.cloneElement(<FaSearchengin/>,{className:'h-5 w-5 text-rose-500 '})}
        </div>
    </div>
    
    </>
}
