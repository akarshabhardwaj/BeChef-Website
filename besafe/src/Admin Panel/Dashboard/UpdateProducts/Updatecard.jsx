import React, { useState } from 'react'
import Styles from "./Update.module.css"


const UpdateCard = ({name,img,desc,price,HandleUpdate,_id,cate}) => {

  const[title,setTitle]=useState("")
  const[field,setField]=useState("")
//   const[price,setPrice]=useState("")

const HandleSubmit=()=>{
    HandleUpdate(_id,cate,title)
}
  console.log(title)
  return (
    <div>
        <div className={Styles.child}>
        <img src={img[0].subImage} alt={name} />
       <h3 className={Styles.name}>{name}</h3>
       {/* s */}
       <h3 className={Styles.name}>Price : ${price}</h3>
       <input type="text" placeholder="Enter the new name"  onChange={(e)=>{setTitle(e.target.value)}} />
    <button onClick={HandleSubmit}>Update Products</button>
        </div>
    </div>
  )
}

export default UpdateCard