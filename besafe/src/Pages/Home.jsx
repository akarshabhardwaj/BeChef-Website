import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import {
    FaFacebookF, FaInstagram, FaPinterest, FaTwitter
} from "react-icons/fa"

import "./Home.css"

// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    // /first carousal
    const [slider, setSlider] = useState('');

    
// Settings for the slider first

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
   
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settingCarousal: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settingCarousal: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settingCarousal: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    const sliderArray = [
        {
            quote:"We changed from HelloFresh to Blue Apron and it was the best choice we made!",
            author:"LESLIE"
        },
        {
            quote:"We’d tried many other food delivery services and none of them have compared in quality and variety to Blue Apron.",
            author:"KATIE"
        },
        {
            quote:"Before Blue Apron, I tried HelloFresh. Blue Apron beats them on all counts—directions, freshness, packing, and prep.",
            author:"CHERYL"
        },
        {
            quote:"We love Blue Apron! It eliminates a ton of food waste while allowing us to try new things and have tasty meals. Really great quality food, awesome flavors, and things we wouldn't otherwise have any idea how to create.",
            author:"CHRISTY"
        }
    ]

  return (
    <div>
        <div id='homebg' fontFamily='ChronicleDeck'>
        
                <div id='nameHome'>
                    <Text id='textName' fontSize='50px' fontFamily='ChronicleDeck'  fontWeight='bold'>The meal kit that puts quality first</Text>
                    <Button id='buttonhome1'>GET COOKIN'</Button>
                </div>  
        </div>
        <div>
            <Text id='members' fontSize={'45px'} color='#002c9b' fontFamily='ChronicleDeck' fontWeight='bold'>465+ million meals shipped</Text>
            <Text id='membersub' fontSize={'25px'} w='30%' margin={'auto'} fontFamily='Cera Pro'>See why home cooks stick with the original American meal kit.</Text>
        </div>
        <br></br>
        <br></br>
        <div id='flexBox'>
            <div>
                <Image src='https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90'/>
                <Text margin='10px' fontWeight='bold'>5 decades of top restaurant experience</Text>
                <Text width={'80%'} margin='auto's>Our chefs bring high standards to crafting your meals.</Text>
            </div>

            <div>
                <Image src='https://media.blueapron.com/assets/registration/homepage/fresh-ingredients.webp?height=374&quality=90'/>
                <Text margin='10px' fontWeight='bold'>Fresher ingredients faster</Text>
                <Text width={'80%'} margin='auto'>80% of ingredients come directly from producers.</Text>
            </div>

            <div>
                <Image src='https://media.blueapron.com/assets/registration/homepage/flexible-mobile.webp?height=374&quality=90'/>
                <Text margin='10px' fontWeight='bold'>You're busy, so we're flexible</Text>
                <Text width={'80%'} margin='auto'>Get boxes on your schedule. Skip,pause, or cancel anytime.</Text>
            </div>
            
        </div>
        <br />
        <br />
        <div> 
            <Text margin='10px' fontSize='20px'>Get started for as little as <Text fontWeight={'bold'}>$7.99 per serving</Text></Text>
            <Button id='buttonhome2'>GET COOKIN'</Button>
        </div>

        <div id='weekOption'>
            <Text  fontSize='40px' color='#002684' fontWeight='bold'>CHOOSE FROM</Text>
            <Text id='weekly' fontStyle='ChronicleDeck' fontSize='60px' color='#00a0df'>70+ weekly options</Text> 
        </div>
    <br />
    <div id='gridDiv'>
        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>CRAFT</Text>
            <Text className='text2'>Cheese Crisp Burgers</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>WELLNESS</Text>
            <Text className='text2'>Turkey & Mushroom Lettuce Cups</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>FAMILY FRIENDLY</Text>
            <Text className='text2'>Mafalda Pasta</Text>
        </div>

        


        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/fast-and-easy.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>FAST & EASY</Text>
            <Text className='text2'>Sheet Pan Cheesy Jalapeño Chicken</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/vegetarian.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>VEGETARIAN</Text>
            <Text className='text2'>Quinoa & Vegetable “Fried Rice”</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/premium-steak.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>PREMIUM</Text>
            <Text className='text2'>NY Strip Steaks & Herb-Mushroom Pan Sauce</Text>
        </div>


        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/ready-to-cook.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>READY TO COOK</Text>
            <Text className='text2'>Pesto Chicken and Orzo</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/heat-and-eat.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>HEAT & EAT</Text>
            <Text className='text2'>Cheesy Truffle Cavatappi</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/breakfast.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>BREAKFAST</Text>
            <Text className='text2'>Fried Egg & Prosciutto Sandwiches</Text>
        </div>

        <div>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/desserts.webp?width=300&amp;height=300&amp;quality=90" alt="" />
            </div>
            <Text className='text1'>DESSERTS</Text>
            <Text className='text2'>Flourless Chocolate Cake</Text>
        </div>
    </div>
    
    <button id='browseMenu'>BROWSE OUR MENUS</button>

    <div id='history'>
        
        <div id='historyImg'>
            <img style={{marginTop:"20%"}} src="https://media.blueapron.com/assets/registration/homepage/texture-pattern.webp?height=20&quality=90" alt="" />
            
            
            <div id='historyQuotes'>
                <Text id='celeb10' fontSize='20px' fontWeight='bold' p='30px'  color='#00a0df'>Celebrating 10 years of happy customers</Text>

                <Box
                position={'relative'}
                height={'auto'}
                width={'95%'}
                padding={'5%'}
                // flex={10}
                overflow={'hidden'}>
                {/* CSS files for react-slick */}
                <link
                  rel="stylesheet"
                  type="text/css"
                  charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
              
                {/* Slider */}
                <Slider className='slider' {...settings} ref={(slider) => setSlider(slider)}>
                  {
                    sliderArray.map((el, index) => (

                    <div>
                        <p id='quotes' >{el.quote}</p>
                        <div id='blueline'></div>
                        <p id='authors'>{el.author}</p>
                    </div>

                  ))}
                </Slider>
              </Box>
            </div>
        </div>
    </div>

    <div id='learnMore'>
        <div>
            <img id='handimg' src="https://media.blueapron.com/assets/registration/homepage/hand-icon.svg" alt="" />
        </div>
        <Text id='proudtxt' color='white' fontFamily={'ChronicleDeck'} fontSize="40px" fontWeight={'bold'}>We’re proud to be a</Text>
        <Text id='compText' color='#002684' fontSize="40px" fontWeight={'bold'}>CARBON NEUTRAL COMPANY</Text>
        <button id='learnMoreBtn'>Learn More</button>
    </div>
    
    <div id='getKnow'>
        <div id='getknowDiv'>
            <Text id='getstart' fontFamily='ChronicleDeck' fontSize='40px' fontWeight='bold' color='#002c9b'>Get started now</Text>
            <Text id='serv' color='#c8c8c8' fontSize='30px'>for as little as <Text as='span' color='#31baf0'>$7.99 per serving</Text></Text>
            <button id='buttonhome3'>GET COOKIN'</button>
        </div>
    </div>
        
    <div id='bottomDiv'>
        <div id='icons'>
            <Text fontSize='20px'>FOLLOW US</Text>
            <div id='iconsDiv'>
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
                <FaPinterest/>
            </div>
        </div>
        <div id='emails'>
            <Text fontSize='20px'>DISCOVER WHAT'S COOKIN'</Text>
            <div id='emailsDiv'>
                <input id='emailInput' type="text" placeholder='Email Address' />
                <button id='goBtn'>Go</button>
            </div>
            <Text>Sign up for offers,recipes,news & more</Text>
        </div>
        <div id='blogs'>
            <Text fontSize='20px'>FROM THE BLOG</Text>
            <div id='blogsDiv'>
                <img src="https://i0.wp.com/blog.blueapron.com/wp-content/uploads/2023/01/image-7.jpg?resize=100%2C100&ssl=1" alt="" />
                <Text fontSize='20px'>3 Biscotti Recipes You'll Love</Text>
            </div>
        </div>
        <div></div>
    </div>
    <br />
    </div>
  )
}

export default Home