import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Styles from "./Pantry.module.css"

const SinglePantry = () => {
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
                <img className={Styles.image} src="https://media.blueapron.com/agora/images/product/CCMK0000003/attachment/56c2e0294d81b3ca24a16cfcd09bb58f.jpeg?width=800" alt="Spice NO 1" />
            </div>
            <div>
            <h2>Spice No 1</h2>
               <div className={Styles.top}>
                
               <h2>Price $:12.99</h2>
              <h3>{quan}</h3>
             <h3 style={{backgroundColor:"#f26226",width:"25%",padding:"2px",border:"0px",color:"white",textAlign:"center",height:"auto",borderRadius:"3px"}}>ADD TO BASKET</h3>
               </div>
            <div className={Styles.des}>
                <h3>Description</h3>
                <p>This blend packs all of the traditional flavors of central Italy into one neat package. In the Test Kitchen, we love to toss it on vegetables before roasting, or use it to season pork chops or roasts, as the whole fennel seeds help form a nice crust. The slight licorice flavor you taste is the fennel — both ground and whole — which adds a deliciously floral and aromatic element.</p>
           <h3>Recipes</h3>
            <p>
            Some favorite Blue Apron meals using our Spice Blends:
            Tuscan-Style Pork Chops with Roasted Potato & Salsa Verde
            Summer Fregola Sarda Pasta with Green Beans, Tomatoes, & Hard Boiled Eggs
            Tuscan-Spiced Chicken & Fregola Sarda with Warm Citrus Vinaigrette
            </p>
            </div>
            </div>
        </div>
    )
}

export default SinglePantry