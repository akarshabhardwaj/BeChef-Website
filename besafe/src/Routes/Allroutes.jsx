import React from 'react'
import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Home from "../Pages/Home"
import Kitchen from "../Pages/Kitchen"
import { MealKits } from "../Pages/MealKits"
import { Pantry } from "../Pages/Pantry"
import { WineBundles } from "../Pages/WineBundles"
import SingleKitchen from "../SinglrProdctPages/SingleKitchenPage"
import Cart from "../Pages/Cart"
import Login from "../Components/Login/Login"
import { SingleMealProductPage } from '../SinglrProdctPages/SingleMealProductPage'
import SinglePantry from '../SinglrProdctPages/SinglePantry'
import { SingleWineProductPage } from '../SinglrProdctPages/SingleWineProductPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kitchen" element={
        <PrivateRoute>
          <Kitchen />
        </PrivateRoute>
      } />
      <Route path="/kitchen/:_id" element={
        <PrivateRoute>
          <SingleKitchen />
        </PrivateRoute>
      } />
      <Route path='/mealkits' element={
        <PrivateRoute>
          <MealKits />
        </PrivateRoute>
      } />
      <Route path='/mealkits/:_id' element={
        <PrivateRoute>
          <SingleMealProductPage />
        </PrivateRoute>
      } />
      <Route path='/pantry' element={
        <PrivateRoute>
          <Pantry />
        </PrivateRoute>
      } />
      <Route path='/pantry/:_id' element={
        <PrivateRoute>
          <SinglePantry />
        </PrivateRoute>
      } />
      <Route path='/winebundles' element={
        <PrivateRoute>
          <WineBundles />
        </PrivateRoute>
      } />
      <Route path='/winebundles/:_id' element={
        <PrivateRoute>
          <SingleWineProductPage />
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
