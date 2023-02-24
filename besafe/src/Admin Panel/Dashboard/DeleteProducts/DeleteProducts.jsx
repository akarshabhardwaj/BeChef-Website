
import AdminNavbar from '../Navbar/AdminNavbar'
import DeleteCard from './DeleteCard'
import Styles from "./DeleteProduct.module.css"
import React, { useEffect, useState } from 'react'

const DeleteProducts = () => {
  const[pantry,setPantry]=useState([])
const[kitchen,setKitchen]=useState([])
const[meal,setMeal]=useState([])
const[wine,setWine]=useState([])
const getData=()=>{

    //!Pnatry Routes for fteching Pantry Products
    fetch("http://localhost:8080/admin/pantrypro",{
        method:"GET",
        headers:{
            Authorization:"cheftoken",
            "Content-type":"application/json"
        }
    })
    .then((res)=>res.json()).
    then((res)=>setPantry(res.msg))
    .catch(err=>console.log(err))

//!kitchen Routes for fetching Kitchen Products

    fetch("http://localhost:8080/admin/kitchenpro",{
        method:"GET",
        headers:{
            Authorization:"cheftoken",
            "Content-type":"application/json"
        }
    })
    .then((res)=>res.json()).
    then((res)=>setKitchen(res.msg))
    .catch(err=>console.log(err))

//!Meals Routes

fetch("http://localhost:8080/admin/mealpro",{
    method:"GET",
    headers:{
        Authorization:"cheftoken",
        "Content-type":"application/json"
    }
})
.then((res)=>res.json()).
then((res)=>setMeal(res.msg))
.catch(err=>console.log(err))

//!Wines Route

fetch("http://localhost:8080/admin/winepro",{
    method:"GET",
    headers:{
        Authorization:"cheftoken",
        "Content-type":"application/json"
    }
})
.then((res)=>res.json()).
then((res)=>setWine(res.msg))
.catch(err=>console.log(err))


}

useEffect(()=>{
    getData()
},[])
  return (
    <div>
        <AdminNavbar/>
        <h1 className={Styles.headings}>Pantry Items</h1>
        <div className={Styles.parent}>
            
        {pantry?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el}/>
            </div>
        })}
        </div>
        <h1 className={Styles.headings}>Kitchen Items</h1>
        <div className={Styles.parent}>
            
        {kitchen?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el}/>
            </div>
        })}
        </div>

        <h1 className={Styles.headings}>Meals Items</h1>
        <div className={Styles.parent}>
            
        {meal?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el}/>
            </div>
        })}
        </div>

        <h1 className={Styles.headings}>Wines</h1>
        <div className={Styles.parent}>
            
        {wine?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el}/>
            </div>
        })}
        </div>
       
    </div>
  )
}

export default DeleteProducts