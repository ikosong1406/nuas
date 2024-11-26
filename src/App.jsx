import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Home from "./pages/Home";
import News from "./pages/News";
import NewNews from "./pages/NewNews";
import EditNews from "./pages/AllNews";
import Leadership from "./pages/Leadership";

function App() {
  const Layout = ({ children }) => (
    <>
      <Header />
      {children}
    </>
  );

  const Layout1 = ({ children }) => (
    <>
      <Header1 />
      {children}
    </>
  );

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/news"
            element={
              <Layout>
                <News />
              </Layout>
            }
          />
          <Route
            path="/cc/addnews"
            element={
              <Layout1>
                <NewNews />
              </Layout1>
            }
          />
          <Route
            path="/cc/leadership"
            element={
              <Layout1>
                <Leadership />
              </Layout1>
            }
          />
          <Route
            path="/cc/allnews"
            element={
              <Layout1>
                <EditNews />
              </Layout1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
