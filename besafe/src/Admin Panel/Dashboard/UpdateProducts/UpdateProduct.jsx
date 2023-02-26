
import AdminNavbar from '../Navbar/AdminNavbar'

import Styles from "./Update.module.css"
import React, { useEffect, useState } from 'react'
import UpdateCard from './Updatecard'

const UpdateProduct = () => {
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

const HandleUpdate=async (id,cate,title)=>{
    console.log(id,cate,title)

 if(cate==="meal"){
  let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/mealupdate/${id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
            Authorization:"cheftoken"
        },
        body:JSON.stringify({name:title})
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
    getData()
 }
 
 else if(cate==="pantry"){
  console.log({name:title})
    fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/pantryupdate/${id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
             Authorization:"cheftoken"
        },
        body:JSON.stringify({"name":title})
    }).then((res)=>res.json())
    .then((res)=>{console.log(res)
      alert(res.msg)
    })
    // console.log(response)
    // alert(response.msg)
    getData()
 }
 else if(cate==="kitchen"){
    let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/kitchenupdate/${id}`,{
        method:"PATCH",
        headers:{
            "Content-tpye":"application/json",
            Authorization:"cheftoken"
        },
        body:JSON.stringify({name:title})
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
 }
 else if(cate==="wine"){
    console.log("wine")
    let res=await   fetch(`https://dark-red-goshawk-gown.cyclic.app/admin/wineupdate/${id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
            Authorization:"cheftoken"
        },
        body:JSON.stringify({name:title})
    })
    let response=await res.json()
    console.log(response)
    alert(response.msg)
    getData()
 }

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
            <UpdateCard {...el} HandleUpdate={HandleUpdate} />
            </div>
        })}
        </div>
        <h1 className={Styles.headings}>Kitchen Items</h1>
        <div className={Styles.parent}>
            
        {kitchen?.map((el,index)=>{
            return <div  key={el._id}>
            <UpdateCard {...el} HandleUpdate={HandleUpdate} />
            </div>
        })}
        </div>

        <h1 className={Styles.headings}>Meals Items</h1>
        <div className={Styles.parent}>
            
        {meal?.map((el,index)=>{
            return <div  key={el._id}>
            <UpdateCard {...el} HandleUpdate={HandleUpdate} />
            </div>
        })}
        </div>

        <h1 className={Styles.headings}>Wines</h1>
        <div className={Styles.parent}>
            
        {wine?.map((el,index)=>{
            return <div  key={el._id}>
            <UpdateCard {...el} HandleUpdate={HandleUpdate} />
            </div>
        })}
        </div>
       
    </div>
  )
}

export default UpdateProduct