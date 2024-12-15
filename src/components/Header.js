import React from 'react'
import {logo} from '../utils/constants'

function Header() {
  return (
    <div>
        <div className=' bg-gradient-to-b from-black flex justify-between mx-auto'>
            <div className='mt-4'>
                <img className='w-44' src={logo} alt="logo" 
                    />
            </div>    
        </div>
    </div>
  )
}

export default Header