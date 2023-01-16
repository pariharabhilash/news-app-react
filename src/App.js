import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const pageSize = 5;
  const apiKey = "";
  const routes = [
    "/",
    "/Business",
    "/Entertainment",
    "/General",
    "/Health",
    "/Science",
    "/Sports",
    "/Technology",
  ];
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          {routes.map((path) => (
            <Route key={path} path={path} element={<News />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
