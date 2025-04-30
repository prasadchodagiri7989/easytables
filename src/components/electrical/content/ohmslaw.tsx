import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const OhmsLaw: React.FC = () => {
  const [resistance, setResistance] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [voltage, setVoltage] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateOhmsLaw = () => {
    let res = "";
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = parseFloat(resistance);

    if (!isNaN(v) && !isNaN(r)) {
      const calculatedCurrent = v / r;
      res = `I = V / R = ${v}V / ${r}Ω = ${calculatedCurrent.toFixed(2)}A`;
      setCurrent(calculatedCurrent.toString());
    } else if (!isNaN(v) && !isNaN(i)) {
      const calculatedResistance = v / i;
      res = `R = V / I = ${v}V / ${i}A = ${calculatedResistance.toFixed(2)}Ω`;
      setResistance(calculatedResistance.toString());
    } else if (!isNaN(i) && !isNaN(r)) {
      const calculatedVoltage = i * r;
      res = `V = I * R = ${i}A * ${r}Ω = ${calculatedVoltage.toFixed(2)}V`;
      setVoltage(calculatedVoltage.toString());
    } else {
      res = "Please enter any two values.";
    }

    setResult(res);
  };

  return (
    <div className="p-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/electrical/laws">Electronic Circuit Laws</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ohm's Law</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-4">Ohm's Law</h1>
      <p className="mb-6">
        Ohm's law shows a linear relationship between the voltage and the current in an electrical circuit.
      </p>

      <h2 className="text-xl font-semibold mb-4">Example 1: DC Circuit</h2>
      <div className="mb-4">
        <img src="/symbols/ohm-law-example1.png" alt="Ohm's Law Example 1" />
        <p className="mt-2">
          Find the current of an electrical circuit with a resistance of 50Ω and a voltage supply of 5V.
        </p>
        <p><strong>Solution:</strong> I = V / R = 5V / 50Ω = 0.1A = 100mA</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Example 2: AC Circuit</h2>
      <div className="mb-4">
        <img src="/symbols/ohm-law-example2.png" alt="Ohm's Law Example 2" />
        <p className="mt-2">
          Find the current of an AC circuit with a voltage supply of 110V∯70° and load of 0.5kΩ∯20°.
        </p>
        <p><strong>Solution:</strong> I = V / Z = 110V∯70° / 500Ω∯20° = 0.22A∠50°</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Ohm's Law Calculator</h2>
      <div className="mb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <label htmlFor="voltage">Enter Voltage (V):</label>
            <input
              id="voltage"
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              placeholder="Voltage in Volts"
              className="p-2 border rounded dark:text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="current">Enter Current (I):</label>
            <input
              id="current"
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              placeholder="Current in Amps"
              className="p-2 border rounded dark:text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="resistance">Enter Resistance (R):</label>
            <input
              id="resistance"
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              placeholder="Resistance in Ohms"
              className="p-2 border rounded dark:text-black"
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