'use client'
import { navbarRoutes } from '@/constants/Navbar'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { Imagen } from '@/public/assets/a.png'




const Navbar = () => {

    const [isActive, setisActive] = useState(false)
    return (
        <main>

            <nav className='flex items-center p-6 bg-neutral-900 justify-between'>
                <Link href={'/'}>
                    <img
                        width={100}
                        src={'https://res.cloudinary.com/dztz492su/image/upload/v1706741382/samples/a_gvphds.png'} />
                </Link>
                <section className='lg:hidden'>
                    {isActive ? (
                        <button onClick={() => setisActive(!isActive)}>
                            <RiMenu3Fill size={30} />
                        </button>
                    ) : (
                        <button onClick={() => setisActive(!isActive)}>
                            <HiOutlineMenu size={30} />
                        </button>
                    )}
                </section>
                <section className='flex gap-x-4 max-lg:hidden'>
                    {navbarRoutes.map((x, index) => {
                        return (
                            <Link
                                className=' text-small-regular bg-neutral-700 px-2 py-1 rounded-xl'
                                key={index} href={`/Temporadas/${x.route}`}
                            >{x.label}</Link>
                        )
                    })}
                </section>

            </nav>
            {isActive && (
                <section className='flex flex-col lg:hidden gap-2 p-4 bg-neutral-900'>
                    {navbarRoutes.map((x, index) => {
                        return (
                            <Link
                                className='text-center text-small-regular bg-neutral-800 p-2'
                                key={index} href={`/Temporadas/${x.route}`}
                            >{x.label}</Link>
                        )
                    })}
                </section>
            )}
        </main>


    )
}

export default Navbar