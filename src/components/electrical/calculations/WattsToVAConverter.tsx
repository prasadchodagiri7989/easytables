import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WattsToVAConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [voltage, setVoltage] = useState<number>(220); // Default voltage 220V
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor 0.8
  const [va, setVA] = useState<number | string>('—'); // Default value for VA

  const calculateVA = (watts: number, voltage: number, powerFactor: number) => {
    return watts / powerFactor; // Conversion to VA
  };

  const handleConvert = () => {
    const result = calculateVA(watts, voltage, powerFactor);
    setVA(result);
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
              <Link to="/power-conversions">Power Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to VA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Volt-amperes (VA) Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert electrical power in watts (W) to apparent power in volt-amperes (VA).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
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

            <div>
              <label className="block font-medium mb-1">Power Factor:</label>
              <input
                type="number"
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
              <strong>Converted Apparent Power (VA):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{va} VA</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>VA = Watts / Power Factor</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>VA</strong>: Apparent power in volt-amperes (VA)</li>
                <li><strong>Watts</strong>: Real power in watts (W)</li>
                <li><strong>Power Factor</strong>: Power factor of the system (a value between 0 and 1)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts (W) to volt-amperes (VA) is based on the formula:
                <br />
                - Apparent power (VA) is equal to real power (watts) divided by the power factor.
                <br />
                - This conversion helps us calculate the total apparent power (including both real and reactive power) required in an AC system.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Example 1:</strong> A device using 1000W of real power with a power factor of 0.8:
                  <p className="bg-gray-100 p-2">VA = 1000W / 0.8 = 1250 VA</p>
                </li>
                <li>
                  <strong>Example 2:</strong> A device using 1500W of real power with a power factor of 0.9:
                  <p className="bg-gray-100 p-2">VA = 1500W / 0.9 = 1666.67 VA</p>
                </li>
                <li>
                  <strong>Example 3:</strong> A device using 2000W of real power with a power factor of 0.85:
                  <p className="bg-gray-100 p-2">VA = 2000W / 0.85 = 2352.94 VA</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToVAConverter;
