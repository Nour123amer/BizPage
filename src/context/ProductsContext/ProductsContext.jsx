import { useContext, useState } from "react";


import React from 'react'

export const ProductProvider = ({children}) => {
    
 const ProductContext = useContext();
    const [products , setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{products ,setProducts}}>
     {children}
    </ProductContext.Provider>
  )
}


