import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import BestSellerCard from '../BestSellerCard/BestSellerCard';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

export default function BestSeller() {
 const [bestSeller ,setBestSeller] = useState([]);

    async function getBestSeller() {
        let {data} = await axios.get('https://api.escuelajs.co/api/v1/products');
        let filteredData = data.filter((item)=> item.price < 115);
        setBestSeller(filteredData);
        console.log(filteredData);
        
        
    }
    useEffect(()=>{
        getBestSeller();
    },[])
  return (
   <>
   <h2 className='mt-4 mb-2 text-blue-950 font-bold text-2xl italic'>Best Seller</h2>
   <div className='my-14 grid grid-cols-12 gap-2'>
  {bestSeller ?
     <Swiper
     // install Swiper modules
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={20}
     slidesPerView={5}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log("slide change")}
   >
  {bestSeller.map((item)=>(
    <SwiperSlide className="" key={item.id}>
         <BestSellerCard productInfo={item}  />
    </SwiperSlide>
    )
)} 
</Swiper>
: <Loading />

}

   </div>
   

   </>
  )
}
