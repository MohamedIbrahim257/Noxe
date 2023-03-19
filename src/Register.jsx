import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'

export default function Register() {

    let navigate = useNavigate()
    let [errorReg, setErrorReg] = useState([])
    let [error, setError] = useState("")

    let [user, setUserData] = useState({
        Name: "",
        Age: 0,
        email: "",
        Password: ""
    })

    function submitFormData(e) {
        e.preventDefault()
        let validation = validationReg()
        if (validation.error) {
            setError(validation.error.message)
        } else {

           localStorage.setItem("setUsersData", JSON.stringify(user))

            //   await   axios.post('https://jsonplaceholder.typicode.com/posts', {
            //         headers: { 'Content-Type': 'application/json' },
            //         body: {
            //             user
            //         }
            //     })
            //         .then(response => {
            //             console.log(response.data);
            //             const token = response.data.id;
            //             return token;
            //         })
            //         .catch(error => {
            //             console.log(error); // You can handle error response here
            //         });

            navigate('/Login')

        }

    }

    function validationReg() {
        let schema = Joi.object({
            Name: Joi.string().alphanum().min(3).max(10).required(),
            Age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).required(),
            Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        })
        return schema.validate(user)
    }


    function getUserData(e) {
        let userData = { ...user }
        userData[e.target.name] = e.target.value
        setUserData(userData)
        console.log(userData)

    }

    return (
        <div className='my-5' >
            <form onSubmit={submitFormData} >
                <h2 className='my-5' >Register</h2>
                <div className='w-75 mx-auto' >
                    {errorReg.length > 0 ? <div className='alert alert-danger' >{errorReg}</div> : ""}
                    {error.length > 0 ? <div className='alert alert-danger' >{error}</div> : ""}
                    <label htmlFor="email">Name</label>
                    <input onChange={getUserData} className='form-control my-2' type="text" id='Name' name='Name' />
                    <label htmlFor="age">Age</label>
                    <input onChange={getUserData} className='form-control my-2' type="age" id='age' name='Age' />
                    <label htmlFor="email">Email</label>
                    <input onChange={getUserData} className='form-control my-2' type="email" id='email' name='email' />
                    <label htmlFor="current-password">Password</label>
                    <input onChange={getUserData} className='form-control my-2' type="password" id='password' name='Password' />
                    <div className='my-2'>
                        <button className='btn btn-outline-info my-2' >Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
