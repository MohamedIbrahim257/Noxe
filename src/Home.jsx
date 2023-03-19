import React, { useState } from 'react'
import axios from 'axios'

export default function Home() {
  let [trendingMovies , setTrendingMovies] = useState([])

   const  getMovies = async (mediaType , callBack) => {
    let {data}= await axios.get(`https://api.themoviedb.org/3/${callBack}/${mediaType}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)

     
  }
  return (
    <div ></div>
  )
}
