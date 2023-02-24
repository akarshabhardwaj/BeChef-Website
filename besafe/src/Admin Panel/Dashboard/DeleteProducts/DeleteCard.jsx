import React from 'react'
import Styles from "./DeleteProduct.module.css"

const DeleteCard = ({name,img,desc,price}) => {
  return (
    <div>
        <div className={Styles.child}>
        <img src={img[0].subImage} alt={name} />
       <h3 className={Styles.name}>{name}</h3>
       {/* s */}
       <h3 className={Styles.name}>Price : ${price}</h3>
    <button>Delete Products</button>
        </div>
    </div>
  )
}

export default DeleteCard