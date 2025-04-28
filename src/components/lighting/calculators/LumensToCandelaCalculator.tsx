import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const LumensToCandelaCalculator = () => {
  const [lumens, setLumens] = useState('');
  const [beamAngle, setBeamAngle] = useState('');
  const [candela, setCandela] = useState('');
  const [error, setError] = useState('');

  const calculateCandela = () => {
    setError('');
    try {
      const lumensVal = parseFloat(lumens);
      const angle = parseFloat(beamAngle);

      if (isNaN(lumensVal) || isNaN(angle) || angle <= 0 || angle >= 180) {
        setError('Enter valid values. Beam angle should be between 0 and 180 degrees.');
        return;
      }

      const radians = (angle * Math.PI) / 180;
      const steradians = 2 * Math.PI * (1 - Math.cos(radians / 2));
      const cd = lumensVal / steradians;

      setCandela(cd.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLumens('');
    setBeamAngle('');
    setCandela('');
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
              <BreadcrumbPage>Lumens to Candela Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lumens to Candela Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="lumens">Luminous Flux (Lumens)</Label>
                <Input
                  id="lumens"
                  type="number"
                  placeholder="Enter lumens"
                  value={lumens}
                  onChange={(e) => setLumens(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="beamAngle">Beam Angle (Degrees)</Label>
                <Input
                  id="beamAngle"
                  type="number"
                  placeholder="Enter beam angle"
                  value={beamAngle}
                  onChange={(e) => setBeamAngle(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="candela">Luminous Intensity (Candela)</Label>
                <Input
                  id="candela"
                  type="number"
                  placeholder="Calculated candela"
                  value={candela}
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
              <Button onClick={calculateCandela}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Lumens to Candela Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts luminous flux in lumens to luminous intensity in candelas, considering the beam angle of the light source.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Candela = Lumens / (2π × (1 - cos(θ / 2)))</code>
              <br />where θ is the beam angle in degrees.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Smaller beam angles yield higher candela for the same lumen value (more focused light).</li>
              <li>This is ideal for spotlights or directional lighting calculation.</li>
              <li>Beam angle must be between 0° and 180°.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default LumensToCandelaCalculator;
