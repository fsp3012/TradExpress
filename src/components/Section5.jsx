import React from "react";
import "../styles/Section5.css";
import { Link } from "react-router-dom";
import appstore2 from "../images/app-store2.png";
import playstore2 from "../images/play-store2.png";

const Section5 = () => {
  return (
    <div className="sec5">
      <p>
        Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
      </p>
      <h2>
        Create your account for free and start trading today!
      </h2>
      <Link
        className="text-decoration-none btn bg-purple mb-3 mx-auto text-white"
        to="/indi-bus"
      >
        Get Started
      </Link>
      <div className="d-flex gap-2 app-play2">
        <img src={appstore2} alt="" />
        <img src={playstore2} alt="" />
      </div>
    </div>
  );
};

export default Section5;
