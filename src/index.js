import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Chart";
// import Button from './Button';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>
        This sandbox contains examples of 10 different CSS-in-JS Libraries
      </h2>
      <h3>Start editing each file to see some magic happen!</h3>
      <Chart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
