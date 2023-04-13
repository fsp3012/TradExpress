import React from "react";
import { LINK } from "react-router-dom";
import "../styles/Footer.css";
import copyright from "../images/copyright.png";
const Footer = () => {
  return (
    <div className="d-flex justify-content-center gap-2 footer">
      <img src={copyright} alt="" />
      <p>2021 Tradexpress Technologies. All Right Reserved</p>
    </div>
  );
};

export default Footer;
