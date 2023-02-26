import React from 'react'
import { Routes, Route } from "react-router-dom"
import AddProducts from '../Admin Panel/Dashboard/AddProducts/AddProducts'
import AllProducts from '../Admin Panel/Dashboard/AllProducts/AllProducts'
import DeleteProducts from '../Admin Panel/Dashboard/DeleteProducts/DeleteProducts'
import UpdateProduct from '../Admin Panel/Dashboard/UpdateProducts/UpdateProduct'
import AdminLogin from '../Admin Panel/Login/AdminLogin'
// import PrivateRoute from "../Components/PrivateRoute"
import Home from "../Pages/Home"
import Kitchen from "../Pages/Kitchen"
import {MealKits} from "../Pages/MealKits"
import {Pantry} from "../Pages/Pantry"
import {WineBundles} from "../Pages/WineBundles"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/kitchen" element={<Kitchen/>} />
      <Route path='/mealkits' element={<MealKits />} />
      <Route path='/pantry' element={<Pantry />} />
      <Route path='/winebundles' element={<WineBundles />} />
      <Route path="/adminlogin" element={<AdminLogin/>} />
      <Route path="/admin" element={<AllProducts/>} />
      <Route path='/add' element={<AddProducts/>}/>
    <Route path='/update' element={<UpdateProduct/>}/>
    <Route path='/delete' element={<DeleteProducts/>}/>
    </Routes>
  )
}

export default AllRoutes