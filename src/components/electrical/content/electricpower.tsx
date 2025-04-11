import React, { useState } from "react";

const ElectricPower = () => {
  const [inputs, setInputs] = useState({
    voltage: "",
    current: "",
    phaseAngle: "",
    voltagePeak: "",
    currentPeak: "",
    powerType: "real",
    isThreePhase: false,
  });

  const [calculatedPower, setCalculatedPower] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const calculatePower = () => {
    const { voltage, current, phaseAngle, voltagePeak, currentPeak, powerType, isThreePhase } = inputs;

    const Vrms = voltagePeak ? voltagePeak / Math.sqrt(2) : voltage;
    const Irms = currentPeak ? currentPeak / Math.sqrt(2) : current;

    const phaseAngleRad = (Math.PI / 180) * parseFloat(phaseAngle);

    let power = 0;

    if (powerType === "real") {
      power = Vrms * Irms * Math.cos(phaseAngleRad); // Real power (P)
    } else if (powerType === "reactive") {
      power = Vrms * Irms * Math.sin(phaseAngleRad); // Reactive power (Q)
    } else if (powerType === "apparent") {
      power = Vrms * Irms; // Apparent power (S)
    }

    if (isThreePhase) {
      power *= Math.sqrt(3);
    }

    setCalculatedPower(power.toFixed(2));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Electric Power</h1>
      <p className="mb-6">
        Electric power is the rate at which electrical energy is consumed or converted. We have real, reactive, and apparent power.
      </p>

      <div className="mb-6">
        <label className="block mb-2">Voltage (V):</label>
        <input
          type="number"
          name="voltage"
          value={inputs.voltage}
          onChange={handleInputChange}
          placeholder="Voltage (V)"
          className="p-2 border rounded mb-4"
        />
        <label className="block mb-2">Current (A):</label>
        <input
          type="number"
          name="current"
          value={inputs.current}
          onChange={handleInputChange}
          placeholder="Current (A)"
          className="p-2 border rounded mb-4"
        />
        <label className="block mb-2">Phase Angle (degrees):</label>
        <input
          type="number"
          name="phaseAngle"
          value={inputs.phaseAngle}
          onChange={handleInputChange}
          placeholder="Phase Angle (°)"
          className="p-2 border rounded mb-4"
        />
        <div className="flex items-center mb-4">
          <label className="mr-2">Use Three-Phase System</label>
          <input
            type="checkbox"
            name="isThreePhase"
            checked={inputs.isThreePhase}
            onChange={() => setInputs({ ...inputs, isThreePhase: !inputs.isThreePhase })}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Peak Voltage (V):</label>
          <input
            type="number"
            name="voltagePeak"
            value={inputs.voltagePeak}
            onChange={handleInputChange}
            placeholder="Peak Voltage (V)"
            className="p-2 border rounded mb-4"
          />
          <label className="block mb-2">Peak Current (A):</label>
          <input
            type="number"
            name="currentPeak"
            value={inputs.currentPeak}
            onChange={handleInputChange}
            placeholder="Peak Current (A)"
            className="p-2 border rounded mb-4"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Power Type:</label>
          <select
            name="powerType"
            value={inputs.powerType}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="real">Real Power (W)</option>
            <option value="reactive">Reactive Power (VAR)</option>
            <option value="apparent">Apparent Power (VA)</option>
          </select>
        </div>

        <button
          onClick={calculatePower}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Power
        </button>

        {calculatedPower !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Calculated Power:</h3>
            <p>
              Power = {calculatedPower} {inputs.powerType === "real" ? "W" : inputs.powerType === "reactive" ? "VAR" : "VA"}
            </p>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">Power Relations</h3>
      <p className="mb-4">
        The real power (P), reactive power (Q), and apparent power (S) are related as follows:
        <br />
        P² + Q² = S²
      </p>
      <p>
        In three-phase systems, the real power is multiplied by √3 when line-to-line voltage is used. When line-to-zero voltage is used, the real power is multiplied by 3.
      </p>
    </div>
  );
};

export default ElectricPower;
