import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import useActiveStatus from '../utils/useActiveStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'

const Header = () => {

  const contextData=useContext(UserContext)

  const [btn,setBtn]=useState("Login")

  const onlineStatus=useActiveStatus();

  const cartItem=useSelector((store)=>store.cart.items)
  console.log(cartItem)

  return (
    <div className='flex justify-between bg-gray-100 shadow-lg mb-2 '>
       <div className='logo-container'>
       <img className='w-20 h-16' alt='Logo' src={logo}/>
       </div>
       <div className='flex items-center'>
         <ul className='flex'>
          <li className='px-3'>
            {onlineStatus ?"" :"🔴"}  
          </li>
           <li className='px-3'>
            <Link to={"/"}>Home</Link>
           </li>
           <li className='px-3'>
            <Link to={"/cart"}>🛒Cart({cartItem.length})</Link>
            </li>
           <li className='px-3'>
            <Link to={"/about"}>About Us</Link>
           </li>
         </ul>
       </div>
     </div>
  )
}

export default Header