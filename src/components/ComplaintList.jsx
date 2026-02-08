// src/components/ComplaintList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function ComplaintList() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
    };
    fetchComplaints();
  }, []);

  return (
    <div className="complaint-list">
      <h2>All Complaints</h2>
      {complaints.length === 0 ? (
        <p>No complaints yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Text</th>
              <th>Department</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c._id}>
                <td>{c._id}</td>
                <td>{c.text}</td>
                <td>{c.department}</td>
                <td>{c.priority}</td>
                <td>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ComplaintList;
