import React, { useState } from "react";
import styles from "./Pantry.module.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";
import { Skeleton } from '@chakra-ui/react'

const pantry= [
  {
     "id": "1",
     "name": "Spice Blend No. 1 - Tuscan",
     "price": 12.99,
     "desc": "This blend packs all of the traditional flavors of central Italy into one neat package. In the Test Kitchen, we love to toss it on vegetables before roasting, or use it to season pork chops or roasts, as the whole fennel seeds help form a nice crust. The slight licorice flavor you taste is the fennel — both ground and whole — which adds a deliciously floral and aromatic element.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000003/attachment/56c2e0294d81b3ca24a16cfcd09bb58f.jpeg?width=400"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000003/attachment/973941d85752216cc35b0b23e180a23d.jpeg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000003/attachment/edb88e4a182625b79bcf845d50a015b9.jpeg?width=300"
        }
     ]
  },
  {
     "id": "2",
     "name": "Spice Blend No. 2 - Tuscan",
     "price": 12.99,
     "desc": "This spice blend is your secret weapon for recreating the bright, homey dishes of Louisiana at home. A little sweet with a mild spiciness and savory undertone (thanks to the mustard, oregano, and thyme), it works on nearly any protein, but the Test Kitchen particularly loves it with shrimp. It’s the perfect match for any of your favorite New Orleans-inspired meals, from po’ boys to seafood boils.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000019/attachment/3c94580830d06f755a4e25b26257f8dd.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000019/attachment/a78b94898090ad1c98d6a277c0d83de0.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000019/attachment/3bcb759bb2be6e697a19df6bd75b7901.jpg?width=300"
        }
     ]
  },
  {
     "id": "3",
     "name": "Spice Blend No. 3 - Smoky",
     "price": 12.99,
     "desc": "The combination of smoked and sweet paprika in our Smoky Spice Blend creates a deliciously deep and earthy flavor; it’s ideal for coating chicken or blending into ground beef or pork for a burger patty. The best part? It elevates dishes across cuisines, working just as well in a Middle Eastern rice dish as an Italian meatball. Add a pinch anytime you want to up the smoke-factor.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000020/attachment/fbec875783e024060b286f66f205ec45.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000020/attachment/551be8fb6d745721872e7bdf45bcbbd1.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000020/attachment/fbc16f7a946ab361d05187c3164e8ad3.jpg?width=300"
        }
     ]
  },
  {
     "id": "4",
     "name": "Spice Blend No. 4 - Barbecue",
     "price": 12.99,
     "desc": "Especially in the summer, when home cooks across America are firing up their grills, this spice blend becomes an instant mealtime MVP. Use it as a rub for your favorite protein and it will do all the work, imparting perfectly picnic-ready sweet and savory flavor (as well as a little char, thanks to the brown sugar). Our Barbecue Spice Blend works in non-grilling applications, too: coat any cut of meat with it before roasting or searing.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000021/attachment/859c17cc4b8df39642980f57b5eadcd2.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000021/attachment/ce6ada9a0a1539798633382a1c8be003.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000021/attachment/16558f6ebed38a7ca90dca177ae65c49.jpg?width=300"
        }
     ]
  },
  {
     "id": "5",
     "name": "Spice Blend No. 5 - Weeknight Hero",
     "price": 12.99,
     "desc": "The name speaks for itself: this spice blend can do anything. Seasoning protein or vegetables, pinched into dressings or dipping sauces, even whisked into the filling for a quiche — the classic combination of onion, garlic, parsley, and paprika makes any meal sing. In the test kitchen, our favorite application is on chicken; the fond leftover from from seared chicken coated in Weeknight Hero is a super savory foundation for the best pan sauce youve ever made.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/88e40b4990ba92c1009fda79ad76c703.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/4fb32524d9dc7b5b23ebc5438ef612fb.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/98ff53fae7ee18b92b57084de7d930fe.jpg?width=300"
        }
     ]
  },
  {
     "id": "6",
     "name": "Spice Blend No. 6 - Mexican",
     "price": 12.99,
     "desc": "This is the grown up version of the spice packet from your supermarket taco kit, and a blend all home cooks should have in their arsenal. Its a one-stop shop for traditional Mexican flavors — ancho chile, cumin, and Mexican oregano — for seasoning enchilada filling, roasted sweet potatoes, elote corn, and, you guessed it, tacos",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000023/attachment/065f66584662b07f700385f71be65d5b.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000023/attachment/2eab4105d6c9bc378fc9226bb092fd7f.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/98ff53fae7ee18b92b57084de7d930fe.jpg?width=300"
        }
     ]
  },
  {
     "id": "7",
     "name": "Spice Blend No. 7 - Za'atar",
     "price": 12.99,
     "desc": "A Middle Eastern blend of herbs and spices spiked with sesame seeds for nuttiness and crunch, zaatar is a Test Kitchen favorite and will quickly become one of yours as well. A little lemony (from the reddish-orange sumac) and herbaceous (thanks to dried thyme and oregano), it’s the ideal mix for seasoning beef or pork, tossing on roasted vegetables, or stirring into yogurt sauces.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000024/attachment/5b25aa9a0608b84ee828f789ad3090fe.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000024/attachment/5f59ed13adafe7a11c8a5d2529cdcb44.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/98ff53fae7ee18b92b57084de7d930fe.jpg?width=300"
        }
     ]
  },
  {
     "id": "8",
     "name": "Spice Blend No. 8 - Southern",
     "price": 12.99,
     "desc": "This blend may seem unassuming, but the savory and bright combination of ground mustard and cayenne pepper lends an undeniable Southern flavor to anything you cook. Mashed into creamy potatoes or used to coat chicken thighs, it yields the kind of food you want to serve with a biscuit — and you could even add a sprinkle to your favorite biscuit recipe for a subtle bite!",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000025/attachment/eaafc9a1b183a5bbe9e208b6b922f7ec.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000025/attachment/028e516e24735c8609a3344784d0754e.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/98ff53fae7ee18b92b57084de7d930fe.jpg?width=300"
        }
     ]
  },
  {
     "id": "9",
     "name": "Spice Blend No. 9 - Togarashi",
     "price": 12.99,
     "desc": "The flavor of this spice blend is one thing — a little citrusy, thanks to the orange peel, and a little spicy, from the hot paprika — but it’s the texture that really makes it a pantry staple. Poppy and sesame seeds help this blend create a delightful crust when used to coat chicken or fish, and add a colorful crunch as a garnish for rice or stir-fries. It’s the blend you’ll come back to again and again, whenever your favorite Asian dishes are on the menu.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000026/attachment/e27805de17616245aed961695b7fd936.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000026/attachment/46bb0000d1cd296c32b0c81e0d891ecd.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/98ff53fae7ee18b92b57084de7d930fe.jpg?width=300"
        }
     ]
  },
  {
     "id": "10",
     "name": "Spice Blend No. 10 - Caribbean",
     "price": 12.99,
     "desc": "To recreate the characteristic flavors of the Carribbean at home, this spice blend does all the heavy lifting. As a rub for chicken or ribs, it imparts a hit of jerk flavor, with warming allspice and vegetal green pepper powder. The Test Kitchen loves to use it in the base for curry, especially when paired with creamy coconut rice.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000027/attachment/bbc1d8a1e2059f8b24f208a15dbaf0b5.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000027/attachment/5b0a0b510677e753cb659335ac1871b8.jpg?width=300"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000022/attachment/98ff53fae7ee18b92b57084de7d930fe.jpg?width=300"
        }
     ]
  },
  {
     "id": "11",
     "name": "All-Purpose Kosher Sea Salt",
     "price": 12.99,
     "desc": "Whether youre cooking, baking or finishing off a dish, the lively flavors of this sea salt are a perfect fit for your pantry. After all, salt with the right coarseness can make all the difference in enhancing a meals flavor. Hand-harvested off the coast of Oregon, Jacobsens exquisite sea salt is a favorite staple of Michelin-starred kitchens and one of our Culinary teams tried-and-true favorites.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000028/attachment/4f32fd8066669fb66b142a5d6d48c2de.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000028/attachment/16b2d7d2678a22a5effb859a42816657.jpg?width=300"
        }
     ]
  },
  {
     "id": "12",
     "name": "Finishing Flake Salt",
     "price": 14.99,
     "desc": "Because your meals deserve a little savory burst with every bite! This flaky finishing salt is a staple in several Michelin-starred kitchens for a reason. Its hand-sorted flake by flake to ensure that every juicy steak, over-easy egg, slice of avocado toast or even dessert you sprinkle it upon has a satisfyingly delicious crunch.",
     "img": [
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000029/attachment/e5a02c38c81024d1079f3af7930297d1.jpg?width=800"
        },
        {
           "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000029/attachment/955bedf9ae238ddee0a2c99cee285f2d.jpg?width=300"
        }
     ]
  }
]

function Pantry() {
  const [sortby, setSortby] = useState(""); //storing value for sorting
  const [filterbypack, setFilterbypack] = useState(""); //storing value for filter as pack
  const [filterbysize, setFilterbysize] = useState(""); //storing value for filter as size
  const [isLoaded, setIsLoaded] = useState(true); //storing value for skeleton loading
  console.log(sortby);

  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} to="/">
          Home{" "}
        </Link>
        <span className={styles.categoryName}>/ Pantry</span>
        <Heading size="lg" mt="10px" color="#0F346C">
        Pantry
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
        {pantry?.map((pantry) => (
          <MealCard
            id={pantry.id}
            image={pantry.img[0].subImage}
            title={pantry.name}
            // desc={wine.subDes}
            price={pantry.price}
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

export { Pantry };
