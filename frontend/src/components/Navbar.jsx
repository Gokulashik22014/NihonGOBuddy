import React from "react";
import { NavLink } from "react-router";
import { FaBookBookmark } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/" end>
        {/* icon */}
      </NavLink>
      <NavLink to="/" end>
        NihonGOBuddy
      </NavLink>
      <nav className="nav-icons">
        <NavLink to="/bookmark" end>
          <FaBookBookmark />
        </NavLink>
        <NavLink to="/test">
          <LuNotebookPen />
        </NavLink>
      </nav>
    </nav>
  );
};

export default Navbar;
