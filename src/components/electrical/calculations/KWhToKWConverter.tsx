import React, { useState } from 'react';

const KWhToKWConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in kilowatt-hours (kWh)
  const [time, setTime] = useState<number>(1);  // Time in hours (h)
  const [power, setPower] = useState<number | string>('');  // Output power in kilowatts (kW)

  // Conversion function to calculate kilowatts
  const convertToKW = (energy: number, time: number) => {
    return energy / time;  // P(kW) = E(kWh) / t(h)
  };

  const handleConvert = () => {
    const result = convertToKW(energy, time);
    setPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      energy: 15,
      time: 3,
      expectedResult: 5,
      description: 'Example: Energy is 15 kWh, Time is 3 hours',
    },
    {
      energy: 10,
      time: 2,
      expectedResult: 5,
      description: 'Example: Energy is 10 kWh, Time is 2 hours',
    },
    {
      energy: 20,
      time: 4,
      expectedResult: 5,
      description: 'Example: Energy is 20 kWh, Time is 4 hours',
    },
    {
      energy: 25,
      time: 5,
      expectedResult: 5,
      description: 'Example: Energy is 25 kWh, Time is 5 hours',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatt-Hour to Kilowatts Converter</h1>

      <div>
        <label>Enter Energy in Kilowatt-Hours (kWh):</label>
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(Number(e.target.value))}
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
        <h2>Converted Power:</h2>
        <p>{power} kW</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Energy: {example.energy} kWh, Time: {example.time} hours</p>
              <p>Converted Power: {example.expectedResult} kW</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>kW = kWh / h</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>kW = Power in kilowatts (kW)</li>
            <li>kWh = Energy in kilowatt-hours (kWh)</li>
            <li>h = Time in hours (h)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatt-hours (kWh) to kilowatts (kW) is based on the formula:
          <br />
          - Power (kW) is equal to the energy (kWh) divided by the time (h).
          <br />
          - This conversion helps us calculate how much power (in kW) is being consumed over a specific time period.
        </p>
      </div>
    </div>
  );
};

export default KWhToKWConverter;