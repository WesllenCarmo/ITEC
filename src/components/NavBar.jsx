import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>
          <span>ITEC</span>
        </Link>
      </div>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/programs">
          <span>Programs</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
