import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/portfolioLogo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a full-stack developer specializing in the MERN stack and machine learning. I’m passionate about creating dynamic, user-centric web applications and solving complex coding challenges</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p className="fotter-bottom-left">
        By: <span className="highlight-text">Kartik Kumar Rasanya</span>
        </p>
    </div> 
    </div>
  )
}

export default Footer
