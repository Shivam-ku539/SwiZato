import React, { useState } from 'react'
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useActiveStatus from '../utils/useActiveStatus';

const Header = () => {

  const [btn,setBtn]=useState("Login")

  const onlineStatus=useActiveStatus();

  return (
    <div className='flex justify-between bg-red-100 shadow-lg mb-2 '>
       <div className='logo-container'>
       <img className='w-14' alt='Logo' src={LOGO_URL}/>
       </div>
       <div className='flex items-center'>
         <ul className='flex'>
          <li className='px-3'>
            Online Status:{onlineStatus ?"✅" :"🔴"}  
          </li>
           <li className='px-3'>
            <Link to={"/"}>Home</Link>
           </li>
           <li className='px-3'>
            <Link to={"/cart"}>Cart</Link>
            </li>
           <li className='px-3'>
            <Link to={"/about"}>About Us</Link>
           </li>
           <button className='px-3' onClick={()=>{btn==='Login'? setBtn('Logout'):setBtn('Login')}} >{btn}</button>
         </ul>
       </div>
     </div>
  )
}

export default Header