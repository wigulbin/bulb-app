import React, { Component } from "react";
import LightBulb from "./LightBulb.js";
import ColorPicker from "./ColorPicker.js";
import axios from "axios";
import BrightnessSlider from "./Slider.js";

class BulbControl extends React.Component {
  constructor(props) {
    super(props);

    this.handleColor = this.handleColor.bind(this);
    this.handleBrighness = this.handleBrighness.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);

    const bulb = props.bulb;
    const adjustedHue = (bulb.hue / 65535) * 360;
    const adjustedSat = bulb.saturation / 254;
    const hsl = { h: adjustedHue, s: adjustedSat, l: 0.5, a: 1 };

    this.state = {
      on: "yes",
      color: "#fff",
      hsl: hsl,
    };
  }

  toggleLights(bulb) {
    bulb.on = bulb.on ? false : true;
    axios.post("http://localhost:3000/api/smartbulbs", [bulb]);

    this.props.onChange(bulb);
  }

  handleColor(color) {
    const hsv = color.hsv;
    const newColor = parseInt((hsv.h / 360) * 65535 + "");
    const newSat = parseInt(hsv.s * 254 + "");
    const bulb = this.state.bulb;
    bulb.hue = newColor;
    bulb.saturation = newSat;

    axios.post("http://localhost:3000/api/smartbulbs", [bulb]);
    this.setState({ color: color.hex });
    this.props.onChange(bulb);
  }

  handleChangeComplete = (color) => {
    var hsv = color.hsv;
    var newColor = parseInt((hsv.h / 360) * 65535 + "");
    var newSat = parseInt(hsv.s * 254 + "");
    const bulb = this.state.bulb;
    bulb.hue = newColor;
    bulb.saturation = newSat;

    axios.post("http://localhost:3000/api/smartbulbs", [bulb]);
    this.setState({ color: color.hex, hsl: color.hsl });
  };

  handleBackgroundColor(hex) {
    this.setState({ color: hex });
  }

  handlePower(power) {
    var bulb = this.props.bulb;
    bulb.on = power;

    this.props.onChange(bulb);
    axios.post("http://localhost:3000/api/smartbulbs", [bulb]);
  }

  handleBrighness(brightness) {
    var bulb = this.props.bulb;
    bulb.brightness = brightness;

    this.props.onChange(bulb);
    axios.post("http://localhost:3000/api/smartbulbs", [bulb]);
  }

  handleSliderChange(t) {
    console.log(t);
  }

  updateBackgroundColor(hex) {
    this.setState({ color: hex });
  }

  render() {
    const bulb = this.props.bulb;
    const containerStyle = {
      margin: "40px",
      width: "300px",
    };

    console.log(this.state.color);
    return (
      <div style={containerStyle}>
        <div>
          <LightBulb
            color={this.state.color}
            hsl={this.state.hsl}
            bulb={bulb}
            onChange={this.handlePower}
          />
          <div>
            <ColorPicker
              color={this.state.color}
              hsl={this.state.hsl}
              onChange={this.handleChangeComplete}
              onMount={this.updateBackgroundColor}
              bulb={bulb}
            />

            <BrightnessSlider
              onChange={this.handleBrighness}
              brightness={bulb.brightness}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default BulbControl;
