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

// Define the calculateMah function before using it
const calculateMah = (wh: number, voltage: number) => {
  return (wh * 1000) / voltage;
};

const WhToMahConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(10); // Default 10 Wh
  const [voltage, setVoltage] = useState<number>(3.7); // Default 3.7V (common for Li-ion batteries)
  const [mah, setMah] = useState<number>(calculateMah(wh, voltage)); // Now this works as calculateMah is defined before use

  const handleConvert = () => {
    setMah(calculateMah(wh, voltage));
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
            <BreadcrumbPage>Wh to mAh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Wh to mAh Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert energy in watt-hours (Wh) to electric charge in milliamp-hours (mAh) for battery capacities.</p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Watt-hours (Wh):</label>
              <input
                type="number"
                value={wh}
                onChange={(e) => setWh(Number(e.target.value))}
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

            {/* Result Display */}
            <div>
              <strong>Converted Capacity:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{mah.toFixed(2)} mAh</p>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>mAh = (Wh × 1000) ÷ V</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>mAh</strong>: Electric charge in milliamp-hours</li>
                <li><strong>Wh</strong>: Energy in watt-hours</li>
                <li><strong>V</strong>: Voltage in volts</li>
              </ul>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert watt-hours (Wh) to milliamp-hours (mAh), multiply the watt-hours by 1000 and divide by the voltage (V). This helps in understanding the battery's charge capacity in mAh based on the energy in Wh and voltage.
              </p>
            </div>

            {/* Practical Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  5 Wh battery at 3.7V → <strong>{calculateMah(5, 3.7).toFixed(2)} mAh</strong>
                </li>
                <li>
                  10 Wh battery at 7.4V → <strong>{calculateMah(10, 7.4).toFixed(2)} mAh</strong>
                </li>
                <li>
                  15 Wh battery at 11.1V → <strong>{calculateMah(15, 11.1).toFixed(2)} mAh</strong>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhToMahConverter;
