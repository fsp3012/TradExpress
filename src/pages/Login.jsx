import React, { useState } from "react";
import "../styles/Login.css";
import check from "../images/check.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showUsernameError, setUsernameError] = useState(false);
  const [errors, setErrors] = useState({
    username: "Username is required",
    password: "Password is required",
  });
  return (
    <div className="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let formData = {
            user: username,
            pass: password,
          };
          console.log(formData);
          if (username === "") {
            setUsernameError(true);
          }
          if (password === "") {
            setShowPasswordError(true);
          }
        }}
        className="p-3 mt-5 rounded-2"
      >
        <h2 className="py-5">Welcome Back</h2>
        <div className="d-flex flex-column gap-4 w-75 mx-auto mb-4">
          <input
            onChange={(event) => {
              setUsername(event.target.value);
              setUsernameError(false)
            }}
            className="border-0 ps-4 rounded-2"
            type="text"
            placeholder="Username"
          />
          {showUsernameError && (
            <span className="text-danger text-start">{errors.username}</span>
          )}
          <input
            onChange={(event) => {
              setPassword(event.target.value);
              setShowPasswordError(false);
            }}
            className="border-0 ps-4 rounded-2"
            type="password"
            placeholder="Password"
          />
        {showPasswordError && (
          <span className="text-danger text-start">{errors.password}</span>
        )}
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
