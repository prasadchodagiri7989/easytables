import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const LumenToLuxConverter: React.FC = () => {
  const [lumens, setLumens] = useState<number>(0);  // Luminous flux in lumens (lm)
  const [area, setArea] = useState<number>(0);  // Area in square meters or square feet
  const [unit, setUnit] = useState<string>('m2');  // Area unit: m2 or ft2
  const [lux, setLux] = useState<number | string>('');  // Output illuminance in lux (lx)

  // Conversion function to calculate lux
  const convertToLux = (lumens: number, area: number, unit: string): number => {
    if (unit === 'ft2') {
      return (10.76391 * lumens) / area;  // Lumens to Lux formula for square feet
    } else {
      return lumens / area;  // Lumens to Lux formula for square meters
    }
  };

  const handleConvert = () => {
    const result = convertToLux(lumens, area, unit);
    setLux(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      lumens: 2000,
      area: 4,
      expectedResult: 500,
      unit: 'm2',
      description: 'Example: 2000 lumens on 4 square meters',
    },
    {
      lumens: 2000,
      area: 10,
      expectedResult: 186.48,
      unit: 'ft2',
      description: 'Example: 2000 lumens on 10 square feet',
    },
    {
      lumens: 1000,
      area: 2,
      expectedResult: 500,
      unit: 'm2',
      description: 'Example: 1000 lumens on 2 square meters',
    },
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
              <Link to="/lighting-calculations">Lighting Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lumen to Lux Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Lumen to Lux Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert luminous flux in lumens (lm) to illuminance in lux (lx) depending on the area and the unit of measurement.</p>

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
              <label className="block font-medium mb-1">Area:</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Choose Area Unit:</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="m2">Square Meters (m²)</option>
                <option value="ft2">Square Feet (ft²)</option>
              </select>
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Illuminance:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{lux} lx</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Lumens: {example.lumens} lm, Area: {example.area} {example.unit}</p>
                    <p>Converted Illuminance: {example.expectedResult} lx</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>lx = lm / m²</strong> (for square meters)
                <br />
                <strong>lx = 10.76391 × lm / ft²</strong> (for square feet)
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>lx = Illuminance in lux (lx)</li>
                  <li>lm = Luminous flux in lumens (lm)</li>
                  <li>m² = Area in square meters (m²)</li>
                  <li>ft² = Area in square feet (ft²)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from lumens (lm) to lux (lx) depends on the area that the light is spread over.
                <br />
                - For square meters: lux (lx) = lumens (lm) / area (m²)
                <br />
                - For square feet: lux (lx) = 10.76391 × lumens (lm) / area (ft²)
                <br />
                This formula calculates how much illuminance (in lux) is received over a given area.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the illuminance in lux if a light source produces 2000 lumens and is spread over an area of 4 square meters?
                <br />
                Using the formula: lux = lumens / area, we get lux = 2000 / 4 = 500 lx.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LumenToLuxConverter;
