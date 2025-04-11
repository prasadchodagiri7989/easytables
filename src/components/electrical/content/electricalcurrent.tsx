import React, { useState } from "react";

const ElectricCurrent = () => {
  const [current, setCurrent] = useState({
    charge: "",
    time: "",
    voltage: "",
    resistance: "",
    voltageSource: "",
    resistances: "",
  });
  const [calculatedCurrent, setCalculatedCurrent] = useState(null);
  const [parallelCurrent, setParallelCurrent] = useState(null);
  const [seriesCurrent, setSeriesCurrent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrent({
      ...current,
      [name]: value,
    });
  };

  const calculateCurrent = () => {
    const { charge, time } = current;
    const chargeValue = parseFloat(charge);
    const timeValue = parseFloat(time);

    if (!isNaN(chargeValue) && !isNaN(timeValue) && timeValue !== 0) {
      const currentCalculated = chargeValue / timeValue;
      setCalculatedCurrent(currentCalculated.toFixed(2));
    }
  };

  const calculateCurrentWithOhm = () => {
    const { voltage, resistance } = current;
    const voltageValue = parseFloat(voltage);
    const resistanceValue = parseFloat(resistance);

    if (!isNaN(voltageValue) && !isNaN(resistanceValue) && resistanceValue !== 0) {
      const currentWithOhm = voltageValue / resistanceValue;
      setCalculatedCurrent(currentWithOhm.toFixed(2));
    }
  };

  const calculateParallelCurrent = () => {
    const { voltageSource, resistances } = current;
    const resistancesArray = resistances.split(",").map((r) => parseFloat(r.trim()));

    if (resistancesArray.length >= 2 && !isNaN(voltageSource)) {
      const totalResistance = resistancesArray.reduce((acc, curr) => acc + curr, 0);
      const parallelCurrentCalculated = resistancesArray[0] / totalResistance * voltageSource;
      setParallelCurrent(parallelCurrentCalculated.toFixed(2));
    }
  };

  const calculateSeriesCurrent = () => {
    const { voltageSource, resistances } = current;
    const resistancesArray = resistances.split(",").map((r) => parseFloat(r.trim()));

    if (resistancesArray.length >= 2 && !isNaN(voltageSource)) {
      const totalResistance = resistancesArray.reduce((acc, curr) => acc + curr, 0);
      const seriesCurrentCalculated = voltageSource / totalResistance;
      setSeriesCurrent(seriesCurrentCalculated.toFixed(2));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Electric Current</h1>
      <p className="mb-6">
        Electric current is the flow rate of electric charge in an electric field, often represented as the flow of charge through a conductor.
      </p>

      <h3 className="text-lg font-semibold mb-2">Current Calculation</h3>
      <div className="mb-4">
        <p>The formula for current when charge and time are given is: <br /> I = ΔQ / Δt</p>
        <label>Enter Charge (C):</label>
        <input
          type="number"
          name="charge"
          value={current.charge}
          onChange={handleInputChange}
          placeholder="Charge (C)"
          className="p-2 border rounded"
        />
        <label>Enter Time (s):</label>
        <input
          type="number"
          name="time"
          value={current.time}
          onChange={handleInputChange}
          placeholder="Time (s)"
          className="p-2 border rounded"
        />
        <button
          onClick={calculateCurrent}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Current
        </button>

        {calculatedCurrent !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Calculated Current:</h3>
            <p>I = {calculatedCurrent} Amps</p>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">Current Calculation with Ohm's Law</h3>
      <div className="mb-4">
        <p>The formula for current using Ohm's Law is: <br /> I = V / R</p>
        <label>Enter Voltage (V):</label>
        <input
          type="number"
          name="voltage"
          value={current.voltage}
          onChange={handleInputChange}
          placeholder="Voltage (V)"
          className="p-2 border rounded"
        />
        <label>Enter Resistance (Ω):</label>
        <input
          type="number"
          name="resistance"
          value={current.resistance}
          onChange={handleInputChange}
          placeholder="Resistance (Ω)"
          className="p-2 border rounded"
        />
        <button
          onClick={calculateCurrentWithOhm}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Current
        </button>

        {calculatedCurrent !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Calculated Current:</h3>
            <p>I = {calculatedCurrent} Amps</p>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">Current in Parallel Circuits</h3>
      <div className="mb-4">
        <p>The total current in parallel circuits is the sum of currents through each load.</p>
        <label>Enter Voltage Source (V):</label>
        <input
          type="number"
          name="voltageSource"
          value={current.voltageSource}
          onChange={handleInputChange}
          placeholder="Voltage Source (V)"
          className="p-2 border rounded"
        />
        <label>Enter Resistances (Ω) [comma-separated]:</label>
        <input
          type="text"
          name="resistances"
          value={current.resistances}
          onChange={handleInputChange}
          placeholder="R1, R2, R3, ..."
          className="p-2 border rounded"
        />
        <button
          onClick={calculateParallelCurrent}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Parallel Current
        </button>

        {parallelCurrent !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Calculated Current (Parallel):</h3>
            <p>I = {parallelCurrent} Amps</p>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">Current in Series Circuits</h3>
      <div className="mb-4">
        <p>The current in a series circuit is the same for all components.</p>
        <label>Enter Voltage Source (V):</label>
        <input
          type="number"
          name="voltageSource"
          value={current.voltageSource}
          onChange={handleInputChange}
          placeholder="Voltage Source (V)"
          className="p-2 border rounded"
        />
        <label>Enter Resistances (Ω) [comma-separated]:</label>
        <input
          type="text"
          name="resistances"
          value={current.resistances}
          onChange={handleInputChange}
          placeholder="R1, R2, R3, ..."
          className="p-2 border rounded"
        />
        <button
          onClick={calculateSeriesCurrent}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate Series Current
        </button>

        {seriesCurrent !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Calculated Current (Series):</h3>
            <p>I = {seriesCurrent} Amps</p>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
      <p>
        - The total current in a series circuit is the same through each resistor.
        <br />
        - In parallel circuits, the total current is the sum of the currents through each resistor.
      </p>
    </div>
  );
};

export default ElectricCurrent;
