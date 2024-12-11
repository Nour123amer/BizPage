import { Children, useState } from 'react'
import './App.css'
import Loading from './components/Loading/Loading'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Portfolio from './Pages/Portfolio/Portfolio'
import Movies from './Pages/Movies/Movies'
import Register from './Pages/Register/Register'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Trending from './Pages/Trending/Trending'
import Team from './Pages/Team/Team'
import Contact from './Pages/Contact/Contact'

function App() {


  // const data = [
  //   {
  //     id: 1,
  //     name: "Alice",
  //     age: 20,
  //     courses: ["Math", "Physics", "Chemistry"]
  //   },
  //   {
  //     id: 2,
  //     name: "Bob",
  //     age: 22,
  //     courses: ["History", "Literature"]
  //   },
  //   {
  //     id: 3,
  //     name: "Charlie",
  //     age: 19,
  //     courses: ["Computer Science", "Art", "Design"]
  //   }
  // ];

  let [data, setData] = useState(
    [
      {
        id: 1,
        name: "Alice",
        age: 20,
        courses: ["Math", "Physics", "Chemistry"]
      },
      {
        id: 2,
        name: "Bob",
        age: 22,
        courses: ["History", "Literature"]
      },
      {
        id: 3,
        name: "Charlie",
        age: 19,
        courses: ["Computer Science", "Art", "Design"]
      }
    ])

  function deleteCard(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  const routes = createBrowserRouter([
    {path:"/",element:<Layout />,
      children:[
     {index:true, element:<Home />},
     {path:"register",element:<Register />},
     {path:"portfolio",element:<Portfolio />},
     {path:"services",element:<Services />},
     {path:"movies",element:<Movies />},
     {path:"team",element:<Team />},
     {path:"about",element:<About />},
     {path:"contact",element:<Contact />}
     //,children:[
      // {path:"home",element:<Home />},
      // {path:"about",element:<About />},
      // {path:"services",element:<Services />}
     ]},

 
    
  ])

  return (
    <>
     <RouterProvider router={routes}>

     </RouterProvider>
    </>
  )
}

export default App
