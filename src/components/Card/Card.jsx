import React, { useState } from 'react'
import image1 from "../../assets/images/services1.png";

export default function Card({dataInfo,deleteFn,index}) {
  let {id,name,age,courses} = dataInfo;
  const [counter,setCounter] = useState(0);

 function increaseCounter(){
  setCounter((counter) => counter +1);
 }

 function decreaceCounter(){
  setCounter((counter) => counter -1);
 }
  return (
    <>
  <div className='container py-4'>
 <div className="row my-4 ">
    <div className="col-md-3  ">
    <div className="border bg-gray-400 p-2">
        <h1>{id}</h1>
        <h2>{name}</h2>
        <i onClick={increaseCounter} className="fa-solid fa-minus"></i>
        <h3>{counter}</h3>
        <i onClick={decreaceCounter} className="fa-solid fa-plus"></i>
        <p>{age}</p>
        <p>{courses}</p>
        <button onClick={()=>{
          deleteFn(index)}}>Delete</button>
        
        <p className='w-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ad.</p>
    </div>
    </div>
{/* 
    <div className="col-md-3 ">
    <div className=" p-2  ">
        <img src={image1} alt="" />
        <h2>{title}</h2>
        <p>{category}</p>
        <p className='w-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ad.</p>
    </div>
    </div>

    <div className="col-md-3 ">
    <div className=" p-2  ">
        <img src={image1} alt="" />
        <h2>{title}</h2>
        <p>{category}</p>
        <p className='w-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ad.</p>
    </div>
    </div>
    <div className="col-md-3 ">
    <div className=" p-2  ">
        <img src={image1} alt="" />
        <h2>{title}</h2>
        <p>{category}</p>
        <p className='w-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ad.</p>
    </div>
    </div> */}
 </div>
  </div>
    </>
  )
}
