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
    <div className=' md:flex relative bg-black/25  md:flex-col  hidden md:col-span-2 justify-center items-center'>
    <h4 className=' absolute top-2 text-sm font-bold '>
    <Link href={'/'} className='text-rose-500 font-bold text-xl'>M11</Link> Gaming
    </h4>
    <div className='md:flex md:flex-col gap-8 sticky inset-0  '>

    {NavLinks.map((navLink , index)=> <NavLinkComp key={index} Links={navLink}/>)}

    </div>

    </div>

    
    </>
}
