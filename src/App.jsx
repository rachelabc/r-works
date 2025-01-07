import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import Projects from './assets/pages/Projects'; // Ensure this path is correct

import About from './assets/pages/About.jsx'; // Ensure the path is correct
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar stays visible across all pages */}
      <Routes>
        {/* Home page */}
        <Route
          path="/r-works"
          element={
            <div className="home">
              <div className="top">
                <div className="top-container">
                  <div className="button-container">
                    <button
                      type="button"
                      className="linkedin-button"
                      onClick={() =>
                        window.location.href =
                        "https://www.linkedin.com/in/rachelli15/?hl=en"
                      }
                    >
                      LINKEDIN
                    </button>
                    <button
                      type="button"
                      className="resume-button"
                      onClick={() =>
                        window.location.href =
                        "https://www.instagram.com/rachey_rache15/?hl=en"
                      }
                    >
                      RESUME
                    </button>
                  </div>
                </div>

                <div className="about">
                  <h1 className="extra-bold-title">
                    <span className="highlight">Hi!</span> I'm Rachel Li
                  </h1>
                  <p className="about-bio-one">
                    🧠💻 I’m a third-year student at UC Berkeley, studying Cognitive Science and Data Science!
                  </p>
                  <p className="about-bio-three">
                    🖌️✨ I have a strong passion for UI/UX Design, Product Management, User Research, and more! In
                    my free time, I like to hit tennis, crochet, and sew stuffed animals!
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* About page */}
        <Route path="/r-works/projects" element={<Projects />} />
        <Route path="/r-works/about" element={<About />} />



      </Routes>
    </Router>
  );
};

export default App;
