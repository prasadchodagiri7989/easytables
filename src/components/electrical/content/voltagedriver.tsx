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

const VoltageDivider = () => {
  const [resistance, setResistance] = useState<string>("");
  const [voltage, setVoltage] = useState<string>("");
  const [loadImpedance, setLoadImpedance] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateVoltageDrop = () => {
    const V = parseFloat(voltage);
    const R = parseFloat(resistance);
    const Z = parseFloat(loadImpedance);

    if (!isNaN(V) && !isNaN(R)) {
      // DC calculation assuming two equal resistors
      const total = R + R;
      const Vi = (V * R) / total;
      const res = `DC: V_i = V_T × R_i / (R1 + R2) = ${V}V × ${R}Ω / (${total}Ω) = ${Vi.toFixed(2)}V`;
      setResult(res);
    } else if (!isNaN(V) && !isNaN(Z)) {
      // AC calculation assuming two equal impedances
      const total = Z + Z;
      const Vi = (V * Z) / total;
      const res = `AC: V_i = V_T × Z_i / (Z1 + Z2) = ${V}V × ${Z}Ω / (${total}Ω) = ${Vi.toFixed(2)}V`;
      setResult(res);
    } else {
      setResult("Please enter valid voltage and either resistance or load impedance.");
    }
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
          <BreadcrumbPage>Voltage Divider</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-bold mb-4">Voltage Divider</h1>
      <p className="mb-6">
        Voltage Divider Rule helps find the voltage over a load in a series electrical circuit. It applies to both DC and AC circuits.
      </p>

      <h2 className="text-xl font-semibold mb-4">DC Circuit Example</h2>
      <div className="mb-4">
        <img src="/symbols/voltage-divider-dc.png" alt="DC Voltage Divider" />
        <p className="mt-2">
          For a voltage source of 30V connected to resistors R1=30Ω and R2=40Ω in series, the voltage drop across R2 is:
        </p>
        <p><strong>Solution:</strong> V2 = 30V × 40Ω / (30Ω + 40Ω) = 17.14V</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">AC Circuit Example</h2>
      <div className="mb-4">
        <img src="/symbols/voltage-divider-ac.png" alt="AC Voltage Divider" />
        <p className="mt-2">
          For an AC voltage source of 30V∟60° and loads Z1=30Ω∟20° and Z2=40Ω∟-50° in series, the voltage drop in load Z1 is:
        </p>
        <p><strong>Solution:</strong> V1 = 30V∟60° × 30Ω∟20° / (30Ω∟20° + 40Ω∟-50°) = 15.62V∟100.71°</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Voltage Divider Calculator</h2>
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label>Enter Voltage (V):</label>
            <input
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              placeholder="Voltage in Volts"
              className="p-2 border rounded dark:text-black"
            />
          </div>

          <div>
            <label>Enter Resistance (Ω) [DC]:</label>
            <input
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              placeholder="Resistance in Ohms"
              className="p-2 border rounded dark:text-black"
            />
          </div>

          <div>
            <label>Enter Load Impedance (Ω) [AC]:</label>
            <input
              type="number"
              value={loadImpedance}
              onChange={(e) => setLoadImpedance(e.target.value)}
              placeholder="Impedance in Ohms"
              className="p-2 border rounded dark:text-black"
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
