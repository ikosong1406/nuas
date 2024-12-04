import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../components/Header1";

const AddAlumni = () => {
  const [alumni, setAlumni] = useState({
    name: "",
    position: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlumni({ ...alumni, [name]: value });
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
  const addAlumni = async (e) => {
    e.preventDefault();

    if (!alumni.name || !alumni.position || !image) {
      toast.error("All fields including the profile image are required!");
      return;
    }

    // Create a FormData object to handle both text and file data
    const data = new FormData();

    // Append the form data
    data.append("name", alumni.name);
    data.append("position", alumni.position);

    // Append the cover image
    data.append("image", image);

    try {
      // Send a POST request to the backend
      const response = await axios.post(`${BackendApi}/addAlumni`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // This tells the backend you're sending form data with a file
        },
      });

      if (response.status === 200) {
        toast.success("Alumni created successfully!");

        // Reset the form to default values after successful creation
        setAlumni({
          name: "",
          position: "",
        });
        setImage(null);
        setImagePreview(null);
      } else {
        toast.error("Failed to create alumni");
      }
    } catch (error) {
      console.error("Error adding alumni:", error);
      toast.error("Failed to add alumni. Please try again.");
    }
  };

  return (
    <Header1>
      <div className="bg-gray-100 min-h-screen p-8 pt-24">
        <ToastContainer />
        <h2 className="text-2xl font-bold text-gold mb-6">Add Alumni</h2>
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
              id="name"
              name="name"
              placeholder="Enter the alumni name"
              value={alumni.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Body */}
          <div>
            <label
              htmlFor="position"
              className="block text-gray-700 font-medium mb-2"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter the alumni position"
              value={alumni.position}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={addAlumni}
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Alumni
          </button>
        </form>
      </div>
    </Header1>
  );
};

export default AddAlumni;
