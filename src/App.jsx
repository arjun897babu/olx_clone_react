import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import ProductDetail from './pages/ProductDetail'
import SellProduct from './pages/SellProudct'
import Footer from './components/Footer'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoutes from './components/ProtectedRoutes'
import MyAds from './pages/MyAds'
import Favourite from './pages/Favourite'
function App() {

  return (
    <>
      <AuthContextProvider >
        <NavBar />
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/productDetail' element={<ProductDetail />}></Route>
          <Route
            path='/sellProduct'
            element={
              <ProtectedRoutes >
                <SellProduct />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path='/myads'
            element={
              <ProtectedRoutes >
                <MyAds />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path='/favorite'
            element={
              <ProtectedRoutes >
                <Favourite />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
        <Footer />
      </AuthContextProvider >
    </>
  )
}

export default App
