import React from 'react'
import Styles from "./Update.module.css"
import { useToast } from '@chakra-ui/react'

const UpdateCard = ({name,img,desc,price,HandleUpdate,_id,cate}) => {
  const toast=useToast()
  return (
    <div>
        <div className={Styles.child}>
        <img src={img[0].subImage} alt={name} />
       <h3 className={Styles.name}>{name}</h3>
       {/* s */}
       <h3 className={Styles.name}>Price : ${price}</h3>
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