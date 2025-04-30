import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OhmsToAmpsConverter: React.FC = () => {
  const [voltage, setVoltage] = useState<number>(230);  // Voltage in volts (V)
  const [resistance, setResistance] = useState<number>(10);  // Resistance in ohms (Ω)
  const [current, setCurrent] = useState<number | string>('—');  // Current in amps (A)

  const convertToAmps = (voltage: number, resistance: number) => {
    return voltage / resistance;  // I(A) = V(V) / R(Ω)
  };

  const handleConvert = () => {
    const result = convertToAmps(voltage, resistance);
    setCurrent(result);
  };

  const examples = [
    { voltage: 230, resistance: 10, expectedResult: 23, description: '230 V with resistance of 10 Ω' },
    { voltage: 120, resistance: 60, expectedResult: 2, description: '120 V with resistance of 60 Ω' },
    { voltage: 480, resistance: 240, expectedResult: 2, description: '480 V with resistance of 240 Ω' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ohms to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Ohms to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert voltage in volts (V) and resistance in ohms (Ω) to current in amps (A).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Resistance in Ohms (Ω):</label>
              <input
                type="number"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Current:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{current} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Voltage: {example.voltage} V, Resistance: {example.resistance} Ω</p>
                    <p>Converted Current: {example.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>I = V / R</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I</strong>: Current in amps (A)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>R</strong>: Resistance in ohms (Ω)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from voltage (V) and resistance (Ω) to current (A) is based on the formula:
                <br />
                - Current (I) is equal to voltage (V) divided by resistance (R).
                <br />
                - This conversion helps us calculate how much current flows through a resistor given the voltage across it.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OhmsToAmpsConverter;
