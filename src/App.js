// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import ComplaintList from "./components/ComplaintList";
import Dashboard from "./components/Dashboard";
import ComplaintForm from "./components/ComplaintForm";

function App() {
  const userId = "123"; // Dummy user ID

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Welcome to Smart Complaint Management System</h1>
        <ComplaintForm userId={userId} />
        <ComplaintList />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
