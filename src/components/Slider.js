import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";

function changeSlider() {}

const BrightnessSlider = (props) => {
  const sliderStyle = {
    width: "100%",
    height: "8px",
    backgroundColor: "white",
    position: "relative",
  };

  const sliderCircle = {
    borderRadius: "20px",
    width: "15px",
    height: "15px",
    backgroundColor: "red",
    position: "absolute",
    top: "-4px",
    cursor: "pointer",
  };

  let [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChangeCommitted() {
    props.onChange(value);
  }

  if (value === 1) value = props.brightness;

  return (
    <div style={{ display: "inline-block", width: "50%" }}>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        min={0}
        max={255}
        aria-labelledby="non-linear-slider"
      />
    </div>
  );
};
export default BrightnessSlider;
