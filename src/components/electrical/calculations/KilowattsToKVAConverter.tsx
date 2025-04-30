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

const KilowattsToKVAConverter: React.FC = () => {
  const [realPower, setRealPower] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(1);
  const [apparentPower, setApparentPower] = useState<number | string>('—');

  const convertToKVA = (realPower: number, powerFactor: number) => {
    if (powerFactor === 0) return "Power factor cannot be zero";
    return (realPower / powerFactor).toFixed(3);
  };

  const handleConvert = () => {
    const result = convertToKVA(realPower, powerFactor);
    setApparentPower(result);
  };

  const examples = [
    { realPower: 3, powerFactor: 0.8, expectedResult: 3.75, description: 'Example 1: 3 kW with power factor 0.8' },
    { realPower: 5, powerFactor: 1, expectedResult: 5, description: 'Example 2: 5 kW with power factor 1' },
    { realPower: 10, powerFactor: 0.9, expectedResult: 11.11, description: 'Example 3: 10 kW with power factor 0.9' },
    { realPower: 2, powerFactor: 0.7, expectedResult: 2.86, description: 'Example 4: 2 kW with power factor 0.7' },
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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Kilowatts to kVA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to kVA Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert real power in kilowatts (kW) to apparent power in kilovolt-amps (kVA) using the power factor.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Real Power (kW):</label>
              <input
                type="number"
                value={realPower}
                onChange={(e) => setRealPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                step="0.01"
                min="0"
                max="1"
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
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{apparentPower} kVA</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Real Power: {example.realPower} kW, PF: {example.powerFactor}</p>
                    <p>Expected Apparent Power: {example.expectedResult} kVA</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>S = kW / PF</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>S</strong>: Apparent power in kilovolt-amps (kVA)</li>
                <li><strong>kW</strong>: Real power in kilowatts</li>
                <li><strong>PF</strong>: Power factor (between 0 and 1)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to kilovolt-amps (kVA) is based on the formula:<br />
                kVA = kW / PF<br />
                The power factor (PF) represents the efficiency of power usage. A power factor of 1 means all the power is used effectively.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KilowattsToKVAConverter;
