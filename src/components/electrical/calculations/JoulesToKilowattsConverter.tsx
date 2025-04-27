import React, { useState } from 'react';

const JoulesToKilowattsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in joules (J)
  const [time, setTime] = useState<number>(0);  // Time in seconds (s)
  const [power, setPower] = useState<number | string>('');  // Output power in kilowatts (kW)
  
  // Conversion function
  const convertToKilowatts = (energy: number, time: number) => {
    if (time === 0) return 0; // Avoid division by zero
    return energy / (1000 * time); // kW = J / (1000 * s)
  };

  const handleConvert = () => {
    const result = convertToKilowatts(energy, time);
    setPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      energy: 90,
      time: 3,
      expectedResult: 0.03,
      description: 'Example 1: 90 joules over 3 seconds',
    },
    {
      energy: 150,
      time: 5,
      expectedResult: 0.03,
      description: 'Example 2: 150 joules over 5 seconds',
    },
    {
      energy: 500,
      time: 10,
      expectedResult: 0.05,
      description: 'Example 3: 500 joules over 10 seconds',
    },
    {
      energy: 1200,
      time: 20,
      expectedResult: 0.06,
      description: 'Example 4: 1200 joules over 20 seconds',
    },
  ];

  return (
    <div className="container">
      <h1>Joules to Kilowatts Converter</h1>

      <div>
        <label>Enter Energy in Joules (J):</label>
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Time in Seconds (s):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Power:</h2>
        <p>{power} kW</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Energy: {example.energy} J, Time: {example.time} s</p>
              <p>Converted Power: {example.expectedResult} kW</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>kW = J / (1000 * s)</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>kW = Power in kilowatts</li>
            <li>J = Energy in joules</li>
            <li>s = Time in seconds</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from joules (J) to kilowatts (kW) is based on the fact that:
          <br />
          - 1 kilowatt (kW) is equal to 1000 joules per second (J/s).
          <br />
          - To calculate the power in kilowatts, divide the total energy (in joules) by 1000 and the time (in seconds).
        </p>
      </div>
    </div>
  );
};

export default JoulesToKilowattsConverter;