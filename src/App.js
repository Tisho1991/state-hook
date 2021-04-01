import React, { useState, useEffect } from "react";
import { Provider } from './Components/Context'
import Counter from './Components/Counter'
import ImageFetcher from './Components/ImageFetcher'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import ExampleFunction from "./Components/ExampleFunction";

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Welcome!");
  const [data, setData] = useState('');

  // The effect happens after render
  // useEffect(() => {
  //   console.log(`useEffect called! ${message}`);
  //   document.title = `${message}. Your score is ${score}`;
  // });

  useEffect(() => {
    document.title = `${message} Score: ${score}`;
  }, [message, score]); // add dependencies


  useEffect(() => {
    console.log('useEffect Called!');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log('Ohh noews!, err'))
  }, [score]);

  //Button Style Object
  // const buttonStyleObj = {
  //   backgroundColor: "#4CAF50" /* Green */,
  //   border: "none",
  //   color: "white",
  //   padding: "15px 32px",
  //   textAlign: "center",
  //   textDecoration: "none",
  //   display: "inline-block",
  //   fontSize: "16px",
  // };

  return (
    <Provider value={{
      message: message,
      score: score,
      data,
      actions: {
        updateScore: setScore,
        updateMessage: setMessage
      }
    }}>
      <div className="App">
        <header className="App-header container-fluid">
          <div className="row w-100">
            <Counter />
            <ImageFetcher/>
            <ExampleFunction />
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
