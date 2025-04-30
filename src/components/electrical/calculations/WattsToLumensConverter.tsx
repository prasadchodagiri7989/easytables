import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WattsToLumensConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(10); // Default 10 Watts
  const [efficacy, setEfficacy] = useState<number>(80); // Default luminous efficacy 80 lm/W
  const [lumens, setLumens] = useState<number | string>('—'); // Luminous flux in lumens

  const calculateLumens = (watts: number, efficacy: number) => {
    return watts * efficacy;
  };

  const handleConvert = () => {
    const result = calculateLumens(watts, efficacy);
    setLumens(result);
  };

  const examples = [
    { watts: 5, efficacy: 100, expectedResult: 500, description: "5 W LED bulb with 100 lm/W" },
    { watts: 15, efficacy: 65, expectedResult: 975, description: "15 W CFL bulb with 65 lm/W" },
    { watts: 60, efficacy: 15, expectedResult: 900, description: "60 W incandescent bulb with 15 lm/W" },
    { watts: 8, efficacy: 120, expectedResult: 960, description: "8 W LED spotlight with 120 lm/W" },
  ];

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
            <BreadcrumbPage>Watts to Lumens Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Lumens Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert electrical power in watts (W) to luminous flux in lumens (lm) based on luminous efficacy (lm/W).</p>

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
              <label className="block font-medium mb-1">Luminous Efficacy (lm/W):</label>
              <input
                type="number"
                value={efficacy}
                onChange={(e) => setEfficacy(Number(e.target.value))}
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
              <strong>Converted Lumens:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{lumens} lm</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Watts: {example.watts} W, Efficacy: {example.efficacy} lm/W</p>
                    <p>Converted Lumens: {example.expectedResult} lm</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Lumens = Watts × Efficacy (lm/W)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>lm</strong>: Luminous flux in lumens (lm)</li>
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>lm/W</strong>: Luminous efficacy in lumens per watt (lm/W)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts (W) to lumens (lm) is based on the formula:
                <br />
                - Lumens (lm) is equal to watts (W) multiplied by luminous efficacy (lm/W).
                <br />
                - This helps you determine the light output in lumens for a given wattage and efficacy.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Luminous Efficacy Table:</h2>
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Light Type</th>
                    <th className="border p-2 text-left">Typical Luminous Efficacy (lm/W)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">Tungsten incandescent light bulb</td><td className="border p-2">12.5-17.5 lm/W</td></tr>
                  <tr><td className="border p-2">Halogen lamp</td><td className="border p-2">16-24 lm/W</td></tr>
                  <tr><td className="border p-2">Fluorescent lamp</td><td className="border p-2">45-75 lm/W</td></tr>
                  <tr><td className="border p-2">LED lamp</td><td className="border p-2">80-100 lm/W</td></tr>
                  <tr><td className="border p-2">Metal halide lamp</td><td className="border p-2">75-100 lm/W</td></tr>
                  <tr><td className="border p-2">High pressure sodium vapor lamp</td><td className="border p-2">85-150 lm/W</td></tr>
                  <tr><td className="border p-2">Low pressure sodium vapor lamp</td><td className="border p-2">100-200 lm/W</td></tr>
                  <tr><td className="border p-2">Mercury vapor lamp</td><td className="border p-2">35-65 lm/W</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToLumensConverter;
