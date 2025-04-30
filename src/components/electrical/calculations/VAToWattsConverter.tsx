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

const VAToWattsConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor
  const [powerWatts, setPowerWatts] = useState<number | string>('—'); // Calculated power in watts

  // Function to calculate power in watts
  const calculatePowerWatts = (apparentPower: number, powerFactor: number): number => {
    return apparentPower * powerFactor; // Formula to convert VA to W
  };

  const handleConvert = () => {
    const result = calculatePowerWatts(apparentPower, powerFactor);
    setPowerWatts(result);
  };

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
            <BreadcrumbPage>VA to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert apparent power in volt-amperes (VA) and power factor to real power in watts (W).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in Volt-Amperes (VA):</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                step="0.1"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{powerWatts} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P<sub>W</sub> = S<sub>VA</sub> × PF</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P<sub>W</sub></strong>: Real power in watts (W)</li>
                <li><strong>S<sub>VA</sub></strong>: Apparent power in volt-amperes (VA)</li>
                <li><strong>PF</strong>: Power factor (a value between 0 and 1)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from apparent power (VA) to real power (W) involves multiplying the apparent power by the power factor (PF), which accounts for the efficiency of the electrical system.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>1000 VA × 0.8 PF = 800 W</li>
                <li>5000 VA × 0.9 PF = 4500 W</li>
                <li>2500 VA × 0.6 PF = 1500 W</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToWattsConverter;
