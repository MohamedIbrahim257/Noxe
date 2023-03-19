
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Footer from './Footer';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  let navigate = useNavigate()
  const [decode, setSecoded] = useState(null)

  const decoded = () => {
    let token = localStorage.getItem("setUserDate");
    let decode = jwtDecode(token)
    setSecoded(decode)
  }

  const ProtectedRoute = (props) => {
    if (localStorage.getItem("setUserData") === null) {
      return <Navigate to='/Login' ></Navigate>
    } else {
      return props.childern
    }
  }

  const logout = () => {
    localStorage.removeItem("setUserData")
    navigate("/Login")
  }

  // refresh Token
  // useEffect(() => {
  //   if (localStorage.getItem("setUserData") === null) {
  //     return decoded()
  //   }
  // }, [])

  return (
    <div className="">
      <Navbar userData={decode} logout={logout} ></Navbar>
      <div className='container' >
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='Home' element={<ProtectedRoute><Home></Home></ProtectedRoute>} ></Route>
          <Route path='About' element={<ProtectedRoute><About></About></ProtectedRoute>} ></Route>
          <Route path='Contact' element={<ProtectedRoute><Contact></Contact></ProtectedRoute>} ></Route>
          <Route path='Login' element={<Login decoded={decoded} ></Login>} ></Route>
          <Route path='Register' element={<Register></Register>} ></Route>
          <Route path='*' element={<Notfound></Notfound>} ></Route>
        </Routes>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
