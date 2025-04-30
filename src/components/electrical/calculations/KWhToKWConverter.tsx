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

const KWhToKWConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [time, setTime] = useState<number>(1);
  const [power, setPower] = useState<number | string>('—');

  const convertToKW = (energy: number, time: number) => {
    return energy / time;
  };

  const handleConvert = () => {
    const result = convertToKW(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 15, time: 3, expectedResult: 5, description: 'Energy is 15 kWh, Time is 3 hours' },
    { energy: 10, time: 2, expectedResult: 5, description: 'Energy is 10 kWh, Time is 2 hours' },
    { energy: 20, time: 4, expectedResult: 5, description: 'Energy is 20 kWh, Time is 4 hours' },
    { energy: 25, time: 5, expectedResult: 5, description: 'Energy is 25 kWh, Time is 5 hours' },
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
            <BreadcrumbPage>KWh to KW Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KWh to KW Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Convert energy in kilowatt-hours (kWh) to power in kilowatts (kW).
          </p>

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
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{power} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} kWh, Time: {example.time} hours</p>
                    <p>Converted Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>kW = kWh / h</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>kW</strong>: Power in kilowatts (kW)</li>
                <li><strong>kWh</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatt-hours (kWh) to kilowatts (kW) is based on the formula:
                <br />
                - Power (kW) is equal to the energy (kWh) divided by the time (h).
                <br />
                - This helps calculate how much power is consumed over a specific period.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KWhToKWConverter;
