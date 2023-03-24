import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Home() {
    let [trendingMovies, setTrendingMovies] = useState([])
    let [loading, setLoading] = useState(true)

    console.log(trendingMovies)
    let pagenation = new Array(13).fill(1).map((num, index) => index + 1)
    const api = "eba8b9a7199efdcb0ca1f96879b83c44"
    const getTrending = async (index, callBack, mediaType) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${index}`)
        callBack(data.results)
        setLoading(false)

        console.log(data)

    }



    useEffect(() => {

        getTrending(1, setTrendingMovies, "movie")
        // getTrending('tv', setTrendingMovies, 1)  
    }, [])


    return (
        <>
      
            <div className="container">

            <div className='my-3' >
                <SearchBar></SearchBar>
            </div>

                {!loading ? <>

                    {trendingMovies ? <div className="row gy-2 justify-content-center">
                        {trendingMovies.map((movies) => <>

                            <div key={movies.id} className="col-md-2">
                                <Link to={`/MovieDetails/${movies.id}`} >
                                    <div className="item text-center ">
                                        <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + movies.poster_path} alt="" />
                                        {<h2 className='h5 py-2' >{movies.title}</h2>}

                                    </div>
                                </Link>

                            </div>

                        </>)}
                        <nav className=' d-flex justify-content-center' aria-label="...">
                            <ul className="pagination pagination-sm">
                                {pagenation.map((page, i) =>
                                    <li key={i} onClick={() => getTrending(page, setTrendingMovies, 'movie')} className="page-item " aria-current="page">
                                        <Link className="page-link bg-transparent text-white">{page}</Link>
                                    </li>)}

                            </ul>
                        </nav>
                    </div> : <div className='vh-100 d-flex align-items-center justify-content-center' ><i className='fas fa-spinner fa-spin fa-3x' ></i></div>}

                </> : <div className='vh-100 d-flex align-items-center justify-content-center' ><i className='fas fa-spinner fa-spin fa-3x' ></i></div>}
            </div>




        </>
    )
}
