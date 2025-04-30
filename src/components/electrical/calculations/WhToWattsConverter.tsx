import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WhToWattsConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(100); // Default 100 Wh
  const [hours, setHours] = useState<number>(5); // Default 5 hours
  const [watts, setWatts] = useState<number | string>('—');

  const calculateWatts = (wh: number, hours: number) => {
    return wh / hours;
  };

  const handleConvert = () => {
    const result = calculateWatts(wh, hours);
    setWatts(result);
  };

  const examples = [
    { wh: 500, hours: 10, expectedResult: 50, description: '500 Wh used over 10 hours' },
    { wh: 1200, hours: 6, expectedResult: 200, description: '1200 Wh used over 6 hours' },
    { wh: 300, hours: 3, expectedResult: 100, description: '300 Wh used over 3 hours' },
    { wh: 150, hours: 2, expectedResult: 75, description: '150 Wh used over 2 hours' },
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
            <BreadcrumbPage>Wh to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Wh to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert energy in watt-hours (Wh) to power in watts (W) over a given time period in hours.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy in Watt-hours (Wh):</label>
              <input
                type="number"
                value={wh}
                onChange={(e) => setWh(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Hours (h):</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
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
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{watts} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Wh: {example.wh} Wh, Time: {example.hours} hours</p>
                    <p>Converted Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>W = Wh / h</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>Wh</strong>: Energy in watt-hours (Wh)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watt-hours (Wh) to watts (W) is based on the formula:
                <br />
                - Power (W) is equal to the energy (Wh) divided by the time (h).
                <br />
                - This helps you determine the power required when you know the energy and the time over which it's used.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Use Cases:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Battery sizing: To determine how long a battery will last for a given load.</li>
                <li>Energy systems: To estimate the required power output for solar panels or generators based on stored energy.</li>
                <li>Appliance power: To calculate the energy consumption of appliances over time.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhToWattsConverter;
