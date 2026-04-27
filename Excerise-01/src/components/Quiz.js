import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    { q: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], ans: "Delhi" },
    { q: "2 + 2 = ?", options: ["2","3","4", "5"], ans: "4" },
    { q: "Capital of Russia?", options: ["Madrid", "Saint Petersburg", "Amsterdam", "Moscow"], ans: "Moscow" }
  ];

  const [answers, setAnswers] = useState({});

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.ans) score++;
    });

    localStorage.setItem("score", score);
    localStorage.setItem("total", questions.length);

    navigate("/result");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz</h2>

      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.q}</p>
          {q.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                onChange={() => handleChange(i, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Quiz;