import React from "react";
import "../styles/LightBulb.css";

const LightBulb = (props) => {
  const bulb = props.bulb;
  const svg = bulb.on ? onSvg(props) : offSvg(props);
  return (
    <div onClick={() => props.onChange(!bulb.on)}>
      {svg}
      <span className="label">{bulb.label}</span>
    </div>
  );
};

function onSvg(props) {
  return (
    <svg
      style={{
        display: "inline-block",
        width: "145px",
        height: "145px",
        fill: props.color,
        cursor: "pointer",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        stroke="white"
        d="M320,64A112.14,112.14,0,0,0,208,176a16,16,0,0,0,32,0,80.09,80.09,0,0,1,80-80,16,16,0,0,0,0-32Zm0-64C217.06,0,143.88,83.55,144,176.23a175,175,0,0,0,43.56,115.55C213.22,321,237.84,368.69,240,384l.06,75.19a15.88,15.88,0,0,0,2.69,8.83l24.5,36.84A16,16,0,0,0,280.56,512h78.85a16,16,0,0,0,13.34-7.14L397.25,468a16.17,16.17,0,0,0,2.69-8.83L400,384c2.25-15.72,27-63.19,52.44-92.22A175.9,175.9,0,0,0,320,0Zm47.94,454.31L350.84,480H289.12l-17.06-25.69,0-6.31h95.91ZM368,416H272l-.06-32H368Zm60.41-145.31c-14,15.95-36.32,48.09-50.57,81.29H262.22c-14.28-33.21-36.6-65.34-50.6-81.29A143.47,143.47,0,0,1,176.06,176C175.88,99,236.44,32,320,32c79.41,0,144,64.59,144,144A143.69,143.69,0,0,1,428.38,270.69ZM96,176a16,16,0,0,0-16-16H16a16,16,0,0,0,0,32H80A16,16,0,0,0,96,176ZM528,64a16.17,16.17,0,0,0,7.16-1.69l64-32A16,16,0,0,0,584.84,1.69l-64,32A16,16,0,0,0,528,64Zm96,96H560a16,16,0,0,0,0,32h64a16,16,0,0,0,0-32ZM119.16,33.69l-64-32A16,16,0,0,0,40.84,30.31l64,32A16.17,16.17,0,0,0,112,64a16,16,0,0,0,7.16-30.31Zm480,288-64-32a16,16,0,0,0-14.32,28.63l64,32a16,16,0,0,0,14.32-28.63ZM112,288a16.17,16.17,0,0,0-7.16,1.69l-64,32a16,16,0,0,0,14.32,28.63l64-32A16,16,0,0,0,112,288Z"
      />
    </svg>
  );
}

function offSvg(props) {
  return (
    <svg
      style={{
        display: "inline-block",
        width: "115px",
        height: "115px",
        padding: "15px",
        fill: props.color,
        cursor: "pointer",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 512"
    >
      <path
        stroke="white"
        d="M176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68zM176 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16s-7.16-16-16-16z"
      />
    </svg>
  );
}

export default LightBulb;
