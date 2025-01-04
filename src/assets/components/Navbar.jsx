import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar-name"> RL
            </div>
            <ul class="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;
