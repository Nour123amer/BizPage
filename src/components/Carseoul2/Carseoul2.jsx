import React from 'react'
"use client";
import { Carousel } from "flowbite-react";

export default function Carseoul2() {

  return (
    <div className="h-66 sm:h-84 sm:my-8 xl:h-80 2xl:h-96">
      <Carousel leftControl="left"  rightControl="right">
        <div className="flex flex-col h-full items-center justify-center 
         dark:bg-gray-700 dark:text-white">
         <img className='circled mb-2' src="https://i.ibb.co/bPkPDnW/3.jpg" alt="" />
         <h3 className='mb-2 text-xl'>hamada shamaa</h3>
         <p>freelancer</p>
         <p className='w-75 text-center text-secondary'>Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Veniam, sed molestiae? Perferendis eos sapiente iste doloremque! Ad rerum voluptate iure
             quas libero expedita magnam asperiores, nobis aliquam quis labore? Provident repellendus tenetur ullam,
             voluptatem temporibus earum commodi cum sapiente iste. adipisicing elit. Quo id repellat laudantium ad autem!</p>
        </div>
        <div className="flex flex-col h-full items-center justify-center 
         dark:bg-gray-700 dark:text-white">
        <img className='circled mb-2' src="https://i.ibb.co/Y0SVX9d/1.jpg" alt="" />
         <h3 className='mb-2 text-xl'>hamada shamaa</h3>
         <p>freelancer</p>
         <p className='w-75 text-center text-secondary'>Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Veniam, sed molestiae? Perferendis eos sapiente iste doloremque! Ad rerum voluptate iure
             quas libero expedita magnam asperiores, nobis aliquam quis labore? Provident repellendus tenetur ullam,
             voluptatem temporibus earum commodi cum sapiente iste. adipisicing elit. Quo id repellat laudantium ad autem!</p>
        </div>
        <div className="flex flex-col h-full items-center justify-center 
         dark:bg-gray-700 dark:text-white">
        <img className='circled mb-2' src="https://i.ibb.co/C9RXPCN/4.jpg" alt="" />
         <h3 className='mb-2 text-xl'>hamada shamaa</h3>
         <p>freelancer</p>
         <p className='w-75 text-center text-secondary'>Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Veniam, sed molestiae? Perferendis eos sapiente iste doloremque! Ad rerum voluptate iure
             quas libero expedita magnam asperiores, nobis aliquam quis labore? Provident repellendus tenetur ullam,
             voluptatem temporibus earum commodi cum sapiente iste. adipisicing elit. Quo id repellat laudantium ad autem!</p>
        </div>
      </Carousel>
     </div>
  );
}

  
