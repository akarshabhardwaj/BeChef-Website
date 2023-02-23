import React, { useEffect, useState } from "react";
import styles from "./SingleMealProductPage.module.css";
import { SocialFooter } from "./SocialFooter";
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
} from "@chakra-ui/react";

// created a custom object with same schema for cheking UI
let items = {
  name: "Fireside Feast",
  subDes:
    "With Duck Cassoulet, Garlic Bread, Salad, Biscotti & Peppermint-Chocolate Dipping Sauce",
  img: [
    {
      subImage:
        "https://media.blueapron.com/agora/images/product/CCMK0001047/attachment/e584f8e1c5b42319df6aef2731668b73.jpeg?width=800",
    },
    {
      subImage:
        "https://media.blueapron.com/agora/images/product/CCMK0001047/attachment/62b4b5ab216bfe44901192a74a79b41f.jpeg?width=300",
    },
    {
      subImage:
        "https://media.blueapron.com/agora/images/product/CCMK0001047/attachment/be6a2994d2aab4062a5427a9bed20e2f.jpeg?width=300",
    },
    {
      subImage:
        "https://media.blueapron.com/agora/images/product/CCMK0001047/attachment/64cfabf5e3398c3221ee3cf1bba24d37.jpeg?width=300",
    },
  ],
  price: 159.99,
  des: "Live the après-ski lifestyle this winter with our limited-time Fireside Feast. Taking inspiration from classic French cuisine and cozy winter vibes, this menu was designed to warm you inside and out with an elevated restaurant-like experience you can recreate at home.",
  listHead:
    "The Fireside Feast includes serves 4-6 people and includes the ingredients and instructions to make the following:",
  listContent: [
    {
      content:
        "Duck Confit Cassoulet with Pork Belly, Beans & Thyme Breadcrumbs",
    },
    {
      content: "Parmesan & Garlic-Herb Bread",
    },
    {
      content: "Orange & Pistachio Salad with Dijon Vinaigrette",
    },
    {
      content:
        "Chocolate Chip & Almond Biscotti with Peppermint-Chocolate Dipping Sauce",
    },
  ],
};

function SingleMealProductPage() {
  const { isOpen, onOpen, onClose } = useDisclosure(); //To open or close modal of small product img
  const [product, setProduct] = useState([items]); //paased custom obj to check UI
  const [qty, setQty] = useState(1);  //storing selected qty for a product
  const [modalImg, setModalImg] = useState(""); //storing modal img link on clicking on particular image

  useEffect(() => {
    console.log(qty);
  }, [qty]);

  function handleModalImg(imgLink) {
    onOpen();
    setModalImg(imgLink);
  }
  // console.log(product);
  return (
    // Main container
    <>
    <div className={styles.container}>
      {product?.map((items) => (
        <>
          <div className={styles.product_img}>
          {/************************** Showing big image  ************/}
            <img src={items.img[0].subImage} alt="Product" />
            <br></br>
            
              {/************** Showing all buttom small image *************/}
            <div className={styles.small_img}>
                {items.img?.slice(1).map((img) => (
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
                {items.name}  
              </Heading>

              {/* Showing Sub description after name */}
              <p className={styles.highlights}>{items.subDes}</p>
            </div>

            {/******************** To show price, qty, addtocart btn ***********************/}
            <div className={styles.cart_box}>
              <p className={styles.price}>
                <span>
                  Price $<span>{items.price}</span>
                </span>
              </p>
              <select onChange={(e) => setQty(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button>ADD TO BASKET</button>
            </div>

            {/****************** Long description ******************/}
            <div className={styles.description}>
              <p>{items.des}</p>
              <br></br>
              <p>{items.listHead}</p>
              <br></br>
              <div>
                {items.listContent?.map((list) => (
                  <>
                    <li>{list.content}</li>
                  </>
                ))}
              </div>
              <br></br>
              <p>
                Expertly crafted with quality, pre-prepped ingredients to save
                you time in the kitchen, the Fireside Feast can be prepped in
                two hours, opposed to the 40+ hours it would take to make duck
                confit from scratch!
              </p>
              <br></br>
              <p>
                Order will deliver within 4 business days, delivery date options
                given at checkout.
              </p>
              <br></br>

              {/************ Tab Options ***********/}
              <div>
                <Tabs variant="enclosed" color="gray" >
                  <TabList>
                    <Tab fontWeight="500">What's Included</Tab>
                    <Tab fontWeight="500">Order & Shipping</Tab>
                    <Tab fontWeight="500">Nutrition Facts</Tab>
                  </TabList>
                  <TabPanels color="black" border="1px solid #e8edf3">
                    <TabPanel>
                      <li>
                        Folder with tips on how to create a memorable feast for
                        friends
                      </li>
                      <li>Easy-to-follow recipe instructions</li>
                      <li>Extra entertaining tips</li>
                    </TabPanel>
                    <TabPanel>
                      <li>
                        Order will deliver within 4 business days, delivery date
                        options given at checkout.
                      </li>
                      <li>No order changes or cancellations after check-out</li>
                      <li>Shipping included in price</li>
                    </TabPanel>
                    <TabPanel>
                      <li>Duck Confit Cassoulet</li>
                      <li>Parmesan & Garlic-Herb Bread</li>
                      <li>Orange & Pistachio Salad</li>
                      <li>Chocolate Chip & Almond Biscotti</li>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  <SocialFooter />
  </>
  );
}

export { SingleMealProductPage };
