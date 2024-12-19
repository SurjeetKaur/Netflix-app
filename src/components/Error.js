import React from 'react'

function Error() {
  return (
    <div >
        <div className='flex flex-col justify-center text-center text-red-600 text-3xl bg-yellow-400 h-screen'>
            <h1 className='text-8xl py-8'>Oops !</h1>
            <h1 className='text-8xl py-8'>404 ☹️</h1>
            <p className='text-4xl py-8'>Page not found !</p> 
        </div>
    </div>
  )
}

export default Error