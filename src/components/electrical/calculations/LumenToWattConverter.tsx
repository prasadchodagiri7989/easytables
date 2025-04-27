import React, { useState } from 'react';

const LumenToWattConverter: React.FC = () => {
  const [lumens, setLumens] = useState<number>(0);  // Luminous flux in lumens (lm)
  const [efficacy, setEfficacy] = useState<number>(1);  // Luminous efficacy in lumens per watt (lm/W)
  const [power, setPower] = useState<number | string>('');  // Output power in watts (W)

  // Conversion function to calculate watts
  const convertToWatt = (lumens: number, efficacy: number) => {
    return lumens / efficacy;  // P(W) = ΦV(lm) / η(lm/W)
  };

  const handleConvert = () => {
    const result = convertToWatt(lumens, efficacy);
    setPower(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      lumens: 900,
      efficacy: 15,
      expectedResult: 60,
      description: 'Example: 900 lumens with efficacy of 15 lm/W',
    },
    {
      lumens: 1500,
      efficacy: 25,
      expectedResult: 60,
      description: 'Example: 1500 lumens with efficacy of 25 lm/W',
    },
    {
      lumens: 3000,
      efficacy: 50,
      expectedResult: 60,
      description: 'Example: 3000 lumens with efficacy of 50 lm/W',
    },
    {
      lumens: 600,
      efficacy: 10,
      expectedResult: 60,
      description: 'Example: 600 lumens with efficacy of 10 lm/W',
    },
  ];

  return (
    <div className="container">
      <h1>Lumens to Watts Converter</h1>

      <div>
        <label>Enter Luminous Flux in Lumens (lm):</label>
        <input
          type="number"
          value={lumens}
          onChange={(e) => setLumens(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Luminous Efficacy in Lumens per Watt (lm/W):</label>
        <input
          type="number"
          value={efficacy}
          onChange={(e) => setEfficacy(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Power:</h2>
        <p>{power} W</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Lumens: {example.lumens} lm, Efficacy: {example.efficacy} lm/W</p>
              <p>Converted Power: {example.expectedResult} W</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>W = lm / (lm/W)</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>W = Power in watts (W)</li>
            <li>lm = Luminous flux in lumens (lm)</li>
            <li>lm/W = Luminous efficacy in lumens per watt (lm/W)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from lumens (lm) to watts (W) is based on the formula:
          <br />
          - Power (W) is equal to luminous flux (lumens) divided by luminous efficacy (lumens per watt).
          <br />
          - This conversion helps us calculate how much power (in watts) is required to produce a certain amount of luminous flux (lumens) with a given luminous efficacy.
        </p>
      </div>

      <div>
        <h2>Luminous Efficacy Table:</h2>
        <table>
          <thead>
            <tr>
              <th>Light Type</th>
              <th>Typical Luminous Efficacy (lm/W)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tungsten incandescent light bulb</td>
              <td>12.5-17.5 lm/W</td>
            </tr>
            <tr>
              <td>Halogen lamp</td>
              <td>16-24 lm/W</td>
            </tr>
            <tr>
              <td>Fluorescent lamp</td>
              <td>45-75 lm/W</td>
            </tr>
            <tr>
              <td>LED lamp</td>
              <td>80-100 lm/W</td>
            </tr>
            <tr>
              <td>Metal halide lamp</td>
              <td>75-100 lm/W</td>
            </tr>
            <tr>
              <td>High pressure sodium vapor lamp</td>
              <td>85-150 lm/W</td>
            </tr>
            <tr>
              <td>Low pressure sodium vapor lamp</td>
              <td>100-200 lm/W</td>
            </tr>
            <tr>
              <td>Mercury vapor lamp</td>
              <td>35-65 lm/W</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Lumens to Watts Table:</h2>
        <table>
          <thead>
            <tr>
              <th>Lumens</th>
              <th>Incandescent Light Bulb (W)</th>
              <th>Fluorescent/LED (W)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>375 lm</td>
              <td>25 W</td>
              <td>6.23 W</td>
            </tr>
            <tr>
              <td>600 lm</td>
              <td>40 W</td>
              <td>10 W</td>
            </tr>
            <tr>
              <td>900 lm</td>
              <td>60 W</td>
              <td>15 W</td>
            </tr>
            <tr>
              <td>1125 lm</td>
              <td>75 W</td>
              <td>18.75 W</td>
            </tr>
            <tr>
              <td>1500 lm</td>
              <td>100 W</td>
              <td>25 W</td>
            </tr>
            <tr>
              <td>2250 lm</td>
              <td>150 W</td>
              <td>37.5 W</td>
            </tr>
            <tr>
              <td>3000 lm</td>
              <td>200 W</td>
              <td>50 W</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LumenToWattConverter;