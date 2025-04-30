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

const JoulesToKilowattsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [power, setPower] = useState<number | string>('—');

  const convertToKilowatts = (energy: number, time: number) => {
    if (time === 0) return "Time cannot be zero";
    return (energy / (1000 * time)).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToKilowatts(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 90, time: 3, expectedResult: 0.03, description: '90 joules over 3 seconds' },
    { energy: 150, time: 5, expectedResult: 0.03, description: '150 joules over 5 seconds' },
    { energy: 500, time: 10, expectedResult: 0.05, description: '500 joules over 10 seconds' },
    { energy: 1200, time: 20, expectedResult: 0.06, description: '1200 joules over 20 seconds' },
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
            <BreadcrumbPage>Joules to Kilowatts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Joules to Kilowatts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Convert energy in joules (J) to power in kilowatts (kW) by entering the energy and time values below.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy (Joules):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time (Seconds):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{power} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} J, Time: {example.time} s</p>
                    <p>Expected Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>kW = J / (1000 × s)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>kW</strong>: Power in kilowatts</li>
                <li><strong>J</strong>: Energy in joules</li>
                <li><strong>s</strong>: Time in seconds</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                1 kilowatt (kW) equals 1000 joules per second (J/s). To compute power, divide the total energy (J) by the time (s), then divide the result by 1000 to convert watts to kilowatts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoulesToKilowattsConverter;
