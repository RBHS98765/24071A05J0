import React from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  const score = localStorage.getItem("score");
  const total = localStorage.getItem("total");
  const name = localStorage.getItem("username");

  const restart = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Result</h2>
      <p>Name: {name}</p>
      <h3>Score: {score} / {total}</h3>

      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Result;