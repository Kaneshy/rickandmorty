'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TemporadasPage = ({ params }) => {

  const [episodes, setepisodes] = useState([])

  useEffect(() => {
    const data = async () => {
      console.log(params.id)
      const res = await axios.get(`/api/Seasons/${params.id}`)
      setepisodes(res.data)
      console.log(res)
    }
    data()
  }, [params])


  return (
    <main className='flex select-none flex-col p-6 justify-between'>
      <h1 className='text-center p-6'>Rick and Morty</h1>
      

      <section className=' max-w-header'>
      <div className='px-4 flex '>
        <p className='bg-neutral-800 py-1 px-2 rounded-xl'>TEMPORADA {params.id}</p>
      </div>
        <div className='home-sv-a  '>
          {episodes.map((x, index) => {
            return (
              <Link className='shadow bg-cyan-700' key={x.id} href={`/capitulos/${x._id}`}>
                <div className="flex overflow-hidden max-h-44  bg-white">
                  <img
                    className="hover-filter-a w-full object-fill  "
                    src={x.thumbnail}
                    alt=""
                  />
                  
                </div>
                <p className="text-small-semibold  text-white p-4">
                    Title: {x.title}
                  </p>
              </Link>
            )
          })}
        </div>
      </section>

    </main>
  )
}

export default TemporadasPage