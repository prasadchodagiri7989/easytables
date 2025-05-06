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

const KVAToVAConverter: React.FC = () => {
  const [apparentPowerKVA, setApparentPowerKVA] = useState<number>(0);
  const [apparentPowerVA, setApparentPowerVA] = useState<number | string>('—');

  const convertToVA = (apparentPowerKVA: number) => {
    return 1000 * apparentPowerKVA;
  };

  const handleConvert = () => {
    const result = convertToVA(apparentPowerKVA);
    setApparentPowerVA(result);
  };

  const examples = [
    { apparentPowerKVA: 3, expectedResult: 3000, description: '3 kVA to VA' },
    { apparentPowerKVA: 5, expectedResult: 5000, description: '5 kVA to VA' },
    { apparentPowerKVA: 1.2, expectedResult: 1200, description: '1.2 kVA to VA' },
    { apparentPowerKVA: 0.5, expectedResult: 500, description: '0.5 kVA to VA' },
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
            <BreadcrumbPage>kVA to VA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>kVA to VA Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert apparent power in kilovolt-amps (kVA) to volt-amps (VA).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power (kVA):</label>
              <input
                type="number"
                value={apparentPowerKVA}
                onChange={(e) => setApparentPowerKVA(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{apparentPowerVA} VA</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Apparent Power: {example.apparentPowerKVA} kVA</p>
                    <p>Converted Apparent Power: {example.expectedResult} VA</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>VA = 1000 × kVA</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>VA</strong>: Apparent power in volt-amps (VA)</li>
                <li><strong>kVA</strong>: Apparent power in kilovolt-amps (kVA)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilovolt-amps (kVA) to volt-amps (VA) is simple: 1 kVA = 1000 VA.
                <br />
                This formula allows you to convert the total apparent power in kilovolt-amps to its equivalent in volt-amps, which is commonly used in electrical applications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KVAToVAConverter;
