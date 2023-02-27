
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
    fetch("https://dark-red-goshawk-gown.cyclic.app/admin/pantrypro",{
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

    fetch("https://dark-red-goshawk-gown.cyclic.app/admin/kitchenpro",{
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

fetch("https://dark-red-goshawk-gown.cyclic.app/admin/mealpro",{
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

fetch("https://dark-red-goshawk-gown.cyclic.app/admin/winepro",{
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

const HandleDelete=async (id,cate)=>{
    console.log(id,cate)
 if(cate==="meal"){
  let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/mealdelete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            Authorization:"cheftoken"
        }
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
 }else if(cate==="pantry"){
    let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/pantrydelete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            Authorization:"cheftoken"
        }
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
 }
 else if(cate==="kitchen"){
    let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/kitchendelete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            Authorization:"cheftoken"
        }
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
 }
 else if(cate==="wine"){
    console.log("wine")
    let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/winedelete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            Authorization:"cheftoken"
        }
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
 }
 getData()
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
            <DeleteCard {...el} HandleDelete={HandleDelete} />
            </div>
        })}
        </div>
        <h1 className={Styles.headings}>Kitchen Items</h1>
        <div className={Styles.parent}>
            
        {kitchen?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el} HandleDelete={HandleDelete} />
            </div>
        })}
        </div>

        <h1 className={Styles.headings}>Meals Items</h1>
        <div className={Styles.parent}>
            
        {meal?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el} HandleDelete={HandleDelete} />
            </div>
        })}
        </div>

        <h1 className={Styles.headings}>Wines</h1>
        <div className={Styles.parent}>
            
        {wine?.map((el,index)=>{
            return <div  key={el._id}>
            <DeleteCard {...el} HandleDelete={HandleDelete} />
            </div>
        })}
        </div>
       
    </div>
  )
}

export default DeleteProducts