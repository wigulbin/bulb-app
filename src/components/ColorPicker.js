import React, { Component } from "react";
import { SketchPicker } from "react-color";

class BrightnessSlider extends React.Component {
  constructor(props) {
    super(props);
    this.FieldEditor1 = React.createRef();

    this.state = { color: props.color, bulb: props.bulb, hsl: props.hsl };
  }
  display(id) {
    const element = document.getElementById(id);
    element.style.display = "";
    const removeFunc = function (e) {
      if (e.path.filter((path) => path.id === id).length > 0) return;
      element.style.display = "none";
      document
        .getElementsByTagName("body")[0]
        .removeEventListener("click", removeFunc);
    };
    document
      .getElementsByTagName("body")[0]
      .addEventListener("click", removeFunc);
  }

  handleChangeComplete = (color) => {
    console.log(color);
    this.props.onChange(color);
  };

  componentDidMount() {
    console.log(this.FieldEditor1.current.state.hex);
    this.props.onMount(this.FieldEditor1.current.state.hex);
  }

  render() {
    const bulb = this.state.bulb;
    return (
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: "50%",
        }}
      >
        <div
          style={{
            width: "17px",
            height: "17px",
            backgroundColor: this.props.color,
            border: "3px solid white",
            borderRadius: "5px",
            margin: "0 auto",
          }}
          onClick={() => this.display("sketchPicker" + bulb.objectid)}
        ></div>
        <div
          id={`sketchPicker${bulb.objectid}`}
          style={{ display: "none", position: "absolute", zIndex: 10 }}
        >
          <SketchPicker
            ref={this.FieldEditor1}
            color={this.props.hsl}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
    );
  }
}
export default BrightnessSlider;
