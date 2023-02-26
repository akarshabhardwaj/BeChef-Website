import React, { useEffect, useState } from "react";
import { Button, Divider, Icon, Image, Spinner, Text } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import style from "./Cartitem.module.css";

import {
  cartActions,
  cartValue,
  deleteCartItem,
  updateCarts,
} from "../../Redux/Cart/Cart.actions";

import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  const {loading , error, cartData,totalPrice} = useSelector((store) => store.cart);
  console.log('cartData:', cartData)


  
  
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(items.price);
  

const inc = (id,qty) => {
  // console.log('id:', id)
  // console.log('qty:', qty)
  // let qtyIn = qty+1;
  // console.log('qtyIn:', qtyIn)
  dispatch(updateCarts(id,{"qty":qty+1}))
  .then(()=> {
    dispatch(cartActions());
  });
}

const dec = async(id,qty) => {
  dispatch(updateCarts(id,{"qty":qty-1})).then(()=> {
    dispatch(cartActions());
  });
}


  // const handleRemove = async(id) => {
  //   try {
  //     const res = await fetch(`http://localhost:8080/cart/items/${id}`,{
  //         method:"DELETE",
  //         headers:{
  //           "Content-Type":"application/json"
  //         }
  //     });
  //       const cartData = await res.json();
  //       console.log('cartData:', cartData.msg) 
  //   } catch (error) {
  //       console.log("error cart:-", error);
  //   }
  // };

  // const inc = () => {
  //   console.log("inc")
  //   const inc=parseFloat((price + items.price).toFixed(2))
  //   setPrice(inc);
  //   setCount(count + 1);
  // };

  // const countDec = () => {
  //   const dec=parseFloat((price - items.price).toFixed(2))
  //   setPrice(dec);
  //   setCount(count - 1);
  // };

  return (
    <div className={style.item}>
      <div key={items._id} className={style.subitem}>
        <div style={{ width: "10%", margin: "auto", textAlign: "center" }}>
          <Image src={items.img[0].subImage} height={120} margin={"auto"} alt="" />
        </div>
        <div className={style.subitemText}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            {items.name}
          </h1>
          {/* <Text noOfLines={2}>{items.des[0].subDes}</Text> */}
        </div>
        <div className={style.quantity}>
          <div className={style.quantityInner}>
            <Button isDisabled={items.qty === 1} onClick={()=> dec(items._id,items.qty)}>
              -
            </Button>
            <Button isDisabled fontSize={20}>
            { loading ? <Spinner/> : items.qty}
            </Button>
            <Button onClick={() => inc(items._id,items.qty)}>
              +
            </Button>
          </div>
        </div>
        <div className={style.remove}>
          <Button onClick={()=>{
                      dispatch(deleteCartItem(items._id)).then(()=> dispatch(cartActions()));
                      }}>
            <Icon as={RxCross2} />
          </Button>
        </div>
        <div
          style={{
            width: "10%",
            margin: "auto",
            textAlign: "center",
            paddingTop: "0.5rem",
          }}
        >
          <h1>{(items.price*items.qty).toFixed(2)}</h1>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default CartItem;