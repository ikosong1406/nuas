import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../components/BackendApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../components/Header1";

const Leadership = () => {
  const [leadership, setLeadership] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [selectedLeader, setSelectedLeader] = useState(null); // Holds the selected leader details for editing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch leadership data on mount
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

  // Open the modal and set the selected leader
  const handleEditClick = (leader) => {
    setSelectedLeader(leader);
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
    formData.append("name", selectedLeader.name);
    if (selectedLeader.imageFile) {
      formData.append("image", selectedLeader.imageFile);
    }

    try {
      const response = await axios.post(
        `${BackendApi}/editPosition`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        const updatedLeadership = leadership.map((leader) =>
          leader.id === selectedLeader.id ? { ...selectedLeader } : leader
        );
        setLeadership(updatedLeadership);
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
        <h2 className="text-2xl font-bold text-gold mb-6">Edit Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leadership.map((leader) => (
            <div
              key={leader.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {leader.name}
              </h3>
              <p className="text-lg text-gray-700">{leader.position}</p>
              <button
                onClick={() => handleEditClick(leader)}
                className="mt-4 bg-gold text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gold mb-6 mt-10">
          PATRON, LM and Past Leaders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alumni.map((leader) => (
            <div
              key={leader.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {leader.name}
              </h3>
              <p className="text-lg text-gray-700">{leader.position}</p>
            </div>
          ))}
        </div>

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
                {/* Image Upload */}
                <div>
                  {selectedLeader.image && (
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full"
                  />
                </div>
                {/* Name */}
                <input
                  type="text"
                  value={selectedLeader.name}
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

export default Leadership;
