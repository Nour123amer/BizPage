import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
   <>
   <Navbar />
   <div className="container mt-20 pb-14 min-h-screen">
   <Outlet />
   </div>
   <div className='mt-14'>
     <Footer />
   </div>
  
   </>
  )
}
