import React, { useState } from 'react';

const KWToVoltsConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [current, setCurrent] = useState<number>(1);  // Current in amps (A)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [voltage, setVoltage] = useState<number | string>('');  // Output voltage in volts (V)
  const [systemType, setSystemType] = useState<string>('dc');  // Type of system (DC, AC Single-phase, AC Three-phase)

  // DC Conversion function
  const convertDCToVolts = (power: number, current: number) => {
    return (1000 * power) / current;  // V = 1000 × P / I
  };

  // AC Single-phase Conversion function
  const convertACSinglePhaseToVolts = (power: number, powerFactor: number, current: number) => {
    return (1000 * power) / (powerFactor * current);  // V = 1000 × P / (PF × I)
  };

  // AC Three-phase Conversion function
  const convertACThreePhaseToVolts = (power: number, powerFactor: number, current: number) => {
    return (1000 * power) / (Math.sqrt(3) * powerFactor * current);  // V = 1000 × P / (√3 × PF × I)
  };

  const handleConvert = () => {
    let result;
    if (systemType === 'dc') {
      result = convertDCToVolts(power, current);
    } else if (systemType === 'ac-single-phase') {
      result = convertACSinglePhaseToVolts(power, powerFactor, current);
    } else if (systemType === 'ac-three-phase') {
      result = convertACThreePhaseToVolts(power, powerFactor, current);
    }
    setVoltage(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      systemType: 'dc',
      power: 4,
      current: 3,
      expectedResult: 1333.333,
      description: 'DC Example: Power is 4 kW, Current is 3 A',
    },
    {
      systemType: 'ac-single-phase',
      power: 4,
      powerFactor: 0.8,
      current: 3.75,
      expectedResult: 1333.333,
      description: 'AC Single-phase Example: Power is 4 kW, PF is 0.8, Current is 3.75 A',
    },
    {
      systemType: 'ac-three-phase',
      power: 4,
      powerFactor: 0.8,
      current: 2.165,
      expectedResult: 1333,
      description: 'AC Three-phase Example: Power is 4 kW, PF is 0.8, Current is 2.165 A',
    },
  ];

  return (
    <div className="container">
      <h1>Kilowatts to Volts Converter</h1>

      <div>
        <label>Enter Power in Kilowatts (kW):</label>
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Current in Amps (A):</label>
        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(Number(e.target.value))}
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
        <label>Select System Type:</label>
        <select value={systemType} onChange={(e) => setSystemType(e.target.value)}>
          <option value="dc">DC</option>
          <option value="ac-single-phase">AC Single-phase</option>
          <option value="ac-three-phase">AC Three-phase</option>
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
              <p>Power: {example.power} kW, Current: {example.current} A, Power Factor: {example.powerFactor}</p>
              <p>Converted Voltage: {example.expectedResult} V</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>DC: V = 1000 × P / I</strong><br />
          <strong>AC Single-phase: V = 1000 × P / (PF × I)</strong><br />
          <strong>AC Three-phase: V = 1000 × P / (√3 × PF × I)</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>V = Voltage in volts (V)</li>
            <li>P = Power in kilowatts (kW)</li>
            <li>I = Current in amps (A)</li>
            <li>PF = Power factor (PF)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from kilowatts (kW) to volts (V) depends on the type of system (DC or AC) and the formula:
          <br />
          - For *DC*, the formula is: <strong>V = 1000 × P / I</strong>
          <br />
          - For *AC Single-phase*, the formula is: <strong>V = 1000 × P / (PF × I)</strong>
          <br />
          - For *AC Three-phase*, the formula is: <strong>V = 1000 × P / (√3 × PF × I)</strong>
          <br />
          The power factor (PF) adjusts for the phase difference between voltage and current in AC systems, affecting the calculated voltage.
        </p>
      </div>
    </div>
  );
};

export default KWToVoltsConverter;