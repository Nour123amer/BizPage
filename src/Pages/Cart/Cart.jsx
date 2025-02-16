import React, { useContext } from 'react'
import { CountContext } from '../../context/CountContext/CountContext.'
import { SelectedProductsContext } from '../../context/SelectedProductsContext/SelectedProductsContext';
import Loading from '../../components/Loading/Loading';
import CartItem from '../../components/CartItem/CartItem';

export default function Cart() {
  const {count ,setCount } = useContext(CountContext);
  const {selectedProducts  ,setSelectedProducts} = useContext(SelectedProductsContext);
  console.log(selectedProducts);

 let sum =[];
function getTotalPrice(){
  selectedProducts.map((p)=>(
    //  sum = sum +parseInt( p.price)
    sum.push(p.price)
  )  )
   console.log(parseInt(sum));

}

function resetCart(){
  setSelectedProducts([]);
  setCount(0);
  console.log(7777777777777777);
  
}
  
  
getTotalPrice()
console.log(sum);
let totalPrice=0;
 for(let i=0 ;i<sum.length;i++){
   totalPrice += sum[i]
 }
 console.log(totalPrice);
 


  return (
    <>
    <div className='flex justify-between pt-14 mt-14'>
    <p className='text-blue-900 font-semibold'> You have ordered <span className='text-gray-500'> {count}</span> product </p>
    <p className='text-blue-900 font-semibold'>Total Price: <span className='text-gray-500'>{totalPrice}</span> </p>
    </div>
     <div className="container border-2 border-blue-200 py-2 px-6">
      
        {selectedProducts ? selectedProducts.map((product)=>(
          <>
            <CartItem key={product.id} productInfo={product} />
            <hr className='text-blue-950 text-2xl font-bold w-10/12 mx-auto' />
        
         </>
        )) :<h2>No product is selected!</h2>}
       
         
       </div>
       <div className='w-full text-end'>
       <button onClick={resetCart} className='bg-blue-950 text-white px-3 py-1 rounded-md my-14 '>Reset Cart</button>  
       </div>
      
   
    </>
  )
}
