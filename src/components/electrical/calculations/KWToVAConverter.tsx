import React, { useState } from 'react';

const KWToVAConverter: React.FC = () => {
  const [realPower, setRealPower] = useState<number>(0);  // Real power in kilowatts (kW)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [apparentPower, setApparentPower] = useState<number | string>('');  // Output apparent power in volt-amps (VA)

  // Conversion function
  const convertToVoltAmps = (realPower: number, powerFactor: number) => {
    return (1000 * realPower) / powerFactor;  // S(VA) = 1000 × P(kW) / PF
  };

  const handleConvert = () => {
    const result = convertToVoltAmps(realPower, powerFactor);
    setApparentPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      realPower: 3,
      powerFactor: 0.8,
      expectedResult: 3750,
      description: 'Example 1: 3 kW with Power Factor 0.8',
    },
    {
      realPower: 5,
      powerFactor: 0.9,
      expectedResult: 5555.56,
      description: 'Example 2: 5 kW with Power Factor 0.9',
    },
    {
      realPower: 2,
      powerFactor: 1,
      expectedResult: 2000,
      description: 'Example 3: 2 kW with Power Factor 1',
    },
    {
      realPower: 10,
      powerFactor: 0.95,
      expectedResult: 10526.32,
      description: 'Example 4: 10 kW with Power Factor 0.95',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Volt-Amps Converter</h1>

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
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Apparent Power:</h2>
        <p>{apparentPower} VA</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Real Power: {example.realPower} kW, Power Factor: {example.powerFactor}</p>
              <p>Converted Apparent Power: {example.expectedResult} VA</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>S = 1000 × P / PF</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>S = Apparent power in volt-amps (VA)</li>
            <li>P = Real power in kilowatts (kW)</li>
            <li>PF = Power factor (PF)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to volt-amps (VA) is based on the formula:
          <br />
          - Apparent power (VA) is equal to 1000 times the real power (kW) divided by the power factor (PF).
          <br />
          - The power factor (PF) represents the efficiency of the power usage, accounting for losses and phase differences between voltage and current.
        </p>
        <p>
          This formula helps convert real power (kW) to apparent power (VA), which is commonly used in AC electrical systems.
        </p>
      </div>
    </div>
  );
};

export default KWToVAConverter;