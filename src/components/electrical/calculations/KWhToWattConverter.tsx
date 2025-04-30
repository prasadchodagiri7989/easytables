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

const KWhToWattConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in kilowatt-hours (kWh)
  const [time, setTime] = useState<number>(1);  // Time in hours (h)
  const [power, setPower] = useState<number | string>('—');  // Output power in watts (W)

  // Conversion function to calculate watts
  const convertToWatt = (energy: number, time: number) => {
    return (1000 * energy) / time;  // P(W) = 1000 × E(kWh) / t(h)
  };

  const handleConvert = () => {
    const result = convertToWatt(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 15, time: 3, expectedResult: 5000, description: 'Example: Energy is 15 kWh, Time is 3 hours' },
    { energy: 10, time: 2, expectedResult: 5000, description: 'Example: Energy is 10 kWh, Time is 2 hours' },
    { energy: 20, time: 4, expectedResult: 5000, description: 'Example: Energy is 20 kWh, Time is 4 hours' },
    { energy: 30, time: 6, expectedResult: 5000, description: 'Example: Energy is 30 kWh, Time is 6 hours' },
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
            <BreadcrumbPage>KWh to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KWh to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert energy in kilowatt-hours (kWh) to power in watts (W) over a given time period.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy in Kilowatt-Hours (kWh):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Hours (h):</label>
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{power} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} kWh, Time: {example.time} hours</p>
                    <p>Expected Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>W = 1000 × kWh / h</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>kWh</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatt-hours (kWh) to watts (W) is based on the formula:<br />
                W = 1000 × kWh / h<br />
                This conversion tells us how much power is being consumed, in watts, based on energy consumption and the time period.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KWhToWattConverter;
