import React, { useState } from 'react';

const JoulesToVoltsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in joules (J)
  const [charge, setCharge] = useState<number>(0);  // Charge in coulombs (C)
  const [voltage, setVoltage] = useState<number | string>('');  // Output voltage in volts (V)
  
  // Conversion function
  const convertToVolts = (energy: number, charge: number) => {
    if (charge === 0) return 0; // Avoid division by zero
    return energy / charge; // V = J / C
  };

  const handleConvert = () => {
    const result = convertToVolts(energy, charge);
    setVoltage(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      energy: 60,
      charge: 4,
      expectedResult: 15,
      description: 'Example 1: 60 joules with 4 coulombs charge',
    },
    {
      energy: 100,
      charge: 10,
      expectedResult: 10,
      description: 'Example 2: 100 joules with 10 coulombs charge',
    },
    {
      energy: 150,
      charge: 5,
      expectedResult: 30,
      description: 'Example 3: 150 joules with 5 coulombs charge',
    },
    {
      energy: 200,
      charge: 20,
      expectedResult: 10,
      description: 'Example 4: 200 joules with 20 coulombs charge',
    },
  ];

  return (
    <div className="container">
      <h1>Joules to Volts Converter</h1>

      <div>
        <label>Enter Energy in Joules (J):</label>
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Charge in Coulombs (C):</label>
        <input
          type="number"
          value={charge}
          onChange={(e) => setCharge(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Voltage:</h2>
        <p>{voltage} V</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Energy: {example.energy} J, Charge: {example.charge} C</p>
              <p>Converted Voltage: {example.expectedResult} V</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>V = J / C</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>V = Voltage in volts</li>
            <li>J = Energy in joules</li>
            <li>C = Charge in coulombs</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from joules (J) to volts (V) is based on the formula:
          <br />
          - Voltage (V) is equal to the energy (J) divided by the charge (C).
          <br />
          - This relationship comes from the definition of voltage as energy per unit charge.
          <br />
          - It is important to note that joules and volts measure different quantities. Joules measure energy, while volts measure electric potential.
        </p>
      </div>
    </div>
  );
};

export default JoulesToVoltsConverter;