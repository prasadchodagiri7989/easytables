import React, { useState } from 'react';

const KWToKWhConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);    // Time in hours (hr)
  const [energy, setEnergy] = useState<number | string>('');  // Output energy in kilowatt-hours (kWh)

  // Conversion function
  const convertToKilowattHour = (power: number, time: number) => {
    return power * time;  // E(kWh) = P(kW) × t(hr)
  };

  const handleConvert = () => {
    const result = convertToKilowattHour(power, time);
    setEnergy(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      power: 5,
      time: 3,
      expectedResult: 15,
      description: 'Example 1: 5 kW for 3 hours',
    },
    {
      power: 2,
      time: 4,
      expectedResult: 8,
      description: 'Example 2: 2 kW for 4 hours',
    },
    {
      power: 10,
      time: 1,
      expectedResult: 10,
      description: 'Example 3: 10 kW for 1 hour',
    },
    {
      power: 3,
      time: 2,
      expectedResult: 6,
      description: 'Example 4: 3 kW for 2 hours',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Kilowatt-Hours Converter</h1>

      <div>
        <label>Enter Power in Kilowatts (kW):</label>
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Time in Hours (hr):</label>
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
        <p>{energy} kWh</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Power: {example.power} kW, Time: {example.time} hours</p>
              <p>Converted Energy: {example.expectedResult} kWh</p>
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
            <li>E = Energy in kilowatt-hours (kWh)</li>
            <li>P = Power in kilowatts (kW)</li>
            <li>t = Time in hours (hr)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to kilowatt-hours (kWh) is based on the formula:
          <br />
          - Energy (kWh) is equal to the power (kW) multiplied by time (hr).
          <br />
          - Kilowatt-hour (kWh) is a unit of energy, and kilowatts (kW) represents the rate at which energy is consumed or produced.
        </p>
        <p>
          By multiplying the power (in kW) by the time (in hours), you get the total energy consumed or produced over that time period in kilowatt-hours.
        </p>
      </div>
    </div>
  );
};

export default KWToKWhConverter;