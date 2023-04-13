import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Section1.css'
import appstore from '../images/app-store.png'
import playstore from '../images/play-store.png'
import twocircle from '../images/two-circle.png'

const Section1 = () => {
  return (
    <div className="sec1">
      <div className="sec1a">
        <h1 className="text-white">
          Buy, Sell and manage your Crypto on TradExpress.
        </h1>
        <p className="text-white"> Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
        <Link
          className="text-decoration-none btn bg-white mb-3 mx-auto text-purple"
          to="/indi-bus"
        >
          Get Started
        </Link>
        <div className="d-flex gap-4 app-play" >
            <img src={appstore} alt="" />
            <img src={playstore} alt="" />
        </div>
      </div>
      <div className="twocircle">
          <Link> <img className="w-100" src={twocircle} alt="" /></Link>
        </div>
    </div>
  );
};

export default Section1;
