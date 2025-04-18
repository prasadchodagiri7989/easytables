import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LuxToLumensCalculator = () => {
  const [lux, setLux] = useState('');
  const [area, setArea] = useState('');
  const [lumens, setLumens] = useState('');
  const [error, setError] = useState('');

  const calculateLumens = () => {
    setError('');
    try {
      const luxVal = parseFloat(lux);
      const areaVal = parseFloat(area);

      if (isNaN(luxVal) || isNaN(areaVal) || luxVal <= 0 || areaVal <= 0) {
        setError('Please enter valid positive numbers for lux and area.');
        return;
      }

      // Formula: Lumens = Lux * Area
      const lumensResult = luxVal * areaVal;
      setLumens(lumensResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLux('');
    setArea('');
    setLumens('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lux to Lumens Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="lux">Illuminance (Lux)</Label>
                <Input
                  id="lux"
                  type="number"
                  placeholder="Enter illuminance in Lux"
                  value={lux}
                  onChange={(e) => setLux(e.target.value)}
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
                <Label htmlFor="lumens">Lumens (lm)</Label>
                <Input
                  id="lumens"
                  type="number"
                  placeholder="Calculated Lumens"
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

      <GuidanceSection title="Lux to Lumens Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts illuminance in Lux to Lumens, which is the total light output emitted by a light source over a specific area.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lumens = Lux × Area</code>
              <br />Where:
              <br />Lux = Illuminance (lux)
              <br />Area = Area in square meters (m²)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use this conversion when working with light output measurements for specific areas.</li>
              <li>Lumens measure total light output, while Lux measures light intensity on a surface.</li>
              <li>This conversion is commonly used in lighting design for buildings, rooms, and outdoor spaces.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LuxToLumensCalculator;
