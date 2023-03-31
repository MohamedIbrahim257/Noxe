import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Preloader from './Preloader'



export default function MovieDetails() {

    let [movieDetails, setMovieDetails] = useState([]);
    let [genres, setGenres] = useState([]);
    let [video, setVideo] = useState([]);
    let [seasons, setSeasons] = useState([]);
    let params = useParams();


    let settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
        ],

    };


    const api = "eba8b9a7199efdcb0ca1f96879b83c44"
    const getDetails = async (mediaType, callBack, id) => {

        let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${api}&language=en-US`)
        callBack(data)
        setGenres(data.genres)
        setSeasons(data.seasons)
        console.log(data)
    }

    const getVideo = async (mediaType, callBack, id, genreType) => {

        let { data } = await axios.get(`
        https://api.themoviedb.org/3/${mediaType}/${id}/${genreType}?api_key=${api}&language=en-US`)
        callBack(data.results)
        console.log(data)
    }

    useEffect(() => {
        getDetails("movie", setMovieDetails, params.id)
        getDetails("tv", setMovieDetails, params.id)
        getVideo("movie", setVideo, params.id, "videos")
        getVideo("tv", setVideo, params.id, "videos")
    }, [])

    return (
        <>

          <>

                <div className="container">
                    <div className="row my-5 py-5">
                        <div className="col-md-5">
                            <img className='w-100' src={"https://image.tmdb.org/t/p/original/" + movieDetails?.backdrop_path} alt="" />
                            <div className="button-Link d-flex justify-content-center my-4">
                                <Link target="_blank" to={movieDetails?.homepage} ><button className='btn btn-outline-info' >Home Page</button></Link>
                            </div>
                        </div>
                        <div className="col-md-7 ">
                            {movieDetails?.title ? <h2>{movieDetails?.title}</h2> : <h2>{movieDetails?.name}</h2>}
                            <p className='text-muted py-3' >{movieDetails?.overview}</p>
                            <ul>
                                <li>Budget : {movieDetails?.budget}</li>
                                <li>Vote : {movieDetails?.vote_average}</li>
                                <li>Popularity : {movieDetails?.popularity}</li>
                                <li>vote count : {movieDetails?.vote_count}</li>
                                {movieDetails?.adult === false ? <li>adult : +18</li> : <li>adult : +13</li>}
                                {movieDetails?.release_date ? <li>Release Date : {movieDetails?.release_date}</li> : ""}
                                {movieDetails?.runtime ? <li>Run Time : {movieDetails?.runtime} min </li> : seasons.map((season, i) =>
                                    <>
                                        <div key={i}>
                                            <li>Epsoides : {season?.episode_count}</li>
                                            <li>Release Date  : {season?.air_date}</li>

                                        </div>

                                    </>
                                )}
                            </ul>
                            <div className='d-flex' >
                                {genres?.map((genre, i) => <>
                                    <h3 className='h5 mx-3' key={i} >{genre?.name}</h3>
                                </>)}
                            </div>

                        </div>

                        <div className="row gy-2 d-flex justify-content-center">
                          
                                {video?.map((vid, i) => <div key={i} className="col-md-4 ">
                                    <div className="itemVideo">
                                        <iframe
                                            className='responsive-iframe'
                                            src={`https://www.youtube.com/embed/${vid?.key}?modestbranding=1`}
                                            allowFullScreen

                                        >
                                        </iframe>
                                    </div>
                                </div>)}
                         
                        </div>



                    </div>
                </div>


            </> 


        </>

    )
}
