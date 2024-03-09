import React from "react";
import banner from "../../assets/contact-banner.png";
import pic2 from '../../assets/pic2.jpeg'
import pic3 from '../../assets/pic3.jpeg'
import pic4 from '../../assets/pic4.jpeg'

const ScreenTwo = () => {
  return (
    <div className="screen-two-container">
      <div className="card-container">
        <h1>A Large Text at the center </h1>
        <div className="card">
          <img src={banner} alt="img" />
          <div className="overlay">
            <h3>Learning </h3>
            <i class="fas fa-graduation-cap"></i>
          </div>
        </div>
        <div className="card">
          <img src={pic2} alt="img" />
          <div className="overlay">
            <h3>Growing </h3>
            <i class="fas fa-seedling"></i>
          </div>
        </div>
        <div className="card">
          <img src={pic3} alt="img" />
          <div className="overlay">
            <h3>Experience </h3>
            <i class="fas fa-eye"></i>
          </div>
        </div>
        <div className="card">
          <img src={pic4} alt="img" />
          <div className="overlay">
            <h3>Be the Best </h3>
            <i class="fas fa-fist-raised"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;
