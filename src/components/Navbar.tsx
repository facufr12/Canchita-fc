import React from "react";
import "./Navbar.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <button className="butonnav">
            <span>Jugadores</span>
          </button>
        </Link>
        <Link to="/canchita">
          <button className="butonnav">
            <span>Canchita FC</span>
          </button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
