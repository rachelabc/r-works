import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import About from './assets/pages/About.jsx';  // Correct path based on your folder structure
import Projects from "./assets/pages/Projects";
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
