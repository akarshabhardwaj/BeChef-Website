import React from 'react'
import Styles from "./DeleteProduct.module.css"

const DeleteCard = ({name,img,desc,price,HandleDelete,_id,cate}) => {
  return (
    <div>
        <div className={Styles.child}>
        <img src={img[0].subImage} alt={name} />
       <h3 className={Styles.name}>{name}</h3>
       {/* s */}
       <h3 className={Styles.name}>Price : ${price}</h3>
    <button onClick={()=>HandleDelete(_id,cate)}>Delete Products</button>
        </div>
    </div>
  )
}

export default DeleteCard