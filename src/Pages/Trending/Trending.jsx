import React from 'react'
import { Link } from 'react-router-dom'
import Carseoul2 from '../../components/Carseoul2/Carseoul2'

export default function Trending() {
  return (
   <>
   <h2>Trending</h2>
   <ul className=' w-100 bg-slate-500 p-4'>
    <Link to="toprated">Top rated</Link>
    <Link to="trend">trend</Link>
    <Link to="offers">offers</Link>
   </ul>

   <Carseoul2 />
   </>
  )
}
