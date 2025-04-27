import React, { useState } from 'react';

const KWToWhConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(1);  // Time in hours (h)
  const [energy, setEnergy] = useState<number | string>('');  // Output energy in watt-hours (Wh)

  // Conversion function to calculate watt-hours
  const convertToWh = (power: number, time: number) => {
    return 1000 * power * time;  // E(Wh) = 1000 × P(kW) × t(h)
  };

  const handleConvert = () => {
    const result = convertToWh(power, time);
    setEnergy(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      power: 5,
      time: 3,
      expectedResult: 15000,
      description: 'Example: Power is 5 kW, Time is 3 hours',
    },
    {
      power: 2,
      time: 4,
      expectedResult: 8000,
      description: 'Example: Power is 2 kW, Time is 4 hours',
    },
    {
      power: 1.5,
      time: 6,
      expectedResult: 9000,
      description: 'Example: Power is 1.5 kW, Time is 6 hours',
    },
    {
      power: 10,
      time: 2,
      expectedResult: 20000,
      description: 'Example: Power is 10 kW, Time is 2 hours',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Watt-Hours Converter</h1>

      <div>
        <label>Enter Power in Kilowatts (kW):</label>
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Time in Hours (h):</label>
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
        <p>{energy} Wh</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Power: {example.power} kW, Time: {example.time} hours</p>
              <p>Converted Energy: {example.expectedResult} Wh</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>Wh = 1000 × kW × h</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>Wh = Energy in watt-hours (Wh)</li>
            <li>kW = Power in kilowatts (kW)</li>
            <li>h = Time in hours (h)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to watt-hours (Wh) is based on the formula:
          <br />
          - Energy (Wh) is equal to 1000 times the power (kW) times the time (h).
          <br />
          - The factor of 1000 converts kilowatts to watts, as 1 kW = 1000 W.
        </p>
      </div>
    </div>
  );
};

export default KWToWhConverter;