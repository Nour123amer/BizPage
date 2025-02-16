import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { SelectedProductsContext } from '../../context/SelectedProductsContext/SelectedProductsContext';
import { CountContext } from '../../context/CountContext/CountContext.';

export default function ProductDetails() {
    const {addItemToCart} = useContext(CountContext);
    const {selectedProducts ,setSelectedProducts} = useContext(SelectedProductsContext);
    let [details, setDetails] = useState(null);
    let {id} = useParams ();
    async function getProductDetails() {
        try{
        let { data } = await axios(`https://api.escuelajs.co/api/v1/products/${id}`);
        console.log(data);
        setDetails(data)

      }catch(error){
       console.log(error);
      }

      function addProductToCart(id){
        
      }
    }

    function getAddedProducts(){
      addItemToCart();
      setSelectedProducts(prevProducts => [...prevProducts, details]);
    }
    useEffect(() => {
        getProductDetails()
    }, [id])
    return (
        <>

        {details ?
         <div  className='grid grid-cols-12 gap-4 pt-16'>
            <div className='col-span-4'>
                    <img src={details.images && details.images.length > 0 ? details.images[0] : 'https://via.placeholder.com/300'} alt="productImage" />
            </div> 
            <div className='col-span-8 '>    
                    <h2 className='text-blue-900 font-semibold'>{details.title}</h2>
                    <p>price: ${details.price}</p>
                    <p className='line-clamp-2'>{details.description}</p>
                    <button onClick={getAddedProducts}
                     className=' bg-blue-900 rounded-md px-2 py-1 my-2 text-white font-bold'>Add to cart</button>
             </div>
                </div>
        :<Loading />}
               
       
        </>
    )
}
