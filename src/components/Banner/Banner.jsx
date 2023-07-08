// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
} from "../../../assets/image/slider-image";
import "./Banner.css";
import "./Banner.js";
const Banner = () => {
  return (
    <div className="banner">
      <div className="slider-wrapper">
        <div className="slider-item active">
          <img src={img1} alt="lenexit.com" />
        </div>
        <div className="slider-item ">
          <img src={img2} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img3} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img4} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img5} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img6} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img7} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img8} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img9} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img10} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img11} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img12} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img13} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img14} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img16} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img17} alt="lenexit.com" />
        </div>
        <div className="slider-item">
          <img src={img15} alt="lenexit.com" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
