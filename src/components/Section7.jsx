import React from "react";
import "../styles/Section7.css";
import { LINK } from "react-router-dom";
import socialmedia from "../images/social-media.png";

const Section7 = () => {
  return (
    <div className=" sec7 text-start">
      <ul>
        <li>
          <h3>Products</h3>
        </li>
        <li>Bitcoin</li>
        <li>Alt</li>
        <li>Fiat</li>
        <li>Refill</li>
        <li>P2P</li>
      </ul>
      <ul>
        <li>
          <h3>Learn</h3>
        </li>
        <li>Blog</li>
        <li>Help Center</li>
      </ul>
      <ul>
        <li>
          <h3>Contact</h3>
        </li>
        <li>hello@tradExpress.com</li>
        <li>support@tradExpress.com</li>
        <li>
          <img src={socialmedia} alt="" />
        </li>
      </ul>
      <ul>
        <li>
          <h3>Company</h3>
        </li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Rates</li>
        <li>Mobile</li>
      </ul>
      <ul>
        <li>
          <h3>Legal</h3>
        </li>
        <li>Privacy Policy</li>
        <li>Anti-Money Laundering</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
  );
};

export default Section7;
