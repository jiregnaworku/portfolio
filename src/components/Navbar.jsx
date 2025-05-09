import React from "react";

import "../styles/Navbar.css"; // Assuming you have separate CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span> Jiregna.Dev</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
