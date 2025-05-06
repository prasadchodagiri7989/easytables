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

const JoulesToWattsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [power, setPower] = useState<number | string>('—');

  const convertToWatts = (energy: number, time: number) => {
    if (time === 0) return "Time cannot be zero";
    return (energy / time).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToWatts(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 90, time: 3, expectedResult: 30, description: '90 joules with 3 seconds' },
    { energy: 150, time: 5, expectedResult: 30, description: '150 joules with 5 seconds' },
    { energy: 200, time: 4, expectedResult: 50, description: '200 joules with 4 seconds' },
    { energy: 120, time: 2, expectedResult: 60, description: '120 joules with 2 seconds' },
    { energy: 300, time: 6, expectedResult: 50, description: '300 joules with 6 seconds' },
    { energy: 500, time: 10, expectedResult: 50, description: '500 joules with 10 seconds' },
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
            <BreadcrumbPage>Joules to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Joules to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Calculate power (W) by dividing energy in joules by time in seconds.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy (Joules):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time (Seconds):</label>
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} J, Time: {example.time} s</p>
                    <p>Expected Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P = J / s</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Power in watts</li>
                <li><strong>J</strong>: Energy in joules</li>
                <li><strong>s</strong>: Time in seconds</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                Power is the rate of energy transfer. In this case, it's calculated by dividing energy (in joules) by the time (in seconds).
                <br />
                - 1 watt equals 1 joule per second.
                <br />
                - This concept helps us understand how quickly energy is being used or delivered in a system.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoulesToWattsConverter;
