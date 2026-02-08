// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Smart Complaint System</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/complaints">Complaints</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
