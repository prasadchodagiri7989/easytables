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

const KWToKWhConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);    // Time in hours (hr)
  const [energy, setEnergy] = useState<number | string>('—');  // Output energy in kilowatt-hours (kWh)

  // Conversion function
  const convertToKilowattHour = (power: number, time: number) => {
    return power * time;  // E(kWh) = P(kW) × t(hr)
  };

  const handleConvert = () => {
    const result = convertToKilowattHour(power, time);
    setEnergy(result);
  };

  // Example scenarios for better understanding
  const examples = [
    { power: 5, time: 3, expectedResult: 15, description: 'Example 1: 5 kW for 3 hours' },
    { power: 2, time: 4, expectedResult: 8, description: 'Example 2: 2 kW for 4 hours' },
    { power: 10, time: 1, expectedResult: 10, description: 'Example 3: 10 kW for 1 hour' },
    { power: 3, time: 2, expectedResult: 6, description: 'Example 4: 3 kW for 2 hours' },
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
            <BreadcrumbPage>KW to KWh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KW to Kilowatt-Hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in kilowatts (kW) to energy in kilowatt-hours (kWh) over a given time period.</p>

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
              <label className="block font-medium mb-1">Time in Hours (hr):</label>
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
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energy} kWh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} hours</p>
                    <p>Expected Energy: {example.expectedResult} kWh</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>E = P × t</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>P</strong>: Power in kilowatts (kW)</li>
                <li><strong>t</strong>: Time in hours (hr)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to kilowatt-hours (kWh) is based on the formula:<br />
                E = P × t<br />
                By multiplying the power (in kW) by the time (in hours), you calculate the total energy consumed or produced in kilowatt-hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KWToKWhConverter;
