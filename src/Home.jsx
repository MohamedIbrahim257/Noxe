
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import './slick-carousel/slick/slick.css';
import './slick-carousel/slick/slick-theme.css';
import { useContext } from 'react';
import { Context } from './store';
import Preloader from './Preloader';





export default function Home() {



  let { trendingMovies, trendingTv, trendingMoviesWeek, trendingTvsWeek, loading, randomMovie } = useContext(Context)


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




  return (
    <>
  
        <div className="container">
        </div>
        {/* <iframe
          className='responsive-iframe'
          src={`https://www.youtube.com/embed/${videos[0]?.key}?modestbranding=1`}
          allowFullScreen
          loading="lazy"
        >
        </iframe> */}
        <div className=" w-100 position-relative">

          <div className='w-100 main-background' >
            <div className=' position-absolute layer' ></div>
            <div className='layer-h' ></div>

            <div className=' position-absolute start-0 p-5 title-movie' >
              <h1 className='text-white' >{randomMovie?.title}</h1>
              <p className='text-white text-muted' >{randomMovie?.release_date}</p>
              <p className='text-white w-100' >{randomMovie?.overview}</p>
              <Link to={`/MovieDetails/${randomMovie?.id}`} ><button className='btn btn-outline-info' >More Info</button></Link>
            </div>
            <img  className='w-100 home-image' src={"https://image.tmdb.org/t/p/original/" + randomMovie?.backdrop_path} alt="" />
          </div>
        </div>

        <div className="carousel-style my-3">
          <h2 className='ms-2' >Trending Movies</h2>
          <Slider className='' {...settings} >  {trendingMovies.map((item) => <><Link  to={`/MovieDetails/${item.id}`} >
            <div key={item.id} className="item text-center">
              <img className='w-100 rounded' src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path} alt="" />
              <h2 className='h5 py-2 name-movies' >{item.title}</h2>
            </div>
          </Link></>)}</Slider>
        </div>


        <div className="carousel-style my-3">
          <h2 className='ms-2' >Trending TV SHOW</h2>
          <Slider className='' {...settings} >  {trendingTv.map((item) => <><Link  to={`/MovieDetails/${item.id}`} >
            <div key={item.id} className="item text-center">
              <img className='w-100 rounded' src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path} alt="" />
              <h2 className='h5 py-2 name-movies' >{item.name}</h2>
            </div>
          </Link></>)}</Slider>
        </div>




        <div className="container">

          <div className="row gy-2 my-3">
            <div className="col-md-4 d-flex align-items-center justify-content-center">

              <div className="description">

                <div className="diverup w-25 mb-4"></div>
                <h2>Trending <br /> Movies <br /> to Watch of Week </h2>
                <p className='text-muted' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate obcaecati vel distinctio, cumque praesentium minima.</p>
                <div className="diverdown  mt-4"></div>
              </div>


            </div>
            {trendingMoviesWeek.map((movies) => <>

              <div key={movies.id} className="col-md-2 ">
                <Link to={`/MovieDetails/${movies.id}`} >
                  <div className="item text-center ">
                    <img className='w-100 rounded' src={"https://image.tmdb.org/t/p/w500/" + movies.poster_path} alt="" />
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
                <h2>Trending <br /> TV <br /> to Watch of Week </h2>
                <p className='text-muted' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate obcaecati vel distinctio,</p>
                <div className="diverdown  mt-4"></div>
              </div>


            </div>
            {trendingTvsWeek.map((tv) => <>
              <div key={tv.id} className="col-md-2">
                <Link to={`/MovieDetails/${tv.id}`} >
                  <div className="item text-center">
                    <img className='w-100 rounded' src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} alt="" />
                    <h2 className='h5 py-2' >{tv.name}</h2>
                  </div>
                </Link>

              </div>
            </>)}
          </div>
        </div>




    </>
  )
}


