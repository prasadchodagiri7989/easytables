import React, { useState } from 'react';

const MahToAhConverter: React.FC = () => {
  const [mAh, setMah] = useState<number>(0);  // Input in milliampere-hours (mAh)
  const [ah, setAh] = useState<number | string>('');  // Output in ampere-hours (Ah)

  // Conversion function to convert mAh to Ah
  const convertToAh = (mAh: number): number => {
    return mAh / 1000;  // 1 Ah = 1000 mAh
  };

  const handleConvert = () => {
    const result = convertToAh(mAh);
    setAh(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      mAh: 5000,
      expectedResult: 5,
      description: 'Example: 5000 mAh to Ah',
    },
    {
      mAh: 1500,
      expectedResult: 1.5,
      description: 'Example: 1500 mAh to Ah',
    },
    {
      mAh: 1000,
      expectedResult: 1,
      description: 'Example: 1000 mAh to Ah',
    },
  ];

  return (
    <div className="container">
      <h1>mAh to Ah Converter</h1>

      <div>
        <label>Enter Capacity in mAh:</label>
        <input
          type="number"
          value={mAh}
          onChange={(e) => setMah(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Capacity (Ah):</h2>
        <p>{ah} Ah</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>mAh: {example.mAh} mAh</p>
              <p>Converted Capacity: {example.expectedResult} Ah</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>Ah = mAh / 1000</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>Ah = Capacity in ampere-hours (Ah)</li>
            <li>mAh = Capacity in milliampere-hours (mAh)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          To convert milliampere-hours (mAh) to ampere-hours (Ah), divide the value in mAh by 1000.
          <br />
          For example, 5000 mAh = 5 Ah, since 5000 ÷ 1000 = 5.
        </p>
      </div>

      <div>
        <h2>Example Calculation:</h2>
        <p>
          What is the capacity in ampere-hours if a battery has 3000 mAh?
          <br />
          Using the formula: Ah = mAh / 1000, we get Ah = 3000 / 1000 = 3 Ah.
        </p>
      </div>
    </div>
  );
};

export default MahToAhConverter;
