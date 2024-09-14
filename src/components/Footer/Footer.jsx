import React from 'react'
import Airplane from '../../assests/Airplane.png'
import { TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'



const Footer = () => {
  return (
   <div className='footer'>
     <div className="sectionContainer container grid">
      <div className="gridOne">
        <div className="logoDiv">
        <img src={Airplane} className='Logo'/>
        </div>
        <p> Your mind should be stronger than your feelings,fly!</p>
        <div className="socialIcon flex">
          <TiSocialFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <FaPinterest className='icon'/>
        </div>
      </div>

      <div className="footerLinks">
        <span className='linkTitle'>Know more about FLY!</span>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Flight Status</a>
        </li>
        <li>
          <a href="">Travel</a>
        </li>
        <li>
          <a href="">Check-In</a>
        </li>
        <li>
          <a href="">Manage your booking</a>
        </li>
        
      </div>
      
    </div>

    <div className="company flex">
      <p>FLY|INDIA contact-000-00-000-0000 Email:fly@gmail.com </p>
    </div>
     
  </div>
)
}

export default Footer