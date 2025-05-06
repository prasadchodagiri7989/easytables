import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WattsToAmpsConverter: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const wattsQuery = searchParams.get("watts");

  const initialWatts = wattsQuery ? parseFloat(wattsQuery) : 1;

  const [voltage, setVoltage] = useState<number>(12); // Default voltage: 12V
  const [powerFactor, setPowerFactor] = useState<number>(1); // Default PF: 1 (pure resistive)
  const [watts, setWatts] = useState<number>(initialWatts); // Default wattage from query or 1W

  const calculateAmps = (watts: number, voltage: number, powerFactor: number) => {
    return watts / (powerFactor * voltage);
  };

  const amps = calculateAmps(watts, voltage, powerFactor);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
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
            <BreadcrumbPage>Watts to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert electric power in watts (W) to electric current in amps (A), considering voltage and power factor (for AC).</p>

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
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                step="0.01"
                min="0"
                max="1"
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div className="my-4">
              <button
                onClick={() => {}}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Convert
              </button>
            </div>

            <div>
              <strong>Converted Current (Amps):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{amps.toFixed(6)} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculations:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>For 120V DC: <strong>{calculateAmps(watts, 120, 1).toFixed(6)} A</strong></li>
                <li>For 120V AC (PF = 0.8): <strong>{calculateAmps(watts, 120, 0.8).toFixed(6)} A</strong></li>
                <li>For 230V AC (PF = 0.8): <strong>{calculateAmps(watts, 230, 0.8).toFixed(6)} A</strong></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                For <strong>DC Power:</strong><br />
                <code>amps = watts ÷ volts</code><br />
                For <strong>AC Power:</strong><br />
                <code>amps = watts ÷ (PF × volts)</code>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert from watts to amps, divide the power in watts by the voltage for DC systems. For AC systems, divide by the product of the power factor and voltage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToAmpsConverter;
