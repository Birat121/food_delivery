import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <h2> FoodMandu</h2>
          <p>Foodmandu is a leading online food delivery app that brings a wide variety of cuisines right to your doorstep. With a user-friendly interface, it offers seamless browsing through restaurants and quick order placement. </p>
          <div className='footer-social-icons'>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
              <img src={assets.facebook_icon} alt='Facebook'/>
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
              <img src={assets.linkedin_icon} alt='LinkedIn'/>
            </a>
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-right'>
          <h2>Contact Us</h2>
          <ul>
            <li>+9108890000</li>
            <li>foodmandu@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        &copy; 2023 Foodmandu. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
