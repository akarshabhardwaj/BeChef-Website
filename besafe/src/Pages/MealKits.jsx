import React, { useState } from "react";
import styles from "./MealKits.module.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";


function MealKits() {
  const [sortby, setSortby] = useState(""); //storing value for sorting
  const [mealKits, setMealkits] = useState([]);
  console.log(sortby);
  React.useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(`https://dark-red-goshawk-gown.cyclic.app/meals`, {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "Application/json"
          }
        });
        let data = await res.json();
        //   console.log(data);
        setMealkits(data.msg);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])

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
          <option value="">Price</option>
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

export { MealKits };
