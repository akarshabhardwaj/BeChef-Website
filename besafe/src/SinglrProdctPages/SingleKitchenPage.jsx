import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Styles from "./Pantry.module.css"

const SingleKitchen = () => {
    const[pantry,setPantry]=useState({})
    const[quan,setQuan]=useState(1)
    const { Id } = useParams()

    const getData =async  () => {
        // axios.get(`http://localhost:8080/pantry/${Id}`).then((res) => res.json()).then((res) => setPantry(res)).catch((err) => console.log(err))
        const response=await fetch(`http://localhost:8080/pantry/${Id}`)
        const data=await response.json()
        setPantry(data)
    }

    useEffect(()=>{
        getData()
    },[Id])

const{name,price,desc,img,id}=pantry

    return (
        <div className={Styles.adjust}> 
            <div>
                <img className={Styles.image} src="https://media.blueapron.com/agora/images/product/CCMK0000031/attachment/9ba68da37ac0cc64f4e0e0f60d2e7d95.jpg?width=800" alt="KITCHEN 1" />
            </div>
            <div>
            <h2>11" Non-stick Frying Pan</h2>
               <div className={Styles.top}>
                
               <h2>Price $90.99</h2>
              <input type="number" value={quan} style={{width:"7%",height:"auto",textAlign:"center"}} />
             <h3 style={{backgroundColor:"#f26226",width:"25%",padding:"2px",border:"0px",color:"white",textAlign:"center",height:"auto",borderRadius:"3px"}}>ADD TO BASKET</h3>
               </div>
            <div className={Styles.des}>
                <h3>Description</h3>
                <p>The right frying pan can make or break a meal. There’s nothing worse than whipping up something delicious, only to have half of it left sticking or burning onto your pan. Set yourself up for success with this 11” non-stick pan, featuring a smooth, toxic-free cooking surface so you can cook with ease. And because this oven safe pan is coated with Scanpan's patented Stratanium surface, it stands up to utensils—even metal—and is a breeze to clean!</p>
           <h3>Product Details</h3>
            <p>
            11" nonstick fry pan</p>
<p>00% recycled aluminum body and stainless-steel handle</p>
<p>100% PFOA-free, Stratanium nonstick cooking surface</p>
<p>For use on all stove-tops including induction</p>
<p>For use with metal utensils</p>
<p>Oven safe to 500 degrees Fahrenheit</p>

            </div>
            </div>
        </div>
    )
}

export default SingleKitchen