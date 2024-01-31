'use client'
import { navbarRoutes } from '@/constants/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";




const Navbar = () => {

    const [isActive, setisActive] = useState(false)
    return (
        <nav className='flex items-center p-6 bg-neutral-900 justify-between'>
            <Link href={'/'}>Rick and Morty</Link>
            <section className='lg:hidden'>
                {isActive ? (
                    <button onClick={()=>setisActive(!isActive)}>
                        <RiMenu3Fill   size={30} />
                    </button>
                    ) : (
                        <button onClick={()=>setisActive(!isActive)}>
                        <HiOutlineMenu  size={30} />
                    </button>
                )}
            </section>
            <section className='flex gap-x-4 max-lg:hidden'>
                {navbarRoutes.map((x, index) => {
                    return (
                        <Link key={index} href={`/Temporadas/${x.route}`}>{x.label}</Link>
                    )
                })}
            </section>
        </nav>
    )
}

export default Navbar