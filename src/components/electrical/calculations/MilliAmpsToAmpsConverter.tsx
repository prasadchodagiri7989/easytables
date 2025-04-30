import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const MilliAmpsToAmpsConverter: React.FC = () => {
  const [milliAmps, setMilliAmps] = useState<number>(0);  // Input current in milliamps (mA)
  const [amps, setAmps] = useState<number | string>('');  // Output current in amps (A)
  const [error, setError] = useState<string>('');  // Error message for invalid input

  // Conversion function to calculate amps
  const convertToAmps = (milliAmps: number) => {
    return milliAmps / 1000;  // Formula to convert milliamps to amps
  };

  const handleConvert = () => {
    if (milliAmps < 0) {
      setError('Please enter a positive value for milliamps.');
      setAmps('');
      return;
    }
    setError('');
    const result = convertToAmps(milliAmps);
    setAmps(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      milliAmps: 300,
      expectedResult: 0.3,
      description: 'Example: Convert 300 milliamps to amps',
    },
    {
      milliAmps: 5000,
      expectedResult: 5,
      description: 'Example: Convert 5000 milliamps to amps',
    },
    {
      milliAmps: 150,
      expectedResult: 0.15,
      description: 'Example: Convert 150 milliamps to amps',
    },
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
            <BreadcrumbPage>MilliAmps to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>MilliAmps to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert current in milliamps (mA) to amps (A) using the formula A = mA / 1000.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Enter Current in Milliamps (mA):</label>
              <input
                type="number"
                value={milliAmps}
                onChange={(e) => setMilliAmps(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter value in milliamps"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <strong>Converted Current (Amps):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{amps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Milliamps: {example.milliAmps} mA</p>
                    <p>Converted Amps: {example.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>A = mA / 1000</strong>
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>A = Current in amps (A)</li>
                  <li>mA = Current in milliamps (mA)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from milliamps (mA) to amps (A) is straightforward. Since there are 1000 milliamps in one amp, you divide the value in milliamps by 1000 to get the value in amps.
              </p>
              <p>
                - *1 milliamp (mA) = 1/1000 amp (A)*<br />
                - *Example: 300 mA = 0.3 A*
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the current in amps if the current is 300 milliamps? 
                <br />
                Using the formula: A = mA / 1000, we get A = 300 / 1000 = 0.3 A.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MilliAmpsToAmpsConverter;
