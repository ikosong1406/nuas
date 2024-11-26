import React, { useState } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewNews = () => {
  const [newNews, setNewNews] = useState({
    heading: "",
    body: "",
  });
  const [cover, setCover] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNews({ ...newNews, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCover(file); // Update cover state with the file
      setImagePreview(URL.createObjectURL(file)); // Set a preview for the frontend
    }
  };

  // Add news
  const addNews = async (e) => {
    e.preventDefault();

    if (!newNews.heading || !newNews.body || !cover) {
      toast.error("All fields including the cover image are required!");
      return;
    }

    // Create a FormData object to handle both text and file data
    const data = new FormData();

    // Append the form data
    data.append("heading", newNews.heading);
    data.append("body", newNews.body);

    // Append the cover image
    data.append("cover", cover);

    try {
      // Send a POST request to the backend
      const response = await axios.post(`${BackendApi}/newNews`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // This tells the backend you're sending form data with a file
        },
      });

      if (response.status === 200) {
        toast.success("News created successfully!");

        // Reset the form to default values after successful creation
        setNewNews({
          heading: "",
          body: "",
        });
        setCover(null);
        setImagePreview(null);
      } else {
        toast.error("Failed to create news");
      }
    } catch (error) {
      console.error("Error adding news:", error);
      toast.error("Failed to add news. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 pt-24">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-gold mb-6">Add New News</h2>
      <form className="space-y-6">
        {/* Image Upload */}
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-48 h-48 object-cover rounded shadow"
              />
            </div>
          )}
        </div>

        {/* Heading */}
        <div>
          <label
            htmlFor="heading"
            className="block text-gray-700 font-medium mb-2"
          >
            Heading
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            placeholder="Enter the news heading"
            value={newNews.heading}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Body */}
        <div>
          <label
            htmlFor="body"
            className="block text-gray-700 font-medium mb-2"
          >
            Body
          </label>
          <textarea
            id="body"
            name="body"
            placeholder="Enter the news body"
            value={newNews.body}
            onChange={handleInputChange}
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={addNews}
          className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default NewNews;
