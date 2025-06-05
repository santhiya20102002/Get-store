import React, { useState } from "react";
// import "src/pro.css";
function Signup({ setUser }) {
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    if (username) setUser(username);
  };

  return (
    <div className="login-form">
      <h1>Signup</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Choose a username" />
      <button onClick={handleSignup} className="btn">Signup</button>
    </div>
  );
}

export default Signup;
