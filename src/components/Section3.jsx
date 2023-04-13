// import React from "react";
import React, { useEffect, useState } from "react";
import "../styles/Section3.css";
import { Link } from "react-router-dom";
import rafiki from "../images/rafiki.png";
import cuate from "../images/cuate.png";
import amico from "../images/amico.png";

const Section3 = () => {
  const [seeLess, setSeeLess] = useState(true);

  return (
    <div>
      <section className="sec3">
        <h2 className="text-align-center">
          Why do people get involved with Cryptocurrencies?
        </h2>
        <Link
          onClick={() => {
            setSeeLess(!seeLess);
          }}
          className="text-decoration-none btn px-4 mx-auto text-purple"
        >
          See Less
        </Link>
        {seeLess && (
          <div className="sec3a">
            <div className="border-1 rounded-2 bg-white p-3 bod mx-auto">
              <img src={rafiki} alt="" />
              <h3>Easy Mode of Payment</h3>
              <p>
                People can now easily send and receive money from anywhere in
                the world to purchase goods and pay for services.
              </p>
            </div>
            <div className="border-1 rounded-2 bg-white p-3 bod mx-auto">
              <img src={cuate} alt="" />
              <h3>Financial Freedom</h3>
              <p>
                Just like the internet no single entity controls the Crypto
                network which provides users transparency and privacy, which
                puts you in absolute control of your money.
              </p>
            </div>
            <div className="border-1 rounded-2 bg-white p-3 bod mx-auto">
              <img src={amico} alt="" />
              <h3>Investment</h3>
              <p>
                The constant demand as made Cryptocurrecies a Digital Gold used
                for alternative store of wealth on long term investments.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Section3;
