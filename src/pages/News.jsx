import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import Header from "../components/Header";
import cargif from "../assets/team.jpeg";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
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
        const response = await axios.get(`${BackendApi}/allNews`);
        const fetched = response.data;
        setNewsData(fetched.reverse());
      } catch (error) {
        console.error("Error fetching position:", error);
      }
    };

    fetchLeaders();
  }, []);
  return (
    <Header>
      <div className="bg-white text-gray-900 font-sans pt-10">
        {/* Hero Section */}
        <section className="relative h-96">
          <img
            src={cargif} // Ensure this path is correct
            alt="Background GIF"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">News from NUAS</h1>
          </div>
        </section>

        {/* News Section */}
        <section className="pt-4">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={news.cover}
                    alt={news.heading}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {news.heading}
                  </h2>
                  <p className="text-gray-700">{news.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

export default NewsPage;
