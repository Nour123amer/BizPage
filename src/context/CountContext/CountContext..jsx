import { createContext, useState } from "react";


export const CountContext = createContext("");

export default function CountProvider({children}){
 
const [count ,setCount] = useState(0);


function addItemToCart(){
    setCount(count=>count+1)
  
  }

    return(
        <CountContext.Provider value={{count ,setCount,addItemToCart }}>
            {children}
        </CountContext.Provider>
    )
}