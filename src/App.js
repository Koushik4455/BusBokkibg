import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Component/Layout/Footer'
import Home from './Component/Pages/Home'
import Login from './Component/Pages/Login'
// import Mobile from './Mobile'
import Navbar from './Component/Layout/Navbar'
import Offer from './Component/Pages/Offer'
import Register from './Component/Pages/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Offer'element={<Offer  />}/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
