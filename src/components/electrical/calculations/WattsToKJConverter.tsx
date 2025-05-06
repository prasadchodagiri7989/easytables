import React, { useState } from "react";
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

const WattsToKJConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(10); // Default 10 Watts
  const [time, setTime] = useState<number>(1); // Default time 1 second
  const [energyInKJ, setEnergyInKJ] = useState<number>(0); // Result variable for energy

  const calculateKJ = (watts: number, time: number) => {
    return (watts * time) / 1000; // 1 watt = 1 joule/second, so for time in seconds, we divide by 1000 to get kJ
  };

  const handleConvert = () => {
    const result = calculateKJ(watts, time);
    setEnergyInKJ(result);
  };

  const examples = [
    { watts: 10, time: 5, expectedResult: 0.05, description: '10 W for 5 seconds' },
    { watts: 100, time: 20, expectedResult: 2, description: '100 W for 20 seconds' },
    { watts: 500, time: 1, expectedResult: 0.5, description: '500 W for 1 second' },
    { watts: 1000, time: 10, expectedResult: 10, description: '1000 W for 10 seconds' }
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
            <BreadcrumbPage>Watts to Kilojoules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Kilojoules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert electrical power in watts (W) to energy in kilojoules (kJ) based on time.</p>

          <div className="space-y-4">
            {/* Input for Watts */}
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            {/* Input for Time */}
            <div>
              <label className="block font-medium mb-1">Time in Seconds (s):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Display Results */}
            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energyInKJ} kJ</p>
            </div>

            {/* Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.watts} W, Time: {example.time} seconds</p>
                    <p>Converted Energy: {example.expectedResult} kJ</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>kJ = (W × t) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>kJ</strong>: Energy in kilojoules (kJ)</li>
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts to kilojoules is based on the formula:
                <br />
                - Energy (kJ) is equal to the power in watts (W) multiplied by time (t) in seconds, divided by 1000 to convert from joules to kilojoules.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKJConverter;
