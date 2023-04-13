import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import TradExpressLogo from "../images/TradExpress.png";

const Navbarr = () => {
  return (
    <Navbar className="nav1" expand="lg">
      <Container>
        <Link to="/">
          <img src={TradExpressLogo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-3 align-items-center">
            <Link
              className="text-white text-decoration-none w-50"
              to="/buy-sell"
            >
              Instant Buy/Sell
            </Link>
            <Link className="text-white text-decoration-none" to="#">
              Learn
            </Link>
            <Link
              className="text-white text-decoration-none btn border-white w-50 mx-auto"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-decoration-none btn bg-white w-50 mx-auto text-purple"
              to="/indi-bus"
            >
              Get Started
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
