import React, { useState } from 'react';

const KVAToKWConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(0);  // Apparent power in kilovolt-amps (kVA)
  const [powerFactor, setPowerFactor] = useState<number>(0);  // Power factor (PF)
  const [realPower, setRealPower] = useState<number | string>('');  // Output real power in kilowatts (kW)

  // Conversion function
  const convertToKW = (apparentPower: number, powerFactor: number) => {
    return apparentPower * powerFactor;  // P(kW) = S(kVA) × PF
  };

  const handleConvert = () => {
    const result = convertToKW(apparentPower, powerFactor);
    setRealPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      apparentPower: 3,
      powerFactor: 0.8,
      expectedResult: 2.4,
      description: 'Example 1: 3 kVA with power factor 0.8',
    },
    {
      apparentPower: 5,
      powerFactor: 0.9,
      expectedResult: 4.5,
      description: 'Example 2: 5 kVA with power factor 0.9',
    },
    {
      apparentPower: 10,
      powerFactor: 0.85,
      expectedResult: 8.5,
      description: 'Example 3: 10 kVA with power factor 0.85',
    },
    {
      apparentPower: 2,
      powerFactor: 1,
      expectedResult: 2,
      description: 'Example 4: 2 kVA with power factor 1 (perfect efficiency)',
    },
  ];

  return (
    <div className="container">
      <h1>kVA to kW Converter</h1>

      <div>
        <label>Enter Apparent Power in Kilovolt-Amps (kVA):</label>
        <input
          type="number"
          value={apparentPower}
          onChange={(e) => setApparentPower(Number(e.target.value))}
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
        <h2>Converted Real Power:</h2>
        <p>{realPower} kW</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Apparent Power: {example.apparentPower} kVA, Power Factor: {example.powerFactor}</p>
              <p>Converted Real Power: {example.expectedResult} kW</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>P = kVA × PF</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>P = Real power in kilowatts (kW)</li>
            <li>kVA = Apparent power in kilovolt-amps (kVA)</li>
            <li>PF = Power factor (PF)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilovolt-amps (kVA) to kilowatts (kW) is based on the formula:
          <br />
          - Real power (kW) is equal to apparent power (kVA) multiplied by the power factor (PF).
          <br />
          - This calculation allows us to find the actual usable power from the total apparent power, considering the efficiency of the system (represented by the power factor).
        </p>
      </div>
    </div>
  );
};

export default KVAToKWConverter;