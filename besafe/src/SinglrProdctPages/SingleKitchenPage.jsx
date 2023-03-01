import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SocialFooter } from "../Components/SocialFooter";
import { useFetch } from "../Components/Custom Hooks/useFetch";
import { border, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import styles from "./Pantry.module.css";
import {
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image,
  Box,
  useToast,
} from "@chakra-ui/react";

const SingleKitchen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //To open or close modal of small product img
  const [kitchen, setKitchen] = useState();
  const [quan, setQuan] = useState(1);
  const [modalImg, setModalImg] = useState(""); //storing modal img link on clicking on particular image
  const [isLoading, setIsLoading] = useState(true); //storing value for skeleton loading
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
    setIsLoading(false);
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
  function handleModalImg(imgLink) {
    onOpen();
    setModalImg(imgLink);
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
      // Main container
      <>
        <div className={styles.container}>
          {/* {product?.map((items) => ( */}
          <>
            <div className={styles.product_img}>
              {/************************** Showing big image  ************/}
              <img src={kitchen?.img[0].subImage} alt="Product" />
              <br></br>

              {/************** Showing all buttom small image *************/}
              <div className={styles.small_img}>
                {kitchen?.img.slice(1).map((img) => (
                  <>
                    <Image
                      // onClick={onOpen}
                      onClick={() => handleModalImg(img.subImage)}
                      _hover={{ cursor: "pointer" }}
                      m="auto"
                      w="125px"
                      h="120px"
                      src={img.subImage}
                      alt="Prodoct image"
                    />
                  </>
                ))}

                {/**************** To open a modal on clicking above small img **************/}
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton bg="#f9f9f9" borderRadius="25px" />
                    <ModalBody p="4" m="0">
                      <Image src={modalImg} w="100%" />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </div>
            </div>

            {/***************** Rigth side of product details ****************/}
            <div className={styles.product_details}>
              <div>
                {/* Showing name */}
                <Heading size="lg" mb="10px">
                  {kitchen?.name}
                </Heading>

                {/******************** To show price, qty, addtocart btn ***********************/}
                <div className={styles.cart_box}>
                  <p className={styles.price}>
                    <span>
                      Price $<span>{kitchen?.price}</span>
                    </span>
                  </p>
                  {/* <select onChange={(e) => setQty(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select> */}
                  <button
                    onClick={()=>{AddToCart(kitchen)}}
                  >
                    ADD TO BASKET
                  </button>
                </div>

                {/* Showing Sub description after name */}
                {/* <p className={styles.highlights}>{pantry?.des[0].subDes}</p> */}
              </div>

              {/****************** Long description ******************/}
              <div className={styles.description}>
                <p>{kitchen?.des[0].subDes}</p>
                <br></br>

                {/************ Tab Options ***********/}
                <div className={styles.tabs}>
                  <Tabs variant="enclosed" color="gray">
                    <TabList>
                      <Tab fontWeight="500">Product Details</Tab>
                      <Tab fontWeight="500">Order & Shipping</Tab>
                      <Tab fontWeight="500">Return Policy</Tab>
                    </TabList>
                    <TabPanels color="black" border="1px solid #e8edf3">
                      <TabPanel>
                        <li>Oven safe to 500 degrees Fahrenheit</li>
                        <li>Dishwasher safe</li>
                        <li>Hand-harvested and hand-sorted off the Oregon Coast</li>
                        <li>Produced by Togiharu for Blue Apron</li>
                      </TabPanel>
                      <TabPanel>
                        <li >
                        Your credit card will be charged at time of purchase.
                        </li>
                        <li >
                        Shipping is only available to the 48 contiguous United States and not available to PO Box addresses.
                        </li>
                        <li >Standard shipping takes 5-7 business days from ship date.Standard shipping takes 5-7 business days from ship date.</li>
                      </TabPanel>
                      <TabPanel>
                        <p className={styles.tabs}>We accept returns (excluding food), and will provide a full refund for the price of the item. Items must be shipped back within 30 days of receipt in their original packaging and condition. To make a return, please email market@blueapron.com and we will provide you with the return address as well as any shipping instructions that may apply.</p>
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
};

export default SingleKitchen;
