import { createContext, useState } from "react";

export const FavProductsContext = createContext();

export default function FavProductsProvider({children}){
const [favProducts , setFavProducts] = useState([]);
    return(
        <FavProductsContext.Provider value={{favProducts ,setFavProducts}}>
            {children}
        </FavProductsContext.Provider>
    )
}