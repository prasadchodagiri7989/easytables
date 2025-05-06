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

const KWToKJConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);    // Time in seconds (s)
  const [energy, setEnergy] = useState<number | string>('—');  // Output energy in kilojoules (kJ)

  const convertToKilojoules = (power: number, time: number) => {
    return power * time;  // E(kJ) = P(kW) * t(s)
  };

  const handleConvert = () => {
    const result = convertToKilojoules(power, time);
    setEnergy(result);
  };

  const examples = [
    { power: 3, time: 3, expectedResult: 9, description: '3 kW for 3 seconds' },
    { power: 5, time: 2, expectedResult: 10, description: '5 kW for 2 seconds' },
    { power: 10, time: 1, expectedResult: 10, description: '10 kW for 1 second' },
    { power: 0.5, time: 10, expectedResult: 5, description: '0.5 kW for 10 seconds' },
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
            <BreadcrumbPage>KW to KJ Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Kilojoules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert power in kilowatts (kW) and time in seconds (s) to energy in kilojoules (kJ).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Kilowatts (kW):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Seconds (s):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energy} kJ</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} seconds</p>
                    <p>Converted Energy: {example.expectedResult} kJ</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E = P × t</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in kilojoules (kJ)</li>
                <li><strong>P</strong>: Power in kilowatts (kW)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to kilojoules (kJ) is based on the formula:
                <br />
                - Energy (kJ) is equal to the power (kW) multiplied by time (s).
                <br />
                - This helps us understand how much total energy is used over a specific time period.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KWToKJConverter;
