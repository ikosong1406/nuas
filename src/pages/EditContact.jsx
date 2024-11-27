import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../components/Header1";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const EditContact = () => {
  const [contact, setContact] = useState([]);
  const [selectedLeader, setSelectedLeader] = useState(null); // Holds the selected leader details for editing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  // Open the modal and set the selected leader
  const handleEditClick = (contact) => {
    setSelectedLeader(contact);
    setIsModalOpen(true);
  };

  // Handle input changes in the modal
  const handleInputChange = (field, value) => {
    setSelectedLeader({ ...selectedLeader, [field]: value });
  };

  // Handle image change in the modal
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Temporary URL for preview
      setSelectedLeader({
        ...selectedLeader,
        image: imageUrl,
        imageFile: file,
      });
    }
  };

  // Save changes and send to backend
  const saveChanges = async () => {
    if (!selectedLeader) return;

    const formData = new FormData();
    formData.append("id", selectedLeader._id);
    formData.append("phone", selectedLeader.phone);
    formData.append("email", selectedLeader.email);
    formData.append("secretariate", selectedLeader.secretariate);

    try {
      const response = await axios.post(`${BackendApi}/editContact`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setIsModalOpen(false);
        toast.success("Changes saved successfully!");
      } else {
        toast.error("Failed to save changes.");
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      toast.error("Failed to save changes.");
    }
  };

  return (
    <Header1>
      <div className="bg-gray-100 min-h-screen pt-24 p-6">
        <ToastContainer />
        <h2 className="text-2xl font-bold text-gold mb-6">Edit Contact</h2>

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

        <button
          onClick={() => handleEditClick(contact)}
          className="mt-4 bg-gold text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>

        {/* Modal */}
        {isModalOpen && selectedLeader && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Edit Leader
              </h3>
              <div className="space-y-4">
                {/* Name */}
                <p htmlFor="" className="mt-4">
                  Phone
                </p>
                <input
                  type="text"
                  value={selectedLeader.phone}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Name"
                />
                <p htmlFor="" className="mt-4">
                  Email
                </p>
                <input
                  type="text"
                  value={selectedLeader.email}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Name"
                />
                <p htmlFor="" className="mt-4">
                  Secretariate
                </p>
                <input
                  type="text"
                  value={selectedLeader.secretariate}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Name"
                />
              </div>
              <button
                onClick={saveChanges}
                className="mt-6 bg-gold text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </Header1>
  );
};

export default EditContact;
