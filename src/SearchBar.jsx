import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {

    const [searchAll, SetSearchAll] = useState([])
    const [query , setQuery] = useState("")
    const api = "eba8b9a7199efdcb0ca1f96879b83c44"
    const pagenation = new Array(13).fill(1).map((index)=> index +1)
    const searchBar = async (e) => {
        e.preventDefault();
        let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api}&language=en-US&include_adult=false`)
        SetSearchAll(data.results)
    }

    const handleChange = (e) => {
      setQuery(e.target.value)
      console.log(query)
    }

    return (
        <>

        <form onSubmit={searchBar}>

        <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={"search any movie & TV Show"}
                />
                <Link><i className="fa-solid fa-magnifying-glass px-3"></i></Link>
            </div>

        </form>
      
            {searchAll ? <div className="row gy-2 justify-content-center">

                {searchAll.map((movies, i) => <>

                    <div key={i} className="col-md-2">
                        <Link to={`/MovieDetails/${movies.id}`} >
                            <div className="item text-center ">
                                <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + movies.poster_path} alt="" />
                                {<h2 className='h5 py-2' >{movies.title}</h2>}

                            </div>
                        </Link>

                    </div>

                </>)}
                {/* <nav className=' d-flex justify-content-center' aria-label="...">
                    <ul className="pagination pagination-sm">
                        {pagenation.map((page) =>
                            <li key={page} onClick={() => searchBar(keyword, "movie")} className="page-item " aria-current="page">
                                <Link className="page-link bg-transparent text-white">{page}</Link>
                            </li>)}

                    </ul>
                </nav> */}
            </div> : <div className='vh-100 d-flex align-items-center justify-content-center' ><i className='fas fa-spinner fa-spin fa-3x' ></i></div>}
        </>

    );
}

export default SearchBar;
