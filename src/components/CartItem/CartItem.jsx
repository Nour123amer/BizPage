import React, { useContext } from 'react'
import { SelectedProductsContext } from '../../context/SelectedProductsContext/SelectedProductsContext';
import { useParams } from 'react-router-dom';

export default function CartItem({productInfo}) {
    let {id,title ,description ,price ,images } =  productInfo;
    let image = images[0];
    const {selectedProducts ,setSelectedProducts} = useContext(SelectedProductsContext);
    // const {id} = useParams();

    
 const removeItem = (id) =>{
   const updatedItems = selectedProducts.filter((item)=> item.id !== id);
   setSelectedProducts(updatedItems);
   }
  return (
   <>
   <div className='grid grid-cols-12 gap-4'>
    <img className='sm:col-span-12 sm:pr-4 md:col-span-6 lg:col-span-4  xl:col-span-2 ' src={image} alt="" />

    <div className='sm:col-span-12 md:col-span-6 lg:col-span-8  xl:col-span-9 sm:px-2'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price : {price}$</p>
        <div className='w-full text-end mb-4'>
            <button onClick={()=>removeItem(id)} className='text-white bg-red-700 rounded-lg px-3 py-1 sm:mr-4 '>Remove</button>
        </div>
        
    </div>
   </div>
   </>
  )
}
