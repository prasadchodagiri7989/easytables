import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const VoltsToKWConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [current, setCurrent] = useState<number>(1); // Default current value
  const [power, setPower] = useState<number | string>('—'); // Converted power in kilowatts

  // Function to calculate power in kW
  const calculatePowerKW = (volts: number, current: number): number => {
    return (volts * current) / 1000; // Formula to convert volts and current to kilowatts
  };

  const handleConvert = () => {
    const result = calculatePowerKW(volts, current);
    setPower(result);
  };

  const examples = [
    { volts: 1, current: 1, expectedResult: 0.001, description: '1V and 1A' },
    { volts: 120, current: 10, expectedResult: 1.2, description: '120V and 10A' },
    { volts: 240, current: 5, expectedResult: 1.2, description: '240V and 5A' },
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Volts to Kilowatts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Kilowatts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage (V) and current (A) to power in kilowatts (kW).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current in Amperes (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Voltage: {example.volts} V, Current: {example.current} A</p>
                    <p>Converted Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P(kW) = (V × I) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P(kW)</strong>: Power in kilowatts (kW)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts (V) and amperes (A) to kilowatts (kW) is based on the formula:
                <br />
                - Power (P) in kilowatts is calculated by multiplying voltage and current, and then dividing by 1000.
                <br />
                - This helps to convert electrical power values from watts to kilowatts, a more practical unit for larger systems.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  For a voltage of 1V and a current of 1A: <strong>P(kW) = 0.001 kW</strong>
                </li>
                <li>
                  For a voltage of 120V and a current of 10A: <strong>P(kW) = 1.2 kW</strong>
                </li>
                <li>
                  For a voltage of 240V and a current of 5A: <strong>P(kW) = 1.2 kW</strong>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToKWConverter;
