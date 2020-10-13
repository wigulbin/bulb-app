import React, { Component } from "react";
import "../styles/App.css";
import Bulbs from "./Bulbs.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                align: "left",
              }}
            >
              Bulb Control
            </div>
            <div
              style={{
                width: "30px",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="App-header">
          <div className="noselect">
            <Bulbs />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
