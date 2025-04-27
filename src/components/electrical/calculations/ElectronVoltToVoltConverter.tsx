import React, { useState } from 'react';

const ElectronVoltToVoltConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in electron-volts (eV)
  const [charge, setCharge] = useState<number>(0);  // Charge in Coulombs (C)
  const [voltage, setVoltage] = useState<number | string>('');  // Output voltage
  const [method, setMethod] = useState<string>('elementaryCharge'); // Selected method for calculation

  // Constants
  const elementaryCharge = 1.602e-19;  // Elementary charge in Coulombs (C)

  // Conversion Functions
  const convertToVoltageWithElementaryCharge = (energy: number, charge: number) => {
    // Calculate voltage using elementary charge (e)
    return energy / charge;  // V = eV / e
  };

  const convertToVoltageWithCoulombs = (energy: number, charge: number) => {
    // Calculate voltage using coulombs (C)
    return (elementaryCharge * energy) / charge;  // V = (eV * e) / C
  };

  const handleConvert = () => {
    let result = 0;
    if (method === 'elementaryCharge') {
      result = convertToVoltageWithElementaryCharge(energy, charge);
    } else {
      result = convertToVoltageWithCoulombs(energy, charge);
    }
    setVoltage(result);
  };

  // Examples for more clarity:
  const examples = [
    {
      energy: 800,
      charge: 40,
      method: 'elementaryCharge',
      expectedResult: 20,
      description: 'Example 1: Using 800 eV energy and 40 elementary charges',
    },
    {
      energy: 800,
      charge: 2,
      method: 'coulombs',
      expectedResult: 6.4087e-17,
      description: 'Example 2: Using 800 eV energy and 2 Coulombs of charge',
    },
    {
      energy: 1000,
      charge: 10,
      method: 'elementaryCharge',
      expectedResult: 100,
      description: 'Example 3: Using 1000 eV energy and 10 elementary charges',
    },
    {
      energy: 1500,
      charge: 1,
      method: 'coulombs',
      expectedResult: 2.403e-16,
      description: 'Example 4: Using 1500 eV energy and 1 Coulomb of charge',
    },
  ];

  return (
    <div className="container">
      <h1>Electron-Volt to Volt Converter</h1>

      <div>
        <label>Enter Energy in eV:</label>
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Charge (Coulombs):</label>
        <input
          type="number"
          value={charge}
          onChange={(e) => setCharge(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Choose Conversion Method:</label>
        <select onChange={(e) => setMethod(e.target.value)} value={method}>
          <option value="elementaryCharge">Using Elementary Charge (e)</option>
          <option value="coulombs">Using Coulombs (C)</option>
        </select>
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
              <p>Energy: {example.energy} eV, Charge: {example.charge} C</p>
              <p>Converted Voltage: {example.expectedResult} V</p>
              <p>Method Used: {example.method === 'elementaryCharge' ? 'Elementary Charge' : 'Coulombs'}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formulae:</h2>
        <p>
          1. Using Elementary Charge (e): <br />
          <strong>V = eV / e</strong> <br />
          Where e is the elementary charge (1.602 × 10<sup>-19</sup> C)
        </p>
        <p>
          2. Using Coulombs (C): <br />
          <strong>V = (1.602 × 10<sup>-19</sup> × eV) / C</strong>
        </p>
      </div>
    </div>
  );
};

export default ElectronVoltToVoltConverter;