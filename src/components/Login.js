import React, { useState, useRef} from 'react'
import Header from './Header'
import { loginBackground } from '../utils/constants'
import { credentialsValidation,fullNameValidation } from '../utils/validationForm';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { userPhoto } from '../utils/constants';


function Login() {
  const [isSignUp,setIsSignUp]=useState(false);
  const [errMsgCredentials,seterrMsgCredentials]= useState(null);
  const [errMsgFullName,seterrMsgFullName]= useState(null);
  const [successMsg,setSuccessMsg]=useState(null);

  const fullName=useRef(null);  //useRef Hook
  const email=useRef(null);
  const password=useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const toggleSignInForm=()=>{
    setIsSignUp(!isSignUp);
    seterrMsgCredentials(null);
    seterrMsgFullName(null);
    setSuccessMsg(null);
  }

  const handleFormButtonClick=()=>{

    seterrMsgCredentials(credentialsValidation(email.current.value, password.current.value));
    //console.log('email',email.current.value);
    //console.log('password', password.current.value);
    isSignUp && seterrMsgFullName(fullNameValidation(fullName.current.value));

     if(errMsgCredentials || errMsgFullName){
      return;
     }

     if (isSignUp){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("user sucessfully signed up" ,user);
          // setTimeout(()=>{
          //   setSuccessMsg('Successfully Signed Up');
          //   },1000);
          
          // ...
        updateProfile(user, {
          displayName: fullName.current.value, photoURL:userPhoto
        }).then(() => {
          // Profile updated!
          console.log("profile updated");
          const {uid,displayName,email,photoURL}=auth.currentUser
          dispatch(addUser({
            uid:uid,
            displayName:displayName,
            email:email,
            photoURL:photoURL
          })
        )
          // ...
        }).catch((error) => {
          // An error occurred
          console.log(error,'error occured during updating profile');
          seterrMsgCredentials(error);
          // ...
        });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMsgCredentials(errorCode + "-"+ errorMessage);
          // ..
        });

     }
     else{
        //sigIn page
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user sucessfully signed in" ,user);
            navigate("/browse")
            // ...setTimeout(()=>{
              //setSuccessMsg('Successfully Signed In');
            //},1000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrMsgCredentials(errorCode + "-" + errorMessage);
            console.log(errorMessage);
          });
     }

  }
  return (
    <div>
        <div className='flex flex-wrap '>
            <div className='absolute inset-0 z-0 flex flex-wrap'> 
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
                  <input type="text" placeholder="Full Name"  ref={fullName} className='p-4 mx-2 my-2 w-full bg-gray-600'/>          
                  ) 
                }

                {/* Common fields for Sign In and Sign Up */}
                <input type="text" placeholder='Email Address'  ref={email}className='p-4 mx-2 my-2 w-full bg-gray-600' />
                <input type="password" placeholder={isSignUp ? 'Set password': 'Enter password'}  ref={password} className='p-4 mx-2 my-2 w-full bg-gray-600'/>

                {/* {
                  isSignUp?
                   <input type="password" placeholder=' Set Password' ref={password} className='p-4 mx-2  my-4 w-full bg-gray-700' />
                  :  <input type="password" placeholder='Password' ref={password} className='p-4 mx-2  my-4 w-full bg-gray-700' />
                } */}
                <p className='text-red-700 font-bold p-4 mx-2 my-2 w-full'>{errMsgCredentials} {isSignUp && errMsgFullName}</p>
                {successMsg && <div className='text-green-500 font-bold p-2 fixed bottom-0 left-0  right-0 text-center bg-black shadow-md w-auto'>{successMsg}</div>} 
       
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
