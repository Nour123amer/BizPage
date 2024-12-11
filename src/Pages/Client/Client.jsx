import React from 'react'
import Slider from "react-slick";
export default function Client() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
   
   <>

   <h2>Our client</h2>
   <Slider {...settings}>
      <div>
       
      </div>
      <div>
      
      </div>
     
    </Slider>



   <h2>testimationals</h2>
   </>
  )
}
