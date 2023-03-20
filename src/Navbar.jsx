import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="Home"><h1>Noxe</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {props.decode === null ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Contact" >Contact</Link>
                            </li>
                        </ul> : ""}

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">

                            {props.decode ? <li className="nav-item ">
                                <Link onClick={props.logout} className="nav-link active" aria-current="page" to="Register">Logout</Link>
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
