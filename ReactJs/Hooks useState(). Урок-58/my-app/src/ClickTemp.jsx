import React from "react";
import "./style2.css";
import { useState } from "react";

const SetTemperature = () => {
  const [count, setCount] = useState(10);
  const [changeColor, setChangeColor] = useState(false);

  const handleIncrement = () => {
    setCount(count + 5);
    setChangeColor(!changeColor);
  };

  const handleDecrement = () => {
    setCount(count - 5);
    setChangeColor(false);
  };
  
  return (
    <div className="container">
      <div className={`${changeColor === true ? "bg-orange" : "first-round"}`}>
        <div className="section">
            <p style={{ color: "white" }}>{count}°C</p>
        </div>
      </div>
      <div className="row">
        <button onClick={handleIncrement} className="second-round">
          <p>+</p>
        </button>
        <button onClick={handleDecrement} className="third-round">
          <p>-</p>
        </button>
      </div>
    </div>
  );
};

export default SetTemperature;
