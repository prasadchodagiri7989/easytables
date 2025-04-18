import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const MillicandelaToLumensCalculator = () => {
  const [mcd, setMcd] = useState('');
  const [steradians, setSteradians] = useState('');
  const [lumens, setLumens] = useState('');
  const [error, setError] = useState('');

  const calculateLumens = () => {
    setError('');
    try {
      const mcdVal = parseFloat(mcd);
      const steradiansVal = parseFloat(steradians);

      if (isNaN(mcdVal) || isNaN(steradiansVal) || mcdVal <= 0 || steradiansVal <= 0) {
        setError('Please enter valid positive numbers for Millicandela and Steradians.');
        return;
      }

      // Formula: Lumens = mcd * steradians
      const lumensResult = (mcdVal * steradiansVal) / 1000; // Divide by 1000 to convert millicandela to candela
      setLumens(lumensResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setMcd('');
    setSteradians('');
    setLumens('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Millicandela to Lumens Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mcd">Millicandela (mcd)</Label>
                <Input
                  id="mcd"
                  type="number"
                  placeholder="Enter intensity in Millicandela"
                  value={mcd}
                  onChange={(e) => setMcd(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="steradians">Steradians (sr)</Label>
                <Input
                  id="steradians"
                  type="number"
                  placeholder="Enter steradians (solid angle)"
                  value={steradians}
                  onChange={(e) => setSteradians(e.target.value)}
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

      <GuidanceSection title="Millicandela to Lumens Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts the intensity of a light source from millicandela (mcd) to lumens (lm) based on the solid angle (steradians).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lumens = Millicandela × Steradians</code>
              <br />Where:
              <br />Millicandela (mcd) = Intensity of the light in millicandela
              <br />Steradians (sr) = Solid angle in steradians
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Millicandela represents the intensity of light, while steradians represent the solid angle the light is spread over.</li>
              <li>For a point source, the solid angle is usually 4π steradians.</li>
              <li>This calculation is useful for estimating the luminous flux of point light sources, such as LEDs or lasers.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default MillicandelaToLumensCalculator;
