import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header1 = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-black w-full fixed z-50 flex px-10 py-3 justify-between items-center">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-decoration-none"
            style={{ width: 40 }}
          >
            <img src={logo} style={{ width: 40, height: 40 }} alt="Logo" />
          </NavLink>
          <div className="text-xl font-bold cursor-pointer ml-2 text-gold">
            NUAS
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden p-2 bg-white rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`bg-black lg:w-64 p-6 fixed inset-y-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:block`}
        >
          <nav className="space-y-4 mt-20">
            <NavLink
              to="/leadership"
              className="block hover:bg-gold p-2 rounded flex items-center space-x-2 text-white text-lg font-semibold"
              activeClassName="bg-orange"
            >
              <span>Leadership</span>
            </NavLink>
            <NavLink
              to="/addnews"
              className="block hover:bg-gold p-2 rounded flex items-center space-x-2 text-white text-lg font-semibold"
              activeClassName="bg-orange"
            >
              <span>Add News</span>
            </NavLink>
            <NavLink
              to="/allnews"
              className="block hover:bg-gold p-2 rounded flex items-center space-x-2 text-white text-lg font-semibold"
              activeClassName="bg-orange"
            >
              <span>All News</span>
            </NavLink>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Header1;
