import React, { useState } from 'react';

const KVAToWattsConverter: React.FC = () => {
  const [apparentPowerKVA, setApparentPowerKVA] = useState<number>(0);  // Apparent power in kilovolt-amps (kVA)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [realPower, setRealPower] = useState<number | string>('');  // Output real power in watts (W)

  // Conversion function
  const convertToWatts = (apparentPowerKVA: number, powerFactor: number) => {
    return 1000 * apparentPowerKVA * powerFactor;  // P(W) = 1000 × S(kVA) × PF
  };

  const handleConvert = () => {
    const result = convertToWatts(apparentPowerKVA, powerFactor);
    setRealPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      apparentPowerKVA: 3,
      powerFactor: 0.8,
      expectedResult: 2400,
      description: 'Example 1: 3 kVA with Power Factor 0.8',
    },
    {
      apparentPowerKVA: 5,
      powerFactor: 0.9,
      expectedResult: 4500,
      description: 'Example 2: 5 kVA with Power Factor 0.9',
    },
    {
      apparentPowerKVA: 2,
      powerFactor: 1,
      expectedResult: 2000,
      description: 'Example 3: 2 kVA with Power Factor 1',
    },
    {
      apparentPowerKVA: 1.5,
      powerFactor: 0.75,
      expectedResult: 1125,
      description: 'Example 4: 1.5 kVA with Power Factor 0.75',
    },
  ];

  return (
    <div className="container">
      <h1>kVA to Watts Converter</h1>

      <div>
        <label>Enter Apparent Power in Kilovolt-Amps (kVA):</label>
        <input
          type="number"
          value={apparentPowerKVA}
          onChange={(e) => setApparentPowerKVA(Number(e.target.value))}
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
        <p>{realPower} W</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Apparent Power: {example.apparentPowerKVA} kVA, Power Factor: {example.powerFactor}</p>
              <p>Converted Real Power: {example.expectedResult} W</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>W = 1000 × kVA × PF</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>W = Real power in watts (W)</li>
            <li>kVA = Apparent power in kilovolt-amps (kVA)</li>
            <li>PF = Power factor (PF)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilovolt-amps (kVA) to watts (W) is based on the formula:
          <br />
          - Real power (W) is equal to 1000 times the apparent power (kVA) times the power factor (PF).
          <br />
          - The power factor (PF) accounts for the phase difference between voltage and current, affecting the real power.
          <br />
          <strong>Why 1000?</strong> We multiply by 1000 because the formula deals with kilovolt-amps (kVA), which are in thousands of volt-amps (VA). We need to convert that to watts, where each kVA is equal to 1000 VA.
        </p>
      </div>

      <div>
        <h2>Power Factor (PF) Explained:</h2>
        <p>
          The power factor (PF) represents the efficiency with which electrical power is used. It is the ratio of real power (kW) to apparent power (kVA). 
          <br />
          A PF of 1 indicates that all the supplied power is being used effectively (ideal case).
          <br />
          A PF less than 1 means some energy is wasted, often due to inductive loads such as motors and transformers.
        </p>
      </div>

      <div>
        <h2>Types of Electrical Systems:</h2>
        <p>
          The formula provided is for general usage, but there are different power system configurations:
          <ul>
            <li><strong>Single-phase AC:</strong> For residential and small commercial systems. The formula holds as is.</li>
            <li><strong>Three-phase AC:</strong> Used for industrial and larger commercial systems. In this case, the apparent power (S) is divided by √3 to account for the three-phase current.</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Visualizing the Formula:</h2>
        <p>
          Here’s how you can visualize the conversion from kVA to watts:
        </p>
        <div>
          <p>
            <strong>kVA → Power Factor → Watts (W)</strong>
          </p>
          <div>
            <img src="https://via.placeholder.com/400x200.png?text=kVA+to+Watts+Formula" alt="kVA to Watts Formula" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KVAToWattsConverter;