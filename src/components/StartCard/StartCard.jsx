import React from 'react'
import cartImage from '../../assets/images/carrrt.png'

export default function StartCard() {
  return (
   <>
  <div className='grid grid-cols-12 gap-4  '>
  <div className='sm:col-span-12 lg:col-span-6 font-semibold italic leading-8'>
     <p className='text-gray-400 w-5/6 pt-14 mt-16'>Discover a seamless online shopping experience with <span className='text-blue-800 font-semibold'>Shopify</span> ,
         your one-stop destination for premium products at unbeatable prices. 
         Our user-friendly platform offers a wide range of categories, from fashion and electronics to home essentials
          and beauty products. With secure payment options, fast delivery, and 24/7 customer support,
           we ensure a hassle-free and enjoyable shopping experience. Explore the latest trends,
         exclusive deals, and high-quality items—all from the comfort of your home. Shop smarter, 
         shop with confidence at <span className='text-blue-800 font-semibold'>Shopify</span>!</p>
   </div>

   <div className='sm:col-span-12 sm:order-1 lg:col-span-6 align-middle'>
    <img src={cartImage} className='w-full align-middle ' alt="cart image" />
    </div>
  </div>
   </>
  )
}
