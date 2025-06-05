import React, { useState } from "react";
// import "src/pro.css";
function Login({ setUser }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username) setUser(username);
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
      <button onClick={handleLogin} className="btn">Login</button>
    </div>
  );
}

export default Login;
