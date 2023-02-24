import React, { useState } from "react";
import styles from "./WineBundles.module.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { MealCard } from "../Components/MealCard";
import { SelectCategory } from "../Components/SelectCategory";
import { SocialFooter } from "../Components/SocialFooter";
import { Skeleton } from '@chakra-ui/react'

const wineBundles = [
  {
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
  },
  {
    name: "Warm Up with Red Wines",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000630/attachment/c85f721b81ae8429b131a3b20bca831e.jpg?width=800",
      },
    ],
    price: 49.99,
    pack: 3,
    milliliter: 750,
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
  },
  {
    name: "Warm Up with Red Wines",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000630/attachment/c85f721b81ae8429b131a3b20bca831e.jpg?width=800",
      },
    ],
    price: 89.99,
    pack: 3,
    milliliter: 1000,
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
  },
  {
    name: "Dinner Party Essentials",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000634/attachment/db8db0a907f5f242efb94e05a68553dd.jpg?width=800",
      },
    ],
    price: 44.99,
    pack: 3,
    milliliter: 500,
    des: [
      {
        subDes:
          "The hardest part of hosting is making sure that there’s something on the table that everyone will love. Our Dinner Party Essentials pack was hand-selected to please any palate. No matter what you’re serving, guests will find the perfect bottle for their tastes.",
      },
      {
        subDes:
          "The Delta 2021 Chenin Blanc pairs lean fruit flavors with full aromatics and stony minerality. Enjoy this wine alongside sauteed vegetables or salads.",
      },
      {
        subDes:
          "The 2021 Goose Ridge Rose is a pretty pink wine that hits the nose with aromas of watermelon, strawberry, and peach. On the palate, expect light fruits and citrusy acidity.",
      },
      {
        subDes:
          "The Lucas & Lewellen Hidden Assets red wine is blended from a selection of Malbec, Merlot, Syrah, and several other red grapes. The result is a rich and elegant wine with a deep garnet color and plenty of personality.",
      },
    ],
    include: [
      {
        subInclude: "2021 Delta Chenin Blanc & Viognier Blend",
      },
      {
        subInclude: "2021 Goose Ridge Rose",
      },
      {
        subInclude: "2020 Lucas and Lewellen Red Wine Blend",
      },
    ],
  },
  {
    name: "Dinner Party Essentials",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000634/attachment/db8db0a907f5f242efb94e05a68553dd.jpg?width=800",
      },
    ],
    price: 49.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "The hardest part of hosting is making sure that there’s something on the table that everyone will love. Our Dinner Party Essentials pack was hand-selected to please any palate. No matter what you’re serving, guests will find the perfect bottle for their tastes.",
      },
      {
        subDes:
          "The Delta 2021 Chenin Blanc pairs lean fruit flavors with full aromatics and stony minerality. Enjoy this wine alongside sauteed vegetables or salads.",
      },
      {
        subDes:
          "The 2021 Goose Ridge Rose is a pretty pink wine that hits the nose with aromas of watermelon, strawberry, and peach. On the palate, expect light fruits and citrusy acidity.",
      },
      {
        subDes:
          "The Lucas & Lewellen Hidden Assets red wine is blended from a selection of Malbec, Merlot, Syrah, and several other red grapes. The result is a rich and elegant wine with a deep garnet color and plenty of personality.",
      },
    ],
    include: [
      {
        subInclude: "2021 Delta Chenin Blanc & Viognier Blend",
      },
      {
        subInclude: "2021 Goose Ridge Rose",
      },
      {
        subInclude: "2020 Lucas and Lewellen Red Wine Blend",
      },
    ],
  },
  {
    name: "Dinner Party Essentials",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000634/attachment/db8db0a907f5f242efb94e05a68553dd.jpg?width=800",
      },
    ],
    price: 69.99,
    pack: 3,
    milliliter: 1000,
    des: [
      {
        subDes:
          "The hardest part of hosting is making sure that there’s something on the table that everyone will love. Our Dinner Party Essentials pack was hand-selected to please any palate. No matter what you’re serving, guests will find the perfect bottle for their tastes.",
      },
      {
        subDes:
          "The Delta 2021 Chenin Blanc pairs lean fruit flavors with full aromatics and stony minerality. Enjoy this wine alongside sauteed vegetables or salads.",
      },
      {
        subDes:
          "The 2021 Goose Ridge Rose is a pretty pink wine that hits the nose with aromas of watermelon, strawberry, and peach. On the palate, expect light fruits and citrusy acidity.",
      },
      {
        subDes:
          "The Lucas & Lewellen Hidden Assets red wine is blended from a selection of Malbec, Merlot, Syrah, and several other red grapes. The result is a rich and elegant wine with a deep garnet color and plenty of personality.",
      },
    ],
    include: [
      {
        subInclude: "2021 Delta Chenin Blanc & Viognier Blend",
      },
      {
        subInclude: "2021 Goose Ridge Rose",
      },
      {
        subInclude: "2020 Lucas and Lewellen Red Wine Blend",
      },
    ],
  },
  {
    name: "Celebration Bundle",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000634/attachment/db8db0a907f5f242efb94e05a68553dd.jpg?width=800",
      },
    ],
    price: 59.99,
    pack: 6,
    milliliter: 500,
    des: [
      {
        subDes:
          "Nothing starts a party like a glass of wine. With this chef-curated celebration bundle, you’ll be ready to host at a moment's notice. With sparkling, red, white, and rosé, you’re guaranteed to have something for everyone.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the Méthode champenoise. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve Rosé is a dry, light pink wine. The inclusion of Pinot Noir, a traditional grape of the Champagne region of France, brings subtle red fruit flavors like cherry and strawberry.",
      },
      {
        subDes:
          "The Wildhurst Chardonnay is on the bold end of the spectrum of white wines. Expect toasty, oak-derived aromatics like brioche, caramel, and toasted coconut along with lush, ripe fruit.",
      },
      {
        subDes:
          "Look for flavors of leather, licorice, and blackberry in the inky Fabelist Red Blend bottle. Destemming and working with native yeast help create a bottle that truly expresses the terroir of Paso Robles California.",
      },
      {
        subDes:
          "The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle.",
      },
      {
        subDes:
          "The 2021 Toccata Rosé’s beautiful salmon color is an indicator of Nebbiolo. A short maceration time creates a light and festive party wine.",
      },
    ],
    include: [
      {
        subInclude: "2022 Blue Barrel Brut Reserve",
      },
      {
        subInclude: "2022 Blue Barrel Brut Reserve Rose",
      },
      {
        subInclude: "2020 Wildhurst Chardonnay",
      },
      {
        subInclude: "2020 The Fableist Red Blend",
      },
      {
        subInclude: "2019 Goose Ridge Cabernet Sauvignon",
      },
      {
        subInclude: "2021 Toccata Rose of Nebbiolo",
      },
    ],
  },
  {
    name: "Celebration Bundle",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000634/attachment/db8db0a907f5f242efb94e05a68553dd.jpg?width=800",
      },
    ],
    price: 89.99,
    pack: 6,
    milliliter: 750,
    des: [
      {
        subDes:
          "Nothing starts a party like a glass of wine. With this chef-curated celebration bundle, you’ll be ready to host at a moment's notice. With sparkling, red, white, and rosé, you’re guaranteed to have something for everyone.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the Méthode champenoise. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve Rosé is a dry, light pink wine. The inclusion of Pinot Noir, a traditional grape of the Champagne region of France, brings subtle red fruit flavors like cherry and strawberry.",
      },
      {
        subDes:
          "The Wildhurst Chardonnay is on the bold end of the spectrum of white wines. Expect toasty, oak-derived aromatics like brioche, caramel, and toasted coconut along with lush, ripe fruit.",
      },
      {
        subDes:
          "Look for flavors of leather, licorice, and blackberry in the inky Fabelist Red Blend bottle. Destemming and working with native yeast help create a bottle that truly expresses the terroir of Paso Robles California.",
      },
      {
        subDes:
          "The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle.",
      },
      {
        subDes:
          "The 2021 Toccata Rosé’s beautiful salmon color is an indicator of Nebbiolo. A short maceration time creates a light and festive party wine.",
      },
    ],
    include: [
      {
        subInclude: "2022 Blue Barrel Brut Reserve",
      },
      {
        subInclude: "2022 Blue Barrel Brut Reserve Rose",
      },
      {
        subInclude: "2020 Wildhurst Chardonnay",
      },
      {
        subInclude: "2020 The Fableist Red Blend",
      },
      {
        subInclude: "2019 Goose Ridge Cabernet Sauvignon",
      },
      {
        subInclude: "2021 Toccata Rose of Nebbiolo",
      },
    ],
  },
  {
    name: "Holiday Table Essentials",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000637/attachment/bb6efee0c85cab7aa5485e7737251ead.jpg?width=800",
      },
    ],
    price: 69.99,
    pack: 6,
    milliliter: 500,
    des: [
      {
        subDes:
          "Wine is an essential part of the holiday season. This year stock your cellar (or closet, or fridge) with a chef-curated wine bundle from Blue Apron. Our Holiday Table Essentials pack offers an assortment of reds and whites for every occasion.",
      },
      {
        subDes:
          "The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich",
      },
      {
        subDes:
          "The Wildhurst Chardonnay is on the bold end of the spectrum of white wines. Expect toasty, oak-derived aromatics like brioche, caramel, and toasted coconut along with lush, ripe fruit.",
      },
      {
        subDes:
          "The 2021 Airfield Riesling is a classic example of a dry Riesling. Full of lovely stone fruit flavors and packed with racing acidity, this food-friendly wine is sure to satisfy any wine lover. The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle. The 2019 Turkovich Tempranillo is a charmingly smooth wine packed full of aromas like cherry and plum with hints of cedar and spice.",
      },
      {
        subDes:
          "The 2021 Toccata Rosé's beautiful salmon color is an indicator of Nebbiolo. A short maceration time creates a light and festive party wine.",
      },
    ],
    include: [
      {
        subInclude: "2020 Blue Barrel Red Wine Blend",
      },
      {
        subInclude: "2020 Wildhurst Chardonnay",
      },
      {
        subInclude: "2021 Airfield Estates Riesling",
      },
      {
        subInclude: "2019 Turkovich Tempranillo",
      },
      {
        subInclude: "2019 Goose Ridge Cabernet Sauvignon",
      },
      {
        subInclude: "2021 Toccata Rose of Nebbiolo",
      },
    ],
  },
  {
    name: "Holiday Table Essentials",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000637/attachment/bb6efee0c85cab7aa5485e7737251ead.jpg?width=800",
      },
    ],
    price: 129.99,
    pack: 6,
    milliliter: 1000,
    des: [
      {
        subDes:
          "Wine is an essential part of the holiday season. This year stock your cellar (or closet, or fridge) with a chef-curated wine bundle from Blue Apron. Our Holiday Table Essentials pack offers an assortment of reds and whites for every occasion.",
      },
      {
        subDes:
          "The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich",
      },
      {
        subDes:
          "The Wildhurst Chardonnay is on the bold end of the spectrum of white wines. Expect toasty, oak-derived aromatics like brioche, caramel, and toasted coconut along with lush, ripe fruit.",
      },
      {
        subDes:
          "The 2021 Airfield Riesling is a classic example of a dry Riesling. Full of lovely stone fruit flavors and packed with racing acidity, this food-friendly wine is sure to satisfy any wine lover. The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle. The 2019 Turkovich Tempranillo is a charmingly smooth wine packed full of aromas like cherry and plum with hints of cedar and spice.",
      },
      {
        subDes:
          "The 2021 Toccata Rosé's beautiful salmon color is an indicator of Nebbiolo. A short maceration time creates a light and festive party wine.",
      },
    ],
    include: [
      {
        subInclude: "2020 Blue Barrel Red Wine Blend",
      },
      {
        subInclude: "2020 Wildhurst Chardonnay",
      },
      {
        subInclude: "2021 Airfield Estates Riesling",
      },
      {
        subInclude: "2019 Turkovich Tempranillo",
      },
      {
        subInclude: "2019 Goose Ridge Cabernet Sauvignon",
      },
      {
        subInclude: "2021 Toccata Rose of Nebbiolo",
      },
    ],
  },
  {
    name: "Crisp Winter Whites & Rosés",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000632/attachment/f8e70c8d3d5bdd8e83d8f1c645fed2b7.jpg?width=800",
      },
    ],
    price: 34.99,
    pack: 3,
    milliliter: 500,
    des: [
      {
        subDes:
          "Pair cool weather with crisp white wines. These light bottles aren’t just for summer. Their racy acidity and bright fruit flavors make them perfect for pairing all year long.",
      },
      {
        subDes:
          "The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich",
      },
      {
        subDes:
          "The Fableist 2019 Chardonnay is a balanced, nuanced bottle. A portion of the wine is aged with the spent yeast cells, a process known as aging on the lees, which gives the wine a rich, bready flavor. This is combined with a portion aged in stainless steel barrels, which brings in lean fruit characteristics.",
      },
      {
        subDes:
          "The 2021 Airfield Rosé showcases a lighter version of the powerful flavors found in Syrah. Instead of intense blackberries and blueberries, look for delicate flavors like strawberry and raspberry.",
      },
    ],
    include: [
      {
        subInclude: "2021 Solstice Sauvignon Blanc",
      },
      {
        subInclude: "2019 The Fableist Chardonnay",
      },
      {
        subInclude: "2021 Airfield Estates Rose",
      },
    ],
  },
  {
    name: "Crisp Winter Whites & Rosés",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000632/attachment/f8e70c8d3d5bdd8e83d8f1c645fed2b7.jpg?width=800",
      },
    ],
    price: 59.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "Pair cool weather with crisp white wines. These light bottles aren’t just for summer. Their racy acidity and bright fruit flavors make them perfect for pairing all year long.",
      },
      {
        subDes:
          "The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich",
      },
      {
        subDes:
          "The Fableist 2019 Chardonnay is a balanced, nuanced bottle. A portion of the wine is aged with the spent yeast cells, a process known as aging on the lees, which gives the wine a rich, bready flavor. This is combined with a portion aged in stainless steel barrels, which brings in lean fruit characteristics.",
      },
      {
        subDes:
          "The 2021 Airfield Rosé showcases a lighter version of the powerful flavors found in Syrah. Instead of intense blackberries and blueberries, look for delicate flavors like strawberry and raspberry.",
      },
    ],
    include: [
      {
        subInclude: "2021 Solstice Sauvignon Blanc",
      },
      {
        subInclude: "2019 The Fableist Chardonnay",
      },
      {
        subInclude: "2021 Airfield Estates Rose",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Wine Variety Bundle",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000271/attachment/476856b2ea89473ba5b5cf094f36dba4.jpg?width=800",
      },
    ],
    price: 79.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "Nothing starts a party like a glass of sparkling wine. These bottles aren’t just for New Year’s Eve—their complex fruit flavors and bright acidity make them perfect for enjoying alongside a meal. We’ve selected these bottles to enhance your happy hours, pair with your favorite hors d'oeuvres, and drink alongside any dinner.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the Méthode champenoise. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve is a complex and elegant wine. The nutty brioche flavors will enhance appetizers, and crisp acidity will make any salty dish shine.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve Rosé is a dry, light pink wine. The inclusion of Pinot Noir, a traditional grape of the Champagne region of France, brings subtle red fruit flavors like cherry and strawberry.",
      },
      {
        subDes:
          "This bundle includes 3 bottles of wine - 1 bottle each of Blue Barrel Brut, Blue Barrel Brut Reserve, and Blue Barrel Brut Reserve Rosé.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut",
      },
      {
        subInclude: "Blue Barrel Brut Reserve",
      },
      {
        subInclude: "Brut Reserve Rosé",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Wine Variety Bundle",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000272/attachment/6b241cf5e76da78858933ce9ad2a702b.jpg?width=800",
      },
    ],
    price: 144.99,
    pack: 6,
    milliliter: 750,
    des: [
      {
        subDes:
          "Nothing starts a party like a glass of sparkling wine. These bottles aren’t just for New Year’s Eve—their complex fruit flavors and bright acidity make them perfect for enjoying alongside a meal. We’ve selected these bottles to enhance your happy hours, pair with your favorite hors d'oeuvres, and drink alongside any dinner.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the Méthode champenoise. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve is a complex and elegant wine. The nutty brioche flavors will enhance appetizers, and crisp acidity will make any salty dish shine.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve Rosé is a dry, light pink wine. The inclusion of Pinot Noir, a traditional grape of the Champagne region of France, brings subtle red fruit flavors like cherry and strawberry.",
      },
      {
        subDes:
          "This bundle includes 6 bottles of wine - 2 bottles each of Blue Barrel Brut, Blue Barrel Brut Reserve, and Blue Barrel Brut Reserve Rosé.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut",
      },
      {
        subInclude: "Blue Barrel Brut Reserve",
      },
      {
        subInclude: "Brut Reserve Rosé",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000256/attachment/450bdcf9768afa74bcb690c93c2c7cbf.jpg?width=800",
      },
    ],
    price: 69.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "We think every dinner is special, so there’s no need to wait for a holiday to enjoy a glass of sparkling wine. Sparkling wines are full of bright acidity and beautiful aromatic fruit that make them easy to enjoy with almost any meal. It’s always a good idea to keep a bottle handy.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the traditional method. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes: "This bundle includes 3 bottles of Blue Barrel Brut.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000256/attachment/450bdcf9768afa74bcb690c93c2c7cbf.jpg?width=800",
      },
    ],
    price: 49.99,
    pack: 3,
    milliliter: 500,
    des: [
      {
        subDes:
          "We think every dinner is special, so there’s no need to wait for a holiday to enjoy a glass of sparkling wine. Sparkling wines are full of bright acidity and beautiful aromatic fruit that make them easy to enjoy with almost any meal. It’s always a good idea to keep a bottle handy.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the traditional method. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes: "This bundle includes 3 bottles of Blue Barrel Brut.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000266/attachment/54f7a5784f54ec53bdd288dbe432d0b5.jpg?width=800",
      },
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000266/attachment/3aa128155520ea4bdb00fce4a8669658.jpg?width=300",
      },
    ],
    price: 124.99,
    pack: 6,
    milliliter: 750,
    des: [
      {
        subDes:
          "We think every dinner is special, so there’s no need to wait for a holiday to enjoy a glass of sparkling wine. Sparkling wines are full of bright acidity and beautiful aromatic fruit that make them easy to enjoy with almost any meal. It’s always a good idea to keep a bottle handy.",
      },
      {
        subDes:
          "The Blue Barrel Brut is a light sparkling wine produced using the traditional method. This bottle showcases tart fruit like green apple and Asian pear.",
      },
      {
        subDes: "This bundle includes 6 bottles of Blue Barrel Brut.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut Reserve",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000267/attachment/9c9d5c497c2829e09617f60232b560e5.jpg?width=800",
      },
    ],
    price: 84.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "A glass of sophisticated sparkling wine will elevate any evening. This bottle was fermented using the traditional Méthode champenoise and aged on the lees to introduce complex, yeasty flavors. You don’t need a special occasion to enjoy this elegant wine.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve is a complex and elegant wine. The nutty brioche flavors will enhance appetizers and the crisp acidity will make any salty dish shine.",
      },
      {
        subDes: "This bundle includes 3 bottles of Blue Barrel Brut Reserve.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut Reserve",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut Reserve",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000268/attachment/099d4acf711f771b26d942a5241efdee.jpg?width=800",
      },
    ],
    price: 154.99,
    pack: 6,
    milliliter: 750,
    des: [
      {
        subDes:
          "A glass of sophisticated sparkling wine will elevate any evening. This bottle was fermented using the traditional Méthode champenoise and aged on the lees to introduce complex, yeasty flavors. You don’t need a special occasion to enjoy this elegant wine.",
      },
      {
        subDes:
          "The Blue Barrel Brut Reserve is a complex and elegant wine. The nutty brioche flavors will enhance appetizers and the crisp acidity will make any salty dish shine.",
      },
      {
        subDes: "This bundle includes 6 bottles of Blue Barrel Brut Reserve.",
      },
    ],
    include: [
      {
        subInclude: "Blue Barrel Brut Reserve",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut Reserve Rosé",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000269/attachment/05ab842ccd738b22a219975864a99d80.jpg?width=800",
      },
    ],
    price: 84.99,
    pack: 3,
    milliliter: 500,
    des: [
      {
        subDes:
          "A beautiful sparkling rosé is the perfect bottle to serve at any gathering. This light and lively wine gets its subtle pink hue from the inclusion of Pinot Noir, a classic grape of French Champagne. Fermenting with the traditional Méthode champenoise creates a sophisticated wine with fine, persistent bubbles.",
      },
      {
        subDes:
          "The Blue Barrel Brut Rosé is a dry, light pink wine. The inclusion of Pinot Noir introduces subtle red fruit flavors like cherry and strawberry.",
      },
      {
        subDes:
          "This bundle includes 3 bottles of Blue Barrel Brut Reserve Rosé.",
      },
    ],
    include: [
      {
        subInclude: "Brut Reserve Rosé",
      },
    ],
  },
  {
    name: "Blue Barrel Sparkling Brut Reserve Rosé",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0000270/attachment/4284e02f4927d308c63181e7b2c65ce6.jpg?width=800",
      },
    ],
    price: 154.99,
    pack: 6,
    milliliter: 500,
    des: [
      {
        subDes:
          "A beautiful sparkling rosé is the perfect bottle to serve at any gathering. This light and lively wine gets its subtle pink hue from the inclusion of Pinot Noir, a classic grape of French Champagne. Fermenting with the traditional Méthode champenoise creates a sophisticated wine with fine, persistent bubbles.",
      },
      {
        subDes:
          "The Blue Barrel Brut Rosé is a dry, light pink wine. The inclusion of Pinot Noir introduces subtle red fruit flavors like cherry and strawberry.",
      },
      {
        subDes:
          "This bundle includes 6 bottles of Blue Barrel Brut Reserve Rosé.",
      },
    ],
    include: [
      {
        subInclude: "Brut Reserve Rosé",
      },
    ],
  },
  {
    name: "A Tasting of White Wines",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001329/attachment/a0db7c3483b026d4393fe9eba40562f4.jpg?width=800",
      },
    ],
    price: 49.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "Explore the range of white wines with this curated tasting bundle. Try these wines side by side to appreciate the variety of flavors a white wine can contain. Wine tastings should move from the lightest to the most intense wine. For this selection, start with the light and tart Airfield Estate Riesling. Look for notes of peach, which are a hallmark of the grape. Next open the Hearsay Chardonnay and appreciate its crisp flavor, a result of stainless steel fermentation. Finally, move on to the Wildhurst Chardonnay. Compare and contrast this bold and toasty wine with the previous two bottles.",
      },
      {
        subDes:
          "2021 Hearsay Chardonnay This lush, beautiful Chardonnay got its start in Solano County, California. Delicate pressing and stainless steel fermentation allow the wine to exhibit a subtle array of aromatics like lemon peel and tart green apple. The wine was bottled after a year—delivering optimum complexity and tension.",
      },
      {
        subDes:
          "2020 Wildhurst Chardonnay The Wildhurst Chardonnay is on the bold end of the spectrum of white wines. Expect toasty, oak-derived aromatics like brioche, caramel, and toasted coconut along with lush, ripe fruit.",
      },
      {
        subDes:
          "2021 Airfield Estates Riesling The 2021 Airfield Riesling is a classic example of a dry Riesling. Full of lovely stone fruit flavors and packed with racing acidity, this food-friendly wine is sure to satisfy any wine lover.",
      },
    ],
    include: [
      {
        subInclude: "2021 Hearsay Chardonnay",
      },
      {
        subInclude: "2021 Wildhurst Chardonnay",
      },
      {
        subInclude: "2021 Airfield Estates Riesling",
      },
    ],
  },
  {
    name: "A Tasting of Red Wines",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001330/attachment/ae2a6489931cd8edd7f615136e09b496.jpg?width=800",
      },
    ],
    price: 49.99,
    pack: 3,
    milliliter: 750,
    des: [
      {
        subDes:
          "Wine tastings should move from the lightest to the most intense wine. For this red wine tasting, begin with the 2020 Blue Barrel Red Wine Blend. Notice the tart nature of the light red fruit. Move on to the Groundwork Grenache, which is laced complex spices. Finish with the robust 2019 Goose Ridge Cabernet Sauvignon, which is filled with big, powerful tannins.",
      },
      {
        subDes:
          "2019 Goose Ridge Cabernet Sauvignon The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle.",
      },
      {
        subDes:
          "2020 Groundwork Grenache This Groundwork Grenache was produced using whole cluster fermentation, where some grapes are left on their stem, to introduce tart tannins and complex spices to this typically fruity varietal.",
      },
      {
        subDes:
          "2020 Blue Barrel Red Wine Blend The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich.",
      },
    ],
    include: [
      {
        subInclude: "2019 Goose Ridge Cabernet Sauvignon",
      },
      {
        subInclude: "2020 Groundwork Grenache",
      },
      {
        subInclude: "2020 Blue Barrel Red Wine Blend",
      },
    ],
  },
  {
    name: "A Tasting of Red & White Wines",
    img: [
      {
        subImage:
          "https://media.blueapron.com/agora/images/product/CCMK0001331/attachment/eec7b51291ab5458de6e2a0a017c9c8e.jpg?width=800",
      },
    ],
    price: 84.99,
    pack: 6,
    milliliter: 750,
    des: [
      {
        subDes:
          "Taste through this selection of red and white wines with friends for a fun, educational evening. Be sure to read the tasting notes, and compare and contrast the flavors of each bottle. Wine tastings should move from the lightest to the most intense wine. For this selection, start with the white wines. Try the Airfield Rieseling, followed by the Hearsay and Wildhurst Chardonnays. When it’s time to move on to the red wines, begin with the Blue Barrel Blend, move to the Groundwork Grenache, and finish with the Goose Ridge Cabernet Cabernet Sauvignon.",
      },
      {
        subDes:
          "2021 Hearsay Chardonnay This lush, beautiful Chardonnay got its start in Solano County, California. Delicate pressing and stainless steel fermentation allow the wine to exhibit a subtle array of aromatics like lemon peel and tart green apple. The wine was bottled after a year—delivering optimum complexity and tension.",
      },
      {
        subDes:
          "2020 Wildhurst Chardonnay The Wildhurst Chardonnay is on the bold end of the spectrum of white wines. Expect toasty, oak-derived aromatics like brioche, caramel, and toasted coconut along with lush, ripe fruit.",
      },
      {
        subDes:
          "2021 Airfield Estates Riesling The 2021 Airfield Riesling is a classic example of a dry Riesling. Full of lovely stone fruit flavors and packed with racing acidity, this food-friendly wine is sure to satisfy any wine lover.",
      },
      {
        subDes:
          "2019 Goose Ridge Cabernet Sauvignon The grapes for the 2019 Goose Ridge Cabernet Sauvignon were grown on a south-facing slope for maximum sun exposure, leading to ripe, robust fruit flavors. Aging in new and used oak barrels for 16 months brings a layer of warming spice to each bottle.",
      },
      {
        subDes:
          "2020 Groundwork Grenache This Groundwork Grenache was produced using whole cluster fermentation, where some grapes are left on their stem, to introduce tart tannins and complex spices to this typically fruity varietal.",
      },
      {
        subDes:
          "2020 Blue Barrel Red Wine Blend The 2020 Blue Barrel Red Wine Blend is vinified from Corvina, Corvinone, and Rondinella grapes grown in the Veneto region of Italy. This light and bright wine was blended to bring out the best in your dinner. The balance of tart red fruit and light structure will work with cuisines ranging from light to rich.",
      },
    ],
    include: [
      {
        subInclude: "2021 Hearsay Chardonnay",
      },
      {
        subInclude: "2021 Wildhurst Chardonnay",
      },
      {
        subInclude: "2021 Airfield Estates Riesling",
      },
      {
        subInclude: "2019 Goose Ridge Cabernet Sauvignon",
      },
      {
        subInclude: "2020 Groundwork Grenache",
      },
      {
        subInclude: "2020 Blue Barrel Red Wine Blend",
      },
    ],
  },
];

function WineBundles() {
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
            title={wine.name}
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

export { WineBundles };
