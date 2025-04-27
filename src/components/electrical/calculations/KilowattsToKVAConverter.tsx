import React, { useState } from 'react';

const KilowattsToKVAConverter: React.FC = () => {
  const [realPower, setRealPower] = useState<number>(0);  // Real power in kilowatts (kW)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [apparentPower, setApparentPower] = useState<number | string>('');  // Output apparent power in kilovolt-amps (kVA)

  // Conversion function
  const convertToKVA = (realPower: number, powerFactor: number) => {
    if (powerFactor === 0) return 0;  // Avoid division by zero
    return realPower / powerFactor;  // kVA = kW / PF
  };

  const handleConvert = () => {
    const result = convertToKVA(realPower, powerFactor);
    setApparentPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      realPower: 3,
      powerFactor: 0.8,
      expectedResult: 3.75,
      description: 'Example 1: 3 kW with power factor 0.8',
    },
    {
      realPower: 5,
      powerFactor: 1,
      expectedResult: 5,
      description: 'Example 2: 5 kW with power factor 1',
    },
    {
      realPower: 10,
      powerFactor: 0.9,
      expectedResult: 11.11,
      description: 'Example 3: 10 kW with power factor 0.9',
    },
    {
      realPower: 2,
      powerFactor: 0.7,
      expectedResult: 2.86,
      description: 'Example 4: 2 kW with power factor 0.7',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to kVA Converter</h1>

      <div>
        <label>Enter Real Power in Kilowatts (kW):</label>
        <input
          type="number"
          value={realPower}
          onChange={(e) => setRealPower(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Power Factor (PF):</label>
        <input
          type="number"
          value={powerFactor}
          onChange={(e) => setPowerFactor(Number(e.target.value))}
          step="0.01"
          min="0"
          max="1"
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Apparent Power:</h2>
        <p>{apparentPower} kVA</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Real Power: {example.realPower} kW, Power Factor: {example.powerFactor}</p>
              <p>Converted Apparent Power: {example.expectedResult} kVA</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>S = kW / PF</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>S = Apparent power in kilovolt-amps (kVA)</li>
            <li>kW = Real power in kilowatts (kW)</li>
            <li>PF = Power factor (PF, between 0 and 1)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to kilovolt-amps (kVA) is based on the formula:
          <br />
          - Apparent power (kVA) is equal to real power (kW) divided by the power factor (PF).
          <br />
          - The power factor (PF) is a value between 0 and 1 that indicates the efficiency of the power conversion. A power factor of 1 means the system is perfectly efficient.
        </p>
      </div>
    </div>
  );
};

export default KilowattsToKVAConverter;