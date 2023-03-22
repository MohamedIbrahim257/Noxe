import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Login(props) {
    let navigate = useNavigate()
    const [error, setError] = useState("");
    const [errorValidate, setErrorValidate] = useState([])
    const [user, setUserData] = useState({
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
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com//signin`, user)
            if (data.message === 'success') {
                localStorage.setItem("setUserToken" , data.token)
                props.decode()
                navigate("/Home")
            } else {
                setError(data.message)
            }
        }
    }

    const validationForm = () => {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        })
        return schema.validate(user)
    }

    return (
        <div className='w-50 mx-auto border-4 my-5 py-5 ' >
            <h2 className='my-4' >Login</h2>
            <form onSubmit={submitUsersForm} className='my-5 ' >
                {error.length > 0 ? <div className='alert alert-danger'>{error}</div> : ""}
                {errorValidate.length > 0 ? <div className='alert alert-danger'>{errorValidate}</div> : ""}
                <label htmlFor="email">email</label>
                <input onChange={getUserData} className='form-control my-2' name='email' id='email' type="email" />
                <label htmlFor="password">password</label>
                <input onChange={getUserData} className='form-control my-2' name='password' id='Age' type="password" />
                <button className='btn btn-outline-info my-2' type='submit' >Login</button>
            </form>
        </div>
    )
}
