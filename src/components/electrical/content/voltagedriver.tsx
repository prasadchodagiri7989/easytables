import React, { useState } from "react";

const VoltageDivider = () => {
  const [resistance, setResistance] = useState("");
  const [voltage, setVoltage] = useState("");
  const [loadImpedance, setLoadImpedance] = useState("");
  const [result, setResult] = useState("");

  const calculateVoltageDrop = () => {
    let res = "";
    if (voltage && resistance) {
      // For DC circuit calculation
      res = `V_i = V_T * R_i / (R1 + R2) = ${voltage}V * ${resistance}Ω / (${resistance}) = ${voltage * resistance / (resistance + resistance)}V`;
      setResult(res);
    } else if (voltage && loadImpedance) {
      // For AC circuit calculation
      res = `V_i = V_T * Z_i / (Z1 + Z2) = ${voltage}V * ${loadImpedance}Ω / (${loadImpedance}) = ${voltage * loadImpedance / (loadImpedance + loadImpedance)}V`;
      setResult(res);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Voltage Divider</h1>
      <p className="mb-6">
        Voltage Divider Rule helps find the voltage over a load in a series electrical circuit. The rule applies to both DC and AC circuits.
      </p>

      {/* DC Voltage Divider Example */}
      <h2 className="text-xl font-semibold mb-4">DC Circuit Example</h2>
      <div className="mb-4">
        <img src="/symbols/voltage-divider-dc.png" alt="DC Voltage Divider" />
        <p className="mt-2">
          For a voltage source of 30V connected to resistors R1=30Ω and R2=40Ω in series, the voltage drop across R2 is:
        </p>
        <p>
          <strong>Solution:</strong> V2 = 30V × 40Ω / (30Ω + 40Ω) = 17.14V
        </p>
      </div>

      {/* AC Voltage Divider Example */}
      <h2 className="text-xl font-semibold mb-4">AC Circuit Example</h2>
      <div className="mb-4">
        <img src="/symbols/voltage-divider-ac.png" alt="AC Voltage Divider" />
        <p className="mt-2">
          For an AC voltage source of 30V∟60° and loads Z1=30Ω∟20° and Z2=40Ω∟-50° in series, the voltage drop in load Z1 is:
        </p>
        <p>
          <strong>Solution:</strong> V1 = 30V∟60° × 30Ω∟20° / (30Ω∟20° + 40Ω∟-50°) = 15.62V∟100.71°
        </p>
      </div>

      {/* Voltage Divider Calculator */}
      <h2 className="text-xl font-semibold mb-4">Voltage Divider Calculator</h2>
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
            <label>Enter Resistance (Ω) [DC Circuit]:</label>
            <input
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              placeholder="Resistance in Ohms"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter Load Impedance (Ω) [AC Circuit]:</label>
            <input
              type="number"
              value={loadImpedance}
              onChange={(e) => setLoadImpedance(e.target.value)}
              placeholder="Impedance in Ohms"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateVoltageDrop}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Voltage Drop
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

export default VoltageDivider;
