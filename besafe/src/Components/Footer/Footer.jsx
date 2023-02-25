/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import {
     Text
} from "@chakra-ui/react"


import logo from '../Assets/logowhite.webp.webp'

import "./Footer.css"

const Footer = () => {
  return (
    <div id='footer'>
        <div className='footerBox'>
            <div className='firstDiv'>
                <div id='imgDiv'>
                    {/* // eslint-disable-next-line jsx-a11y/alt-text, jsx-a11y/alt-text */}
                    <img className='imageclass' src={logo}/>
                </div>
                <div className='flex'>
                    <Text>On the Menu</Text>
                    <Text>Pricing</Text>
                    <Text>Our Vision</Text>
                    <Text>Wine</Text>
                    <Text>Market</Text>
                    <Text>Gift Cards</Text>
                    <Text>Blog</Text>
                    <Text>Cookbook</Text>
                </div>
                <div className='flex'>
                    <Text>Suppliers</Text>
                    <Text>Affiliates</Text>
                    <Text>Supply Chains Act</Text>
                    <Text>Food Safety</Text>
                    <Text>Career</Text>
                    <Text>Press</Text>
                    <Text>Our Team</Text>
                    <Text>Investor Relations</Text>
                </div>
                <div className='flex' >
                    <Text>Military & Veterans</Text>
                    <Text>Students</Text>
                    <Text>Teachers</Text>
                    <Text>Seniors (+55)</Text>
                    <Text>Medical Staff</Text>
                    <Text>First Responders</Text>
                </div>

                <div className='flex' >
                    <Text as={'h2'} fontWeight='bold'>Customer Support</Text>
                    <Text>Help Center & FAQ</Text>
                    <Text>contact@bechef.com</Text>
                    <Text>(646) 891-4349</Text>
                </div>
            </div>
            
            <div className='footerdetails'>
                
                <div id='detail'>
                    <Text  fontWeight='bold' marginRight={'10px'}>© Be Chef, LLC 2023</Text>
                    <Text>
                    Do Not Sell or Share My Info | Ad Preferences | Privacy | Terms</Text>
                </div>
                <div >
                        <img style={{width:'70%'}} src="https://global.discourse-cdn.com/turtlehead/original/2X/e/ee0e6fd4d6ad3283ce1b38e28481a51cb25a9dac.png" alt="google"/>
                </div>
            </div>
            
            <Text>If you are using a screen reader and are having problems using this website, please call1-844-462-8299for assistance.</Text>
        </div>
    </div>
  )
}

export default Footer