import React from "react";
import "../styles/Indibus.css";
import { Link } from "react-router-dom";

const Indibus = () => {
  return (
    <div className="indi">
      <form className="mt-5 mb-5 pb-2">
        <div className="d-flex flex-column gap-3 inp p-3">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Referal Code (optional)" />
          <input type="phone" placeholder="Phone Number" />
        </div>
        <p className="ptext mx-auto">
          By clicking the Sign Up button below, you agree to TradExpress{" "}
          <span className="text-purple">terms and service</span>
        </p>
        <button className="bg-purple text-white bttn">Sign Up</button>
        <p className="pp">
          Already have an account ?{" "}
          <Link className="text-decoration-none text-purple" to="/login">
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Indibus;
