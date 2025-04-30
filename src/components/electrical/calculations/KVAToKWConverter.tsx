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

const KVAToKWConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(0);
  const [realPower, setRealPower] = useState<number | string>('—');

  const convertToKW = (apparentPower: number, powerFactor: number) => {
    return (apparentPower * powerFactor).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToKW(apparentPower, powerFactor);
    setRealPower(result);
  };

  const examples = [
    { apparentPower: 3, powerFactor: 0.8, expectedResult: 2.4, description: '3 kVA with PF 0.8' },
    { apparentPower: 5, powerFactor: 0.9, expectedResult: 4.5, description: '5 kVA with PF 0.9' },
    { apparentPower: 10, powerFactor: 0.85, expectedResult: 8.5, description: '10 kVA with PF 0.85' },
    { apparentPower: 2, powerFactor: 1, expectedResult: 2, description: '2 kVA with PF 1.0' },
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
            <BreadcrumbPage>kVA to kW Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>kVA to kW Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Convert apparent power in kilovolt-amps (kVA) and power factor (PF) to real power in kilowatts (kW).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power (kVA):</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{realPower} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Apparent Power: {example.apparentPower} kVA, Power Factor: {example.powerFactor}</p>
                    <p>Expected Real Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P = kVA × PF</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Real power in kilowatts (kW)</li>
                <li><strong>kVA</strong>: Apparent power in kilovolt-amps</li>
                <li><strong>PF</strong>: Power factor (between 0 and 1)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                Real power (kW) is the usable power in an AC circuit, calculated from the apparent power (kVA) multiplied by the power factor (PF).
                <br />
                The power factor represents the efficiency of the energy conversion and varies between 0 (inefficient) and 1 (perfect efficiency).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KVAToKWConverter;
