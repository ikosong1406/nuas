import React from "react";
import Header from "../components/Header";
import cargif from "../assets/team.jpeg";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header>
        <div className="bg-white text-gray-900 font-sans pt-16">
          {/* Hero Section */}
          <section className="relative h-96">
            <img
              src={cargif} // Ensure this path is correct
              alt="Background GIF"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
              <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Item */}
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">contact@yourwebsite.com</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Luxury Ave, Downtown, Cityname
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-10 w-full max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Connect with Us
            </h2>
            <div className="flex justify-center space-x-6 text-blue-600 text-3xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bluey"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="bg-gray-900 text-black py-8">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
              <p>
                &copy; {new Date().getFullYear()} National Union of Andoni
                Students. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </Header>
    </>
  );
};

export default Contact;
