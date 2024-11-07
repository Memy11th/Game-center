import React from 'react'
import { FaHome, FaUserFriends } from 'react-icons/fa'
import { TbJewishStarFilled } from 'react-icons/tb'
import NavLinkComp from './NavLink'
import { BiSolidCategory } from 'react-icons/bi'

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
    <div className='flex flex-col gap-8 my-2 col-span-2 justify-center items-center'>
    {NavLinks.map((navLink , index)=> <NavLinkComp key={index} Links={navLink}/>)}

    </div>

    
    </>
}
