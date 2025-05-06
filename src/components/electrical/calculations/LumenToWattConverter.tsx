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

const LumenToWattConverter: React.FC = () => {
  const [lumens, setLumens] = useState<number>(0);  // Luminous flux in lumens (lm)
  const [efficacy, setEfficacy] = useState<number>(1);  // Luminous efficacy in lumens per watt (lm/W)
  const [power, setPower] = useState<number | string>('—');  // Output power in watts (W)

  const convertToWatt = (lumens: number, efficacy: number) => {
    return lumens / efficacy;  // P(W) = ΦV(lm) / η(lm/W)
  };

  const handleConvert = () => {
    const result = convertToWatt(lumens, efficacy);
    setPower(result);
  };

  const examples = [
    { lumens: 900, efficacy: 15, expectedResult: 60, description: '900 lumens with efficacy of 15 lm/W' },
    { lumens: 1500, efficacy: 25, expectedResult: 60, description: '1500 lumens with efficacy of 25 lm/W' },
    { lumens: 3000, efficacy: 50, expectedResult: 60, description: '3000 lumens with efficacy of 50 lm/W' },
    { lumens: 600, efficacy: 10, expectedResult: 60, description: '600 lumens with efficacy of 10 lm/W' },
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
            <BreadcrumbPage>Lumens to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Lumens to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert luminous flux in lumens (lm) and luminous efficacy in lumens per watt (lm/W) to power in watts (W).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Luminous Flux in Lumens (lm):</label>
              <input
                type="number"
                value={lumens}
                onChange={(e) => setLumens(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Luminous Efficacy in Lumens per Watt (lm/W):</label>
              <input
                type="number"
                value={efficacy}
                onChange={(e) => setEfficacy(Number(e.target.value))}
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
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Lumens: {example.lumens} lm, Efficacy: {example.efficacy} lm/W</p>
                    <p>Converted Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>W = lm / (lm/W)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>lm</strong>: Luminous flux in lumens (lm)</li>
                <li><strong>lm/W</strong>: Luminous efficacy in lumens per watt (lm/W)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from lumens (lm) to watts (W) is based on the formula:
                <br />
                - Power (W) is equal to luminous flux (lumens) divided by luminous efficacy (lumens per watt).
                <br />
                - This conversion helps us calculate how much power (in watts) is required to produce a certain amount of luminous flux (lumens) with a given luminous efficacy.
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

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Lumens to Watts Table:</h2>
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2">Lumens</th>
                    <th className="border p-2">Incandescent Light Bulb (W)</th>
                    <th className="border p-2">Fluorescent/LED (W)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">375 lm</td><td className="border p-2">25 W</td><td className="border p-2">6.23 W</td></tr>
                  <tr><td className="border p-2">600 lm</td><td className="border p-2">40 W</td><td className="border p-2">10 W</td></tr>
                  <tr><td className="border p-2">900 lm</td><td className="border p-2">60 W</td><td className="border p-2">15 W</td></tr>
                  <tr><td className="border p-2">1125 lm</td><td className="border p-2">75 W</td><td className="border p-2">18.75 W</td></tr>
                  <tr><td className="border p-2">1500 lm</td><td className="border p-2">100 W</td><td className="border p-2">25 W</td></tr>
                  <tr><td className="border p-2">2250 lm</td><td className="border p-2">150 W</td><td className="border p-2">37.5 W</td></tr>
                  <tr><td className="border p-2">3000 lm</td><td className="border p-2">200 W</td><td className="border p-2">50 W</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LumenToWattConverter;
