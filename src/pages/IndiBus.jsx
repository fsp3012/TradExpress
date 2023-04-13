import React from "react";
import Indibus from "../components/Indibus";
import "../styles/Individual.css";
import { useState } from "react";
import Business from "../components/Business";

const IndiBus = () => {
  const [active, setActive] = useState("indvidual");
  const [indi, setIndi] = useState(true)

  return (
    <div className="individual">
      <h2 className="pt-4">Welcome</h2>
      <div className="btn1">
        <button
          onClick={() => {
            setActive("individual");
            setIndi(true);
          }}
          className={active === "individual" ? "active" : ""}
        >
          Individual
        </button>
        <button
          onClick={() => {
            setActive("business");
            setIndi(false);
          }}
          className={active === "business" ? "active" : ""}
        >
          Business
        </button>
      </div>
      {indi === true ? <Indibus /> : <Business />}
    </div>
  );
};

export default IndiBus;
