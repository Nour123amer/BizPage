import React, { createContext, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Categories from './../../Pages/Categories/Categories';
import { CountContext } from '../../context/CountContext/CountContext.';
import ProductDetails from '../../Pages/ProductDetails/ProductDetails';
import { SelectedProductsContext } from '../../context/SelectedProductsContext/SelectedProductsContext';
import { FavProductsContext } from '../../context/FavProductsContext/FavProductsContext';


export default function ProductCard({productInfo}) {
    let {id ,title ,description ,price ,images } =  productInfo;
    const {count ,setCount ,addItemToCart} = useContext(CountContext);
    const {selectedProducts ,setSelectedProducts} = useContext(SelectedProductsContext);
    const {favProducts , setFavProducts} = useContext(FavProductsContext);
    const navigate = useNavigate();

  //   function addItemToCart(){
  //   setCount(count=>count+1)
  //   // setSelectedProducts(prevProducts => [...prevProducts, productInfo]);
    
  // }

  function getSelectedProducts(){
        addItemToCart();
    setSelectedProducts(prevProducts => [...prevProducts, productInfo]);
  }



  function addItemsToFav(){
   setFavProducts(prevProducts => [...prevProducts ,productInfo]);

   console.log('favvvvvvvvvvvv');
   
  }

 
    
    console.log(images);
// let imageUrl = JSON.parse(images[0]);
let image = images[0]
console.log(image);
 console.log(selectedProducts);
    
    
  return (
   <>
   <div className='border-2 border-blue-200 p-2 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 ' >
   <Link className='text-decoration-none' to={`/products/${id}`} >
    <img src={image} alt="productImage" />
    <h2 className='text-blue-900 font-semibold '>{title}</h2>
    <p className=''>price: ${price}</p>
    <p className='line-clamp-2 '>{description}</p>
   
  
   </Link >
   <div className='flex justify-between items-center'>
   <button onClick={getSelectedProducts } className=' bg-blue-900 rounded-md px-2 py-1 my-2 text-white font-bold'>Add to cart</button>
  
   <i onClick={addItemsToFav} className=" bg-blue-800   fa-regular fa-heart text-xl text-blue-900"></i>
    </div>
    </div>
   </>
  )
}
