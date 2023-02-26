import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import CartItem from "../Components/Cart/Cartitem";
import { Divider, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartValue } from "../Redux/Cart/Cart.actions";

const Index = () => {
    const [item, setItem] = React.useState([]);
    const [discount, setDiscount] = React.useState(0);
    const [delivery, setDelivery] = React.useState(0);
    const [subTotal, setSubTotal] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const toast = useToast();
    
    const {loading , error, cartData,totalPrice} = useSelector((store) => store.cart);
    console.log('totalPrice:', totalPrice)
    console.log('cartData-cart.jsx:', cartData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartActions())
        updatePrice()
    }, [ cartData.length,totalPrice]);

    const [totalCartPrice,setTotalCartPrice] = useState(totalPrice);
    // const getCartData = async () => {
    //     try {
            // const res = await fetch("http://localhost:8080/cart/items",{
            //     method:"GET",
            //     headers :{
            //         Authorization:localStorage.getItem("token"),
            //         "Content-type":"application/json"
            //     }
            // });
    //         const cartData = await res.json();
    //         console.log('cartData:', cartData.msg)
    //         setItem(cartData.msg); 
    //     } catch (error) {
    //         console.log("error cart:-", error);
    //         // setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     getCartData()
    // }, []);

    // React.useEffect(async() => {
    //     // fetch("https://dark-red-goshawk-gown.cyclic.app/carts")
    //     //     .then((res) => {
    //     //         return res.json();
    //     //     })
    //     //     .then((data) => {
    //     //         console.log(data)
    //     //         setItem(data);
    //     //     });
      
    //         const res = await  fetch("https://dark-red-goshawk-gown.cyclic.app/carts/items");
    //         const cartData = await res.json();
    //         console.log('menuData:', cartData)
    //         setItem(cartData);  
    // }, []);
    
    const updatePrice = () => {
        setTotalCartPrice(
          cartData.reduce(
            (acc, el) => parseFloat((((acc + el.price)*el.qty)).toFixed(2)),0)  
        );
          
    }
   

   const [apply,setApply] = useState("");
   const offerClick = () => {
     if(apply === "Bechef30"){
        setTotalCartPrice(cartData.reduce(
        (acc, el) => parseFloat(((((acc + el.price)*el.qty)+144)*70/100).toFixed(2)),
        0
        ));

       setDiscount(cartData.reduce(
        (acc, el) => parseFloat((((acc + el.price)*el.qty)*30/100).toFixed(2)),
        0
      ))
       setApply("");
       toast({
        title: "Applied Successfully",
        description: "You have added Bechef30",
        variant: "subtle",
        status:'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
     }else if(apply !== "Bechef30"){
      toast({
        title: "Not Valid",
        description: "You have to add Bechef30",
        variant: "subtle",
        status:'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      });
     }
   }

    const paymentFun = () => {
        dispatch(cartValue(totalCartPrice));
    }

    return (
        <div
            style={{
                display: "flex",
                padding: "1rem",
                backgroundColor: "var(--color-bg)",
            }}
        >
            <div className={style.mainSkeleton}>
                <div className={style.headCart}>
                    <h1 className={style.headCart1}>Image</h1>
                    <h1 className={style.headCart2}>Description</h1>
                    <h1 className={style.headCart3}>Quantity</h1>
                    <h1 className={style.headCart4}>Remove</h1>
                    <h1 className={style.headCart5}>Price</h1>
                </div>
                <Divider />
                <div className={style.subSkeleton}>
                    {cartData?.map((items) => (
                        <div key={items.id}>
                            <CartItem items={items} />
                        </div>
                    ))}
                </div>
                <Divider />
                <div className={style.bottomCart}>
                    <div className={style.box}>Discount: $ {discount}</div>
                    <div className={style.box}>Delivery: $ 144</div>
                    {/* <div className={style.box}>Subtotal: $ {subTotal}</div> */}
                    <div className={style.box}>Total: $ {totalCartPrice+144}</div>
                </div>

                <div className={style.bottomDiscount}>
                    <div>
                        <div style={{ display: "flex", width: "40%" }}>
                            <input
                                className={style.input}
                                placeholder="Please enter promo code"
                                value={apply}
                                onChange={(e) => setApply(e.target.value)}
                            />
                            <button className={style.buttonpromo} onClick={()=>offerClick()}>Apply Discount</button>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Link to={"/address"}>
                            <button className={style.checkout} onClick={paymentFun}>Checkout</button>
                        </Link>
                        <Link to={"/"}>
                            <button className={style.continue}>Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;