import React, { useContext } from 'react'
import { FavProductsContext } from '../../context/FavProductsContext/FavProductsContext'
import Loading from '../../components/Loading/Loading';

export default function FavProducts() {
    const {favProducts ,setFavProducts} = useContext(FavProductsContext);

    const removeItem = (id) =>{
        const updatedItems = favProducts.filter((item)=> item.id !== id);
        setFavProducts(updatedItems);
        }

  return (
    <>
    {favProducts ?
    favProducts.map((product)=>(
          <div className='grid grid-cols-12 gap-4 pt-14'>
     <img className='sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2' src={product.images[0]} alt="" />

     <div className='sm:col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9'>
         <h3>{product.title}</h3>
         <p>{product.description}</p>
         <p>Price : {product.price}$</p>
         <div className='w-full text-end mb-4'>
             <button onClick={()=>removeItem(product.id)} className='text-white bg-red-700 rounded-lg px-3 py-1'>Remove</button>
         </div>
        
     </div>
    </div> 
    ))
:<Loading />}
       
    </>
  )
}
