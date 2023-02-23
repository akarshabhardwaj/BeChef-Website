import React from 'react'
import{Routes,Route,Link} from "react-router-dom"
import AddProducts from '../Dashboard/AddProducts/AddProducts'
import AllProducts from '../Dashboard/AllProducts/AllProducts'
import DeleteProducts from '../Dashboard/DeleteProducts/DeleteProducts'
import AdminNavbar from '../Dashboard/Navbar/AdminNavbar'
import UpdateProduct from '../Dashboard/UpdateProducts/UpdateProduct'

const AdminRoutes = () => {
  return (
    <div> <Routes>
    <Route path='/admin' element={<AllProducts/>}/>
    <Route path='/add' element={<AddProducts/>}/>
    <Route path='/update' element={<UpdateProduct/>}/>
    <Route path='/delete' element={<DeleteProducts/>}/>
  </Routes></div>
  )
}

export default AdminRoutes