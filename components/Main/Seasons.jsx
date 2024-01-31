'use client'
import { navbarRoutes } from '@/constants/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";




const Seasons = () => {

    const [isActive, setisActive] = useState(false)
    return (
        <main className='flex flex-col p-6 justify-between'>
            <p className='text-center p-6'>Rick and Morty</p>
            <section className='max-w-header'>
                <div className='home-sv-a '>
                    {navbarRoutes.map((x, index) => {
                        return (
                            <Link 
                            key={index} href={`/Temporadas/${x.route}`} 
                            className=' bg-cyan-700' >
                                <div className="flex max-h-44 overflow-hidden  bg-white ">
                                    <img
                                        className="w-full hover-filter-a object-fill "
                                        src={x.imgUrl}
                                        alt=""
                                    />
                                </div>
                                <p className=" text-center text-white text-body-semibold  p-4">
                                    {x.label}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}

export default Seasons

