import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const getActive = ({ isActive }) => ({
    color: isActive ? "red" : "white",
    textDecoraiton: isActive ? "underline" : "none",
    fontWeight:isActive?"bold":""
  });

  return (
    <div className="navbar-container">
      <NavLink style={ getActive } to="/">
        Home
      </NavLink>
      <NavLink style={ getActive } to="/page">
        page2
      </NavLink>
    </div>
  );
}

export default NavBar;
