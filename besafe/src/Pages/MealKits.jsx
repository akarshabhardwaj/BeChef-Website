import React, { useState } from "react";
import styles from "./MealKits.module.css";
import { Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function MealKits() {
  const [sortby, setSortby] = useState(""); //storing value for sorting
  const [mealKits, setMealkits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(sortby);
  React.useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(
          `https://dark-red-goshawk-gown.cyclic.app/meals`,
          {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": "Application/json",
            },
          }
        );
        let data = await res.json();
        //   console.log(data);
        setIsLoading(false);
        setMealkits(data.msg);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sortby]);

  if (sortby === "lh") {
    mealKits.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortby === "hl") {
    mealKits.sort((a, b) => {
      return b.price - a.price;
    });
  }

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
      <div className={styles.container}>
        <div>
          <Link className={styles.link} to="/">
            Home{" "}
          </Link>
          <span className={styles.categoryName}>/ Meak Kits</span>
          <Heading size="lg" mt="10px" color="#0F346C">
            Meal Kits
          </Heading>
          <br></br>

          <div className={styles.blueLine}></div>
          <br></br>
        </div>
        <div className={styles.sort_filter}>
          <select onClick={(e) => setSortby(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="lh">Low to High</option>
            <option value="hl">High to Low</option>
          </select>
        </div>
        <div className={styles.cardContainer}>
          {mealKits?.map((meal) => (
            <MealCard
              id={meal._id}
              image={meal.img[0].subImage}
              title={meal.name}
              desc={meal.subDes}
              price={meal.price}
            />
          ))}
        </div>
        <br></br>
        <br></br>

        {/* category */}
        <SelectCategory />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* Social media link footer  */}
        <SocialFooter />
      </div>
    );
  }
}

export { MealKits };
