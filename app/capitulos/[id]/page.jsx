'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Capitulos = ({params}) => {

    const [episode, setepisode] = useState([])

    useEffect(() => {
        const data = async () => {
            console.log(params.id)
            const res = await axios.get(`/api/Chapters/${params.id}`)
            setepisode(res.data)
            console.log(res)
        }
        data()
    }, [params])

    return (
        <main >
            <div className='header-max-h '>
                <div className="video-container ">
                    <iframe width="1920" height="1080"
                        //currentVideo.videoUrl
                        src={episode.video} allow="autoplay; fullscreen" controls allowFullScreen>
                    </iframe>
                </div>

            </div>
            <div className='p-4 bg-neutral-900'>
                <p>{episode.title}</p>
            </div>
        </main>

    )
}

export default Capitulos