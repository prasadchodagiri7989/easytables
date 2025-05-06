import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToWhConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(100); // Default 100 Watts
  const [hours, setHours] = useState<number>(5); // Default 5 Hours

  const calculateWh = (watts: number, hours: number) => {
    return watts * hours;
  };

  const wh = calculateWh(watts, hours);

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
            <BreadcrumbPage>Watts to Watt-hours Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Watt-hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert power in watts (W) to energy in watt-hours (Wh). This is helpful for estimating energy consumption over time.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Hours (h):</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{wh} Wh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <p><strong>Example 1:</strong> 100 W for 5 hours:</p>
                  <p>Wh = 100 × 5 = 500 Wh</p>
                </li>
                <li>
                  <p><strong>Example 2:</strong> 200 W for 3 hours:</p>
                  <p>Wh = 200 × 3 = 600 Wh</p>
                </li>
                <li>
                  <p><strong>Example 3:</strong> 150 W for 8 hours:</p>
                  <p>Wh = 150 × 8 = 1200 Wh</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Wh = W × h</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Wh</strong>: Energy in watt-hours (Wh)</li>
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To calculate watt-hours, you multiply the power (in watts) by the time (in hours). This tells you the total energy consumption over a specific period.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Energy Consumption Examples:</h2>
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Device</th>
                    <th className="border p-2 text-left">Power (W)</th>
                    <th className="border p-2 text-left">Time (h)</th>
                    <th className="border p-2 text-left">Energy Consumption (Wh)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">Device 1</td><td className="border p-2">100 W</td><td className="border p-2">5 h</td><td className="border p-2">500 Wh</td></tr>
                  <tr><td className="border p-2">Device 2</td><td className="border p-2">200 W</td><td className="border p-2">3 h</td><td className="border p-2">600 Wh</td></tr>
                  <tr><td className="border p-2">Device 3</td><td className="border p-2">150 W</td><td className="border p-2">8 h</td><td className="border p-2">1200 Wh</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToWhConverter;
