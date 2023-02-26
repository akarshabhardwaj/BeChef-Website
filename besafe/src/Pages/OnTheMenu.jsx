import { Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {BiTimeFive} from "react-icons/bi"

import {FaLeaf} from "react-icons/fa"

import "./OnTheMenu.css"

function OnTheMenu() {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);

    

    // const getOnMenuData =async () => {
    //     setLoading(true);
    //     try {
    //         const res = await fetch("https://lackadaisical-volcano-larch.glitch.me/data");
    //         const menuData = await res.json();
    //         setData(menuData);  
    //         setLoading(false);
    //     } catch (error) {
    //         // console.log("e", error);
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     getOnMenuData()
    //     document.title = 'Virtual Shop'
    // }, []);

    const data = [
        {
          "name":"Oven-Baked Cheesy Chicken Thighs",
          "subDes":"with Rice, Spinach & BBQ Mayo",
          "time":55,
          "serving":2,
          "des":"Featuring pre-chopped ingredients and a recyclable baking tin, our Ready to Cook recipes make prep and cleaning a breeze. Just assemble, bake, and enjoy! Here, chicken thighs get zesty flavor from a coating of warming spices like paprika and cayenne. You'll serve the chicken with white rice, tangy pickled peppers, and a creamy barbecue mayo.",
          "calories":750,
          "type":"Non-veg",
          "img":[
            {
              "subimg":"https://media.blueapron.com/recipes/35783/square_newsletter_images/1674588420-50-0027-5442/0227_2P11_Baked-Chicken-Thighs9154_SQ_Web.jpg?quality=80&width=850&format=pjpg"
            }
          ],
          "Ingredients":[
            {
              "subIngredients":"12 oz Boneless, Skinless Chicken Thighs"
            },
            {
              "subIngredients":"1 Tbsp Southern Spice Blend (Onion Powder, Garlic Powder, Ground Yellow Mustard, Smoked Paprika & Cayenne Pepper)"
            },
            {
              "subIngredients":"½ cup Long Grain White Rice"
            },
            {
              "subIngredients":"⅓ cup Mirepoix"
            },
            {
              "subIngredients":"3 oz Baby Spinach"
            },
            {
              "subIngredients":"2 Tbsps Mayonnaise"
            },
            {
              "subIngredients":"¼ cup Barbecue Sauce"
            },
            {
              "subIngredients":"2 oz Shredded Cheddar & Monterey Jack Cheese Blend"
            },
            {
              "subIngredients":"½ oz Sweety Drop Peppers"
            },
            {
              "subIngredients":"1 Single-Use Aluminum Tray"
            }
          ],
          "imgIngredients":[
            {
              "subimg":"https://media.blueapron.com/recipes/35783/ingredient_images/1674764727-48-0008-9560/0227_2PRE11_large_feature.png"
            }
          ],
          "Instructions":[
            {
              "head":"Prepare the ingredients & make the base",
              "des":"Place an oven rack in the center of the oven; preheat to 450°F. Wash and dry the spinach. Carefully rinse the rice (sifting through for any impurities). Drain thoroughly. In the tray, combine the spinach, rice, and mirepoix. Stir to combine. Add 1 cup of water to the tray. Season with salt and pepper; stir to thoroughly combine."
            },
            {
              "head":"Prepare the chicken & bake the tray",
              "des":"Pat the chicken dry with paper towels. Season on both sides with salt, pepper, and enough of the spice blend to coat (you may have extra). Place the seasoned chicken in an even layer on top of the prepared base. Tightly cover the tray with foil and bake 40 minutes. Leaving the oven on, remove from the oven. Carefully remove the foil. Add the cheese in an even layer. Return to the oven and bake, uncovered, 5 to 7 minutes, or until the cheese is melted and the chicken is cooked through.* Remove from the oven."
            },
            {
              "head":"Make the BBQ mayo & serve your dish",
              "des":"Meanwhile, in a bowl, combine the mayonnaise and barbecue sauce. Serve the baked tray topped with the BBQ mayo and peppers. Enjoy! "
            }
          ],
          "imgInstructions":[
            {
              "subimg":"https://media.blueapron.com/recipes/35783/recipe_steps/84074/1674588467-46-0028-9072/0227_2P11_Oven-Baked-Chicken-Thighs9055_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/35783/recipe_steps/87168/1674588469-50-0032-5193/0227_2P11_Oven-Baked-Chicken-Thighs9108_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/35783/recipe_steps/87169/1674588472-46-0029-6407/0227_2P11_Oven-Baked-Chicken-Thighs9136_Web.jpg?width=512"
            }
          ]
        },
        {
          "name":"Oven-Baked Creamy Truffle Gnocchi",
          "subDes":"with Broccoli, Spinach & Parmesan",
          "time":40,
          "serving":2,
          "des":"Featuring pre-chopped ingredients and a recyclable baking tin, our Ready to Cook recipes make prep and cleaning a breeze. Just assemble, bake, and enjoy! Here, pillowy gnocchi, tender vegetables, and caramelized onions are baked in a creamy sauce that features both truffle zest and our white truffle seasoned butter—which lends the rich, earthy flavor for which truffles are prized, but without overpowering too much.",
          "calories":600,
          "type":"Veg",
          "img":[
            {
              "subimg":"https://media.blueapron.com/recipes/35785/square_newsletter_images/1674494683-51-0003-7745/0227_2PV2_Carmalized-Onion-Truffle-Gnocchi_0037_SQ_Web.jpg?quality=80&width=850&format=pjpg"
            }
          ],
          "Ingredients":[
            {
              "subIngredients":"¾ lb Gnocchi"
            },
            {
              "subIngredients":"3 oz Baby Spinach"
            },
            {
              "subIngredients":"¼ cup Cream"
            },
            {
              "subIngredients":"¼ tsp Truffle Zest Seasoning (Includes Natural Truffle Flavor And Black Summer Truffle)"
            },
            {
              "subIngredients":"3 oz Caramelized Onions & Garlic"
            },
            {
              "subIngredients":"¼ cup Grated Parmesan Cheese"
            },
            {
              "subIngredients":"1 oz White Truffle Seasoned Butter"
            },
            {
              "subIngredients":"½ lb Broccoli Florets"
            },
            {
              "subIngredients":"1 Single-Use Aluminum Tray"
            }
          ],
          "imgIngredients":[
            {
              "subimg":"https://media.blueapron.com/recipes/35785/ingredient_images/1674739033-19464-0047-3069/0227_2PV2_large_feature.png"
            }
          ],
          "Instructions":[
            {
              "head":"Prepare the ingredients & make the base",
              "des":"Place an oven rack in the center of the oven; preheat to 450°F. Wash and dry the fresh produce. In the tray, combine the spinach, broccoli, gnocchi, cream, truffle butter, caramelized onions, and as much of the truffle zest as you'd like. Stir to combine. Add 1/2 cup of water to the tray. Season with salt and pepper; stir to thoroughly combine."
            },
            {
              "head":"Bake the tray & serve your dish",
              "des":"Tightly cover the tray with foil and bake 30 to 32 minutes, or until the sauce is thickened and the gnocchi are tender. Remove from the oven. Carefully remove the foil; stir to combine. Serve the baked tray garnished with the cheese. Enjoy! "
            }
          ],
          "imgInstructions":[
            {
              "subimg":"https://media.blueapron.com/recipes/35785/recipe_steps/83939/1674494700-50-0004-9080/0227_2PV2_Carmalized-Onion-Truffle-Gnocchi_004_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/35785/recipe_steps/83940/1674494716-50-0006-3029/0227_2PV2_Carmalized-Onion-Truffle-Gnocchi_0012_Web.jpg?width=512"
            }
          ]
        },
        {
          "name":"Pesto Whole Grain Pasta",
          "subDes":"with Zucchini, Tomatoes & Romano",
          "time":30,
          "serving":2,
          "des":"This vibrant shrimp dish features our new whole grain radiator pasta, which boasts a hearty texture and a ruffled shape that's perfect for soaking up sauces, like our fragrant basil pesto.",
          "calories":620,
          "type":"Non-veg",
          "img":[
            {
              "subimg":"https://media.blueapron.com/recipes/36989/square_newsletter_images/1674587474-50-0008-7008/0227_2P9_Shrimp-Pesto-Pasta_9129_SQ_Web.jpg?quality=80&width=850&format=pjpg"
            }
          ],
          "Ingredients":[
            {
              "subIngredients":"10 oz Tail-On Shrimp (Peeled & Deveined)"
            },
            {
              "subIngredients":"6 oz Whole Grain Radiator Pasta (34 G Whole Grain Per 2 Oz Serving)"
            },
            {
              "subIngredients":"1 Zucchini"
            },
            {
              "subIngredients":"3 Tbsps Basil Pesto"
            },
            {
              "subIngredients":"4 oz Grape Tomatoes"
            },
            {
              "subIngredients":"¼ tsp Crushed Red Pepper Flakes"
            },
            {
              "subIngredients":"1 Tbsp Capers"
            },
            {
              "subIngredients":"1 Tbsp Weeknight Hero Spice Blend (Onion Powder, Garlic Powder, Smoked Paprika & Whole Dried Parsley)"
            },
            {
              "subIngredients":"¼ cup Grated Romano Cheese"
            },
            {
              "subIngredients":"1 oz Sliced Roasted Red Peppers"
            }
          ],
          "imgIngredients":[
            {
              "subimg":"https://media.blueapron.com/recipes/36989/ingredient_images/1674764539-48-0007-7857/0227_2PRE09_large_feature.png"
            }
          ],
          "Instructions":[
            {
              "head":"Prepare the ingredients & season the shrimp",
              "des":"Fill a medium pot 3/4 of the way up with salted water; cover and heat to boiling on high. Wash and dry the fresh produce. Halve the zucchini lengthwise, then thinly slice crosswise. Halve the tomatoes. Place in a medium bowl; drizzle with olive oil and season with salt and pepper. Roughly chop the peppers. Pat the shrimp dry with paper towels; remove the tails. Place in a bowl. Add a drizzle of olive oil and as much of the red pepper flakes as you’d like, depending on how spicy you’d like the dish to be. Season with salt, pepper, and enough of the spice blend to coat (you may have extra); toss to coat."
            },
            {
              "head":"Cook the pasta",
              "des":"Add the pasta to the pot of boiling water. Cook, stirring occasionally, 9 to 11 minutes, or until al dente (still slightly firm to the bite). Turn off the heat. Drain thoroughly and return to the pot."
            },
            {
              "head":"Cook the zucchini",
              "des":"Meanwhile, in a medium pan (nonstick, if you have one), heat a drizzle of olive oil on medium-high until hot. Add the sliced zucchini in an even layer. Cook, without stirring, 3 to 4 minutes, or until browned. Season with salt and pepper. Continue to cook, stirring frequently, 1 to 2 minutes, or until softened. Transfer to the bowl of seasoned tomatoes. Wipe out the pan."
            },
            {
              "head":"Cook the shrimp",
              "des":"In the same pan, heat a drizzle of olive oil on medium-high until hot. Add the seasoned shrimp in an even layer. Cook, without stirring, 2 to 3 minutes, or until slightly opaque. Continue to cook, stirring frequently, 1 to 2 minutes, or until opaque and cooked through. Turn off the heat."
            },
            {
              "head":"Finish the pasta & serve your dish",
              "des":"To the pot of cooked pasta, add the cooked shrimp, cooked zucchini and tomatoes, pesto, capers, chopped peppers, and a drizzle of olive oil. Season with salt and pepper. Stir to thoroughly combine. Serve the finished pasta garnished with the cheese. Enjoy!"
            }
          ],
          "imgInstructions":[
            {
              "subimg":"https://media.blueapron.com/recipes/36989/recipe_steps/87988/1674587544-47-0025-4055/0227_2P9_Shrimp-Pesto-Pasta_009_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/36989/recipe_steps/87989/1674587546-50-0010-2285/0227_2P9_Shrimp-Pesto-Pasta_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/36989/recipe_steps/87990/1674587556-46-0009-5867/0227_2P9_Shrimp-Pesto-Pasta_900_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/36989/recipe_steps/87991/1674587566-46-0010-8063/0227_2P9_Shrimp-Pesto-Pasta_878_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/36989/recipe_steps/87992/1674587569-50-0011-5352/0227_2P9_Shrimp-Pesto-Pasta_800_Web.jpg?width=512"
            }
          ]
        },
        {
          "name":"Smothered Tomatillo Burritos",
          "subDes":"with Pinto Beans, Poblano Pepper & Rice",
          "time":35,
          "serving":2,
          "des":"In this Tex-Mex favorite, flour tortillas are stuffed with poblano pepper and onion, plus creamy pinto beans and fluffy white rice, before being topped with a blanket of melty cheddar and monterey jack cheese, zesty tomatillo-poblano sauce, and cooling sour cream. Unlike their handheld cousins, you'll want to eat these saucy burritos with a fork and knife.",
          "calories":840,
          "type":"Veg",
          "img":[
            {
              "subimg":"https://media.blueapron.com/recipes/37059/square_newsletter_images/1674496289-50-0011-8036/0227_2PV1_Smothered-Tomatillo-Burrito_0138_SQ_Web.jpg?quality=80&width=850&format=pjpg"
            }
          ],
          "Ingredients":[
            {
              "subIngredients":"1 15.5-Oz Can Pinto Beans"
            },
            {
              "subIngredients":"2 Flour Tortillas"
            },
            {
              "subIngredients":"⅓ cup Tomatillo-Poblano Sauce"
            },
            {
              "subIngredients":"1 Red Onion"
            },
            {
              "subIngredients":"2 oz Shredded Cheddar & Monterey Jack Cheese Blend"
            },
            {
              "subIngredients":"2 tsps Chipotle Chile Paste"
            },
            {
              "subIngredients":"½ cup Long Grain White Rice"
            },
            {
              "subIngredients":"¼ cup Sour Cream"
            },
            {
              "subIngredients":"1 Tbsp Light Brown Sugar"
            },
            {
              "subIngredients":"1 Poblano Pepper"
            },
            {
              "subIngredients":"1 Lime"
            }
          ],
          "imgIngredients":[
            {
              "subimg":"https://media.blueapron.com/recipes/37059/ingredient_images/1674739030-3944-0001-1648/0227_2PV1_large_feature.png"
            }
          ],
          "Instructions":[
            {
              "head":"Cook the rice",
              "des":"Carefully rinse the rice (sifting through for any impurities). Drain thoroughly. In a medium pot, combine the rice, a big pinch of salt, and 1 cup of water. Heat to boiling on high. Once boiling, reduce the heat to low. Cover and cook, without stirring, 13 to 15 minutes, or until the water has been absorbed and the rice is tender. Turn off the heat and fluff with a fork."
            },
            {
              "head":"Prepare the ingredients",
              "des":"Meanwhile, wash and dry the fresh produce. Halve, peel, and medium dice the onion. Drain and rinse the beans. Quarter the lime. Cut off and discard the stem of the pepper. Halve lengthwise; remove the ribs and seeds, then medium dice. Thoroughly wash your hands and cutting board immediately after handling. In a bowl, combine the sour cream and 1 tablespoon of water. Season with salt and pepper."
            },
            {
              "head":"Make the filling",
              "des":"Meanwhile, in a medium pan (nonstick, if you have one), heat a drizzle of olive oil on medium-high until hot. Add the sliced zucchini in an even layer. Cook, without stirring, 3 to 4 minutes, or until browned. Season with salt and pepper. Continue to cook, stirring frequently, 1 to 2 minutes, or until softened. Transfer to the bowl of seasoned tomatoes. Wipe out the pan."
            },
            {
              "head":"Assemble the burritos",
              "des":"Wrap the tortillas in a damp paper towel and microwave on high 1 minute, or until heated through. Transfer to a work surface and carefully unwrap. Evenly divide all but 2 cups of the filling among the center of the bottom half of each tortilla (the half that is closest to you). Fold the three adjacent sides over the filling, holding them in place so that the filling is covered. Roll away from you, tightly tucking in the sides as you roll, until the burrito is seam-side down. Cover the remaining filling to keep warm."
            },
            {
              "head":"Finish the burritos & serve your dish",
              "des":"In the same pan, heat a drizzle of olive oil on medium until hot. Add the burritos, seam side down. Cook 1 to 2 minutes, or until lightly browned. Carefully top the burritos with the cheese (keeping them seam side down). Cover the pan with foil and cook 2 to 3 minutes, or until the cheese is melted and the burritos are heated through. Evenly divide the remaining filling between two serving dishes; top with the finished burritos (including any crispy cheese from the pan). Drizzle the burritos with the tomatillo sauce and seasoned sour cream. Serve the remaining lime wedges on the side. Enjoy!"
            }
          ],
          "imgInstructions":[
            {
              "subimg":"https://media.blueapron.com/recipes/37059/recipe_steps/88214/1674496450-50-0016-1061/Jasmine_2P_Stockpot-Medium_Fluff_WEB.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37059/recipe_steps/88215/1674496329-50-0021-0142/0227_2PV1_Smothered-Tomatillo-Burrito_108_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37059/recipe_steps/88217/1674496344-50-0023-6432/0227_2PV1_Smothered-Tomatillo-Burrito_112_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37059/recipe_steps/88216/1674496358-50-0013-4475/0227_2PV1_Smothered-Tomatillo-Burrito_0120_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37059/recipe_steps/88218/1674496361-50-0014-5462/0227_2PV1_Smothered-Tomatillo-Burrito_0121_Web.jpg?width=512"
            }
          ]
        },
        {
          "name":"Sheet Pan Cajun-Spiced Salmon",
          "subDes":"with Roasted Potatoes, Asparagus & Garlic-Sour Cream Dressing",
          "time":35,
          "serving":2,
          "des":"The star of this dish is the bright, creamy dressing we’re serving alongside our salmon, featuring a rich mix of sour cream, hot sauce, relish, and more––served with a roasted vegetable duo.10 Points value per serving.To learn more about WW's Points program, visit ww.com",
          "calories":580,
          "type":"Non-veg",
          "img":[
            {
              "subimg":"https://media.blueapron.com/recipes/37060/square_newsletter_images/1674578396-47-0006-0961/0227_2PF_Cajun-Salmon-Asparagus9343_SQ_Web.jpg?quality=80&width=850&format=pjpg"
            }
          ],
          "Ingredients":[
            {
              "subIngredients":"2 Skin-On Salmon Fillets"
            },
            {
              "subIngredients":"6 oz Asparagus"
            },
            {
              "subIngredients":"¾ lb Potatoes"
            },
            {
              "subIngredients":"1 Lemon"
            },
            {
              "subIngredients":"¼ cup Sour Cream"
            },
            {
              "subIngredients":"1 Tbsp Hot Sauce"
            },
            {
              "subIngredients":"1 Tbsp Light Brown Sugar"
            },
            {
              "subIngredients":"1 Tbsp Cajun Spice Blend (Smoked Paprika, Ground Yellow Mustard, Onion Powder, Garlic Powder, Whole Dried Oregano, Whole Dried Thyme & Cayenne Pepper)"
            },
            {
              "subIngredients":"1 Tbsp Weeknight Hero Spice Blend (Onion Powder, Garlic Powder, Smoked Paprika & Whole Dried Parsley)"
            },
            {
              "subIngredients":"2 Tbsps Sweet Pickle Relish"
            }
          ],
          "imgIngredients":[
            {
              "subimg":"https://media.blueapron.com/recipes/37060/ingredient_images/1674783196-51-0017-3480/0227_2PF_large_feature.png"
            }
          ],
          "Instructions":[
            {
              "head":"Prepare the ingredients",
              "des":"Preheat the oven to 450°F. Wash and dry the fresh produce. Medium dice the potatoes. Snap off and discard the tough, woody stem ends of the asparagus. Quarter and deseed the lemon. In a bowl, combine the Cajun spice blend and sugar."
            },
            {
              "head":"Roast the potatoes",
              "des":"Place the diced potatoes on a sheet pan. Drizzle with olive oil and season with salt, pepper, and half the weeknight hero spice blend. Toss to coat and arrange in an even layer. Roast 18 to 22 minutes, or until lightly browned and tender when pierced with a fork. Remove from the oven."
            },
            {
              "head":"Roast the asparagus & fish",
              "des":"Meanwhile, place the prepared asparagus on a separate sheet pan. Drizzle with olive oil and season with salt and pepper; toss to coat. Arrange in an even layer on one side of the sheet pan. Pat the fish dry with paper towels; season with salt and pepper on both sides. Transfer to the other side of the sheet pan, skin side down. Top the fish with enough of the Cajun-sugar mixture to coat and a drizzle of olive oil. Roast 10 to 13 minutes, or until the asparagus is tender when pierced with a fork and the fish is browned and cooked through.* Remove from the oven. Evenly top the roasted asparagus with the juice of 2 lemon wedges."
            },
            {
              "head":"Make the dressing & serve your dish",
              "des":"Meanwhile, in a bowl, combine the sour cream, hot sauce, remaining weeknight hero spice blend, and pickle relish. Season with salt and pepper. Serve the roasted fish with the roasted potatoes and finished asparagus. Drizzle with the dressing. Serve the remaining lemon wedges on the side. Enjoy!"
            }
          ],
          "imgInstructions":[
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88219/1674578484-48-0009-3784/0227_2PF_Cajun-Salmon-Asparagus_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88220/1674578500-48-0010-5249/0227_2PF_Cajun-Salmon-Asparagus9325_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88221/1674578514-49-0008-3066/0227_2PF_Cajun-Salmon-Asparagus9323_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88222/1674578528-48-0011-4625/0227_2PF_Cajun-Salmon-Asparagus9331_Web.jpg?width=512"
            }
          ]
        },
        {
          "name":"Roasted Cauliflower & Lemon Pasta",
          "subDes":"with Garlic Breadcrumbs",
          "time":30,
          "serving":2,
          "des":"In this dish, a duo of orecchiette pasta and cauliflower is tossed with a light, aromatic butter sauce, which highlights shallot, capers, and red pepper flakes. A sprinkling of garlic-toasted breadcrumbs finishes the dish with delightfully crispy, crunchy contrast.",
          "calories":580,
          "type":"Veg",
          "img":[
            {
              "subimg":"https://media.blueapron.com/recipes/37075/square_newsletter_images/1675354660-50-0002-0993/0509_2P22_Cauliflower-Lemon-Pasta_020_SQ_Web.jpg?quality=80&width=850&format=pjpg"
            }
          ],
          "Ingredients":[
            {
              "subIngredients":"6 oz Orecchiette Pasta"
            },
            {
              "subIngredients":"1 Lemon"
            },
            {
              "subIngredients":"1 head Cauliflower"
            },
            {
              "subIngredients":"1 clove Garlic"
            },
            {
              "subIngredients":"1 Shallot"
            },
            {
              "subIngredients":"1 Tbsp Capers"
            },
            {
              "subIngredients":"¼ cup Grated Romano Cheese"
            },
            {
              "subIngredients":"¼ tsp Crushed Red Pepper Flakes"
            },
            {
              "subIngredients":"1 oz Salted Butter"
            },
            {
              "subIngredients":"¼ cup Panko Breadcrumbs"
            }
          ],
          "imgIngredients":[
            {
              "subimg":"https://media.blueapron.com/recipes/37075/ingredient_images/1675287560-48-0002-9827/0227_2PRE22_large_feature.png"
            }
          ],
          "Instructions":[
            {
              "head":"Prepare & roast the cauliflower",
              "des":"Place an oven rack in the center of the oven; preheat to 450°F. Fill a large pot 3/4 of the way up with salted water; cover and heat to boiling on high. Wash and dry the fresh produce. Cut out and discard the core of the cauliflower; cut into small florets. Transfer to a sheet pan. Drizzle with olive oil and season with salt and pepper; toss to coat. Arrange in an even layer. Roast 22 to 24 minutes, or until browned and tender when pierced with a fork. Remove from the oven."
            },
            {
              "head":"Cook the pasta",
              "des":"Meanwhile, add the pasta to the pot of boiling water. Cook, uncovered, 9 to 11 minutes, or until al dente (still slightly firm to the bite). Turn off the heat. Reserving ½ cup of the pasta cooking water, drain thoroughly and return to the pot."
            },
            {
              "head":"Prepare the remaining ingredients",
              "des":"Meanwhile, peel 1 clove of garlic; using a zester or the small side of a box grater, finely grate into a paste. Peel and thinly slice the shallot. Using a zester or the small side of a box grater, finely grate the lemon to get 2 teaspoons. Quarter and deseed the lemon."
            },
            {
              "head":"Make the garlic breadcrumbs",
              "des":"In a medium pan, heat a drizzle of olive oil on medium-high until hot. Add the breadcrumbs and half the garlic paste; season with salt and pepper. Cook, stirring frequently, 2 to 3 minutes, or until browned. Transfer to a bowl. Wipe out the pan."
            },
            {
              "head":"Cook the shallot",
              "des":"In the same pan, heat a drizzle of olive oil on medium-high until hot. Add the sliced shallot, capers, remaining garlic paste, and as much of the red pepper flakes as you’d like, depending on how spicy you’d like the dish to be; season with salt and pepper. Cook, stirring frequently, 1 to 3 minutes, or until softened. Turn off the heat."
            },
            {
              "head":"Finish the pasta & serve your dish",
              "des":"To the pot of cooked pasta, add the cooked shallot, roasted cauliflower, butter, lemon zest, the juice of 2 lemon wedges, and half the reserved pasta cooking water. Cook on medium-high, stirring constantly, 1 to 2 minutes, or until combined and the pasta is coated (if necessary, gradually add the remaining cooking water to ensure the pasta is thoroughly coated). Turn off the heat. Taste, then season with salt and pepper if desired. Serve the finished pasta garnished with the garlic breadcrumbs and cheese. Serve the remaining lemon wedges on the side. Enjoy!"
            }
          ],
          "imgInstructions":[
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88219/1674578484-48-0009-3784/0227_2PF_Cajun-Salmon-Asparagus_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88220/1674578500-48-0010-5249/0227_2PF_Cajun-Salmon-Asparagus9325_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88221/1674578514-49-0008-3066/0227_2PF_Cajun-Salmon-Asparagus9323_Web.jpg?width=512"
            },
            {
              "subimg":"https://media.blueapron.com/recipes/37060/recipe_steps/88222/1674578528-48-0011-4625/0227_2PF_Cajun-Salmon-Asparagus9331_Web.jpg?width=512"
            }
          ]
        }
      ]
 
  return (
    <div>
        <div>
            <Heading id="heading">Explore our Menus</Heading>
            <div style={{width:'80%' , margin:'auto',display:'grid' , gridTemplateColumns:'repeat(3,1fr)',alignItems:'left', gap:'30px',marginTop:'30px' ,marginBottom:'20px'}}>
                {
                    data.map((el)=> (
                        <div style={{
                            width:'100%',
                            margin:'auto',
                            display:'flex',
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent:'flex-start',
                            gap:'10px',
                            marginTop:'30px',
                            height:'auto',
                            padding:'2px',
                            borderRadius:'10px',
                            boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }}>
                            {/* <img
                                style={{display:'block', margin:'auto',width:'100%',
                                height:'300px'}}
                                src={el.img[0]?.subimg}
                                alt="OnTheMenuImage"
                            /> */}
                            <div id='imgdiv' style={{
                                backgroundImage:`url(${el.img[0].subimg})`,
                                width:'100%',
                                height: "50vh",
                                backgroundSize:'cover',
                                backgroundRepeat:"no-repeat"

                            }}>
                                <Text display={'block'} color='white' fontWeight={'bold'}  w={'25%'} backgroundColor={'blue'} textAlign={'left'}  fontSize={'20px'} noOfLines={1} isTruncated='true' borderTopRightRadius={'10px'}  borderBottomRightRadius='10px' marginTop={'80%'}>{el.type}</Text>
                            </div>
                            <Text fontWeight={'bold'} color={"#002c9b"} fontFamily={'Chronicle Deck,Times,serif'} textAlign={'left'} fontSize={'22px'} noOfLines={2} isTruncated='true'>{el.name}</Text>

                            <Text  textAlign={'left'}  fontSize={'20px'} noOfLines={1} isTruncated='true'>{el.subDes}</Text>
                            
                            <div id="typeDiv">
                                <BiTimeFive/>
                                <Text fontSize={'20px'}>{el.time} Min</Text>
                                {el.type === "Non-veg" ? <FaLeaf color='green'/> : <></>}
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
        <br />
        <br />
    </div>
  )
}

export default OnTheMenu