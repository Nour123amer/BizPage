import axios from 'axios'
import React, { useEffect } from 'react'

export default function Movies() {
  async function getMovies(){
  let {data} = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
  console.log(data);
  
  console.log(data.results);
  }

  useEffect(()=>{
   getMovies() 
  },[])

  return (
    <div>
      
    </div>
  )
}
