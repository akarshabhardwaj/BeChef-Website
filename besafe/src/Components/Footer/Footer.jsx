/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
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
                    <div>On the Menu</div>
                    <div>Pricing</div>
                    <div>Our Vision</div>
                    <div>Wine</div>
                    <div>Market</div>
                    <div>Gift Cards</div>
                    <div>Blog</div>
                    <div>Cookbook</div>
                </div>
                <div className='flex'>
                    <div>Suppliers</div>
                    <div>Affiliates</div>
                    <div>Supply Chains Act</div>
                    <div>Food Safety</div>
                    <div>Career</div>
                    <div>Press</div>
                    <div>Our Team</div>
                    <div>Investor Relations</div>
                </div>
                <div className='flex' >
                    <div>Military & Veterans</div>
                    <div>Students</div>
                    <div>Teachers</div>
                    <div>Seniors (+55)</div>
                    <div>Medical Staff</div>
                    <div>First Responders</div>
                </div>

                <div className='flex' >
                    <div>Customer Support</div>
                    <div>Help Center & FAQ</div>
                    <div>contact@bechef.com</div>
                    <div>(646) 891-4349</div>
                </div>
            </div>
            
            <div className='footerdetails'>
                
                <div id='detail'>
                    <p  fontWeight='bold' marginRight={'10px'}>© Be Chef, LLC 2023</p>
                    <p>
                    Do Not Sell or Share My Info | Ad Preferences | Privacy | Terms</p>
                </div>
                <div >
                        <img style={{width:'70%'}} src="https://global.discourse-cdn.com/turtlehead/original/2X/e/ee0e6fd4d6ad3283ce1b38e28481a51cb25a9dac.png" alt="google"/>
                </div>
            </div>
            
            <p>If you are using a screen reader and are having problems using this website, please call1-844-462-8299for assistance.</p>
        </div>
    </div>
  )
}

export default Footer