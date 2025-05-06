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

const KWToVAConverter: React.FC = () => {
  const [realPower, setRealPower] = useState<number>(0);  // Real power in kilowatts (kW)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [apparentPower, setApparentPower] = useState<number | string>('—');  // Output apparent power in volt-amps (VA)

  const convertToVoltAmps = (realPower: number, powerFactor: number) => {
    return (1000 * realPower) / powerFactor;  // S(VA) = 1000 × P(kW) / PF
  };

  const handleConvert = () => {
    const result = convertToVoltAmps(realPower, powerFactor);
    setApparentPower(result);
  };

  const examples = [
    { realPower: 3, powerFactor: 0.8, expectedResult: 3750, description: '3 kW with Power Factor 0.8' },
    { realPower: 5, powerFactor: 0.9, expectedResult: 5555.56, description: '5 kW with Power Factor 0.9' },
    { realPower: 2, powerFactor: 1, expectedResult: 2000, description: '2 kW with Power Factor 1' },
    { realPower: 10, powerFactor: 0.95, expectedResult: 10526.32, description: '10 kW with Power Factor 0.95' },
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
            <BreadcrumbPage>KW to VA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Volt-Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert real power in kilowatts (kW) and power factor (PF) to apparent power in volt-amps (VA).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Real Power in Kilowatts (kW):</label>
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
              <strong>Converted Apparent Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{apparentPower} VA</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Real Power: {example.realPower} kW, Power Factor: {example.powerFactor}</p>
                    <p>Converted Apparent Power: {example.expectedResult} VA</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>S = 1000 × P / PF</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>S</strong>: Apparent power in volt-amps (VA)</li>
                <li><strong>P</strong>: Real power in kilowatts (kW)</li>
                <li><strong>PF</strong>: Power factor (PF)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to volt-amps (VA) is based on the formula:
                <br />
                - Apparent power (VA) is equal to 1000 times the real power (kW) divided by the power factor (PF).
                <br />
                - The power factor (PF) represents the efficiency of the power usage, accounting for losses and phase differences between voltage and current.
              </p>
              <p>
                This formula helps convert real power (kW) to apparent power (VA), which is commonly used in AC electrical systems.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KWToVAConverter;
