import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Enter name");
      return;
    }
    localStorage.setItem("username", name);
    navigate("/quiz");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Start Quiz</button>
    </div>
  );
}

export default Login;