import React, { useState } from 'react';

const KVAToVAConverter: React.FC = () => {
  const [apparentPowerKVA, setApparentPowerKVA] = useState<number>(0);  // Apparent power in kilovolt-amps (kVA)
  const [apparentPowerVA, setApparentPowerVA] = useState<number | string>('');  // Output apparent power in volt-amps (VA)

  // Conversion function
  const convertToVA = (apparentPowerKVA: number) => {
    return 1000 * apparentPowerKVA;  // S(VA) = 1000 × S(kVA)
  };

  const handleConvert = () => {
    const result = convertToVA(apparentPowerKVA);
    setApparentPowerVA(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      apparentPowerKVA: 3,
      expectedResult: 3000,
      description: 'Example 1: 3 kVA to VA',
    },
    {
      apparentPowerKVA: 5,
      expectedResult: 5000,
      description: 'Example 2: 5 kVA to VA',
    },
    {
      apparentPowerKVA: 1.2,
      expectedResult: 1200,
      description: 'Example 3: 1.2 kVA to VA',
    },
    {
      apparentPowerKVA: 0.5,
      expectedResult: 500,
      description: 'Example 4: 0.5 kVA to VA',
    },
  ];

  return (
    <div className="container">
      <h1>kVA to VA Converter</h1>

      <div>
        <label>Enter Apparent Power in Kilovolt-Amps (kVA):</label>
        <input
          type="number"
          value={apparentPowerKVA}
          onChange={(e) => setApparentPowerKVA(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Apparent Power:</h2>
        <p>{apparentPowerVA} VA</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Apparent Power: {example.apparentPowerKVA} kVA</p>
              <p>Converted Apparent Power: {example.expectedResult} VA</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>VA = 1000 × kVA</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>VA = Apparent power in volt-amps (VA)</li>
            <li>kVA = Apparent power in kilovolt-amps (kVA)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilovolt-amps (kVA) to volt-amps (VA) is based on the formula:
          <br />
          - Apparent power (VA) is equal to 1000 times the apparent power (kVA).
          <br />
          - This is because 1 kVA = 1000 VA.
        </p>
      </div>
    </div>
  );
};

export default KVAToVAConverter;