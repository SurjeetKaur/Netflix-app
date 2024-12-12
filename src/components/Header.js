import React from 'react'
import {logo} from '../utils/constants'

function Header() {
  return (
    <div>
        <div className=' absolute bg-gradient-to-b from-black  z-10 flex justify-between w-11/12 mx-auto'>
            <div className='mt-4'>
                <img className='w-44' src={logo} alt="logo" 
                    />
            </div>
            <div className='mt-8'>
                <button className='rounded-full text-black bg-white py-2 px-4'>Sign In</button>
            </div>

        </div>

    </div>
  )
}

export default Header