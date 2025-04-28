import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const FootcandlesToLuxCalculator = () => {
  const [footcandles, setFootcandles] = useState('');
  const [lux, setLux] = useState('');
  const [error, setError] = useState('');

  const calculateLux = () => {
    setError('');
    try {
      const fc = parseFloat(footcandles);

      if (isNaN(fc)) {
        setError('Please enter a valid number for footcandles.');
        return;
      }

      const luxResult = fc * 10.764;
      setLux(luxResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setFootcandles('');
    setLux('');
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
              <BreadcrumbPage>Footcandles to Lux Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Footcandles to Lux Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="footcandles">Illuminance (Footcandles)</Label>
                <Input
                  id="footcandles"
                  type="number"
                  placeholder="Enter value in footcandles"
                  value={footcandles}
                  onChange={(e) => setFootcandles(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lux">Illuminance (Lux)</Label>
                <Input
                  id="lux"
                  type="number"
                  placeholder="Calculated lux"
                  value={lux}
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
              <Button onClick={calculateLux}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Footcandles to Lux Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts illuminance in footcandles (fc) to lux (lx), a more widely used SI unit.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lux = Footcandles × 10.764</code>
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>1 footcandle = 10.764 lux.</li>
              <li>Use lux for SI-based lighting design standards.</li>
              <li>Ensure consistent measurement units when comparing lighting plans.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default FootcandlesToLuxCalculator;
