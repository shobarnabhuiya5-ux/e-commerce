import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import ApiTest from './Pages/ApiTest'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/api" element={<ApiTest/>}/>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shop/:id" element={<ProductDetails/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      
      

      </Route>
      
    </Routes>
 </BrowserRouter>
  )
}

export default App
