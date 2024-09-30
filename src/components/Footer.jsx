import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/image/logo.png"; 

const Footer = () => {
  return (
    <footer className="Footer container-fluid p-0">
      <div className="text-center">
        <img src={logo} alt="Logo" />

        <div className="menu p-0">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                ABOUT ME
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={({ isActive }) => (isActive ? "active" : "")}>
                PRICING
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center">
          <p>5577 West 79th Ave, Apt 07, Arvada, CO 80003.</p>
        </div>
        <div>
          <p>Phone: +1 424 382 0299</p>
          <p>
            Email:{" "}
            <a href="mailto:info@digitechpartners.co">
              info@digitechpartners.co
            </a>
          </p>
        </div>
      </div>
      <div className="row last-div p-0 m-0">
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #019BF8, #11efe3)",
            borderRadius: "0px 50px 0px 0px",
            margin: "0",
          }}
          className="col-lg-4 firts"
        >
          &nbsp;
        </div>
        <div className="col-lg-4 second m-0 p-0">&nbsp;</div>
        <div
          style={{
            backgroundImage: "linear-gradient(to left, #019BF8, #11efe3)",
            borderRadius: "50px 0px 0px 0px",
            margin: "0",
          }}
          className="col-lg-4 third"
        >
          &nbsp;
        </div>
      </div>
    </footer>
  );
};

export default Footer;
