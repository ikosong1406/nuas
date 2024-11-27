import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { toast } from "react-toastify";
import Header1 from "../components/Header1";

const EditNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all news from the backend
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BackendApi}/allNews`);
        const fetched = response.data;
        setNews(fetched.reverse());
      } catch (error) {
        console.error("Error fetching news:", error);
        toast.error("Failed to load news. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Delete a specific news item
  const deleteNews = async () => {
    const data = {
      id: news._id,
    };
    try {
      const response = await axios.delete(`${BackendApi}/deleteNews`, data);
      if (response.status === 200) {
        toast.success("News deleted successfully!");
        // Remove the deleted news item from the local state
        setNews(news.filter((item) => item._id !== id));
      } else {
        toast.error("Failed to delete news. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Failed to delete news. Please try again.");
    }
  };

  return (
    <Header1>
      <div className="bg-gray-100 min-h-screen pt-24 p-6">
        <h2 className="text-2xl font-bold text-gold mb-6">Edit News</h2>
        {isLoading ? (
          <p>Loading news...</p>
        ) : news.length === 0 ? (
          <p>No news available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                {item.cover && (
                  <img
                    src={item.cover}
                    alt={item.heading}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.heading}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.body.slice(0, 100)}...
                </p>
                <button
                  onClick={() => deleteNews(item._id)}
                  className="bg-red text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Header1>
  );
};

export default EditNews;
