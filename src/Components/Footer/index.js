import { react } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png"
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className="nav-footerul">
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
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <p className="rightsreservedtag">
        Silk Route. All rights reserved © 2023
      </p>
    </div>
  );
};
export default Footer;
