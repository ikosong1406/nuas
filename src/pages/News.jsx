import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";

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
    <div className="bg-white text-gray-900 font-sans pt-20">
      {/* Header Section */}
      <header className="bg-gray-900 text-black py-4">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gold">News from NUAS</h1>
        </div>
      </header>

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
            &copy; {new Date().getFullYear()} National Union of Andoni Students.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
