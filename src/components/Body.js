import React from 'react'
import Login from './Login' 
// import Header from './Header'
// import { bodyBackground } from '../utils/constants'
import Footer from './Footer'

function Body() {
  return (
    <div className='bg-black'>
      {/* <div>
         <Header/>
      </div> */}
      
      <Login/>
      <div>
        <Footer/>
      </div>
      
    </div>
    
    
  )
}

export default Body

// {/* <div className='flex w-11/12 m-auto'>
//         <div className='my-4 mt-4 overflow-hidden'>
//           <img className='rounded-3xl border-white border-2 h-full w-full object-cover' src={bodyBackground} alt="background"/> 
//         </div> 
//       </div> */}