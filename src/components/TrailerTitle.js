import React from 'react'

function TrailerTitle({title,overview}) {
  return (
    <div className='w-screen pt-[15%] aspect-video px-24  absolute text-white from-black bg-gradient-to-r flex  flex-col flex-wrap'>
        <h1 className='font-bold text-6xl w-3/12 sm:w-8/12'>{title}</h1>
        <p className='py-10 text-lg w-3/12 sm:8/12'>{overview}</p>
    </div>
  )
}

export default TrailerTitle