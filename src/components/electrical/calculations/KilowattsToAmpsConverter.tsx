import React, { useState } from 'react';

const KilowattsToAmpsConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [voltage, setVoltage] = useState<number>(0);  // Voltage in volts (V)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [current, setCurrent] = useState<number | string>('');  // Output current in amps (A)
  const [phaseType, setPhaseType] = useState<'DC' | 'AC Single Phase' | 'AC Three Phase'>('DC');  // Type of phase

  // Conversion functions for different scenarios
  const convertToAmpsDC = (power: number, voltage: number) => {
    if (voltage === 0) return 0;  // Avoid division by zero
    return (1000 * power) / voltage;  // DC: A = 1000 * kW / V
  };

  const convertToAmpsACSinglePhase = (power: number, voltage: number, powerFactor: number) => {
    if (voltage === 0 || powerFactor === 0) return 0;  // Avoid division by zero
    return (1000 * power) / (powerFactor * voltage);  // AC Single Phase: A = 1000 * kW / (PF * V)
  };

  const convertToAmpsACThreePhase = (power: number, voltage: number, powerFactor: number) => {
    if (voltage === 0 || powerFactor === 0) return 0;  // Avoid division by zero
    return (1000 * power) / (Math.sqrt(3) * powerFactor * voltage);  // AC Three Phase: A = 1000 * kW / (√3 * PF * V)
  };

  const handleConvert = () => {
    let result = 0;
    if (phaseType === 'DC') {
      result = convertToAmpsDC(power, voltage);
    } else if (phaseType === 'AC Single Phase') {
      result = convertToAmpsACSinglePhase(power, voltage, powerFactor);
    } else if (phaseType === 'AC Three Phase') {
      result = convertToAmpsACThreePhase(power, voltage, powerFactor);
    }
    setCurrent(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      power: 0.33,
      voltage: 110,
      powerFactor: 1,
      expectedResult: 3,
      description: 'DC Example: 0.33 kW, 110 V',
      phaseType: 'DC',
    },
    {
      power: 0.33,
      voltage: 110,
      powerFactor: 0.8,
      expectedResult: 3.75,
      description: 'AC Single Phase Example: 0.33 kW, 110 V, PF 0.8',
      phaseType: 'AC Single Phase',
    },
    {
      power: 0.33,
      voltage: 110,
      powerFactor: 0.8,
      expectedResult: 2.165,
      description: 'AC Three Phase Example: 0.33 kW, 110 V, PF 0.8',
      phaseType: 'AC Three Phase',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Amps Converter</h1>

      <div>
        <label>Enter Power in Kilowatts (kW):</label>
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Voltage in Volts (V):</label>
        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(Number(e.target.value))}
        />
      </div>

      {phaseType !== 'DC' && (
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
      )}

      <div>
        <label>Choose Phase Type:</label>
        <select onChange={(e) => setPhaseType(e.target.value as 'DC' | 'AC Single Phase' | 'AC Three Phase')}>
          <option value="DC">DC</option>
          <option value="AC Single Phase">AC Single Phase</option>
          <option value="AC Three Phase">AC Three Phase</option>
        </select>
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Current:</h2>
        <p>{current} A</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Power: {example.power} kW, Voltage: {example.voltage} V, Power Factor: {example.powerFactor}</p>
              <p>Converted Current: {example.expectedResult} A</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formulas:</h2>
        <p>
          For DC: <strong>I = 1000 × kW / V</strong>
          <br />
          For AC Single Phase: <strong>I = 1000 × kW / (PF × V)</strong>
          <br />
          For AC Three Phase: <strong>I = 1000 × kW / (√3 × PF × V)</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>I = Current in amps (A)</li>
            <li>kW = Power in kilowatts (kW)</li>
            <li>V = Voltage in volts (V)</li>
            <li>PF = Power factor (PF, between 0 and 1)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to amps (A) depends on the type of circuit and the voltage.
          <br />
          - For DC circuits, the formula is <strong>I = 1000 × kW / V</strong>.
          <br />
          - For AC single-phase circuits, you need to account for the power factor: <strong>I = 1000 × kW / (PF × V)</strong>.
          <br />
          - For AC three-phase circuits, you also need to account for the square root of 3 and the power factor: <strong>I = 1000 × kW / (√3 × PF × V)</strong>.
        </p>
      </div>
    </div>
  );
};

export default KilowattsToAmpsConverter;