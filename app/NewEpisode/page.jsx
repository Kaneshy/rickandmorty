'use client'
import React, { useState } from 'react'
import { Temps, sizes } from "@/constants/Temporadas";
import axios from 'axios';

const NewEpisode = () => {

    const [seasons, setSeasons] = useState([]);
    const [selectedSize, setselectedSize] = useState([]);
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };



    const handleClothingSelection = (clothing) => {
        if (seasons.includes(clothing)) {
            // Si la prenda ya está seleccionada, la quitamos de la selección
            setSeasons(seasons.filter(item => item !== clothing));
        } else {
            // Si la prenda no está seleccionada, la añadimos a la selección
            setSeasons([...seasons, clothing]);
        }
    }



    const handleUpload = async (e) => {
        e.preventDefault();
        const data = { ...inputs, seasons }
        console.log(data)

        
        try {
            const res = await axios.post("/api/Chapters", { ...data })
            console.log('upload status', res.data)

            if (res.status === 200) {
                router.push(`/`);
            }

        } catch (error) {
            console.log('ddd', error.message)
        }
        
    }



    return (
        <main>
            <section className="mb-4 border-gray-500 border p-2 w-full">
                <div className="mb-4 border-gray-500 border p-2 w-full">
                    <h3>Prendas seleccionadas:</h3>
                </div>
                <div className="mb-4  border-gray-500 border  p-2 w-full">
                    <div className="gap-2 p-2">
                        {seasons.map((item, index) => (
                            <button
                                style={{ margin: '5px' }}
                                onClick={() => handleClothingSelection(item)}
                                className="p-2 rounded bg-slate-600" key={`selectedClothing${index * 5}`}>{item}</button>
                        ))}
                    </div>
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <div>
                        {Temps.map((clothing, index) => (
                            <button
                                key={`prendas${index * 8}`}
                                style={{ margin: '5px' }}
                                onClick={() => handleClothingSelection(clothing)}
                                className={seasons.includes(clothing) ? 'selected' : ''}
                            >
                                <p className="p-2 rounded bg-slate-700">{clothing}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="title" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Title Episode: </label>
                    <input type="text" id="title" name='title' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="video" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Link Video: </label>
                    <input type="text" id="video" name='video' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="thumbnail" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Link thumbnail: </label>
                    <input type="text" id="thumbnail" name='thumbnail' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
                </div>
                <button

                    className="bg-blue-1 w-full hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                    onClick={handleUpload}
                >
                    Submit
                </button>
            </section>

        </main>
    )
}

export default NewEpisode