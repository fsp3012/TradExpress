import React, { useState } from "react";
import Buysell from "../components/Buysell";
import "../styles/Indi.css";
import Buysell2 from "../components/Buysell2";

const BuySell = () => {
  const [active, setActive] = useState("buy");
  const [buy, setBuy] = useState(true)
 return (
    <div>
      <div className="indi mx-auto mt-5">
        <h2>Buy/Sell Instantly</h2>
        <div className="btn22">
          <button
            onClick={() => {
              setActive("buy");
              setBuy(true)
            }}
            className={active === "buy" ? "active" : ""}
          >
            Buy
          </button>
          <button
            onClick={() => {
              setActive("sell");
              setBuy(false)
            }}
            className={active === "sell" ? "active" : ""}
          >
            Sell
          </button>
        </div>
      </div>
      {buy===true?<Buysell />:<Buysell2/>}
      
    </div>
   
  );
};

export default BuySell;
