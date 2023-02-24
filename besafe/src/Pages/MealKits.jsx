import React, { useState } from "react";
import styles from "./MealKits.module.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";

const mealKits = [
  {
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
  },
  {
    name: "Italian Classics Meal Kit with Garlic Bread & Salad",
    subDes: "SHIPS NEXT DAY! Includes 2 Recipes, Bread & Salad, Serves 2",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001433/attachment/67657af7c5b21ffd7e797504753f864d.jpg?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001433/attachment/3b5141b21ac50a6f503a7d277f9c3fb6.jpg?width=300",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001433/attachment/29ee0ecbc79201b4af2ac090a6ec32f9.webp?width=300",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001433/attachment/a62a632a31d0217096f224425f3a1dd9.webp?width=300",
      },
    ],
    price: 59.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make two delicious home-cooked meals for two, without the hassle of menu planning or last-minute grocery runs.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "2 servings of Creamy Pesto Chicken & Orzo with Capers & Currants; Estimated cook time: 30 minutes. In this colorful dish, sautéed chicken, capers, and currants, and a hearty bed of orzo (studded with carrots and juicy tomatoes) come together under a drizzle of creamy basil pesto—creating a variety of exciting flavors and textures in every bite.",
      },
      {
        content:
          "2 servings of Calabrian Beef & Gnocchi with Zucchini & Romano Cheese. Estimated cook time: 25 minutes. Here, plump gnocchi and ground beef get a delicious kick from Calabrian chile paste, a specialty ingredient from southern Italy known for its irresistibly sweet-hot flavor. We’re finishing it all with a bit of mascarpone cheese, which balances out the heat and provides creamy texture.",
      },
      {
        content:
          "2-4 servings of Cheesy Garlic Bread with Calabrian Chile & Chives; Estimated prep time: 20-30 minutes.",
      },
      {
        content:
          "2-4 servings of Butter Lettuce & Apple Salad with Parmesan & Balsamic-Dijon Vinaigrette; Estimated prep time: 5-15 minutes.",
      },
    ],
  },
  {
    name: "Customer Favorites Family Meal Kit with Garlic Bread & Salad",
    subDes:
      "SHIPS NEXT DAY! Includes 2 recipes with Garlic Bread & Salad, 4 servings each",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001452/attachment/2758281870da4ea5a9ac77c7f2a848f9.jpeg?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001452/attachment/f50da105a11066514bea1f9259181264.webp?width=300",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001452/attachment/0e7254dba94e94b3ba1a675624811cf2.webp?width=300",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001452/attachment/98e15f87abe2818fc3e8401e36161f9f.webp?width=300",
      },
    ],
    price: 79.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make two delicious home-cooked meals, garlic bread, and salad for 4, without the hassle of menu planning or last-minute grocery runs.With pre-portioned, seasonally-inspired ingredients delivered to your door, you can skip the grocery shopping and focus on the fun of cooking. Plus, every recipe is thoroughly tested by Blue Apron’s team of professional chefs to ensure quality meals end up on your table.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "4 servings of Hot Honey Chicken with Rosemary & Cipolline Onion Panzanella; Estimated prep time: 35 minutes",
      },
      {
        content:
          "4 servings of Cheesy Pesto Baked Cavatelli with Zucchini & Mushrooms; Estimated prep time: 40 minutes",
      },
      {
        content:
          "2-4 servings of Cheesy Garlic Bread with Calabrian Chile & Chives; Estimated prep time: 25 minutes.",
      },
      {
        content:
          "2-4 servings of Butter Lettuce & Apple Salad with Parmesan & Balsamic-Dijon Vinaigrette; Estimated prep time: 10 minutes.",
      },
    ],
  },
  {
    name: "Heat & Eat Bundle",
    subDes:
      "SHIPS NEXT DAY! Featuring: Pulled Pork Mac & Cheese and Truffle Pasta",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001436/attachment/f2d3ea6c39570e7f4ed28ec95fd228a0.webp?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001436/attachment/3cf42d3c7417de03d2d9796005e60e83.webp?width=300",
      },
    ],
    price: 59.99,
    des: "Take a night off of cooking with Blue Apron’s pre-made Heat & Eat meals! In this kit, you’ll receive 4 single-serve, chef-designed meals that are ready to eat in minutes.With Blue Apron Heat & Eat meals, you don’t have to sacrifice quality for convenience. Each pre-portioned meal features thoughtfully sourced ingredients—delivering the quality and flavor Blue Apron is known for, just without the prep time. When they arrive, simply store them in the fridge and eat them within 5 days. Once you’re ready to eat, just pop the tray in the microwave and your meal is ready to eat in just a few minutes.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "2 microwavable trays of Cheesy Truffle Cavatappi with Mushrooms & Kale",
      },
      {
        content:
          "2 microwavable trays of Mac & Cheese with Pulled Pork, Peppers & Corn",
      },
    ],
  },
  {
    name: "Heat & Eat Bundle",
    subDes:
      "SHIPS NEXT DAY! Featuring: Pulled Pork Mac & Cheese and Grilled Chicken Pasta",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001437/attachment/21922f947d57adedfd1f5423d5be447d.webp?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001437/attachment/b2936b81258354b5806f61e0fc13db3f.webp?width=300",
      },
    ],
    price: 59.99,
    des: "Take a night off of cooking with Blue Apron’s pre-made Heat & Eat meals! In this kit, you’ll receive 4 single-serve, chef-designed meals that are ready to eat in minutes.With Blue Apron Heat & Eat meals, you don’t have to sacrifice quality for convenience. Each pre-portioned meal features thoughtfully sourced ingredients—delivering the quality and flavor Blue Apron is known for, just without the prep time. When they arrive, simply store them in the fridge and eat them within 5 days. Once you’re ready to eat, just pop the tray in the microwave and your meal is ready to eat in just a few minutes.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "2 microwavable trays of Mac & Cheese with Pulled Pork, Peppers & Corn",
      },
      {
        content:
          "2 microwavable trays of Cheesy Grilled Chicken & Pasta with Roasted Red Pepper Sauce",
      },
    ],
  },
  {
    name: "Heat & Eat Bundle",
    subDes:
      "SHIPS NEXT DAY! Featuring: Grilled Chicken Pasta and Truffle Pasta",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001438/attachment/0496c8fbfa9cf84f6f04e97f79f570b9.webp?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001438/attachment/714d286be9a560fd38416834e0d295ab.webp?width=300",
      },
    ],
    price: 59.99,
    des: "Take a night off of cooking with Blue Apron’s pre-made Heat & Eat meals! In this kit, you’ll receive 4 single-serve, chef-designed meals that are ready to eat in minutes.With Blue Apron Heat & Eat meals, you don’t have to sacrifice quality for convenience. Each pre-portioned meal features thoughtfully sourced ingredients—delivering the quality and flavor Blue Apron is known for, just without the prep time. When they arrive, simply store them in the fridge and eat them within 5 days. Once you’re ready to eat, just pop the tray in the microwave and your meal is ready to eat in just a few minutes.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "2 microwavable trays of Cheesy Grilled Chicken & Pasta with Roasted Red Pepper Sauce",
      },
      {
        content:
          "2 microwavable trays of Cheesy Truffle Cavatappi with Mushrooms & Kale",
      },
    ],
  },
  {
    name: "Heat & Eat Bundle",
    subDes:
      "SHIPS NEXT DAY! Featuring: Mexican-Style Chicken & Rice Bowl & Lemon Chicken",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001439/attachment/05903f5d206e4565437ad70583bfc215.jpeg?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001439/attachment/41b73c646949715dffccfa2bddd82463.jpeg?width=300",
      },
    ],
    price: 59.99,
    des: "Take a night off of cooking with Blue Apron’s pre-made Heat & Eat meals! In this kit, you’ll receive 4 single-serve, chef-designed meals that are ready to eat in minutes.With Blue Apron Heat & Eat meals, you don’t have to sacrifice quality for convenience. Each pre-portioned meal features thoughtfully sourced ingredients—delivering the quality and flavor Blue Apron is known for, just without the prep time. When they arrive, simply store them in the fridge and eat them within 5 days. Once you’re ready to eat, just pop the tray in the microwave and your meal is ready to eat in just a few minutes.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "2 microwavable trays of Mexican-Style Chicken & Rice Bowl with Pinto Beans & Vegetables",
      },
      {
        content:
          "2 microwavable trays of Lemon Chicken with Brown Rice, Asparagus & Peas",
      },
    ],
  },
  {
    name: "Ready to Cook Meal Kit",
    subDes: "SHIPS NEXT DAY! 2 Pre-Prepped Recipes, Each Serves",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001494/attachment/96c5b591999403a642aa2c2ba589d6be.jpeg?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001494/attachment/37b1b3f601e3074858a0c0e04704b698.jpeg?width=300",
      },
    ],
    price: 54.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make two delicious home-cooked meals without the hassle of menu planning or last-minute grocery runs. Blue Apron’s Ready to Cook recipes include prep-chopped vegetables and an included tin to prep and cook in to cut down on prep and cleaning time.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "2 servings of Oven-Baked Hot Italian Sausage & Gnocchi with Mozzarella & Tomatoes; Estimated prep time: 45 minutes.",
      },
      {
        content:
          "2 servings of Oven-Baked White Bean Chili & Cornbread with Jalapeño Pepper; Estimated prep time: 30 minutes.",
      },
    ],
  },
  {
    name: "Family Chicken Dinner Meal Kit with Salad",
    subDes: "SHIPS NEXT DAY! Includes 1 Meal & Salad, 4 Servings Each",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001455/attachment/6551cf3cda52b3801963fb68fff69a63.webp?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001455/attachment/f7e4fc014094baeebf93d1699c6c6f8d.jpeg?width=300",
      },
    ],
    price: 54.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make one delicious home-cooked meal for 4, without the hassle of menu planning or last-minute grocery runs.With pre-portioned, seasonally-inspired ingredients delivered to your door, you can skip the grocery shopping and focus on the fun of cooking. Plus, every recipe is thoroughly tested by Blue Apron’s team of professional chefs to ensure quality meals end up on your table.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "4 servings of Hot Honey Chicken with Rosemary & Cipolline Onion Panzanella; Estimated prep time: 35 minutes",
      },
      {
        content:
          "2-4 servings of Butter Lettuce & Apple Salad with Parmesan & Balsamic-Dijon Vinaigrette; Estimate prep time: 10 minutes",
      },
    ],
  },
  {
    name: "Family Chicken Dinner Meal Kit with Garlic Bread & Salad",
    subDes:
      "SHIPS NEXT DAY! Includes 1 Meal with Garlic Bread & Salad, 4 Servings Each",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001456/attachment/56c374d4ea0bfa253f3153f06056f1a9.jpeg?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001456/attachment/01177a16a7bfcbd2422fa7ba297ee97d.webp?width=300",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001456/attachment/679e6040546c2d1be03414f47165fdb5.webp?width=300",
      },
    ],
    price: 59.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make one delicious home-cooked meal for 4, without the hassle of menu planning or last-minute grocery runs.With pre-portioned, seasonally-inspired ingredients delivered to your door, you can skip the grocery shopping and focus on the fun of cooking. Plus, every recipe is thoroughly tested by Blue Apron’s team of professional chefs to ensure quality meals end up on your table.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "4 servings of Hot Honey Chicken with Rosemary & Cipolline Onion Panzanella; Estimated prep time: 35 minutes",
      },
      {
        content:
          "2-4 servings of Cheesy Garlic Bread with Calabrian Chile & Chives, Estimated prep time: 25 minutes",
      },
      {
        content:
          "2-4 servings of Butter Lettuce & Apple Salad with Parmesan & Balsamic-Dijon Vinaigrette, Estimated prep time: 10 minutes",
      },
    ],
  },
  {
    name: "Family Pasta Dinner Meal Kit",
    subDes: "SHIPS NEXT DAY! Cheesy Pesto Baked Cavatelli, Serves 4",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001457/attachment/33d0cf7aca2052b890da617009878656.webp?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001458/attachment/5080b5048905b8dfbdc05df7477dee9c.webp?width=300",
      },
    ],
    price: 49.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make one delicious home-cooked meal for 4, without the hassle of menu planning or last-minute grocery runs.With pre-portioned, seasonally-inspired ingredients delivered to your door, you can skip the grocery shopping and focus on the fun of cooking. Plus, every recipe is thoroughly tested by Blue Apron’s team of professional chefs to ensure quality meals end up on your table.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "4 servings of Cheesy Pesto Baked Cavatelli with Zucchini & Mushrooms; Estimated prep time: 40 minutes",
      },
    ],
  },
  {
    name: "Family Pasta Dinner Meal Kit with Garlic Bread",
    subDes: "SHIPS NEXT DAY! Includes 1 Meal + Garlic Bread, 4 Servings Each",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001458/attachment/5080b5048905b8dfbdc05df7477dee9c.webp?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001458/attachment/bd57f8489f0070446981694cb7a7f160.webp?width=300",
      },
    ],
    price: 54.99,
    des: "Discover the ease and flexibility of cooking with Blue Apron! In this meal kit, you’ll receive fresh ingredients and easy-to-follow directions to make one delicious home-cooked meal for 4, without the hassle of menu planning or last-minute grocery runs.With pre-portioned, seasonally-inspired ingredients delivered to your door, you can skip the grocery shopping and focus on the fun of cooking. Plus, every recipe is thoroughly tested by Blue Apron’s team of professional chefs to ensure quality meals end up on your table.",
    listHead: "Included in this Blue Apron Classic Meal Kit, you’ll receive:",
    listContent: [
      {
        content:
          "4 servings of Cheesy Pesto Baked Cavatelli with Zucchini & Mushrooms; Estimated prep time: 40 minutes",
      },
      {
        content:
          "2-4 servings of Cheesy Garlic Bread with Calabrian Chile & Chives; Estimated prep time: 25 minutes",
      },
    ],
  },
];

function MealKits() {
  const [sortby, setSortby] = useState(""); //storing value for sorting
  console.log(sortby);

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
