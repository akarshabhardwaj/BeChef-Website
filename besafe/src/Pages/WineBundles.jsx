import React, { useEffect, useState } from "react";
import styles from "./WineBundles.module.css";
import { Link } from "react-router-dom";
import { Heading, Box } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

let filtered = [];
function WineBundles() {
  const [wineBundles, setWineBundles] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  const [sortby, setSortby] = useState(""); //storing value for sorting
  const [filterbypack, setFilterbypack] = useState(""); //storing value for filter as pack
  const [filterbysize, setFilterbysize] = useState(""); //storing value for filter as size
  const [isLoading, setIsLoading] = useState(true); //storing value for skeleton loading

  // console.log(sortby);

  React.useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(
          `https://dark-red-goshawk-gown.cyclic.app/wines`,
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
        setWineBundles(data.msg);
        filtered = [...data.msg];
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sortby]);

  //sorting
  if (sortby === "lh") {
    wineBundles.sort((a, b) => {
      return a.price - b.price;
    });
    filtered.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortby === "hl") {
    wineBundles.sort((a, b) => {
      return b.price - a.price;
    });
    filtered.sort((a, b) => {
      return b.price - a.price;
    });
  }

  //filtering
  useEffect(() => {
    let temp = [];
    if (filterbysize === "500") {
      temp = filtered.filter((prod) => {
        return prod.milliliter <= 500;
      });
      setWineBundles(temp);
      console.log(temp);
    } else if (filterbysize === "750") {
      temp = filtered.filter((prod) => {
        return prod.milliliter <= 750;
      });
      setWineBundles(temp);
    } else if (filterbysize === "500-1000") {
      temp = filtered.filter((prod) => {
        return prod.milliliter >= 500 && prod.milliliter <= 1000;
      });
      setWineBundles(temp);
    }
    if (filterbypack === "3") {
      if (temp.length === 0) {
        temp = filtered.filter((prod) => {
          return prod.pack === 3;
        });
        setWineBundles(temp);
      } else {
        let temp2 = temp.filter((prod) => {
          return prod.pack === 3;
        });
        setWineBundles(temp2);
      }
    } else if (filterbypack === "6") {
      if (temp.length === 0) {
        temp = filtered.filter((prod) => {
          return prod.pack === 6;
        });
        setWineBundles(temp);
      } else {
        let temp2 = temp.filter((prod) => {
          return prod.pack === 6;
        });
        setWineBundles(temp2);
      }
    }
    if (filterbysize === "" && filterbypack === "") {
      setWineBundles(filtered);
    }
  }, [filterbysize, filterbypack]);

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
          <span className={styles.categoryName}>/ Wine Bundles</span>
          <Heading size="lg" mt="10px" color="#0F346C">
            Wine Bundles
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

          <select onClick={(e) => setFilterbysize(e.target.value)}>
            <option value="">Filter by Size</option>
            <option value="500">Upto 500ml</option>
            <option value="750">Upto 750ml</option>
            <option value="500-1000">500ml - 1000ml</option>
          </select>
          <select onClick={(e) => setFilterbypack(e.target.value)}>
            <option value="">Filter by Pack</option>
            <option value="3">Pack of 3 Only</option>
            <option value="6">Pack of 6 Only</option>
          </select>
        </div>
        <div className={styles.cardContainer}>
          {wineBundles?.map((wine) => (
            <MealCard
              id={wine._id}
              image={wine.img[0].subImage}
              title={wine.name + " " + wine.milliliter + "ml"}
              // desc={wine.subDes}
              price={wine.price}
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

export { WineBundles };
