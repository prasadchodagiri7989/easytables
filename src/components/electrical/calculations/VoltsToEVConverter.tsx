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

const VoltsToEVConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default 1V
  const [electronVolts, setElectronVolts] = useState<number | string>('—');

  // Function to calculate electronvolts
  const calculateEV = (volts: number): number => {
    return volts / (1.60218 * Math.pow(10, -19)); // Formula to convert Volts to eV
  };

  const handleConvert = () => {
    const result = calculateEV(volts);
    setElectronVolts(result);
  };

  const examples = [
    { volts: 1, expectedResult: 6.242 * Math.pow(10, 18), description: '1 Volt' },
    { volts: 5, expectedResult: 3.121 * Math.pow(10, 19), description: '5 Volts' },
    { volts: 0.1, expectedResult: 6.242 * Math.pow(10, 17), description: '0.1 Volt' }
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
              <Link to="/physics-conversions">Physics Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Volts to Electronvolts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Electronvolts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage in volts (V) to energy in electronvolts (eV) using a simple formula.</p>

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

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{electronVolts} eV</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Voltage: {example.volts} V</p>
                    <p>Converted Energy: {example.expectedResult} eV</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E<sub>eV</sub> = V / (1.60218 × 10<sup>-19</sup>)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>E<sub>eV</sub></strong>: Energy in electronvolts (eV)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts to electronvolts is based on the formula:
                <br />
                - Energy (eV) is equal to voltage (V) divided by the constant \( 1.60218 \times 10^{-19} \).
                <br />
                - This conversion is essential in particle physics and semiconductor studies to express small amounts of energy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToEVConverter;
