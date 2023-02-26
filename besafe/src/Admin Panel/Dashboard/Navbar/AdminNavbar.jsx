import React from 'react'
import Styles from "./AdminNavbar.module.css"
import Navbar_res from './Navbar_res'
import logo from "../../../Components/Assets/logowhite.webp.webp"
import {Link, Link as RouterLink} from "react-router-dom"
import {AuthContext} from '../../ContextAdmin/AdminAuthContext';



const AdminNavbar = () => {
  const val=React.useContext(AuthContext)
    const logout=(()=>{
        val.handleAuth();
    })
  return (
    <div >
        <div className={Styles.adnavbar} > 
        <div className={Styles.logo}>
       <Link to="/admin"> <img  src={logo} alt="" /></Link>
        </div>
          
            {/* <button className={Styles.buttons}>All Products</button> */}
          <Link to="/add"> <button className={Styles.buttons}>ADD ITEM</button></Link> 
           <Link to="/update"><button className={Styles.buttons}>UPDATE ITEM</button></Link> 
            <Link to="/delete"><button className={Styles.buttons}>DELETE ITEM</button></Link>
            <button className={Styles.buttons} onClick={logout}>LOGOUT</button>
            <div className={Styles.navres}>< Navbar_res/></div>
        </div>
    </div>
  )
}

export default AdminNavbar