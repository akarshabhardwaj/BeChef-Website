import React from 'react'
import Styles from "./allproduct.module.css"

const ProductsAdminCard = ({name,img,desc,price}) => {
    // console.log(name)
    // console.log(img)
    const Button=()=>{}
    
  return (
    <div className={Styles.child}>
        <img src={img[0].subImage} alt={name} />
       <h3 className={Styles.name}>{name}</h3>
       {/* s */}
       <h3 className={Styles.name}>Price : ${price}</h3>

        </div>
  )
}

export default ProductsAdminCard
