import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LumensToMillicandelaCalculator = () => {
  const [lumens, setLumens] = useState('');
  const [millicandela, setMillicandela] = useState('');
  const [error, setError] = useState('');

  const calculateMillicandela = () => {
    setError('');
    try {
      const lumensVal = parseFloat(lumens);

      if (isNaN(lumensVal) || lumensVal <= 0) {
        setError('Please enter a valid number for lumens.');
        return;
      }

      // Formula: Millicandela = (Lumens × 1000) / (4π)
      const mcdResult = (lumensVal * 1000) / (4 * Math.PI);
      setMillicandela(mcdResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLumens('');
    setMillicandela('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lumens to Millicandela Calculator</CardTitle>
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
                <Label htmlFor="millicandela">Luminous Intensity (mcd)</Label>
                <Input
                  id="millicandela"
                  type="number"
                  placeholder="Calculated millicandela"
                  value={millicandela}
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
              <Button onClick={calculateMillicandela}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Lumens to Millicandela Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts luminous flux in lumens to luminous intensity in millicandela, assuming the light source radiates uniformly in all directions (solid angle of 4π steradians).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Millicandela = (Lumens × 1000) / (4π)</code>
              <br />where:
              <br />Lumens = Total luminous flux
              <br />π ≈ 3.1416
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This formula assumes a uniform spherical distribution of light.</li>
              <li>Millicandela (mcd) measures the luminous intensity in a given direction.</li>
              <li>Make sure the lumens value is greater than zero for meaningful results.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LumensToMillicandelaCalculator;
