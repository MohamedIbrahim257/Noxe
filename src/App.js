
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Footer from './Footer';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';

function App() {
  const [decode , setSecoded] = useState(null)

  const decoded = () => {
    let token = localStorage.getItem("setUSerDate");
    let decode = jwtDecode(token)
    setSecoded(decode)
  }
  
  return (
    <div className="">
      <Navbar userData={decode} ></Navbar>
      <div className='container' >
        <Routes>
          <Route  path='/' element={<Home></Home>} ></Route>
          <Route path='Home' element={<Home></Home>} ></Route>
          <Route path='About' element={<About></About>} ></Route>
          <Route path='Contact' element={<Contact></Contact>} ></Route>
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
