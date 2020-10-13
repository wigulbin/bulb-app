import React, { Component } from "react";
import "../styles/App.css";
import BulbControl from "./BulbControl.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { on: "yes", bulbs: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/smartbulbs").then((res) => {
      const bulbs = res.data;
      this.setState({ bulbs: bulbs });
    });
  }

  onChange(changedBulb) {
    var bulbs = this.state.bulbs.map((bulb) =>
      bulb.label === changedBulb.label ? changedBulb : bulb
    );
    this.setState({ bulbs: bulbs });

    console.log(bulbs);
  }

  render() {
    return (
      <div>
        {this.state.bulbs.map((bulb) => (
          <BulbControl onChange={this.onChange} bulb={bulb} />
        ))}
      </div>
    );
  }
}

export default App;
