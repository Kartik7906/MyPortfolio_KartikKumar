import React from 'react'
import '../Hero/Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home'  className='hero'>
        <img src={profile} alt="Profile-img" />
        <h1><span>I'm Kartik Kumar,</span> a Web Developer and Competitive Coder</h1>
        <p>I am a BTech graduate and Web Developer with expertise in MERN stack & over a year of experience in competitive coding.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink>
            </div>
            <div className="hero-resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero