import React, { useState } from "react";
import styles from "./Kitchen.module.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";
import { Skeleton } from '@chakra-ui/react'


function Kitchen() {
   const [kitchentools,setKitchentools]=useState([]);
   const [sortby, setSortby] = useState(""); //storing value for sorting
   const [filterbypack, setFilterbypack] = useState(""); //storing value for filter as pack
   const [filterbysize, setFilterbysize] = useState(""); //storing value for filter as size
   const [isLoaded, setIsLoaded] = useState(true); //storing value for skeleton loading
   console.log(sortby);

   React.useEffect(() => {
      let fetchData = async () => {
         try {
           let res = await fetch(`https://dark-red-goshawk-gown.cyclic.app/kitchen`,{
           method:"GET",
           headers:{
            Authorization:localStorage.getItem("token"),
            "Content-Type":"Application/json"
           }
         });
           let data = await res.json();
         //   console.log(data);
           setKitchentools(data.msg);
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
            <span className={styles.categoryName}>/ Kitchen Tools</span>
            <Heading size="lg" mt="10px" color="#0F346C">
               Kitchen Tools
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
            {kitchentools?.map((kitchen) => (
               <MealCard
                  id={kitchen._id}
                  image={kitchen.img[0].subImage}
                  title={kitchen.name}
                  // desc={wine.subDes}
                  price={kitchen.price}
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

export default Kitchen;
