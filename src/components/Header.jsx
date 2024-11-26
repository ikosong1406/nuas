import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-black w-full fixed z-50 flex px-10 py-2 justify-between">
      <div className="flex items-center">
        <NavLink to="/" className="text-decoration-none" style={{ width: 40 }}>
          <img src={logo} style={{ width: 40, height: 40 }} alt="Logo" />
        </NavLink>
        <div className="text-xl font-bold cursor-pointer ml-2 text-gold">
          NUAS
        </div>
      </div>

      <div className="flex items-center">
        <NavLink to="/" className="text-white text-lg font-semibold mx-5">
          Home
        </NavLink>
        <NavLink
          to="/news"
          className="text-white text-lg font-semibold mx-5 text-decoration-none"
        >
          News
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
