import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import Header from "../components/Header";
import cargif from "../assets/team.jpeg";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

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
        console.error("Error fetching news:", error);
      }
    };

    fetchLeaders();
  }, []);

  const handleReadMore = (news) => {
    setSelectedNews(news);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  const handleShare = async (news) => {
    const shareData = {
      title: news.heading,
      text: `Check out this news: ${news.heading}`,
      url: `${window.location.origin}/news/${news.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("News shared successfully!");
      } catch (error) {
        console.error("Error sharing news:", error);
      }
    } else {
      alert(
        "Sharing not supported on this browser. Please copy the link manually."
      );
    }
  };

  return (
    <Header>
      <div className="bg-white text-gray-900 font-sans pt-10">
        {/* Hero Section */}
        <section className="relative h-96">
          <img
            src={cargif}
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
                  <p className="text-gray-700 line-clamp-3">{news.body}</p>
                  <button
                    onClick={() => handleReadMore(news)}
                    className="mt-2 text-bluey font-semibold"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white max-w-2xl w-full mx-4 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedNews.heading}
                </h2>
                <img
                  src={selectedNews.cover}
                  alt={selectedNews.heading}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">{selectedNews.body}</p>
              </div>
              <div className="flex justify-between items-center p-6 border-t">
                <button
                  onClick={handleCloseModal}
                  className="text-red font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => handleShare(selectedNews)}
                  className="text-bluey font-semibold"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-8">
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
