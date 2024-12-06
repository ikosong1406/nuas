import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../components/Header1";

const AddGallery = () => {
  const [gallery, setGallery] = useState({
    description: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGallery({ ...gallery, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Update cover state with the file
      setImagePreview(URL.createObjectURL(file)); // Set a preview for the frontend
    }
  };

  // Add news
  const addGallery = async (e) => {
    e.preventDefault();

    if (!gallery.description || !image) {
      toast.error("All fields including the profile image are required!");
      return;
    }

    // Create a FormData object to handle both text and file data
    const data = new FormData();

    // Append the form data
    data.append("description", gallery.description);

    // Append the cover image
    data.append("image", image);

    try {
      // Send a POST request to the backend
      const response = await axios.post(`${BackendApi}/addGallery`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // This tells the backend you're sending form data with a file
        },
      });

      if (response.status === 200) {
        toast.success("Gallery added successfully!");

        // Reset the form to default values after successful creation
        setGallery({
          description: "",
        });
        setImage(null);
        setImagePreview(null);
      } else {
        toast.error("Failed to add gallery");
      }
    } catch (error) {
      console.error("Error adding alumni:", error);
      toast.error("Failed to add gallery. Please try again.");
    }
  };

  return (
    <Header1>
      <div className="bg-gray-100 min-h-screen p-8 pt-24">
        <ToastContainer />
        <h2 className="text-2xl font-bold text-gold mb-6">Add Gallery</h2>
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
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter the description"
              value={gallery.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={addGallery}
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Gallery
          </button>
        </form>
      </div>
    </Header1>
  );
};

export default AddGallery;
