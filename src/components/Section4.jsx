import React from "react";
import "../styles/Section4.css";
import { Link } from "react-router-dom";
import bitcoin from "../images/bitcoin-cuate.png";
import piggy from "../images/piggy-bank-rafiki.png";
import profilepic from "../images/profile-pic-cuate.png";
import no1 from "../images/no1.png";
import no2 from "../images/no2.png";
import no3 from "../images/no3.png";

const Section4 = () => {
  return (
    <div>
      <section className="sec4 p-3">
        <h2 className="p-1 text-purple1">
          Buy and Sell your Cryptocurrency in 3 simple steps
        </h2>
        <p className="p-1 text-blackk">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
          faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
          ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
          consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio
          molestie amet.
        </p>
        <div className="flex4a">
          <div>
            <div className="d-flex gap-3 mb-2">
              <img src={no1} alt="" />
              <h3 className="">Create a free Account</h3>
            </div>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
          <img src={profilepic} alt="" />
        </div>
        <div className="flex4b">
          <div>
            <div className="d-flex gap-3 mb-2">
              <img src={no2} alt="" />
              <h3 className="">Deposit</h3>
            </div>
            <p>
              Choose your preferred deposit option like bank transfer,
              credit/debit card or send digital asset directly to your wallet
              for easy funding/withdrawal.
            </p>
          </div>
          <img className="flex4b1" src={piggy} alt="" />
        </div>
        <div className="flex4a">
          <div>
            <div className="d-flex gap-3 mb-2">
              <img src={no3} alt="" />
              <h3 className="">Buy/ Sell Crypto</h3>
            </div>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
          <img src={bitcoin} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Section4;
