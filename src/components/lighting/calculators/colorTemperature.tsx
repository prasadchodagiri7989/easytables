import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const ColorTemperatureConverter = () => {
  const [kelvin, setKelvin] = useState('');
  const [mired, setMired] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    setError('');
    const k = parseFloat(kelvin);
    if (isNaN(k) || k <= 0) {
      setError('Please enter a valid color temperature in Kelvin.');
      return;
    }
    const m = 1000000 / k;
    setMired(m.toFixed(2));
  };

  const reset = () => {
    setKelvin('');
    setMired('');
    setError('');
  };

  return (
    <>
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
                <Link to="/all-calculators">All Calculators</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/lighting-calculators">Lighting Calculators</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Color Temperature Converter</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Color Temperature Converter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="kelvin">Kelvin (K)</Label>
                <Input
                  id="kelvin"
                  type="number"
                  placeholder="e.g., 6500"
                  value={kelvin}
                  onChange={e => setKelvin(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="mired">Mired (Micro Reciprocal Degrees)</Label>
                <Input
                  id="mired"
                  type="text"
                  value={mired}
                  disabled
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={convert}>Convert</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Color Temperature">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Formula</h3>
            <ul className="list-disc pl-5">
              <li>Mired = 1,000,000 / Kelvin</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the color temperature in Kelvin.</li>
              <li>Click "Convert" to see the Mired value.</li>
              <li>Use "Reset" to clear the form.</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Photography and cinematography lighting setups</li>
              <li>Smart lighting control and color adjustments</li>
              <li>Comparing lighting types (warm vs cool white)</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default ColorTemperatureConverter;
