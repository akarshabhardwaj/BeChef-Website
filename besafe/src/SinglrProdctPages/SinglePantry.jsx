import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Pantry.module.css";
import { Box } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const SinglePantry = () => {
  const [pantry, setPantry] = useState();
  const [quan, setQuan] = useState(1);
  const [isLoading, setIsLoading] = useState(true); //storing value for skeleton loading
  const { _id } = useParams();

  // console.log(_id)
  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(
          `https://dark-red-goshawk-gown.cyclic.app/pantry/${_id}`,
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
        setIsLoading(false);
        setPantry(data.msg);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [_id]);
  //   console.log(pantry);

  if (isLoading) {
    return (
      <>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </>
    );
  } else {
    return (
      <div className={Styles.adjust}>
        <div>
          <img
            className={Styles.image}
            src={pantry?.img[0].subImage}
            alt="Spice NO 1"
          />
        </div>
        <div>
          <h2>{pantry?.name}</h2>
          <div className={Styles.top}>
            <h2>Price ${pantry?.price}</h2>
            <h3>{quan}</h3>
            <h3
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
            >
              ADD TO BASKET
            </h3>
          </div>
          <div className={Styles.des}>
            <h3>Description</h3>
            <p>{pantry?.desc}</p>
            <h3>Recipes</h3>
            <p>
              Some favorite Blue Apron meals using our Spice Blends:
              Tuscan-Style Pork Chops with Roasted Potato & Salsa Verde Summer
              Fregola Sarda Pasta with Green Beans, Tomatoes, & Hard Boiled Eggs
              Tuscan-Spiced Chicken & Fregola Sarda with Warm Citrus Vinaigrette
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default SinglePantry;
