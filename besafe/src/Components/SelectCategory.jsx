import React from "react";
import styles from "./SelectCategory.module.css";
import { Link } from "react-router-dom";
import { Flex, Heading, Image } from "@chakra-ui/react";

function SelectCategory() {
  return (
    <div className={styles.category}>
      <Heading size="lg">Shop By Category</Heading>
      <br></br>
      <div className={styles.categoryList}>
        {/* Meal Kits */}
        <div>
          <Link to="#">
            <img
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/meal%20kits.webp"
              alt="Meal Kits"
            />
          </Link>
          <Flex>
            <Link to="#">
              <Heading
                mt={4}
                p="2px"
                size="md"
                border="1px solid transparent"
                _hover={{ border: "1px solid black" }}
              >
                Meal Kits
              </Heading>
            </Link>
            <Image
              ml="6px"
              mt="18px"
              w="30px"
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/right%20arrow.jpg"
              alt="arrow"
            />
          </Flex>
        </div>
        {/* Wine */}
        <div>
          <Link to="#">
            <img
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/wine.jpg"
              alt="wine"
            />
          </Link>
          <Flex>
            <Link to="#">
              <Heading
                mt={4}
                p="2px"
                size="md"
                border="1px solid transparent"
                _hover={{ border: "1px solid black" }}
              >
                Wine Bundles
              </Heading>
            </Link>
            <Image
              ml="6px"
              mt="18px"
              w="30px"
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/right%20arrow.jpg"
              alt="arrow"
            />
          </Flex>
        </div>
        {/* Pantry */}
        <div>
          <Link to="#">
            <img
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/pantry.jpeg"
              alt="pantry"
            />
          </Link>
          <Flex>
            <Link to="#">
              <Heading
                mt={4}
                p="2px"
                size="md"
                border="1px solid transparent"
                _hover={{ border: "1px solid black" }}
              >
                Pantry
              </Heading>
            </Link>
            <Image
              ml="6px"
              mt="18px"
              w="30px"
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/right%20arrow.jpg"
              alt="arrow"
            />
          </Flex>
        </div>
        {/* Kitchen */}
        <div>
          <Link to="#">
            <img
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/kitchen.jpg"
              alt="kitchen"
            />
          </Link>
          <Flex>
            <Link to="#">
              <Heading
                mt={4}
                p="2px"
                size="md"
                border="1px solid transparent"
                _hover={{ border: "1px solid black" }}
              >
                Kitchen Tools
              </Heading>
            </Link>
            <Image
              ml="6px"
              mt="18px"
              w="30px"
              src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/right%20arrow.jpg"
              alt="arrow"
            />
          </Flex>
        </div>
      </div>
    </div>
  );
}

export { SelectCategory };
