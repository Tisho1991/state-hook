import React, { useState, useEffect } from "react";
import "./App.css";

import ExampleFunction from "./Components/ExampleFunction";

function App() {
  const [score, setScore] = useState(0);
  const [message] = useState("Welcome!");

  // The effect happens after render
  // useEffect(() => {
  //   console.log(`useEffect called! ${message}`);
  //   document.title = `${message}. Your score is ${score}`;
  // });

  useEffect(() => {
    document.title = `${message}. Your score is ${score}`;
  }, [message, score]); // add dependencies


  //Button Style Object
  const buttonStyleObj = {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h3>{score}</h3>
        <button
          style={buttonStyleObj}
          onClick={() => setScore(score + 1) /* update the score state*/}
        >
          +
        </button>
      </header>
      <footer style={{ padding: "200px 0px" }}>
        <ExampleFunction />
      </footer>
    </div>
  );
}

export default App;
