import React, { useEffect, useState } from "react";
import styles from "./SingleWineProductPage.module.css";
import { SocialFooter } from "../Components/SocialFooter";
import { useParams } from "react-router-dom";

import {
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// created a custom object with same schema for cheking UI

function SingleWineProductPage() {
  const [product, setProduct] = useState(); //paased custom obj to check UI
  const [qty, setQty] = useState(1); //storing selected qty for a product
  const { _id } = useParams();
  const toast = useToast()
 // console.log(_id)
 useEffect(() => {
  let fetchData = async () => {
    try {
      let res = await fetch(
        `https://dark-red-goshawk-gown.cyclic.app/wines/${_id}`,
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
      setProduct(data.msg);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, [_id]);
// console.log(product);
const AddToCart=async (product)=>{
  let obj={name:product.name,img:product.img,price:product.price,username:localStorage.getItem("userName")}
  console.log(obj)
 // console.log(product,localStorage.getItem("userName"))
  let res=await fetch(`https://dark-red-goshawk-gown.cyclic.app/cart/addtocart`,{
    method:"POST",
    headers:{
      Authorization:localStorage.getItem("token"),
      "Content-type":"application/json"
    },
    body:JSON.stringify(obj)
  })

  let ans=await res.json()
  console.log(ans)
  // alert(ans.msg)
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
    // Main container
    <>
      <div className={styles.container}>
        {/* {product?.map((items) => ( */}
          <>
            <div className={styles.product_img}>
              {/************************** Showing big image  ************/}
              <img src={product?.img[0].subImage} alt="Product" />
              <br></br>
            </div>

            {/***************** Rigth side of product details ****************/}
            <div className={styles.product_details}>
              <div>
                {/* Showing name */}
                <Heading size="lg" mb="10px">
                {product?.name}
                </Heading>
              </div>

              {/******************** To show price, qty, addtocart btn ***********************/}
              <div className={styles.cart_box}>
                <p className={styles.price}>
                  <span>
                    Price $<span>{product?.price}</span>
                  </span>
                </p>
                {/* <select onChange={(e) => setQty(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select> */}
                <button onClick={()=>{AddToCart(product)}}>ADD TO BASKET</button>
              </div>

              {/****************** Long description ******************/}
              <div className={styles.description}>
              {product?.des?.map((desc) => (
                  <>
                    <p>{desc.subDes}</p>
                    <br></br>
                  </>
                ))}
                <p>{product?.listHead}</p>
                <div>
                {product?.listContent?.map((list) => (
                    <>
                      <li>{list.content}</li>
                    </>
                  ))}
                </div>
                <span className={styles.question}>
                  Want larger bottles?click{" "}
                  <Link>
                    <span style={{ color: "#0f346c", fontWeight: "500" }}>
                      here
                    </span>
                  </Link>{" "}
                  to save on the 750mL size.
                </span>
                <br></br>
                <br></br>

                {/************ Tab Options ***********/}
                <div>
                  <Tabs variant="enclosed" color="gray">
                    <TabList>
                      <Tab fontWeight="500">What's Included</Tab>
                      <Tab fontWeight="500">Return Policy</Tab>
                      <Tab fontWeight="500">Order & Shipping</Tab>
                    </TabList>
                    <TabPanels
                      fontSize="14px"
                      color="black"
                      border="1px solid #e8edf3"
                    >
                      <TabPanel>
                        <p>
                          Collection includes {product?.pack} x {product?.milliliter}{" "}
                          mL bottles (2/3 of a standard-size wine bottle)
                          featuring the following wines:
                        </p>
                        <Link>
                          <li style={{ color: "#0f346c", fontWeight: "500" }}>
                            2020 Groundwork Grenache
                          </li>
                        </Link>
                        <Link>
                          <li style={{ color: "#0f346c", fontWeight: "500" }}>
                            2019 Goose Ridge Cabernet Sauvignon
                          </li>
                        </Link>
                        <Link>
                          <li style={{ color: "#0f346c", fontWeight: "500" }}>
                            2020 Blue Barrel Red Wine Blend
                          </li>
                        </Link>
                        <br></br>
                        <span>
                          <span style={{ fontWeight: "bold" }}>WARNING:</span>{" "}
                          Drinking distilled spirits, beer, coolers, wine and
                          other alcoholic beverages may increase cancer risk,
                          and, during pregnancy, can cause birth defects. For
                          more information go to: www.P65warnings.ca.gov/alcohol
                        </span>
                      </TabPanel>
                      <TabPanel>
                        <li>We do not accept returns of wine products.</li>
                      </TabPanel>
                      <TabPanel>
                        <li>
                          Your credit card will be charged at time of purchase.
                        </li>
                        <li>
                          Standard shipping takes 1-4 business days from
                          shipment date.
                        </li>
                        <li>Adult signature is required for delivery.</li>
                        <li>Adult signature is required for delivery.</li>
                        <li>
                          All wine orders are shipped and sold by Blue Apron
                          Wine, Napa, California (WA Lic. 421437, 423979,
                          424197; CT Lic. LSW.0001033, LSW.0001144,
                          LSW.0001149).
                        </li>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
            </div>
          </>
        {/* ))} */}
      </div>
      <SocialFooter />
    </>
  );
}

export { SingleWineProductPage };
