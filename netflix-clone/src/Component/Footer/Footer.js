import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div className='footer_outer_container'>
        <div
        className='footer_inner_container'>
            <div className='footer_icon'
            >
                <li><FacebookIcon/> </li>
                <li><InstagramIcon/></li>
                <li><YouTubeIcon/></li>
            </div>
            <div className='footer_data'>
                <div>
                    <ul>
                       <div><li>Audio Description</li>
                        <li>Investor Relation</li>
                        <li>Legal Notice </li></div>
                        <div>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookies Preferenceses</li></div>
                        <div>
                        <li>Gift Cards</li>
                        <li>Term of Use</li>
                        <li>Cooies Preference</li></div><div>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li></div>
                    </ul>
                </div>
                <div className='Service_code'>
                    <p>Service_Code</p>
                </div>
               <div className='copy_write'>
               <p>&copy; 2024 Netflix , Inc. All rights reserved.</p>
               </div>
            </div>
        </div>
      
    </div>
  )
}
