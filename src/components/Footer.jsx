import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <image src={logo} alt="Logo" width={50} height={50} />
          <p className="text-sm mt-4 text-gray-400">NUAS</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0 items-center">
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/termsofuse"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            Terms of Use
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} LuxeRide. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
