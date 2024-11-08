import React from 'react'
import { FaHome, FaUserFriends } from 'react-icons/fa'
import { TbJewishStarFilled } from 'react-icons/tb'
import NavLinkComp from './NavLink'
import { BiSolidCategory } from 'react-icons/bi'
import Link from 'next/link'

const NavLinks = [
    {
        name:'Home',
        pathname:'/',
        icon:<FaHome />
    },
    {
        name:'Category',
        pathname:'/category',
        icon:<BiSolidCategory />
    },
    {
        name:'Wishlist',
        pathname:'/wishlist',
        icon:<TbJewishStarFilled />
    },
    {
        name:'Friends',
        pathname:'/Friends',
        icon:<FaUserFriends />

    },
]
export default function SideNav() {
    return <>
    <div className=' md:flex  bg-black/15  md:flex-col  hidden md:col-span-2   '>
    
    <div className='flex flex-col gap-8 sticky inset-0 items-center justify-center   '>
    <h4 className='  text-sm font-bold  mt-6'>
    <Link href={'/'} className='text-rose-500 font-bold text-xl'>M11</Link>
    Gaming
    </h4>

    <div className='flex flex-col gap-8 '>
    {NavLinks.map((navLink , index)=> <NavLinkComp key={index} Links={navLink}/>)}

    </div>

    </div>

    </div>

    
    </>
}
