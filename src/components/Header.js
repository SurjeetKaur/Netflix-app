import React from 'react'
import {logo} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { signOut } from 'firebase/auth';

function Header() {
  const user=useSelector((store)=>store.user)
  console.log(user,'user in browse');
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogOut=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/")
    }).catch((error) => {
        // An error happened.
        navigate("/error")
    });
  }

  return (
    <div>
        <div className=' bg-gradient-to-b from-black flex justify-between mx-auto'>
          <div className='mt-4'>
            <img className='w-44' src={logo} alt="logo" />
          </div>
          {user && 
          <div className='flex flex-row'>
            <img className='w-12 h-12 m-4 mt-6 rounded-full' src={user.photoURL} alt="user profile" />
            <button className='font-bold text-white text-lg mr-2' onClick={handleLogOut}>Sign Out</button>
          </div>}
        </div>         
    </div>
  )
}

export default Header