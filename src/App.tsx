import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Canchita from "./components/Canchita";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Cards />} /><Route/>
          <Route path="/canchita" element={<Canchita />} /><Route/>
        </Routes>
      </Router>
    </div>
  );
}
