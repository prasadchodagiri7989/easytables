import React, { useState } from 'react';

const MahToWhConverter: React.FC = () => {
  const [mAh, setMah] = useState<number>(0);  // Input in milliampere-hours (mAh)
  const [voltage, setVoltage] = useState<number>(0);  // Input voltage in volts (V)
  const [wh, setWh] = useState<number | string>('');  // Output in watt-hours (Wh)

  // Conversion function to convert mAh to Wh
  const convertToWh = (mAh: number, voltage: number): number => {
    return (mAh * voltage) / 1000;  // Formula: Wh = (mAh * V) / 1000
  };

  const handleConvert = () => {
    const result = convertToWh(mAh, voltage);
    setWh(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      mAh: 5000,
      voltage: 5,
      expectedResult: 25,
      description: 'Example: 5000 mAh at 5V to Wh',
    },
    {
      mAh: 1500,
      voltage: 3.7,
      expectedResult: 5.55,
      description: 'Example: 1500 mAh at 3.7V to Wh',
    },
    {
      mAh: 2000,
      voltage: 12,
      expectedResult: 24,
      description: 'Example: 2000 mAh at 12V to Wh',
    },
  ];

  return (
    <div className="container">
      <h1>mAh to Wh Converter</h1>

      <div>
        <label>Enter Capacity in mAh:</label>
        <input
          type="number"
          value={mAh}
          onChange={(e) => setMah(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Voltage (V):</label>
        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Capacity (Wh):</h2>
        <p>{wh} Wh</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>mAh: {example.mAh} mAh, Voltage: {example.voltage} V</p>
              <p>Converted Capacity: {example.expectedResult} Wh</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>Wh = (mAh × V) / 1000</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>Wh = Capacity in watt-hours (Wh)</li>
            <li>mAh = Capacity in milliampere-hours (mAh)</li>
            <li>V = Voltage in volts (V)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          To convert milliampere-hours (mAh) to watt-hours (Wh), multiply the mAh value by the voltage (V) and divide by 1000.
          <br />
          For example, if you have 5000 mAh at 5V, the result is 25 Wh, because (5000 × 5) / 1000 = 25 Wh.
        </p>
      </div>

      <div>
        <h2>Example Calculation:</h2>
        <p>
          What is the capacity in watt-hours if a battery has 3000 mAh at 3.7V?
          <br />
          Using the formula: Wh = (mAh × V) / 1000, we get Wh = (3000 × 3.7) / 1000 = 11.1 Wh.
        </p>
      </div>
    </div>
  );
};

export default MahToWhConverter;
