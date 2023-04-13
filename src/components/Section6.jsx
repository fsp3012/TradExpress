import React from "react";
import "../styles/Section6.css";
import { LINK } from "react-router-dom";
import purplebg from "../images/purplebg.png";
import profile1 from "../images/pic1.png";
import profile2 from "../images/pic2.png";
import profile3 from "../images/pic3.png";
import quote from "../images/quote.png";

const Section6 = () => {
  return (
    <div>
      <h2>Customer's Review</h2>
      <section className="sec6">
        <div>
          <div className="sec6d">
            <img className="sec6a" src={purplebg} alt="" />
            <div>
              <img className="quote" src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 sec6c">
            {<img src={profile3} alt="" />}
            <div className="d-flex-column mb-6">
              <h3>Ireti</h3>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        <div>
          <div className="sec6d">
            <img className="sec6a" src={purplebg} alt="" />
            <div>
              <img className="quote" src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 sec6c">
            {<img src={profile1} alt="" />}
            <div className="d-flex-column mb-6">
              <h3>Bayo</h3>
              <p>USA</p>
            </div>
          </div>
        </div>
        <div>
          <div className="sec6d">
            <img className="sec6a" src={purplebg} alt="" />
            <div>
              <img className="quote" src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 sec6c">
            {<img src={profile2} alt="" />}
            <div className="d-flex-column mb-6">
              <h3>Olagoke</h3>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section6;
