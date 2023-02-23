import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import "./Home.css"

const Home = () => {
  return (
    <div>
        <div id='homebg' fontFamily='ChronicleDeck'>
        {/* <div id='homeBox' className='homeBox' width={'100%'} margin='auto' color='white'> */}
                <div id='nameHome'>
                    <Text id='textName' fontSize='50px' fontFamily='ChronicleDeck'  fontWeight='bold'>The meal kit that puts quality first</Text>
                    <Button id='buttonhome1'>GET COOKIN'</Button>
                </div>  
        {/* </div> */}
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
            <Text margin='10px' fontSize='20px'>Get started for as little as $7.99 per serving</Text>
            <Button id='buttonhome2'>GET COOKIN'</Button>
        </div>

        <div id='weekOption'>
            <Text fontSize='40px' color='#002684' fontWeight='bold'>CHOOSE FROM</Text>
            <Text fontStyle='ChronicleDeck' fontSize='60px' color='#00a0df'>70+ weekly options</Text> 
        </div>
    <br />
    </div>
  )
}

export default Home