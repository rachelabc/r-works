import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-name">
                {/* Link to the homepage */}
                <Link to="/r-works">RL</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/r-works/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/r-works/projects">PROJECTS</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

