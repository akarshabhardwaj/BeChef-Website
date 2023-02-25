import React from 'react'
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Home from "../Pages/Home"
import Kitchen from "../Pages/Kitchen"
import { MealKits } from "../Pages/MealKits"
import { Pantry } from "../Pages/Pantry"
import { WineBundles } from "../Pages/WineBundles"
import Cart from "../Pages/Cart"
import Login from "../Components/Login/Login"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kitchen" element={
        <PrivateRoute>
          <Kitchen />
        </PrivateRoute>
      } />
      <Route path='/mealkits' element={
        <PrivateRoute>
          <MealKits />
        </PrivateRoute>
      } />
      <Route path='/pantry' element={
        <PrivateRoute>
          <Pantry />
        </PrivateRoute>
      } />
      <Route path='/winebundles' element={
        <PrivateRoute>
          <WineBundles />
        </PrivateRoute>
      } />
      <Route path='/cart' element={
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      } />
      <Route path='/login' element={
          <Login />
      } />
    </Routes>
  )
}

export default AllRoutes