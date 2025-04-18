import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LumensToLuxCalculator = () => {
  const [lumens, setLumens] = useState('');
  const [area, setArea] = useState('');
  const [lux, setLux] = useState('');
  const [error, setError] = useState('');

  const calculateLux = () => {
    setError('');
    try {
      const lumensVal = parseFloat(lumens);
      const areaVal = parseFloat(area);

      if (isNaN(lumensVal) || isNaN(areaVal) || areaVal <= 0) {
        setError('Enter valid values. Area must be greater than 0.');
        return;
      }

      const luxResult = lumensVal / areaVal;
      setLux(luxResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLumens('');
    setArea('');
    setLux('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lumens to Lux Calculator</CardTitle>
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
                <Label htmlFor="area">Area (m²)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Enter area in square meters"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
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

      <GuidanceSection title="Lumens to Lux Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts luminous flux in lumens to illuminance in lux based on the area where the light is distributed.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lux = Lumens / Area (m²)</code>
              <br />where Area is the surface area in square meters.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Lux is a measure of how much light is received on a surface.</li>
              <li>Area should be the surface area over which the light is spread.</li>
              <li>Ensure area is measured in square meters for accurate results.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LumensToLuxCalculator;
