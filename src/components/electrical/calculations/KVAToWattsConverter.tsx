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

const KVAToWattsConverter: React.FC = () => {
  const [apparentPowerKVA, setApparentPowerKVA] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(1);
  const [realPower, setRealPower] = useState<number | string>('—');

  const convertToWatts = (apparentPowerKVA: number, powerFactor: number) => {
    return (1000 * apparentPowerKVA * powerFactor).toFixed(3);  // W = 1000 × S(kVA) × PF
  };

  const handleConvert = () => {
    const result = convertToWatts(apparentPowerKVA, powerFactor);
    setRealPower(result);
  };

  const examples = [
    { apparentPowerKVA: 3, powerFactor: 0.8, expectedResult: 2400, description: 'Example 1: 3 kVA with Power Factor 0.8' },
    { apparentPowerKVA: 5, powerFactor: 0.9, expectedResult: 4500, description: 'Example 2: 5 kVA with Power Factor 0.9' },
    { apparentPowerKVA: 2, powerFactor: 1, expectedResult: 2000, description: 'Example 3: 2 kVA with Power Factor 1' },
    { apparentPowerKVA: 1.5, powerFactor: 0.75, expectedResult: 1125, description: 'Example 4: 1.5 kVA with Power Factor 0.75' },
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
            <BreadcrumbPage>kVA to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>kVA to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert apparent power in kilovolt-amps (kVA) to real power in watts (W) using the power factor.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in kVA:</label>
              <input
                type="number"
                value={apparentPowerKVA}
                onChange={(e) => setApparentPowerKVA(Number(e.target.value))}
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
                step="0.01"
                min="0"
                max="1"
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{realPower} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Apparent Power: {example.apparentPowerKVA} kVA, Power Factor: {example.powerFactor}</p>
                    <p>Expected Real Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>W = 1000 × kVA × PF</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Real power in watts (W)</li>
                <li><strong>kVA</strong>: Apparent power in kilovolt-amps (kVA)</li>
                <li><strong>PF</strong>: Power factor (PF)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilovolt-amps (kVA) to watts (W) is based on the formula:<br />
                W = 1000 × kVA × PF<br />
                The power factor (PF) accounts for the efficiency of power conversion. A power factor of 1 means 100% efficiency.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Power Factor (PF) Explained:</h2>
              <p>
                The power factor (PF) is a measure of how efficiently electrical power is used. A PF of 1 indicates perfect efficiency. A PF below 1 means some power is wasted due to factors like inductive loads.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Types of Electrical Systems:</h2>
              <p>
                - <strong>Single-phase AC:</strong> For smaller systems. Use the formula as is.<br />
                - <strong>Three-phase AC:</strong> For larger systems. The formula may involve adjustments for three-phase power (S / √3).
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Visualizing the Formula:</h2>
              <p>Here's a visual representation of the kVA to Watts conversion:</p>
              <div>
                <img src="https://via.placeholder.com/400x200.png?text=kVA+to+Watts+Formula" alt="kVA to Watts Formula" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KVAToWattsConverter;
