import React, { useState } from "react";
import styles from "./Kitchen.module.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";
import { Skeleton } from '@chakra-ui/react'

const KitchenTools= [
   {
      "id": "1",
      "name": "11 Non-stick Frying Pan",
      "price": 22.99,
      "desc": "The right frying pan can make or break a meal. There is nothing worse than whipping up something delicious, only to have half of it left sticking or burning onto your pan. Set yourself up for success with this 11” non-stick pan, featuring a smooth, toxic-free cooking surface so you can cook with ease. And because this oven safe pan is coated with Scanpan's patented Stratanium surface, it stands up to utensils—even metal—and is a breeze to clean!",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000031/attachment/9ba68da37ac0cc64f4e0e0f60d2e7d95.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000031/attachment/05795aa17a154530d4576b3482994d1b.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000003/attachment/edb88e4a182625b79bcf845d50a015b9.jpeg?width=300"
         }
      ]
   },
   {
      "id": "2",
      "name": "11 Glass Lid",
      "price": 42.99,
      "desc": "Put a lid on it! Simmer sauces, steam vegetables, even perfectly melt cheese on burgers with this handy, durable lid! Designed to fit our non-stick fry pan, the 11” lid features a heat-resistant handle and a tempered glass surface to easily keep an eye on your food as it cooks.",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000032/attachment/f54eb8d15226ab037ac1e74e4bf52f17.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000032/attachment/4b5589867690c9a2108047265aff58d0.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000032/attachment/d42d1b853001c4220180d8d4c14efe23.jpg?width=300"
         }
      ]
   },
   {
      "id": "3",
      "name": "Nonstick Grill Pan",
      "price": 62.99,
      "desc": "Get those perfect grill marks on burgers, steak, chicken, veggies, and more — you name it! This 10.5” grill pan is expertly designed to maximize flavor. Its ceramic titanium coating makes for a smooth, toxic-free cooking surface that’s non-stick, durable, and has impeccable heat transfer. It ensures an even sear (and plenty of flavor) on meat, veggies, and whatever else you’re cooking. And because it’s coated with ceramic titanium, it stands up to utensils—even metal—and is a breeze to clean!",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000033/attachment/ea70d966cb54ce140bda7e9114ea1dab.jpg?width=800"
         }
      ]
   },
   {
      "id": "4",
      "name": "12.5 Non-stick Frying Pan",
      "price": 42.99,
      "desc": "Yes, there is such a thing as the perfect pan: nonstick, never scratches, oven-safe to 500 degrees and lasts forever.Whether you’re cooking something that requires a delicate touch—think over-easy eggs, seared salmon and paper-thin crepes—or searing big, juicy steaks over high heat, Scanpan defies every conventional assumption made about traditional nonstick cookware. Its smooth, toxic-free cooking surface makes cooking and cleaning a breeze, and it browns, braises, and deglazes like professional cookware—but all on a coated surface so strong, it stands up even to harsh metal utensils. The Scanpan is probably the last pan you’ll ever buy.",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000034/attachment/2d32860260f88ace868eff37bd475413.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000034/attachment/8fb8c7580e975c3df18f4cd0a81037f0.jpg?width=300"
         }
      ]
   },
   {
      "id": "5",
      "name": "3-Ring Recipe Binder & Organizer",
      "price": 52.99,
      "desc": "Finally, the perfect place to keep your Blue Apron recipe cards together—and organized. This elegant and water-resistant recipe binder includes tabs and protective sheets to customize its setup. With the included page protectors, you can quickly and easily add them to this 3-ring recipe binder during or after making your meal. Even when youre improvising, take a peek at the recipe photos inside for inspiration. Its the kind of sleek recipe-organizer binder that deserves a place next to your favorite cookbooks.   ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000045/attachment/10e5937f2a6549f2a4855d40aea6fcac.jpg?width=300"
         }
      ]
   },
   {
      "id": "6",
      "name": "Custom Adult Apron by Hedley & Bennett",
      "price": 52.99,
      "desc": "Traditionally, blue aprons are worn by student chefs in culinary school—and since it’s the inspiration behind our name, we of course had to have our own. This premium Hedley & Bennett apron is specifically designed for Blue Apron and our Test Kitchen chefs, and now you can have it, too. This sleek, chef-quality apron features a contrasting Blue Apron logo patch on heather blue fabric with navy straps that can be adjusted at the neck. Gold-colored hardware and convenient pockets are the finishing touches on this versatile cooking staple. ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000041/attachment/7b51848d5b2b2baa404f4635dc995675.jpg?width=800"
         }
      ]
   },
   {
      "id": "7",
      "name": "Custom Children's Apron by Hedley & Bennett",
      "price": 62.99,
      "desc": "This premium kids apron from Hedley & Bennett will transform the hungriest helpers into the cutest cooks in the kitchen. Like the Hedley & Bennett adult apron specifically designed for the Blue Apron Test Kitchen, this child-sized version of our chef-quality apron features a contrasting Blue Apron logo patch on heather blue fabric with navy straps that can be adjusted at the neck. Sleek, gold-colored hardware and convenient pockets are the finishing touches on this kids cooking apron, an easy (and adorable) way to inspire an early and lifelong love of cooking.          ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000042/attachment/b452867bcf215ec00586e6685480fc9c.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000042/attachment/e97b0d1011ed0f726dbb61a630e018e5.jpg?width=300"
         }
      ]
   },
   {
      "id": "8",
      "name": "Kid & Adult Cooking Apron Set",
      "price": 52.99,
      "desc": "Come together in the kitchen and make cooking a family affair, starting with this premium cooking apron set that helps even the littlest cooks look the part. Each set comes with one kids apron and one adult apron. These chef-quality aprons by Hedley & Bennett were specially designed for our Test Kitchen chefs and feature a contrasting Blue Apron logo patch on heather blue fabric with navy straps that can be adjusted at the neck. Gold-colored hardware and convenient pockets are the finishing touches on this versatile cooking staple.",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000043/attachment/10bc97ecc7065c39336fcea05e6589a6.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000043/attachment/9e6243bf4cc25c9129b5b63bdc7be46f.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000043/attachment/d8493ebdf767df0f02deb6ab0e4d48c4.jpg?width=300"
         }
      ]
   },
   {
      "id": "9",
      "name": "Stainless Steel Slotted Spatula",
      "price": 42.99,
      "desc": "Have flawless flips at your fingertips with this commercial-grade, stainless steel slotted spatula. Its designed with delicate fish in mind, but weve come to rely on it for anything that requires tricky flipping (hello, over-easy eggs). Thats because this stainless steel slotted spatula features a low-angled, beveled edge and flexible blade that make it easy to master any flip and keep your most fragile food intact. ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000046/attachment/ebe83355b3bd1b40df262386dcaefd1d.jpg?width=800"
         }
      ]
   },
   {
      "id": "10",
      "name": "Olive Wood Cooking Spoon",
      "price": 52.99,
      "desc": "Made from Italian-grown olive wood, this sturdy 14” cooking spoon combines old-world charm with modern convenience. This Italian olive wood cooking spoon is stain and odor resistant, and it won’t scratch porcelain, ceramic, glass, or enamel surfaces, making it the wooden cooking spoon for all your culinary needs. No need to keep temperatures low—this multi-purpose, olive wood spoon is heat-resistant, too.  ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000047/attachment/03c9a382934a922fa5869908a25f6674.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000047/attachment/65e7011477de8fbeda33728253f6b6e7.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000047/attachment/aae591c8cb4ceb6e9a9b27e18e4ae5f7.jpg?width=300"
         }
      ]
   },
   {
      "id": "11",
      "name": "Cast Iron Skillet",
      "price": 42.99,
      "desc": "Meticulously designed by two Brooklyn-based brothers, the Field Skillet is a lighter version of the heavy duty essential you depend on every day. When the duo noticed that modern skillets couldn’t live up to the quality of the vintage ones they grew up using, they were determined to design a contemporary take on an old-school staple.          ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000035/attachment/a01af5fb62933f4d4ceeb26bc629541f.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000035/attachment/09b8d4609f91387a58464eae16a593c9.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000035/attachment/7ae9586f03318af86a745b44061cd7fd.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000035/attachment/edd29ade90631d738a9fa8f1647a86f6.jpg?width=300"
         }
      ]
   },
   {
      "id": "12",
      "name": "Panasonic 4-in-1 Multi-Oven with Inverter Microwave, Air Fryer, Convection Bake and FlashXpress Broiler",
      "price": 62.99,
      "desc": "This revolutionary, compact appliance combines the power of a microwave with an airfryer, broiler, and convection bake oven so you can quickly prepare family dinners, sides, and snacks without having to turn on your full-size oven. With its sleek, stainless steel look, the Panasonic 4-in-1 lets you combine functions for ultimate versatility.          ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/59a5e6d760666520033d7a45a0f10a2e.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/ffef0e5a5e39540280d019a66cd2aedf.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/8694ebffcc2a6e519d718929da256f35.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/a995d3d14d2e261ada6532c1ad1ebfe8.jpg?width=300"
         }
      ]
   },
   {
      "id": "12",
      "name": "Panasonic 4-in-1 Multi-Oven with Inverter Microwave, Air Fryer, Convection Bake and FlashXpress Broiler",
      "price": 92.99,
      "desc": "This revolutionary, compact appliance combines the power of a microwave with an airfryer, broiler, and convection bake oven so you can quickly prepare family dinners, sides, and snacks without having to turn on your full-size oven. With its sleek, stainless steel look, the Panasonic 4-in-1 lets you combine functions for ultimate versatility.           ",
      "img": [
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/59a5e6d760666520033d7a45a0f10a2e.jpg?width=800"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/ffef0e5a5e39540280d019a66cd2aedf.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/8694ebffcc2a6e519d718929da256f35.jpg?width=300"
         },
         {
            "subImage": "https://media.blueapron.com/agora/images/product/CCMK0000030/attachment/a995d3d14d2e261ada6532c1ad1ebfe8.jpg?width=300"
         }
      ]
   }
]

function Kitchen() {
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
        {KitchenTools?.map((kitchen) => (
          <MealCard
            id={kitchen.id}
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

export { Kitchen };
