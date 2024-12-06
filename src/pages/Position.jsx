import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import cargif from "../assets/team.jpeg";
import axios from "axios";
import BackendApi from "../components/BackendApi";

const Position = () => {
  const [leadership, setLeadership] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${BackendApi}/allPosition`);
        setLeadership(response.data);
      } catch (error) {
        console.error("Error fetching position:", error);
      }
    };

    const fetchAlumni = async () => {
      try {
        const response = await axios.get(`${BackendApi}/allAlumni`);
        setAlumni(response.data);
      } catch (error) {
        console.error("Error fetching position:", error);
      }
    };

    fetchLeaders();
    fetchAlumni();
  }, []);
  return (
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
            <h1 className="text-3xl font-bold mb-4">
              56th National Executive Council (NEC)
            </h1>
          </div>
        </section>

        <h3 className="text-3xl font-bold mb-4 text-gold mt-8 text-center">
          Our Leadership
        </h3>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gold mb-2">
                {leader.name}
              </h4>
              <p className="text-lg text-gray-700">{leader.position}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-4 text-gold mt-8 text-center">
          PATRON, LM and Past Leaders
        </h3>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gold mb-2">
                {leader.name}
              </h4>
              <p className="text-lg text-gray-700">{leader.position}</p>
            </div>
          ))}
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
  );
};

export default Position;
