import React from 'react';
import './Footer.css';
import foodieLogo from '../../assets/admin_assets/foodieLogo.png';
import facebook_icon from '../../assets/frontend_assets/facebook_icon.png';
import twitter_icon from '../../assets/frontend_assets/twitter_icon.png';
import linkedin_icon from '../../assets/frontend_assets/linkedin_icon.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
         <div className="footer-content-left">
           <img src={foodieLogo} alt="" />
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, neque voluptatum officia hic minima nam ipsam illo dolorem. Soluta, nemo!</p>
            <div className="footer-social-icons">
                <img src={facebook_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={linkedin_icon} alt="" />
            </div>
         </div>

         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>

         <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-456-7890</li>
                <li>contact@foodie.com</li>
             </ul>
         </div>
         
       </div>
       <hr/>
       <p className="footer-copyright">
        Copyright 2024 © foodie.com - All Right Reserved.
       </p>
    </div>
  )
}

export default Footer