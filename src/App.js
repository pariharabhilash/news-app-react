import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import News from "./components/News";

const App = () => {
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
