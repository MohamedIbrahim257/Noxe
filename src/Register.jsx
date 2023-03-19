import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Register() {
    let navigate = useNavigate()
    const [error, setError] = useState("");
    const [errorValidate, setErrorValidate] = useState([])
    const [user, setUserData] = useState({
        first_Name: "",
        Age: 0,
        email: "",
        password: ""
    })

    const getUserData = (e) => {
        let myUsers = { ...user };
        myUsers[e.target.name] = e.target.value;
        setUserData(myUsers)
        console.log(myUsers);
    }

    const submitUsersForm = async (e) => {
        e.preventDefault()
        let validation = validationForm()
        if (validation.error) {
            setErrorValidate(validation.error.message)
        } else {
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com//signup`, user)
            if (data.message === 'success') {
                navigate("/Login")
            } else {
                setError(data.message)
            }
        }
    }

    const validationForm = () => {
        let schema = Joi.object({
            first_Name: Joi.string().alphanum().min(3).max(20).required(),
            Age: Joi.number().min(16).max(60).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        })
        return schema.validate(user)
    }

    return (
        <div>
            <h2 className='my-4' >Register</h2>
            <form onSubmit={submitUsersForm} className='my-5' >
                {error.length > 0 ? <div className='alert alert-danger'>{error}</div> : ""}
                {errorValidate.length > 0 ? <div className='alert alert-danger'>{errorValidate}</div> : ""}
                <label htmlFor="first_Name">First Name</label>
                <input onChange={getUserData} className='form-control my-2' id='first_Name' type="text" name='first_Name' />
                <label htmlFor="Age">age</label>
                <input onChange={getUserData} className='form-control my-2' name='Age' id='Age' type="number" />
                <label htmlFor="email">email</label>
                <input onChange={getUserData} className='form-control my-2' name='email' id='email' type="email" />
                <label htmlFor="password">password</label>
                <input onChange={getUserData} className='form-control my-2' name='password' id='Age' type="password" />
                <button className='btn btn-outline-info my-2' type='submit' >Register</button>
            </form>
        </div>
    )
}
