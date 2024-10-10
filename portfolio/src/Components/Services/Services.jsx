import React from 'react'
import '../Services/Services.css'
import themepattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
    <div className='services-title'>
        <h1>My Skill</h1>
        <img src={themepattern} alt="" />
    </div>
    <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className="services-fromate">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}
    </div>
      
    </div>
  )
}

export default Services
