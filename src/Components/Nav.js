import React from "react";
import { Link } from "react-router-dom";
import {
  logo,
} from "../assets";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="header">
    <div className="logo">
      <img src={logo}/>
    </div>
    <ul className="nav-ul">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
  );
};
export default Nav;
