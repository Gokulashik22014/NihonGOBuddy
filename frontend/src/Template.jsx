import React from "react";
import axios from "axios";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
const Template = () => {
  return (
    <div className="main-container">
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* .outlet */}
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Template;
