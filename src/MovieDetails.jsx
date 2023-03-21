import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export default function MovieDetails() {

    let [movieDetails, setMovieDetails] = useState([])
    let [genres, setGenres] = useState([])
    let params = useParams()

    const api = "eba8b9a7199efdcb0ca1f96879b83c44"
    const getDetails = async (mediaType, callBack, id) => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${api}&language=en-US`)
        callBack(data)
        setGenres(data.genres)
        console.log(data)
    }

    useEffect(() => {
        getDetails("movie", setMovieDetails, params.id)
        getDetails("tv", setMovieDetails, params.id)
    }, [])

    return (
        <>
            {movieDetails ? <div className="row">
                <div className="col-md-5">
                    <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path} alt="" />
                </div>
                <div className="col-md-7 ">
                    {movieDetails.title ? <h2>{movieDetails.title}</h2> : <h2>{movieDetails.name}</h2>}
                    <p className='text-muted py-3' >{movieDetails.overview}</p>
                    <ul>
                        <li>Budget : {movieDetails.budget}</li>
                        <li>Vote : {movieDetails.vote_average}</li>
                        <li>Popularity : {movieDetails.popularity}</li>
                        <li>vote count : {movieDetails.vote_count}</li>
                    </ul>
                    <div className='d-flex' >
                    {genres.map((genre, i) => <>
                  
                      <h3 className='h5 mx-3' key={i} >{genre.name}</h3>
                    
                    </>)}
                    </div>
                </div>
            </div> : <div className='vh-100 d-flex justify-content-center align-items-center'>
                <i className='fas fa-spinner fa-spin fa-3x' ></i></div>}

        </>

    )
}
