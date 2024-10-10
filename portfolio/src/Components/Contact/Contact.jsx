import React from "react";
import "./Contact.css";
import themepattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8da11ee0-e383-4b9d-80d2-4329dd0862b7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id='contact' className="contact">
      <div className="contacttitle">
        <h1>Get in touch</h1>
        <img src={themepattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contactleft">
          <h1>Let's talk</h1>
          <p>
          I'm currently available to take on new projects and am looking for a MERN developer role. Feel free to contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>kartikvam799@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 7906904785</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Noida, Uttar pradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>

            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>

            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" ></textarea>
            <button className="contact-submit" type="submit">
                Submit Now
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
