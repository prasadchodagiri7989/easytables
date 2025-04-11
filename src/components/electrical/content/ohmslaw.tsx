import React, { useState } from "react";

const OhmsLaw = () => {
  const [resistance, setResistance] = useState("");
  const [current, setCurrent] = useState("");
  const [voltage, setVoltage] = useState("");
  const [result, setResult] = useState("");

  const calculateOhmsLaw = () => {
    let res = "";
    if (voltage && resistance) {
      // Calculate current
      res = `I = V / R = ${voltage}V / ${resistance}Ω = ${voltage / resistance}A`;
      setCurrent(voltage / resistance);
    } else if (voltage && current) {
      // Calculate resistance
      res = `R = V / I = ${voltage}V / ${current}A = ${voltage / current}Ω`;
      setResistance(voltage / current);
    } else if (current && resistance) {
      // Calculate voltage
      res = `V = I * R = ${current}A * ${resistance}Ω = ${current * resistance}V`;
      setVoltage(current * resistance);
    }
    setResult(res);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ohm's Law</h1>
      <p className="mb-6">
        Ohm's law shows a linear relationship between the voltage and the
        current in an electrical circuit. Below are examples of voltage,
        current, and resistance calculations.
      </p>

      {/* Example Diagrams */}
      <h2 className="text-xl font-semibold mb-4">Example 1: DC Circuit</h2>
      <div className="mb-4">
        <img src="/symbols/ohm-law-example1.png" alt="Ohm's Law Example 1" />
        <p className="mt-2">
          Find the current of an electrical circuit with a resistance of 50Ω
          and a voltage supply of 5V.
        </p>
        <p>
          <strong>Solution:</strong> I = V / R = 5V / 50Ω = 0.1A = 100mA
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Example 2: AC Circuit</h2>
      <div className="mb-4">
        <img src="/symbols/ohm-law-example2.png" alt="Ohm's Law Example 2" />
        <p className="mt-2">
          Find the current of an AC circuit with a voltage supply of
          110V∟70° and load of 0.5kΩ∟20°.
        </p>
        <p>
          <strong>Solution:</strong> I = V / Z = 110V∟70° / 500Ω∟20° = 0.22A∠50°
        </p>
      </div>

      {/* Ohm's Law Calculator */}
      <h2 className="text-xl font-semibold mb-4">Ohm's Law Calculator</h2>
      <div className="mb-4">
        <div className="flex gap-4">
          <div>
            <label>Enter Voltage (V):</label>
            <input
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              placeholder="Voltage in Volts"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter Current (I):</label>
            <input
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              placeholder="Current in Amps"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter Resistance (R):</label>
            <input
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              placeholder="Resistance in Ohms"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateOhmsLaw}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OhmsLaw;

