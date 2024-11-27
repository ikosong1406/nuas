import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import BackendApi from "../components/BackendApi";
import background from "../assets/logo.png"; // Adjust the path to match your Vite project structure

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${BackendApi}/login`, userData);
      navigate("/leadership");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Login error");
      }
      setLoading(false);
    }
  };

  return (
    <Header>
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center min-h-fit py-36"
        style={{ backgroundImage: `url(${background})`, minHeight: 1000 }}
      >
        <ToastContainer />

        {/* Dark overlay to dim the background */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Login Form Container */}
        <div className="relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Sign in to NUAS
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Please ensure you are visiting the correct URL
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-200 rounded-lg text-black focus:outline-none border"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-200 rounded-lg text-black focus:outline-none border"
            />
            <button
              onClick={handleLogin}
              className="w-full p-3 bg-gold rounded hover:bg-blue-500"
              disabled={loading}
            >
              {loading ? "Authenticating Details..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Login;
