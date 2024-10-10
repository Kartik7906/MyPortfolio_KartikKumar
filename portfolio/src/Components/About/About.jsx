import React from 'react'
import '../About/About.css'
import themepic from '../../assets/theme_pattern.svg'
import img from '../../assets/profilesection.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="aboutTitle">
        <h1>About me</h1>
        <img src={themepic} alt="profileimg" />
      </div>

      <div className="aboutSection">
        <div className="aboutLeft">
            <img src={img} alt="profileimg" />
        </div>
        <div className="aboutRight">
            <div className="about-para">
                <p>Strong in C++ and DSA, with active competitive coding on CodeChef and Codeforces. Solid knowledge of OS, DBMS, and computer fundamentals.</p>
                <p>I have experience with Node.js and Express.js, enabling me to build scalable web applications and enhance user experiences across industries.</p>
            </div>
            <div className="aboutSkill">
                <div className="skill">
                    <p>React & JavaScript</p><hr style={{width:"40%"}}/>
                </div>
                <div className="skill">
                    <p>Node & Express</p><hr style={{width:"45%"}}/>
                </div>
                <div className="skill">
                    <p>MongoDB</p><hr style={{width:"30%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>550+</h1>
            <p>Problem on Codechef</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>200+</h1>
            <p>Problem on Leetcode</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10+</h1>
            <p>Projects</p>
        </div>
      </div>
    </div>
  )
}

export default About
