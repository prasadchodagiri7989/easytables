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

const KWToWhConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(1);  // Time in hours (h)
  const [energy, setEnergy] = useState<number | string>('—');  // Output energy in watt-hours (Wh)

  const convertToWh = (power: number, time: number) => {
    return 1000 * power * time;  // E(Wh) = 1000 × P(kW) × t(h)
  };

  const handleConvert = () => {
    const result = convertToWh(power, time);
    setEnergy(result);
  };

  const examples = [
    { power: 5, time: 3, expectedResult: 15000, description: 'Power is 5 kW, Time is 3 hours' },
    { power: 2, time: 4, expectedResult: 8000, description: 'Power is 2 kW, Time is 4 hours' },
    { power: 1.5, time: 6, expectedResult: 9000, description: 'Power is 1.5 kW, Time is 6 hours' },
    { power: 10, time: 2, expectedResult: 20000, description: 'Power is 10 kW, Time is 2 hours' },
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
            <BreadcrumbPage>KW to Wh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Watt-Hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Convert power in kilowatts (kW) and time in hours (h) to energy in watt-hours (Wh).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Kilowatts (kW):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
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
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{energy} Wh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} hours</p>
                    <p>Converted Energy: {example.expectedResult} Wh</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Wh = 1000 × kW × h</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Wh</strong>: Energy in watt-hours (Wh)</li>
                <li><strong>kW</strong>: Power in kilowatts (kW)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to watt-hours (Wh) is based on the formula:
                <br />
                - Energy (Wh) is equal to 1000 times the power (kW) times the time (h).
                <br />
                - The factor of 1000 converts kilowatts to watts, as 1 kW = 1000 W.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KWToWhConverter;
