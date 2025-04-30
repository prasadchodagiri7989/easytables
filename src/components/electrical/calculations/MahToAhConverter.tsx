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

const MahToAhConverter: React.FC = () => {
  const [mAh, setMah] = useState<number>(0);  // Input in milliampere-hours (mAh)
  const [ah, setAh] = useState<number | string>('');  // Output in ampere-hours (Ah)

  // Conversion function to convert mAh to Ah
  const convertToAh = (mAh: number): number => {
    return mAh / 1000;  // 1 Ah = 1000 mAh
  };

  const handleConvert = () => {
    const result = convertToAh(mAh);
    setAh(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      mAh: 5000,
      expectedResult: 5,
      description: 'Example: 5000 mAh to Ah',
    },
    {
      mAh: 1500,
      expectedResult: 1.5,
      description: 'Example: 1500 mAh to Ah',
    },
    {
      mAh: 1000,
      expectedResult: 1,
      description: 'Example: 1000 mAh to Ah',
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
            <BreadcrumbPage>mAh to Ah Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>mAh to Ah Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert milliampere-hours (mAh) to ampere-hours (Ah) for battery capacity.</p>

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

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Capacity (Ah):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{ah} Ah</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>mAh: {example.mAh} mAh</p>
                    <p>Converted Capacity: {example.expectedResult} Ah</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Ah = mAh / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Ah</strong>: Capacity in ampere-hours (Ah)</li>
                <li><strong>mAh</strong>: Capacity in milliampere-hours (mAh)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert milliampere-hours (mAh) to ampere-hours (Ah), divide the value in mAh by 1000.
                <br />
                For example, 5000 mAh = 5 Ah, since 5000 ÷ 1000 = 5.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the capacity in ampere-hours if a battery has 3000 mAh?
                <br />
                Using the formula: Ah = mAh / 1000, we get Ah = 3000 / 1000 = 3 Ah.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MahToAhConverter;
