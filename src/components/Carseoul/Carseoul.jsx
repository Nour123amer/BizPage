import React from 'react'
import Slider from "react-slick";

export default function Carseoul() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
       <Slider {...settings} className='mb-4'>
      <div className='d-flex w-75 mx-auto '>
        <img className='w-1/6' src="https://i.ibb.co/3kj61XN/1pexels-photo-1820663.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/Y0SVX9d/1.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/C9RXPCN/4.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/12DP7WN/2.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/Y0SVX9d/1.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/bPkPDnW/3.jpg" alt="" />
      </div>
      <div className='d-flex w-75 mx-auto '>
      <img className='w-1/6' src="https://i.ibb.co/Y0SVX9d/1.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/bPkPDnW/3.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/12DP7WN/2.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/3kj61XN/1pexels-photo-1820563.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/Y0SVX9d/1.jpg" alt="" />
        <img className='w-1/6' src="https://i.ibb.co/C9RXPCN/4.jpg" alt="" />
      </div>
     
    </Slider>
    </>
  )
}
