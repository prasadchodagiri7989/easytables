import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; 

const WhToKwConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(5000); // Default 5000 Wh
  const calculateKw = (wh: number) => wh / 1000;
  const kw = calculateKw(wh);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Breadcrumb */}
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
            <BreadcrumbPage>Wh to Kw Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Card Content */}
      <Card>
        <CardHeader>
          <CardTitle>Wh to Kw Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert energy in watt-hours (Wh) to power in kilowatts (kW).</p>

          {/* Wh Input */}
          <div>
            <label className="block font-medium mb-1">Energy in Watt-hours (Wh):</label>
            <input
              type="number"
              value={wh}
              onChange={(e) => setWh(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Converted Value Display */}
          <div>
            <strong>Converted Power:</strong>
            <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{kw.toFixed(2)} kW</p>
          </div>

          {/* Examples */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
            <ul className="space-y-2 list-disc list-inside">
              {[1000, 1500, 2500, 7500].map((exampleWh, index) => (
                <li key={index}>
                  <p>Energy: {exampleWh} Wh</p>
                  <p>Converted Power: {exampleWh / 1000} kW</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Formula Explanation */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
            <p>
              <strong>kW = Wh ÷ 1000</strong><br />
              Where:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><strong>kW</strong>: Power in kilowatts (kW)</li>
              <li><strong>Wh</strong>: Energy in watt-hours (Wh)</li>
            </ul>
          </div>

          {/* Notes */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Important Notes:</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Watt-hours (Wh) measure energy over time, while kilowatts (kW) measure instantaneous power.</li>
              <li>This simple division is valid because 1 kilowatt equals 1000 watts.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhToKwConverter;
