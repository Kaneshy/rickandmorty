'use client'
import { navbarRoutes } from '@/constants/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";




const Seasons = () => {

    const [isActive, setisActive] = useState(false)
    return (
        <main className='flex select-none flex-col p-6 justify-between'>
            <div className='items-center flex justify-center text-heading1-bold p-6'>
                <img
                    width={200}
                    src={'https://res.cloudinary.com/dztz492su/image/upload/v1706741382/samples/a_gvphds.png'} />
            </div>
            <section className='max-w-header'>
                <div className='home-sv-a '>
                    {navbarRoutes.map((x, index) => {
                        return (
                            <Link
                                key={index} href={`/Temporadas/${x.route}`}
                                className=' bg-cyan-900' >
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

