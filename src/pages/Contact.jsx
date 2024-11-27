import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import cargif from "../assets/team.jpeg";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(`${BackendApi}/allContact`);
        const fetchedData = response.data;

        // Check if data is an array and set the first element
        if (Array.isArray(fetchedData) && fetchedData.length > 0) {
          setContact(fetchedData[0]); // Use the first object in the array
        } else {
          console.error("Unexpected data structure:", fetchedData);
        }
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, []);
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
                  <p className="text-gray-600">{contact.phone}</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">{contact.email}</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">
                    National Union of Andoni Students (NUAS) Worldwide
                  </h3>
                  <p className="text-gray-600">{contact.secretariate}</p>
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
                href="https://www.facebook.com/share/pmprjAEK1463dXc7/ "
                target="_blank"
                rel="noopener noreferrer"
                className="text-bluey"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/2349168239963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green"
                aria-label="Twitter"
              >
                <FaWhatsapp />
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
