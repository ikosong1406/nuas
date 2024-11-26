import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header1 = () => {
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
        <NavLink
          to="/cc/addnews"
          className="text-white text-lg font-semibold mx-5"
        >
          Add News
        </NavLink>
        <NavLink
          to="/cc/allnews"
          className="text-white text-lg font-semibold mx-5"
        >
          All News
        </NavLink>
        <NavLink
          to="/cc/leadership"
          className="text-white text-lg font-semibold mx-5 text-decoration-none"
        >
          Leadership
        </NavLink>
      </div>
    </div>
  );
};

export default Header1;
