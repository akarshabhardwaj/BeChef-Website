import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import "./Home.css"

const Home = () => {
    // const myStyle={
    //     backgroundImage: "url('https://i.ibb.co/ZSzjmJk/desktop-splash-v2.webp')",
    //     height:'100vh',
    //     marginTop:'-70px',
    //     fontSize:'50px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     objectFit: 'cover'
    // };
  return (
    <div>
        <div id='homebg' fontFamily='ChronicleDeck'>
        <Box id='homeBox' className='homeBox' width={'100%'} margin='auto'  marginTop={5} color='white'  pt={"150px"}>
            <Flex id='homename' marginTop={10} flexDirection={'column'}  width={'30%'}  >
                    <Box className='nameHome' color='#0f346c'>
                        <Text id='textName' fontSize='50px' fontFamily='ChronicleDeck' marginLeft={20} fontWeight='bold'>The meal kit that puts quality first</Text>
                        <Button id='buttonhome1'>GET COOKIN'</Button>
                    </Box>    
            </Flex>
        </Box>
        </div>
        <Box>
            <Text id='members' fontSize={'45px'} color='#002c9b' fontFamily='ChronicleDeck' fontWeight='bold'>465+ million meals shipped</Text>
            <Text id='membersub' fontSize={'25px'} w='30%' margin={'auto'} fontFamily='Cera Pro'>See why home cooks stick with the original American meal kit.</Text>
        </Box>
        <br></br>
        <br></br>
        <Box width='80%' margin='auto'>
            <Box id='flexBox' display={'flex'} gap='60px' flexDirection='row'>
                <Box>
                    <Image src='https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90'/>
                    <Text margin='10px' fontWeight='bold'>5 decades of top restaurant experience</Text>
                    <Text width={'80%'} margin='auto's>Our chefs bring high standards to crafting your meals.</Text>
                </Box>

                <Box>
                    <Image src='https://media.blueapron.com/assets/registration/homepage/fresh-ingredients.webp?height=374&quality=90'/>
                    <Text margin='10px' fontWeight='bold'>Fresher ingredients faster</Text>
                    <Text width={'80%'} margin='auto'>80% of ingredients come directly from producers.</Text>
                </Box>

                <Box>
                    <Image src='https://media.blueapron.com/assets/registration/homepage/flexible-mobile.webp?height=374&quality=90'/>
                    <Text margin='10px' fontWeight='bold'>You're busy, so we're flexible</Text>
                    <Text width={'80%'} margin='auto'>Get boxes on your schedule. Skip,pause, or cancel anytime.</Text>
                </Box>
                
            </Box>
        </Box>
        <br />
        <br />
        <Box>
            <Text margin='10px'>Get started for as little as $7.99 per serving</Text>
            <Button id='buttonhome2'>GET COOKIN'</Button>
        </Box>
    </div>
  )
}

export default Home