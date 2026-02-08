// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
    };
    fetchData();
  }, []);

  // Count complaints by department
  const data = ["Water","Sanitation","Electricity","Roads"].map((dept) => ({
    department: dept,
    count: complaints.filter(c => c.department === dept).length,
  }));

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Total Complaints: {complaints.length}</p>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="department" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Dashboard;
