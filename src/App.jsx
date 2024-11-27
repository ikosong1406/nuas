import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import News from "./pages/News";
import NewNews from "./pages/NewNews";
import EditNews from "./pages/AllNews";
import Leadership from "./pages/Leadership";
import About from "./pages/About";
import Position from "./pages/Position";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/position" element={<Position />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cc/admin" element={<Login />} />
          <Route path="/addnews" element={<NewNews />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/allnews" element={<EditNews />} />
          <Route path="/editcontact" element={<EditContact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
