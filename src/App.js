import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  const handleMinValChange = (e) => {
    const value = +e.target.value;
    if (value >= 0 && value <= maxVal) {
      setMinVal(value);
    }
  };

  const handleMaxValChange = (e) => {
    const value = +e.target.value;
    if (value >= 0 && value >= minVal) {
      setMaxVal(value);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="randomNumber">
          <span>
            Rastgele sayı: <span className="randomValue">{randomNum}</span>
          </span>
        </div>
        <div className="numContainer">
          <div>
            <p>Minimum:</p>
            <input type="number" value={minVal} onChange={handleMinValChange} />
          </div>
          <div>
            <p>Maksimum:</p>
            <input type="number" value={maxVal} onChange={handleMaxValChange} />
          </div>
        </div>
        <button onClick={handleRandomNum}>Rastgele sayı üret</button>
      </div>
    </div>
  );
}