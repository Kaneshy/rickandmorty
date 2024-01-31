import React from 'react'

const Information = () => {
  return (
    <main className='max-w-header bg-neutral-900 p-4 flex flex-col gap-2'>
        <div className='flex gap-x-3  text-small-semibold'>
            <p className=' bg-green-500 p-2'>Total Episodes 74</p>
            <p className=' bg-green-500 p-2'>Top rated TV #16</p>
            <p className=' bg-green-500 p-2'>Won 2 Primetime Emmys</p>
        </div>
        <h1 className='text-green-500'>Description</h1>
        <p className=' text-small-semibold'>The fractured domestic lives of a nihilistic mad scientist and his anxious grandson are further complicated by their inter-dimensional misadventures.</p>
        <h1 className=' text-small-semibold text-neutral-600'>comming soon... </h1>
        <p className=' text-small-semibold text-neutral-600'>La temporada 7 está en HD. Próximamente, las demás temporadas serán actualizadas a HD. También, el audio original será añadido próximamente. </p>
    </main>
  )
}

export default Information