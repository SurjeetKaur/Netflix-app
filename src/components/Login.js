import React, { useState } from 'react'
import Header from './Header'
import { loginBackground } from '../utils/constants'

function Login() {
  const [isSignUp,setIsSignUp]=useState(false);
  return (
    <div>
        <div className='relative'>
            <div className='absolute '>
                <Header/>
                <img src={loginBackground} alt="background" className="w-full h-full object-cover" />
            </div>
            <form className='w-4/12 p-12 my-36 mx-auto absolute right-0 left-0 text-white rounded-lg bg-black bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 text-left'>{isSignUp? "Sign Up": "Sign In"}</h1>

                {/* Additional field for Sign Up */}
                {
                  isSignUp &&(
                  <input type="text" placeholder="Full Name" className='p-4 mx-2 my-4 w-full bg-gray-700'/>          
                  ) 
                }

                {/* Common fields for Sign In and Sign Up */}
                <input type="text" placeholder='Email Address' className='p-4 mx-2 my-4 w-full bg-gray-700' />


                {
                  isSignUp?
                   <input type="password" placeholder=' Set Password' className='p-4 mx-2  my-4 w-full bg-gray-700' />
                  :  <input type="password" placeholder='Password' className='p-4 mx-2  my-4 w-full bg-gray-700' />
                }
       
                <button className='p-4 mx-2 my-4 w-full bg-red-700'>
                  {isSignUp ?"Sign Up":"Sign In"}
                </button>
                <p className='p-4 cursor-pointer' onClick={()=>
                    setIsSignUp(!isSignUp)
                  }>
                    {isSignUp? 
                    <div className='flex flex-row justify-center'><p>Already have an account? </p> <p className="hover:underline pl-2">Sign in now.</p></div> 
                    : 
                    <div className='flex flex-row justify-center'><p>New to Netflix? </p> <p className="hover:underline pl-2">Sign up now.</p> </div>}
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login
