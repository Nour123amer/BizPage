import React, { useContext, useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { CountContext } from '../../context/CountContext/CountContext.';
export default function Navbar() {
    const {count ,setCount} = useContext(CountContext)

 
  return (
    <>
    <nav className='bg-gray-500 text-white py-3 position-fixed top-0 right-0 left-0 '>
     <div className="container flex justify-between items-center max-w-[1300px]">
       <div className="logo">
        <Link to='/' className='font-bold text-2xl italic text-white text-decoration-none'><span>Shopify</span></Link >
       </div>
       <ul className='flex gap-2'>
        <li className='relative'><NavLink
                to='/'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors text-decoration-none ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-2px] before:left-0"
                      : ""
                  }`
                }
              >Home</NavLink></li>

<li className='relative'> <NavLink
                to='/categories'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors text-decoration-none ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-2px] before:left-0"
                      : ""
                  }`
                }
              >About</NavLink></li>
     


        <li className='relative'> <NavLink
                to='/categories'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors text-decoration-none ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-2px] before:left-0"
                      : ""
                  }`
                }
              >categories</NavLink></li>
      
        <li className='relative'><NavLink
                to='/favproducts'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors text-decoration-none ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-2px] before:left-0"
                      : ""
                  }`
                }
              >Fav products</NavLink></li>
        <li className='relative'><NavLink
                to='/register'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors text-decoration-none ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-2px] before:left-0"
                      : ""
                  }`
                }
              >Register</NavLink></li>
        <li className='relative'><NavLink
                to='/login'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors text-decoration-none ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-2px] before:left-0"
                      : ""
                  }`
                }
              >Login</NavLink></li>

        <li>
           <Link to='/cart'>
      <i  className="fa-solid fa-cart-shopping text-2xl text-gray-50 position-relative"></i>
      <span className='cartItems position-absolute top-2 right-[7%] text-center'>{count}</span>
      </Link >
        </li>
       </ul>
     
     </div>
    </nav>
    </>
  )
}
