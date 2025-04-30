import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const VAToKWConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor
  const [powerKW, setPowerKW] = useState<number | string>("—"); // Conversion result in kW

  // Function to calculate power in kW
  const calculatePowerKW = (apparentPower: number, powerFactor: number): number => {
    return (apparentPower * powerFactor) / 1000; // Formula to convert VA to kW
  };

  const handleConvert = () => {
    const result = calculatePowerKW(apparentPower, powerFactor);
    setPowerKW(result);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Breadcrumb Navigation */}
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
              <Link to="/electrical-conversions">Electrical Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>VA to kW Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to Kilowatts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert apparent power in volt-amperes (VA) to real power in kilowatts (kW) using the power factor.</p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in VA:</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter apparent power in VA"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter power factor (0 to 1)"
                step="0.01"
                min="0"
                max="1"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Conversion Result */}
            <div>
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{powerKW} kW</p>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P<sub>kW</sub> = (S<sub>VA</sub> × PF) / 1000</strong>
                <br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>S<sub>VA</sub></strong>: Apparent power in VA</li>
                <li><strong>PF</strong>: Power factor (between 0 and 1)</li>
                <li><strong>P<sub>kW</sub></strong>: Real power in kW</li>
              </ul>
            </div>

            {/* Practical Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* For an apparent power of 1000 <code>VA</code> and a power factor of 0.8:
                  <p className="bg-gray-100 p-2">P<sub>kW</sub> = (1000 <code>VA</code> × 0.8) / 1000 = 0.8 <code>kW</code></p>
                </li>
                <li>
                  *Example 2:* For an apparent power of 5000 <code>VA</code> and a power factor of 0.9:
                  <p className="bg-gray-100 p-2">P<sub>kW</sub> = (5000 <code>VA</code> × 0.9) / 1000 = 4.5 <code>kW</code></p>
                </li>
                <li>
                  *Example 3:* For an apparent power of 2500 <code>VA</code> and a power factor of 0.6:
                  <p className="bg-gray-100 p-2">P<sub>kW</sub> = (2500 <code>VA</code> × 0.6) / 1000 = 1.5 <code>kW</code></p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToKWConverter;
