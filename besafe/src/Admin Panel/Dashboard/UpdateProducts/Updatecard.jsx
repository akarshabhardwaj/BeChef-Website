import React, { useState } from 'react'
import Styles from "./Update.module.css"
import { Select, useToast } from '@chakra-ui/react'

const UpdateCard = ({name,img,desc,price,HandleUpdate,_id,cate}) => {
  const toast=useToast()
  const[title,setTitle]=useState("")
//   const[price,setPrice]=useState("")
  console.log(title)
  return (
    <div>
        <div className={Styles.child}>
        <img src={img[0].subImage} alt={name} />
       <h3 className={Styles.name}>{name}</h3>
       {/* s */}
       <h3 className={Styles.name}>Price : ${price}</h3>
       <select onchange={(e)=>{setTitle(e.target.value)}} >
        <option value="">Select Attribute</option>
        <option value="name" >Name</option>
        <option value="price" >price</option>
       </select>
       <input type="text" placeholder="Enter the new data" />
    <button onClick={
      ()=>
      {
      HandleUpdate(_id,cate)
    }}>Update Products</button>
        </div>
    </div>
  )
}

export default UpdateCard