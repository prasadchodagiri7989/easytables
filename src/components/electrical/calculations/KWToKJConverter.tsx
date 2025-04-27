import React, { useState } from 'react';

const KWToKJConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);    // Time in seconds (s)
  const [energy, setEnergy] = useState<number | string>('');  // Output energy in kilojoules (kJ)

  // Conversion function
  const convertToKilojoules = (power: number, time: number) => {
    return power * time;  // E(kJ) = P(kW) * t(s)
  };

  const handleConvert = () => {
    const result = convertToKilojoules(power, time);
    setEnergy(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      power: 3,
      time: 3,
      expectedResult: 9,
      description: 'Example 1: 3 kW for 3 seconds',
    },
    {
      power: 5,
      time: 2,
      expectedResult: 10,
      description: 'Example 2: 5 kW for 2 seconds',
    },
    {
      power: 10,
      time: 1,
      expectedResult: 10,
      description: 'Example 3: 10 kW for 1 second',
    },
    {
      power: 0.5,
      time: 10,
      expectedResult: 5,
      description: 'Example 4: 0.5 kW for 10 seconds',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Kilojoules Converter</h1>

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
        <p>{energy} kJ</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Power: {example.power} kW, Time: {example.time} seconds</p>
              <p>Converted Energy: {example.expectedResult} kJ</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>E = P × t</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>E = Energy in kilojoules (kJ)</li>
            <li>P = Power in kilowatts (kW)</li>
            <li>t = Time in seconds (s)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to kilojoules (kJ) is based on the formula:
          <br />
          - Energy (kJ) is equal to the power (kW) multiplied by time (s).
          <br />
          - This is because energy is the total amount of work done, and power is the rate at which work is done.
        </p>
        <p>
          By multiplying power (in kW) by time (in seconds), you can calculate the total energy used over that time period in kilojoules.
        </p>
      </div>
    </div>
  );
};

export default KWToKJConverter; 