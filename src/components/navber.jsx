import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/src/assets/image/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container   ">
        <NavLink className="navbar-brand" to="/">
          <img src={logo}alt="Logo" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                ABOUT ME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                PRICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <h5>
            let's talk <br />
            <Link to="/">+1 424 382 0299</Link>
          </h5>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
