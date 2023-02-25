import React from 'react'
import { Routes, Route } from "react-router-dom"
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
    </Routes>
  )
}

export default AllRoutes