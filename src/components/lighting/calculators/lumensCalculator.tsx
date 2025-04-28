import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const LumensCalculator = () => {
  const [candela, setCandela] = useState('');
  const [solidAngle, setSolidAngle] = useState('');
  const [lumens, setLumens] = useState('');
  const [error, setError] = useState('');

  const calculateLumens = () => {
    setError('');
    const I = parseFloat(candela);
    const Ω = parseFloat(solidAngle);

    if (isNaN(I) || I <= 0 || isNaN(Ω) || Ω <= 0) {
      setError('Please enter valid positive values for candela and solid angle.');
      return;
    }

    const Φ = I * Ω;
    setLumens(Φ.toFixed(4) + ' lm');
  };

  const reset = () => {
    setCandela('');
    setSolidAngle('');
    setLumens('');
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
              <BreadcrumbPage>Lumens Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lumens Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="candela">Luminous Intensity (Candela, cd)</Label>
                <Input
                  id="candela"
                  type="number"
                  placeholder="Enter luminous intensity"
                  value={candela}
                  onChange={e => setCandela(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="solidAngle">Solid Angle (Steradian, sr)</Label>
                <Input
                  id="solidAngle"
                  type="number"
                  placeholder="Enter solid angle"
                  value={solidAngle}
                  onChange={e => setSolidAngle(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lumens">Luminous Flux (Lumens, lm)</Label>
                <Input
                  id="lumens"
                  type="text"
                  placeholder="Result"
                  value={lumens}
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
              <Button onClick={calculateLumens}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Lumens">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Lumens Formula</h3>
            <p>
              Lumens measure the total quantity of visible light emitted by a source per unit of time.
            </p>
            <p className="mt-2 font-medium">Φ = I × Ω</p>
            <p>Where:</p>
            <ul className="list-disc pl-5">
              <li><strong>Φ</strong> = Luminous Flux in lumens (lm)</li>
              <li><strong>I</strong> = Luminous Intensity in candela (cd)</li>
              <li><strong>Ω</strong> = Solid Angle in steradians (sr)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the luminous intensity in candela</li>
              <li>Enter the solid angle in steradians</li>
              <li>Click "Calculate" to get lumens</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Lighting system design and specification</li>
              <li>Comparing brightness of different light sources</li>
              <li>Energy efficiency analysis</li>
              <li>Indoor and outdoor illumination planning</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default LumensCalculator;
