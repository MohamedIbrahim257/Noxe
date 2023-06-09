import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Navbar(props) {

    const [nav , setNav] = useState(true)

    const avoidDisplayNabMob = () =>{

        if(nav === true){
            document.querySelector(".navMob").style.backgroundColor = "#131722"
            setNav(false)
        } else{
            document.querySelector(".navMob").style.backgroundColor = 'transparent'
            setNav(true)

        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent ">
                <div className="container-fluid navMob ">
                    <Link className="navbar-brand" to="Home"><h1>Noxe</h1></Link>
                    <button onClick={()=> avoidDisplayNabMob()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse navy" id="navbarSupportedContent">

                        {props.decode !== null ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/Home"} className="nav-link" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" to="Movies">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" to="Tv">TV Show</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="About">About</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link  className="nav-link" to="Contact" >Contact</Link>
                            </li>

                        </ul> : ""}


                        <div className='w-100 px-5'>
                            <SearchBar></SearchBar>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">


                            {props.decode ? <li className="nav-item ">
                                <Link  onClick={props.logout} className="nav-link active" aria-current="page" to="Register">Logout</Link>
                            </li> : <>    <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Login">Login</Link>
                            </li>
                                <li className="nav-item ">
                                    <Link className="nav-link active" aria-current="page" to="Register">Register</Link>
                                </li></>}

                            <div className='d-flex my-2 mx-4' >
                                <li className="nav-item">
                                    <i className='fa-brands fa-facebook mx-1' ></i>
                                </li>
                                <li className="nav-item">
                                    <i className='fa-brands fa-twitter mx-1' ></i>
                                </li>
                                <li className="nav-item">
                                    <i className='fa-brands fa-spotify mx-1' ></i>
                                </li>
                                <li className="nav-item">
                                    <i className='fa-brands fa-soundcloud mx-1' ></i>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
