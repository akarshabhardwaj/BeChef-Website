import React from 'react'

import {
    Box, Flex, Image, Text
} from "@chakra-ui/react"


import logo from '../Assets/logowhite.webp.webp'

import "./Footer.css"

const Footer = () => {
  return (
    <Box id='footer' bg='#0f346c' color={'white'}>
        <Box className='footerBox' width={'80%'} margin='auto'>
            <Box display={'flex'} className='firstDiv' flexDirection={'row'} justifyContent='space-between'>
                <Box>
                    <Image className='imageclass' src={logo}/>
                </Box>
                <Flex className='flex' flexDirection={'column'} textAlign='justify'>
                    <Text>On the Menu</Text>
                    <Text>Pricing</Text>
                    <Text>Our Vision</Text>
                    <Text>Wine</Text>
                    <Text>Market</Text>
                    <Text>Gift Cards</Text>
                    <Text>Blog</Text>
                    <Text>Cookbook</Text>
                </Flex>
                <Flex className='flex' flexDirection={'column'} textAlign='justify'>
                    <Text>Suppliers</Text>
                    <Text>Affiliates</Text>
                    <Text>Supply Chains Act</Text>
                    <Text>Food Safety</Text>
                    <Text>Career</Text>
                    <Text>Press</Text>
                    <Text>Our Team</Text>
                    <Text>Investor Relations</Text>
                </Flex>
                <Flex className='flex' flexDirection={'column'} textAlign='justify'>
                    <Text>Military & Veterans</Text>
                    <Text>Students</Text>
                    <Text>Teachers</Text>
                    <Text>Seniors (+55)</Text>
                    <Text>Medical Staff</Text>
                    <Text>First Responders</Text>
                </Flex>
                <Flex className='flex' flexDirection={'column'} textAlign='justify'>
                    <Text as={'h2'} fontWeight='bold'>Customer Support</Text>
                    <Text>Help Center & FAQ</Text>
                    <Text>contact@bechef.com</Text>
                    <Text>(646) 891-4349</Text>
                </Flex>
            </Box>
            
            <Flex className='footerdetails' justifyContent='space-between' flexDirection={'row'} gap='5px' alignItems='center' width='90%' margin='auto' marginTop={'20px'} >
                
                <Flex>
                    <Text  fontWeight='bold' marginRight={'10px'}>© Be Chef, LLC 2023</Text>
                    <Text>
                    Do Not Sell or Share My Info | Ad Preferences | Privacy | Terms</Text>
                </Flex>
                <Box >
                        <img style={{width:'70%'}} src="https://global.discourse-cdn.com/turtlehead/original/2X/e/ee0e6fd4d6ad3283ce1b38e28481a51cb25a9dac.png" alt="google"/>
                </Box>
            </Flex>
            
            <Text>If you are using a screen reader and are having problems using this website, please call1-844-462-8299for assistance.</Text>
        </Box>
    </Box>
  )
}

export default Footer