import React from "react";
import "../styles/Login.css";
import check from "../images/check.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form className="p-3 mt-5 rounded-2">
        <h2 className="py-5">Welcome Back</h2>
        <div className="d-flex flex-column gap-4 w-75 mx-auto mb-4">
          <input
            className="border-0 ps-4 rounded-2"
            type="text"
            placeholder="Username"
          />
          <input
            className="border-0 ps-4 rounded-2"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="d-flex justify-content-between w-75 mx-auto">
          <div className="d-flex gap-2">
            <img src={check} alt="" />
            <p>Remember Password</p>
          </div>
          <p className="text-purple">Forgot Password?</p>
        </div>
        <button className="bg-purple text-white w-75 border-0 rounded-2">
          Log in
        </button>
        <p className="my-4">
          New User ?{" "}
          <Link
            className="text-decoration-none text-purple ps-2"
            to="/indi-bus"
          >
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
