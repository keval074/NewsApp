import React from "react";
import { Link } from "react-router-dom";

 

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top nav-color navbar-expand-lg navbar-light bg-dark" >
        <div className="container-fluid">
          <Link className="navbar-brand  text-white" to="/">
          Newscaster
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white" to="/Buiseness">
                Buiseness
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white" to="/Entertainement">
                Entertainement
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white" to="/General">
                General
                </Link>
              </li> */}
               <li className="nav-item">
                <Link className="nav-link text-white" to="/Health">
                Health
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white" to="/Science">
                Science
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white" to="/Sports">
                Sports
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white" to="/Technology">
                Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }

  export default Navbar
 

