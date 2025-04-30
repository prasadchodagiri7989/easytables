import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MahToWhConverter: React.FC = () => {
  const [mAh, setMah] = useState<number>(0);  // Input in milliampere-hours (mAh)
  const [voltage, setVoltage] = useState<number>(0);  // Input voltage in volts (V)
  const [wh, setWh] = useState<number | string>('');  // Output in watt-hours (Wh)

  // Conversion function to convert mAh to Wh
  const convertToWh = (mAh: number, voltage: number): number => {
    return (mAh * voltage) / 1000;  // Formula: Wh = (mAh * V) / 1000
  };

  const handleConvert = () => {
    const result = convertToWh(mAh, voltage);
    setWh(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      mAh: 5000,
      voltage: 5,
      expectedResult: 25,
      description: 'Example: 5000 mAh at 5V to Wh',
    },
    {
      mAh: 1500,
      voltage: 3.7,
      expectedResult: 5.55,
      description: 'Example: 1500 mAh at 3.7V to Wh',
    },
    {
      mAh: 2000,
      voltage: 12,
      expectedResult: 24,
      description: 'Example: 2000 mAh at 12V to Wh',
    },
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
              <Link to="/battery-conversions">Battery Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>mAh to Wh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>mAh to Wh Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert milliampere-hours (mAh) and voltage (V) to watt-hours (Wh).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Capacity in mAh:</label>
              <input
                type="number"
                value={mAh}
                onChange={(e) => setMah(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (V):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
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
              <strong>Converted Capacity:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{wh} Wh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>mAh: {example.mAh} mAh, Voltage: {example.voltage} V</p>
                    <p>Converted Capacity: {example.expectedResult} Wh</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Wh = (mAh × V) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Wh</strong>: Capacity in watt-hours (Wh)</li>
                <li><strong>mAh</strong>: Capacity in milliampere-hours (mAh)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert milliampere-hours (mAh) to watt-hours (Wh), multiply the mAh value by the voltage (V) and divide by 1000.
                <br />
                For example, if you have 5000 mAh at 5V, the result is 25 Wh, because (5000 × 5) / 1000 = 25 Wh.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the capacity in watt-hours if a battery has 3000 mAh at 3.7V?
                <br />
                Using the formula: Wh = (mAh × V) / 1000, we get Wh = (3000 × 3.7) / 1000 = 11.1 Wh.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MahToWhConverter;
