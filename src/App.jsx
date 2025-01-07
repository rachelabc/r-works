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
                <img src="/Group 13.png" alt="Group 13" style={{ width: "100%", height: "100%" }} />



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
                  <p>
                    <span className="hi">Hi!</span>{' '}
                    <span className="name">I'm Rachel Li</span>
                  </p>
                  <h2 className="about-bio-one">
                    🧠💻 I’m a third-year student at UC Berkeley, studying Cognitive Science and Data Science!
                  </h2>
                  <h2 className="about-bio-three">
                    🖌️ ✨ I have a strong passion for UI/UX Design, User Research, and more!
                  </h2>


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
