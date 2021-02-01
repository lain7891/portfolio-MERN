import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div>
          <nav className="navbar is-mobile" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
  
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
  
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                {/* <a className="navbar-item">Home</a> */}
  <Link to="Home" className="navbar-item title is-1">Tutor Hub</Link>
  
  </div>
  
  <div className="navbar-end">
  
                {/* <a className="navbar-item">Documentation</a> */}
                <NavLink to="Projects" className="navbar-item title is-3" activeClassName="active">Resources</NavLink>
                <NavLink to="Contact" className="navbar-item title is-3" activeClassName="active">Log In</NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
               
  
                
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
};

export default Navbar;