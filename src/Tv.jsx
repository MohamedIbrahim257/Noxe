import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'



export default function Home() {
    let [trendingTv, setTrendingTv] = useState([])

    let pagenation = new Array(13).fill(1).map((num, index) => index + 1)
    const api = "eba8b9a7199efdcb0ca1f96879b83c44"
    const getTrending = async (index, callBack, mediaType) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${index}`)
        callBack(data.results)
        console.log(data)

    }


    useEffect(() => {
        getTrending(1, setTrendingTv, "tv")
        // getTrending('tv', setTrendingMovies, 1)
    }, [])


    return (
        <>
        <div className='my-3' >
        <SearchBar></SearchBar>
        </div>
        
            <div className="row gy-2 justify-content-center">

                {trendingTv.map((tv, i) => <>

                    <div key={i} className="col-md-2">
                        <Link to={`/MovieDetails/${tv.id}`} >
                            <div className="item text-center ">
                                {tv.poster_path ? <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} alt="" /> : <div>Photo Not Found</div>}

                                {<h2 className='h5 py-2' >{tv.name}</h2>}

                            </div>
                        </Link>

                    </div>

                </>)}
                <nav className=' d-flex justify-content-center' aria-label="...">
                    <ul className="pagination pagination-sm">
                        {pagenation.map((page) =>
                            <li key={page} onClick={() => getTrending(page, setTrendingTv, 'tv')} className="page-item " aria-current="page">
                                <Link className="page-link bg-transparent text-white">{page}</Link>
                            </li>)}

                    </ul>
                </nav>
            </div>
        </>
    )
}
