import React from "react";
import "./Mywork.css";
import themepattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrowicon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Portfolio</h1>
        <img src={themepattern} alt="Theme Pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt={work.w_name} />;
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowicon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default Mywork;
