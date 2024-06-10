import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser,removeUser} from "../utils/userSlice";
import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from '../utils/firebase';
import { useEffect } from 'react'


;
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
   
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/"); 
        // /we cannot use navigate outside the RouterProvider
      }
    });
   //Here we unsubscribe the onAuthStateChanged unmount
    return () =>unsubscribe();

  },[]);
  return (

    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img 
      className='w-44'
      src={LOGO}
      alt="background-image"/>
     {user && <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        alt="userIcon" src={user?.photoURL}/>

        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  
  )
}

export default Header;
