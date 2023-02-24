import React, { useState } from 'react'
import AdminNavbar from '../Navbar/AdminNavbar'
import Styles from "./AddProduct.module.css"
import { useToast } from '@chakra-ui/react'

const AddProducts = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [cat, setCat] = useState("")

  // console.log(cat)
  const toast = useToast()

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const Images = []
    Images.push({ subImage: image })
    // console.log(name,desc,price,image,cat)
    const payload = {
      name, desc, price, img: Images
    }
    console.log(payload)
    //!Pantry Data added
    if (cat === "pantry") {
      let res = await fetch(`http://localhost:8080/admin/pantry`, {
        method: "POST",
        headers: {
          Authorization: "cheftoken",
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      let response = await res.json()
      console.log(response)

    }
    //!kitchen Data Added
    else if (cat === "kitchen") {
      let res = await fetch(`http://localhost:8080/admin/kitchen`, {
        method: "POST",
        headers: {
          Authorization: "cheftoken",
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      let response = await res.json()
      console.log(response)

    }
    //!wine data added
    else if (cat === "wine") {
      let res = await fetch(`http://localhost:8080/admin/wine`, {
        method: "POST",
        headers: {
          Authorization: "cheftoken",
          "Content-type": "application/json"
        },
        body: JSON.stringify({ name, img: Images, price, pack: 2, milliliter: 500, des: [{ subDes: desc }] })
      })
      let response = await res.json()
      console.log(response)

    }
    //!Meals Data Added through pantry
    else if (cat === "meal") {
      let res = await fetch(`http://localhost:8080/admin/meal`, {
        method: "POST",
        headers: {
          Authorization: "cheftoken",
          "Content-type": "application/json"
        },
        body: JSON.stringify({ name, img: Images, price, des: desc, subDes: "With Duck Cassoulet, Garlic Bread, Salad, Biscotti & Peppermint-Chocol…", listHead: "The Fireside Feast includes serves 4-6 people and includes the ingredients and instructions to make the following:", listContent: [{ content: "Duck Confit Cassoulet with Pork Belly, Beans & Thyme Breadcrumbs" }] })
      })
      let response = await res.json()
      console.log(response)

    }
    else {
      alert("Not required category")
    }
  }

  return (
    <div className={Styles.image}>
      <div>
        <AdminNavbar />
        <div className={Styles.div}>
          <form onSubmit={(e) => HandleSubmit(e)} className={Styles.form}>
            <input type="text" placeholder='Enter The Name' className={Styles.input} onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder='Enter a Brief Description of Product' className={Styles.input} onChange={(e) => { setDesc(e.target.value) }} />
            <input type="nummber" placeholder='Enter the price of product' className={Styles.input} onChange={(e) => { setPrice(e.target.value) }} />
            <input type="text" placeholder='Enter Image of Product' className={Styles.input} onChange={(e) => { setImage(e.target.value) }} />
            <select className={Styles.select} onChange={(e) => { setCat(e.target.value) }} >
              <option value="">Select The Product category</option>
              <option value="pantry">PANTRY</option>
              <option value="wine">WINE</option>
              <option value="kitchen">KITCHEN</option>
              <option value="meal">MEAL</option>
            </select>
            <button className={Styles.button} onClick={() =>
              toast({
                title: 'ADDED',
                description: "Thanks For adding the product",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
              })
            }>ADD PRODUCT</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddProducts