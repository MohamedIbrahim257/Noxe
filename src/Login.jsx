import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'

export default function Login(props) {
console.log(props)
    let navigate = useNavigate() 
    let [errorMessage , setErrorMessage] = useState("")
    let [errorReg, setErrorReg] = useState([])
    let [error, setError] = useState("")
    let [user, setUserData] = useState({
        email: "",
        Password: ""
    })

    async function submitFormData(e) {
        e.preventDefault()
        let validation = validationReg()
        if (validation.error) {
            setError(validation.error.message)
        } else {


          if( localStorage.getItem("setUsersData") !== user){
            navigate('/Home')
          }else{
           setErrorMessage("login Invalid")
          }

        
            // await axios.post('https://jsonplaceholder.typicode.com/posts/', {
              
            //     body: {
            //         user
            //     }
            // })
            //     .then(response => {
            //         console.log(response.data); 
            //     })
            //     .catch(error => {
            //         console.log(error); 
            //     });
            // props.decoded()
          

        }

    }

    function validationReg() {
        let schema = Joi.object({
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
                <h2 className='my-5' >Login</h2>
                <div className='w-75 mx-auto' >
                    {errorMessage.length > 0 ?  <div>{errorMessage}</div> : ""}
                    {errorReg.length > 0 ? <div className='alert alert-danger' >{errorReg}</div> : ""}
                    {error.length > 0 ? <div className='alert alert-danger' >{error}</div> : ""}
                    <label htmlFor="email">Email</label>
                    <input onChange={getUserData} className='form-control my-2' type="email" id='email' name='email' />
                    <label htmlFor="current-password">Password</label>
                    <input onChange={getUserData} className='form-control my-2' type="password" id='password' name='Password' />
                    <div className='my-2'>
                        <button className='btn btn-outline-info my-2' >Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
