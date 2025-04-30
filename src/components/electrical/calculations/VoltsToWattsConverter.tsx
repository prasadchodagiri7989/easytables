import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltsToWattsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(220); // Default 220V
  const [amps, setAmps] = useState<number>(5); // Default 5A
  const [watts, setWatts] = useState<number>(220 * 5); // Default watts

  const calculateWatts = (volts: number, amps: number) => {
    return volts * amps; // Conversion to Watts
  };

  const handleConvert = () => {
    setWatts(calculateWatts(volts, amps));
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
            <BreadcrumbPage>Volts to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert voltage in volts (V) and current in amperes (A) to power in watts (W).</p>

          <div className="space-y-4">
            {/* Volts Input */}
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* Amps Input */}
            <div>
              <label className="block font-medium mb-1">Current in Amps (A):</label>
              <input
                type="number"
                value={amps}
                onChange={(e) => setAmps(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Output Result */}
            <div>
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{watts} W</p>
            </div>

            {/* Examples Section */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* For a device operating at 220V and drawing 5A:
                  <p className="bg-gray-100 p-2">P = 220V × 5A = 1100W</p>
                </li>
                <li>
                  *Example 2:* For a device operating at 110V and drawing 3A:
                  <p className="bg-gray-100 p-2">P = 110V × 3A = 330W</p>
                </li>
                <li>
                  *Example 3:* For a device operating at 12V and drawing 10A:
                  <p className="bg-gray-100 p-2">P = 12V × 10A = 120W</p>
                </li>
              </ul>
            </div>

            {/* Formula Section */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P = V × I</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
              </ul>
            </div>

            {/* Explanation Section */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts (V) and amperes (A) to watts (W) is based on the formula:
                <br />
                - Power (W) is equal to voltage (V) multiplied by current (I).
                <br />
                - This conversion helps us determine how much power a device is consuming based on its voltage and current.
              </p>
            </div>

            {/* Practical Notes */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Important Notes:</h2>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>The formula assumes that the power is purely real and does not account for reactive power in AC circuits.</li>
                <li>If you're working with an AC system, you may need to account for the power factor.</li>
                <li>Ensure that you use consistent units for voltage and current when calculating watts.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToWattsConverter;
