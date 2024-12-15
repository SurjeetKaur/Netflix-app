import React, { useState, useRef} from 'react'
import Header from './Header'
import { loginBackground } from '../utils/constants'
import { credentialsValidation,fullNameValidation } from '../utils/validationForm';
import Footer from './Footer'



function Login() {
  const [isSignUp,setIsSignUp]=useState(false);
  const [errMsgCredentials,seterrMsgCredentials]= useState(null);
  const [errMsgFullName,seterrMsgFullName]= useState(null);

  const fullName=useRef(null);  //useRef Hook
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
    setIsSignUp(!isSignUp);
    seterrMsgCredentials(null);
    seterrMsgFullName(null);
  }

  const handleFormButtonClick=()=>{

    seterrMsgCredentials(credentialsValidation(email.current.value, password.current.value));
    console.log('email',email.current.value);
    console.log('password', password.current.value);
     isSignUp && seterrMsgFullName(fullNameValidation(fullName.current.value));

     if(errMsgCredentials || errMsgFullName){
      return;
     }

  }
  return (
    <div>
        <div className='flex flex-wrap '>
            <div className='absolute inset-0 z-0 flex flex-wrap'> */}
                <img src={loginBackground} alt="background" className="object-cover w-full absolute" />
           </div> 
            <div className="relative z-10 w-full">
              <Header />
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className='w-11/12 sm:w-4/12 px-12 py-4 my-24 mx-auto relative text-white rounded-lg bg-black bg-opacity-80 flex flex-col'>
                <h1 className='font-bold text-3xl py-2 text-left'>{isSignUp? "Sign Up": "Sign In"}</h1>

                {/* Additional field for Sign Up */}
                {
                  isSignUp &&(
                  <input type="text" placeholder="Full Name"  ref={fullName} className='p-4 mx-2 my-2 w-full bg-gray-700'/>          
                  ) 
                }

                {/* Common fields for Sign In and Sign Up */}
                <input type="text" placeholder='Email Address'  ref={email}className='p-4 mx-2 my-2 w-full bg-gray-700' />
                <input type="password" placeholder={isSignUp ? 'Set password': 'Enter password'}  ref={password} className='p-4 mx-2 my-2 w-full bg-gray-700'/>

                {/* {
                  isSignUp?
                   <input type="password" placeholder=' Set Password' ref={password} className='p-4 mx-2  my-4 w-full bg-gray-700' />
                  :  <input type="password" placeholder='Password' ref={password} className='p-4 mx-2  my-4 w-full bg-gray-700' />
                } */}
                <p className='text-red-700 font-bold p-4 mx-2 my-2 w-full'>{errMsgCredentials}{isSignUp && errMsgFullName}</p>
       
                <button className='p-4 mx-2 my-2 w-full bg-red-700' onClick={handleFormButtonClick}>
                  {isSignUp ?"Sign Up":"Sign In"}
                </button>
                <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignUp? 
                    <span className='flex flex-row justify-center'><span>Already have an account? </span> <span className="hover:underline pl-2">Sign in now.</span></span> 
                    : 
                    <span className='flex flex-row justify-center'><span>New to Netflix? </span> <span className="hover:underline pl-2">Sign up now.</span> </span>}
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login
