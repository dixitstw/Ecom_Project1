//rafce=> react arrow function export component
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import First from './First'
import Home from './page/Home'
import Signin from './Component/Signin'
import Register from './Component/Register'
import Products from './page/Products'
import Usestate from './Component/Usestate'
import Data from './page/props/Data'
import Fetch from './page/fetch/Fetch'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/first" element = {<First/>}/>
    <Route path ="/nav" element = {<Navbar/>}/>
    <Route path ="/home" element = {<Home/>}/>
    <Route path ="/footer" element = {<Footer/>}/>
    <Route path ="/signin" element = {<Signin/>}/>
    <Route path ="/register" element = {<Register/>}/>
    <Route path ="/products" element = {<Products/>}/>
    <Route path ="/usestate" element = {<Usestate/>}/>
    <Route path ="/props" element = {<Data/>}/>
    <Route path ="/fetch" element = {<Fetch/>}/>



 



    </Routes>

    </BrowserRouter>
  )
}

export default MyRoutes