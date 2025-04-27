import React, { useState } from 'react';

const JoulesToWattsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in joules (J)
  const [time, setTime] = useState<number>(0);  // Time in seconds (s)
  const [power, setPower] = useState<number | string>('');  // Output power in watts (W)

  // Conversion function
  const convertToWatts = (energy: number, time: number) => {
    if (time === 0) return 0; // Avoid division by zero
    return energy / time; // P = J / s
  };

  const handleConvert = () => {
    const result = convertToWatts(energy, time);
    setPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      energy: 90,
      time: 3,
      expectedResult: 30,
      description: 'Example 1: 90 joules with 3 seconds',
    },
    {
      energy: 150,
      time: 5,
      expectedResult: 30,
      description: 'Example 2: 150 joules with 5 seconds',
    },
    {
      energy: 200,
      time: 4,
      expectedResult: 50,
      description: 'Example 3: 200 joules with 4 seconds',
    },
    {
      energy: 120,
      time: 2,
      expectedResult: 60,
      description: 'Example 4: 120 joules with 2 seconds',
    },
    {
      energy: 300,
      time: 6,
      expectedResult: 50,
      description: 'Example 5: 300 joules with 6 seconds',
    },
    {
      energy: 500,
      time: 10,
      expectedResult: 50,
      description: 'Example 6: 500 joules with 10 seconds',
    },
  ];

  return (
    <div className="container">
      <h1>Joules to Watts Converter</h1>

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
        <p>{power} W</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Energy: {example.energy} J, Time: {example.time} seconds</p>
              <p>Converted Power: {example.expectedResult} W</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>P = J / s</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>P = Power in watts (W)</li>
            <li>J = Energy in joules (J)</li>
            <li>s = Time in seconds (s)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from joules (J) to watts (W) is based on the formula:
          <br />
          - Power (W) is equal to energy (J) divided by time (s).
          <br />
          - This is because power measures the rate at which energy is transferred or converted. In this case, we’re calculating how much energy is used per second.
        </p>
      </div>
    </div>
  );
};

export default JoulesToWattsConverter;