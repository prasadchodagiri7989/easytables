import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToVoltsConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [current, setCurrent] = useState<number>(5); // Default current 5A
  const [volts, setVolts] = useState<number | string>('—'); // Voltage result

  const calculateVolts = (watts: number, current: number) => {
    return watts / current; // Conversion to Volts
  };

  const handleConvert = () => {
    const result = calculateVolts(watts, current);
    setVolts(result);
  };

  const examples = [
    { watts: 1000, current: 5, expectedResult: 200, description: '1000W with 5A' },
    { watts: 2000, current: 4, expectedResult: 500, description: '2000W with 4A' },
    { watts: 500, current: 2, expectedResult: 250, description: '500W with 2A' },
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
            <BreadcrumbPage>Watts to Volts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Volts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert electrical power in watts (W) and current in amperes (A) to voltage in volts (V).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current in Amperes (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
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
              <strong>Converted Voltage:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{volts} V</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Watts: {example.watts} W, Current: {example.current} A</p>
                    <p>Converted Voltage: {example.expectedResult} V</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>V = P / I</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts (W) to volts (V) is based on the formula:
                <br />
                - Voltage (V) is equal to power (watts) divided by current (amperes).
                <br />
                - This conversion helps us calculate the voltage required to supply a given amount of power at a certain current.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToVoltsConverter;
