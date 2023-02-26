import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Components/Custom Hooks/useFetch";
import Styles from "./Pantry.module.css";

const SingleKitchen = () => {

  const [kitchen, setKitchen] = useState();
  const [quan, setQuan] = useState(1);
  const { _id } = useParams();
// console.log(_id)
  const fetchData = async () => {
  try {
    let res = await fetch(
      `https://dark-red-goshawk-gown.cyclic.app/kitchen/${_id}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "Application/json",
        },
      }
    );
    let data = await res.json();
    console.log(data);
    setKitchen(data.msg);
  } catch (err) {
    console.log(err);
  }
};
  useEffect(() => {
    fetchData();
  }, [_id]);

  console.log(kitchen);
  const toast = useToast()
  const addToBasket = ()=>{
    
    toast({
      title: "Add to Basket",
      description: "You Can See Cart Now",
      variant: "subtle",
      status:'success',
      position: 'top-right',
      duration: 3000,
      isClosable: true,
    })
  }
  
  return (
    <div className={Styles.adjust}>
      <div>
        <img
          className={Styles.image}
          src={kitchen?.img[0].subImage}
          alt="KITCHEN 1"
        />
      </div>
      <div>
        <h2>{kitchen?.name}</h2>
        <div className={Styles.top}>
          <h2>Price ${kitchen?.price}</h2>
          <input
            type="number"
            value={quan}
            style={{ width: "7%", height: "auto", textAlign: "center" }}
          />
          <button
            style={{
              backgroundColor: "#f26226",
              width: "25%",
              padding: "2px",
              border: "0px",
              color: "white",
              textAlign: "center",
              height: "auto",
              borderRadius: "3px",
            }}
            onClick={()=>addToBasket}
            >
            ADD TO BASKET
          </button>
        </div>
        <div className={Styles.des}>
          <h3>Description</h3>
          <p>
            {kitchen?.desc}
          </p>
          <h3>Product Details</h3>
          <p>11" nonstick fry pan</p>
          <p>00% recycled aluminum body and stainless-steel handle</p>
          <p>100% PFOA-free, Stratanium nonstick cooking surface</p>
          <p>For use on all stove-tops including induction</p>
          <p>For use with metal utensils</p>
          <p>Oven safe to 500 degrees Fahrenheit</p>
        </div>
      </div>
    </div>
  );
};

export default SingleKitchen;
