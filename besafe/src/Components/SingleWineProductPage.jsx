import React, { useEffect, useState } from "react";
import styles from "./SingleWineProductPage.module.css";
import { SocialFooter } from "./SocialFooter";
import {
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// created a custom object with same schema for cheking UI
let items = {
  name: "Warm Up with Red Wines",
  img: [
    {
      subImage:
        "https://media.blueapron.com/agora/images/product/CCMK0000631/attachment/a891a45f233d356a138cb20b0e4c238b.jpg?width=800",
    },
  ],
  price: 39.99,
  pack: 3,
  milliliter: 500,
  des: [
    {
      subDes:
        "Sometimes a fireplace isn’t enough—it takes a glass of wine to chase away the chill within. Our hand-selected red wine bundle will warm you up from the inside out. Snuggle up under a blanket and enjoy a glass with your favorite seasonal soup or stew.",
    },
    {
      subDes:
        "This Groundwork Grenache was produced using whole cluster fermentation, where some grapes are left on their stem, to introduce tart tannins and complex spices to this typically fruity varietal.",
    },
    {
      subDes:
        "The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle.",
    },
    {
      subDes:
        "The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich.",
    },
  ],
  include: [
    {
      subInclude: "2020 Groundwork Grenache",
    },
    {
      subInclude: "2019 Goose Ridge Cabernet Sauvignon",
    },
    {
      subInclude: "2020 Blue Barrel Red Wine Blend",
    },
  ],
};

function SingleWineProductPage() {
  const [product, setProduct] = useState([items]); //paased custom obj to check UI
  const [qty, setQty] = useState(1); //storing selected qty for a product

  useEffect(() => {
    console.log(qty);
  }, [qty]);

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
            </div>

            {/***************** Rigth side of product details ****************/}
            <div className={styles.product_details}>
              <div>
                {/* Showing name */}
                <Heading size="lg" mb="10px">
                  {items.name}
                </Heading>
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
                {items.des?.map((desc) => (
                  <>
                    <p>{desc.subDes}</p>
                    <br></br>
                  </>
                ))}
                <p>{items.listHead}</p>
                <div>
                  {items.listContent?.map((list) => (
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
                          Collection includes {items.pack} x {items.milliliter}{" "}
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
        ))}
      </div>
      <SocialFooter />
    </>
  );
}

export { SingleWineProductPage };
