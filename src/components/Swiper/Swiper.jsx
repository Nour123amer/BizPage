import React from 'react'
// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/images/traveller1.png';
// Import Swiper styles
import 'swiper/css';
// import image1 from '../../assets/images/1.png'
// import image2 from '../../assets/images/2.jpeg'
// import image3 from '../../assets/images/3.jpeg'
// import image4 from '../../assets/images/4.jpeg'


export default function Land() {
  return (
  <>
  {/* <SwiperComponent 
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      
      <SwiperSlide className='w-100 h-screen text-center' >
      <div className="content call d-flex justify-center items-center text-white flex-col h-screen w-full bg-[url('https://i.ibb.co/12DP7WN/2.jpg')]">
       <div className='w-50'>
       <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full  py-2 px-4 '>Get Start</button>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-100 h-screen text-center'>
      <div className="content call d-flex justify-center items-center text-white flex-col h-screen w-full bg-[url('https://i.ibb.co/bPkPDnW/3.jpg')]">
       <div className='w-50'>
       <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full  py-2 px-4 '>Get Start</button>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-100 h-screen text-center'> 
      <div className="content call d-flex justify-center items-center text-white flex-col h-screen w-full bg-[url('https://i.ibb.co/Y0SVX9d/1.jpg')]">
       <div className='w-50'>
       <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full  py-2 px-4 '>Get Start</button>
       </div>
        </div>
        </SwiperSlide>
      <SwiperSlide className='w-100 h-screen text-center'>
      <div className="content call d-flex justify-center items-center text-white flex-col h-screen w-full bg-[url('https://i.ibb.co/C9RXPCN/4.jpg')]">
       <div className='w-50'>
       <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full  py-2 px-4 '>Get Start</button>
       </div>
        </div>
     
      </SwiperSlide>
     ...
  
    </SwiperComponent> */}

<Carousel className='w-full h-screen'>
      <Carousel.Item className='w-100 h-screen' >
        <img className='w-100' src='https://i.ibb.co/12DP7WN/2.jpg' text="First slide" />
        <Carousel.Caption className='txt text-secondary'>
        <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2 w-75'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full  text-white py-2 px-4 '>Get Start</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='w-100 h-screen' 
      >
        <img className='w-100' src='https://i.ibb.co/bPkPDnW/3.jpg' text="Second slide" />
        <Carousel.Caption className='txt txt text-secondary'>
        <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2 w-75'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full text-white py-2 px-4 '>Get Start</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='w-100 h-screen' 
      >
        <img className='w-100' src='https://i.ibb.co/Y0SVX9d/1.jpg' text="Third slide" />
        <Carousel.Caption className='txt txt text-secondary'>
        <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2 w-75'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full text-white py-2 px-4 '>Get Start</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='w-100 h-screen' >
        <img className='w-100' src='https://i.ibb.co/C9RXPCN/4.jpg' text="Third slide" />
        <Carousel.Caption className='txt txt text-secondary'>
        <h2 className='text-2xl font-bold'>we are proffessional</h2>
        <p className='text-xl mb-2 w-75'>lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Explicabo dicta omnis numquam minima. Ea, consectetur. sit amet consectetur adipisicing elit.
           Cumque labore nulla at velit in odio laborum voluptatibus maxime aliquam perferendis!</p>
        <button className='bg-green-600 rounded-full text-white py-2 px-4 '>Get Start</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  </>
  )
}
