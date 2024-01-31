'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MoreVideos = ({ value }) => {

    const [episodes, setepisodes] = useState([])
    const [isActive, setisActive] = useState(false)

    useEffect(() => {
        const data = async () => {
            const res = await axios.get(`/api/Seasons/5`)
            setepisodes(res.data)
            console.log(res)
        }
        data()
    }, [value])


    return (
        <main className='flex select-none flex-col p-6 justify-between'>
            <section className=' max-w-header'>
                <div className='px-4 flex '>
                    <p className='bg-neutral-800 py-1 px-2 rounded-xl'>MAS EPISODIOS</p>
                </div>

                <div className='home-sv-a  '>
                    {episodes.map((x, index) => {

                        return (
                            <Link className={`shadow bg-neutral-900 rounded-xl `} key={x._id} href={`/capitulos/${x._id}`}>
                                <div className="flex overflow-hidden max-h-44  bg-white">
                                    <img
                                        className="hover-filter-a w-full min-h-44 bg-neutral-800  object-fill  "
                                        src={x.thumbnail}
                                        alt=""
                                    />

                                </div>
                                <p className="text-small-semibold  text-white p-4">
                                    {x.title}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}

export default MoreVideos