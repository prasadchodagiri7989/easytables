import React, { useState } from 'react';

const DBConverter: React.FC = () => {
  const [quantity, setQuantity] = useState<string>('Power');  // Default quantity is Power
  const [dBUnit, setDbUnit] = useState<string>('dBm'); // Default decibel unit is dBm
  const [inputValue, setInputValue] = useState<number>(0);
  const [outputValue, setOutputValue] = useState<number | string>('');

  // Conversion functions
  const convertPower = (dBValue: number, unit: string) => {
    let result = 0;
    switch (unit) {
      case 'dBm':
        result = Math.pow(10, (dBValue - 30) / 10);
        break;
      case 'dBW':
        result = Math.pow(10, dBValue / 10);
        break;
      case 'dBmV':
        result = Math.pow(10, (dBValue - 60) / 20);
        break;
      default:
        result = 0;
    }
    return result;
  };

  const handleConvert = () => {
    if (quantity === 'Power') {
      setOutputValue(convertPower(inputValue, dBUnit));
    }
    // Add other conversions for voltage, current, sound pressure, etc.
  };

  return (
    <div className="container">
      <h1>Decibel Converter</h1>

      <div>
        <label>Quantity Type:</label>
        <select onChange={(e) => setQuantity(e.target.value)}>
          <option value="Power">Power</option>
          <option value="Voltage">Voltage</option>
          <option value="Current">Current</option>
          <option value="Sound Pressure">Sound Pressure</option>
        </select>
      </div>

      <div>
        <label>Decibel Unit:</label>
        <select onChange={(e) => setDbUnit(e.target.value)}>
          <option value="dBm">dBm</option>
          <option value="dBW">dBW</option>
          <option value="dBmV">dBmV</option>
          <option value="dBμV">dBμV</option>
        </select>
      </div>

      <div>
        <label>Enter Value:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </div>

      <button onClick={handleConvert}>Convert</button>

      <div>
        <h2>Converted Value:</h2>
        <p>{outputValue}</p>
      </div>
    </div>
  );
};

export default DBConverter;