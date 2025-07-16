import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/" end>
        {/* icon */}
      </NavLink>
      <NavLink to="/" end>
        NihonGOBuddy
      </NavLink>
      <NavLink to="/bookmark" end>
        bookmarks
      </NavLink>
      <NavLink to="/test">test</NavLink>
    </nav>
  );
};

export default Navbar;
