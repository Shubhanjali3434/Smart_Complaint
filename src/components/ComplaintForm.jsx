import React, { useState } from "react";
import axios from "axios";

function ComplaintForm({ userId }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/complaints", { userId, text });
    setResult(res.data);
    setText("");
  };

  return (
    <div>
      <h2>File Complaint</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Describe your issue" required />
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div>
          <h3>Complaint Submitted</h3>
          <p><b>Department:</b> {result.department}</p>
          <p><b>Priority:</b> {result.priority}</p>
          <p><b>Status:</b> {result.status}</p>
        </div>
      )}
    </div>
  );
}

export default ComplaintForm;
