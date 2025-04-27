import React, { useState } from 'react';

const KilowattsToJoulesConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);  // Time in seconds (s)
  const [energy, setEnergy] = useState<number | string>('');  // Output energy in joules (J)

  // Conversion function
  const convertToJoules = (power: number, time: number) => {
    return 1000 * power * time;  // E(J) = 1000 × P(kW) × t(s)
  };

  const handleConvert = () => {
    const result = convertToJoules(power, time);
    setEnergy(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      power: 3,
      time: 3,
      expectedResult: 9000,
      description: 'Example 1: 3 kW with 3 seconds',
    },
    {
      power: 5,
      time: 2,
      expectedResult: 10000,
      description: 'Example 2: 5 kW with 2 seconds',
    },
    {
      power: 10,
      time: 4,
      expectedResult: 40000,
      description: 'Example 3: 10 kW with 4 seconds',
    },
    {
      power: 2,
      time: 10,
      expectedResult: 20000,
      description: 'Example 4: 2 kW with 10 seconds',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Joules Converter</h1>

      <div>
        <label>Enter Power in Kilowatts (kW):</label>
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
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
        <h2>Converted Energy:</h2>
        <p>{energy} J</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Power: {example.power} kW, Time: {example.time} seconds</p>
              <p>Converted Energy: {example.expectedResult} J</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>E = 1000 × kW × s</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>E = Energy in joules (J)</li>
            <li>kW = Power in kilowatts (kW)</li>
            <li>s = Time in seconds (s)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to joules (J) is based on the formula:
          <br />
          - Energy (J) is equal to power (kW) multiplied by time (s), and then multiplied by 1000 to convert kilowatts to joules.
          <br />
          - This calculation gives the total energy consumed or produced over a specific duration, where power is used over time.
        </p>
      </div>
    </div>
  );
};

export default KilowattsToJoulesConverter;