import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Home() {
  let [trendingMovies, setTrendingMovies] = useState([])
  let [trendingTv, setTrendingTv] = useState([])
  let [trendingPepole, setTrendingPepole] = useState([])

  const api = "api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  const getTrending = async (mediaType, callBack, time) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/${time}?${api}`)
    callBack(data.results.slice(0, 10))
    console.log(data)

  }


  useEffect(() => {
    getTrending('movie', setTrendingMovies, "day")
    getTrending('tv', setTrendingTv, "day")
  }, [])


  return (
    <>
      <SearchBar></SearchBar>
      <div className="row gy-2 my-3">
        <div className="col-md-4 d-flex align-items-center justify-content-center">

          <div className="description">

            <div className="diverup w-25 mb-4"></div>
            <h2>Trending <br /> Movies <br /> to Watch </h2>
            <p className='text-muted' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate obcaecati vel distinctio, cumque praesentium minima.</p>
            <div className="diverdown  mt-4"></div>
          </div>


        </div>
        {trendingMovies.map((movies) => <>

          <div key={movies.id} className="col-md-2 ">
            <Link to={`/MovieDetails/${movies.id}`} >
              <div className="item text-center ">
                <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + movies.poster_path} alt="" />
                <h2 className='h5 py-2' >{movies.title}</h2>
              </div>
            </Link>

          </div>
        </>)}
      </div>
      <div className="row gy-2 my-5">
        <div className="col-md-4 d-flex align-items-center justify-content-center">

          <div className="description">

            <div className="diverup w-25 mb-4"></div>
            <h2>Trending <br /> TV <br /> to Watch </h2>
            <p className='text-muted' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate obcaecati vel distinctio,</p>
            <div className="diverdown  mt-4"></div>
          </div>


        </div>
        {trendingTv.map((tv) => <>
          <div key={tv.id} className="col-md-2">
            <Link to={`/MovieDetails/${tv.id}`} >
              <div className="item text-center">
                <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} alt="" />
                <h2 className='h5 py-2' >{tv.name}</h2>
              </div>
            </Link>

          </div>
        </>)}
      </div>
    </>
  )
}
