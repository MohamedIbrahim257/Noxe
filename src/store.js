import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios';


export let Context = createContext(0);



export default function MoviesContext(props) {
    let [trendingMovies, setTrendingMovies] = useState([])
    let [trendingTv, setTrendingTv] = useState([])
    let [videos, setVideos] = useState([])
    let [trendingMoviesWeek, setTrendingMoviesWeek] = useState([])
    let [trendingTvsWeek, setTrendingTvWeek] = useState([])
    let [loading, setLoading] = useState(true)





    const randomMovie = trendingMovies[Math.floor(Math.random() * trendingMovies.length)]
    const api = "api_key=eba8b9a7199efdcb0ca1f96879b83c44"
    const getTrending = async (mediaType, callBack, time) => {
        
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/${time}?${api}`)
        callBack(data.results.slice(0, 10))
        setTimeout(() => {
            setLoading(false)
        }, 500)
        console.log(data)
    }


   
 

    // let getVideo =async (callBack ) => {
    //     let {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${videoId}/videos?${api}&language=en-US`)

     
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 500);

    // }



    useEffect(() => {
        getTrending('movie', setTrendingMovies, "day")
        getTrending('tv', setTrendingTv, "day")
        getTrending("movie", setTrendingMoviesWeek, "week")
        getTrending("tv", setTrendingTvWeek, "week")
        // getVideo( setVideos)
    }, [])

    return <Context.Provider value={{ trendingMovies, trendingTv, trendingMoviesWeek, trendingTvsWeek, loading, videos , randomMovie }} >

        {props.children}

    </Context.Provider>

}