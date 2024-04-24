import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import ProductDetail from './pages/ProductDetail'
import SellProduct from './pages/SellProudct'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={< Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/productDetail' element={<ProductDetail />}></Route>
        <Route path='/sellProduct' element={<SellProduct />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
