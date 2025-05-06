import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WattsToKWhConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(100); // Default 100 Watts
  const [hours, setHours] = useState<number>(1); // Default 1 hour
  const [energyInKWh, setEnergyInKWh] = useState<number>(0); // Calculated energy in kWh

  const calculateKWh = (watts: number, hours: number) => {
    return (watts * hours) / 1000; // 1 watt-hour (Wh) = 1 watt × 1 hour, then divide by 1000 to get kWh
  };

  const handleConvert = () => {
    const result = calculateKWh(watts, hours);
    setEnergyInKWh(result);
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
            <BreadcrumbPage>Watts to Kilowatt-hours Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Kilowatt-hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert electrical power in watts (W) to energy consumption in kilowatt-hours (kWh).</p>

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

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energyInKWh} kWh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E = (P × t) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>t</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts to kilowatt-hours is based on the formula:
                <br />
                - Energy in kWh is equal to the power in watts multiplied by the time in hours, divided by 1000.
                <br />
                - This calculation helps determine how much energy a device consumes based on its power usage and the amount of time it operates.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                If you have a device using {watts}W of power for {hours} hour(s), the total energy consumption in kilowatt-hours will be:
              </p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">Energy = (Power × Time) / 1000</p>
                <p className="mt-2">
                  Energy = ({watts} W × {hours} h) / 1000 = {energyInKWh} kWh
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Example 1: A 100W device running for 1 hour consumes 0.1 kWh</li>
                <li>Example 2: A 200W device running for 3 hours consumes 0.6 kWh</li>
                <li>Example 3: A 500W device running for 5 hours consumes 2.5 kWh</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKWhConverter;
