import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const VoltsToAmpsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [resistance, setResistance] = useState<number>(1); // Default resistance value
  const [currentAmps, setCurrentAmps] = useState<number | string>('—'); // Result placeholder

  // Function to calculate current in amperes
  const calculateCurrentAmps = (volts: number, resistance: number): number => {
    return volts / resistance; // Ohm's law: I = V / R
  };

  const handleConvert = () => {
    const result = calculateCurrentAmps(volts, resistance);
    setCurrentAmps(result);
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
            <BreadcrumbPage>Volts to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage in volts (V) and resistance in ohms (Ω) to current in amperes (A) using Ohm's Law.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Resistance in Ohms (Ω):</label>
              <input
                type="number"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
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
              <strong>Converted Current:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{currentAmps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* For a voltage of 1V and a resistance of 1Ω:
                  <p className="bg-gray-100 p-2 dark:text-black">I(A) = 1V / 1Ω = 1 A</p>
                </li>
                <li>
                  *Example 2:* For a voltage of 120V and a resistance of 12Ω:
                  <p className="bg-gray-100 p-2 dark:text-black">I(A) = 120V / 12Ω = 10 A</p>
                </li>
                <li>
                  *Example 3:* For a voltage of 240V and a resistance of 24Ω:
                  <p className="bg-gray-100 p-2 dark:text-black">I(A) = 240V / 24Ω = 10 A</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>I(A) = V / R</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I(A)</strong>: Current in amperes (A)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>R</strong>: Resistance in ohms (Ω)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts (V) and resistance (Ω) to current (A) is based on Ohm's Law:
                <br />
                - Current (I) is equal to voltage (V) divided by resistance (R).
                <br />
                - This formula helps us calculate how much current flows in a circuit given the voltage and resistance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToAmpsConverter;
