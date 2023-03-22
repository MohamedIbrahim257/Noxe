import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {

    const [searchAll, SetSearchAll] = useState([])
    const [query, setQuery] = useState("")
    const api = "eba8b9a7199efdcb0ca1f96879b83c44"
    const pagenation = new Array(13).fill(1).map((index) => index + 1)
    const searchBar = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${api}&language=en-US&include_adult=false`)
        SetSearchAll(data.results.slice(0, 5))
    }



    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }

    return (
        <>

            <form onChange={searchBar}>

                <div className="search-bar">
                    <input
                        className='input-search-bar'
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder={"search any movie & TV Show"}
                    />
                    <Link><i className="fa-solid fa-magnifying-glass px-3"></i></Link>
                </div>

            </form>

            {searchAll ? <div className="row gy-2 justify-content-center">

                {query.length > 0 ? <ul className='search-list' >
                    {searchAll.map((item, i) => (
                        <Link to={`/MovieDetails/${item.id}`} >
                            {item.title ? <li className='' key={i}> <img className='mx-2' width="40px" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="" />{item.title}</li> :
                                <li className='' key={i}> <img className='mx-2' width="40px" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="" />{item.name}</li>}
                        </Link>

                    ))}


                </ul> : ""}



            </div> : <div className='vh-100 d-flex align-items-center justify-content-center' ><i className='fas fa-spinner fa-spin fa-3x' ></i></div>}
        </>

    );
}

export default SearchBar;
