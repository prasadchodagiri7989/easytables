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
    { realPower: 15, powerFactor: 0.95, expectedResult: 15.79, description: 'Example 5: 15 kW with power factor 0.95' },
    { realPower: 7.5, powerFactor: 0.6, expectedResult: 12.5, description: 'Example 6: 7.5 kW with power factor 0.6' },
    { realPower: 20, powerFactor: 0.85, expectedResult: 23.53, description: 'Example 7: 20 kW with power factor 0.85' },
    { realPower: 1, powerFactor: 0.5, expectedResult: 2, description: 'Example 8: 1 kW with power factor 0.5' },
    { realPower: 50, powerFactor: 0.92, expectedResult: 54.35, description: 'Example 9: 50 kW with power factor 0.92' },


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
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert real power in kilowatts (kW) to apparent power in kilovolt-amps (kVA) using the power factor.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Real Power (kW):</label>
              <input
                type="number"
                value={realPower}
                onChange={(e) => setRealPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
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
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{apparentPower} kVA</p>
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
              <p className="mt-2">
  You can rearrange the formula to solve for Power Factor or Real Power:
</p>
<ul className="list-disc list-inside ml-4 mt-1">
  <li><strong>PF = kW / kVA</strong></li>
  <li><strong>kW = kVA × PF</strong></li>
</ul>

<p className="mt-2">
  This conversion is especially useful in electrical design and energy audits where it is important to size generators, UPS systems, and transformers. A lower power factor means more apparent power is needed to deliver the same real power, leading to inefficiency and higher energy costs.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Tips for Accurate Conversion:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Ensure the power factor is between 0 and 1. Most industrial systems operate between 0.7 and 0.95.</li>
    <li>Use precise measurements and avoid rounding power factor too early in calculations.</li>
    <li>If power factor correction devices are installed, use the corrected PF value.</li>
  </ul>
</div>
            </div>

            <div>
  <h2 className="font-semibold text-base mt-6 mb-2">When to Use kW to kVA Conversion:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>While sizing transformers, alternators, or UPS systems</li>
    <li>During energy audits or load analysis in industrial setups</li>
    <li>For calculating apparent power in generator backup planning</li>
    <li>To assess power factor penalties from utility companies</li>
  </ul>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions:</h2>
  <div className="space-y-3">
    <div>
      <strong>Q: What is a good power factor?</strong>
      <p>A power factor above 0.9 is considered efficient. Most modern equipment aims for 0.95 or above.</p>
    </div>
    <div>
      <strong>Q: Can the power factor be more than 1?</strong>
      <p>No, power factor is always between 0 and 1. A value above 1 is not physically meaningful.</p>
    </div>
    <div>
      <strong>Q: Why does low power factor matter?</strong>
      <p>Low PF means more current is needed for the same real power, leading to increased losses and equipment stress.</p>
    </div>
    <div>
      <strong>Q: Is kVA always more than kW?</strong>
      <p>Yes, unless the power factor is 1. When PF = 1, kVA = kW. Otherwise, kVA is always greater.</p>
    </div>
  </div>
</div>

          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KilowattsToKVAConverter;
