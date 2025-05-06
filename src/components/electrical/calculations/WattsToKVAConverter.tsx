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

const WattsToKVAConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [voltage, setVoltage] = useState<number>(220); // Default voltage 220V
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor 0.8
  const [kVA, setKVA] = useState<number | string>('—'); // Converted kVA

  const calculateKVA = (watts: number, voltage: number, powerFactor: number) => {
    return (watts / (voltage * powerFactor)) / 1000; // Conversion to kVA
  };

  const handleConvert = () => {
    const result = calculateKVA(watts, voltage, powerFactor);
    setKVA(result);
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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to kVA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to kVA Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in watts (W) to apparent power in kilovolt-amperes (kVA) based on voltage and power factor.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (Watts):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (Volts):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor:</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                step="0.1"
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Apparent Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{kVA} kVA</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>S = (P / (V × pf)) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>pf</strong>: Power factor (a value between 0 and 1)</li>
                <li><strong>S</strong>: Apparent power in kilovolt-amperes (kVA)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts (W) to kilovolt-amperes (kVA) is based on the formula:
                <br />
                - Apparent Power (kVA) is calculated by dividing the real power (W) by the product of voltage (V) and power factor (pf), and then dividing by 1000 to convert to kVA.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculations:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* A device using 1000W at 220V with a power factor of 0.8:
                  <p className="bg-gray-100 p-2 dark:text-black">S = (1000 / (220 × 0.8)) / 1000 = 5.68 kVA</p>
                </li>
                <li>
                  *Example 2:* A device using 1500W at 110V with a power factor of 0.9:
                  <p className="bg-gray-100 p-2 dark:text-black">S = (1500 / (110 × 0.9)) / 1000 = 15.15 kVA</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKVAConverter;
