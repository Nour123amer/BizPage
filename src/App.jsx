
import './App.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import Brands from './Pages/Users/Users'
import Sale from './Pages/Sale/Sale'
import Register from './Pages/Register/Register'
import Notfound from './Pages/Not Found/Notfound'
import Login from './Pages/Login/Login'
import Users from './Pages/Users/Users'
import { Toaster } from 'react-hot-toast'
// import ProductDetails from './Pages/CategoryDetails/CategoryDetails'

// import CategoryDetails from './Pages/CategoryDetails/CategoryDetails'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import About from './Pages/About/About'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import UserProfile from './components/UserProfile/UserProfile'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'
import Dashboard from './components/Dashboard/Dashboard'
import RequireAuth from './context/RequireAuth'
import { ProductProvider } from './context/ProductsContext/ProductsContext'
import CountProvider, { CountContext } from './context/CountContext/CountContext.'
import SelectedProductsProvider from './context/SelectedProductsContext/SelectedProductsContext'
import FavProductsProvider from './context/FavProductsContext/FavProductsContext'
import FavProducts from './Pages/FavProducts/FavProducts'


function App() {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {index:true ,element:<Home />},
        {path:"/",element:<Home />},
        {path:"categories",element:<Categories />},
        {path:"products",element:<Products />},
        {path:"favproducts",element:<FavProducts />},
        {path:"about",element:<About />},
        {path:"brands",element:<Brands />},
        {path:"users",element:<Users />},
        {path:"register",element:<Register />},
        {path:"userprofile",element:<UserProfile />},
        {path:"updateprofile",element:<UpdateProfile />},
        {path:"dashboard",element:
        <RequireAuth>
           <Dashboard />
        </RequireAuth>
       },
        {path:"forgotpassword",element:<ForgotPassword />},
        {path:'cart' ,element:<Cart />},
        // {path:'categories/:id',element:<CategoryDetails />},
        {path:'products/:id',element:<ProductDetails />},
        {path:'*',element:<Notfound />},
        {path:'login',element:<Login />},
      ],
    },
  ])
 

  return (
    <>
<CountProvider >
  <SelectedProductsProvider>
    <FavProductsProvider>
       <RouterProvider router={routes}>

      </RouterProvider>
       <Toaster />
    </FavProductsProvider>
   
  </SelectedProductsProvider>
</CountProvider>
 
    </>
  )
}

export default App
