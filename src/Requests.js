
const api = "api_key=eba8b9a7199efdcb0ca1f96879b83c44"


const Reqestes ={

    trendingMovies :  `https://api.themoviedb.org/3/trending/movie/day?${api}` ,
    topRatedMovies :  `https://api.themoviedb.org/3/top_rated/movie/day?${api}` ,
    popularMovies :  `https://api.themoviedb.org/3/popular/movie/day?${api}` ,
    upcomingMovies :  `https://api.themoviedb.org/3/upcoming/movie/day?${api}` ,
}


export default Reqestes