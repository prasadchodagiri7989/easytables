import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const CandelaToLumensCalculator = () => {
  const [candela, setCandela] = useState('');
  const [beamAngle, setBeamAngle] = useState('');
  const [lumens, setLumens] = useState('');
  const [error, setError] = useState('');

  const calculateLumens = () => {
    setError('');
    try {
      const cd = parseFloat(candela);
      const angle = parseFloat(beamAngle);

      if (isNaN(cd) || isNaN(angle)) {
        setError('Please enter valid numeric values.');
        return;
      }

      const thetaRad = (angle * Math.PI) / 180;
      const lumensResult = cd * 2 * Math.PI * (1 - Math.cos(thetaRad / 2));

      setLumens(lumensResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setCandela('');
    setBeamAngle('');
    setLumens('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Candela to Lumens Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="candela">Luminous Intensity (Candela)</Label>
                <Input
                  id="candela"
                  type="number"
                  placeholder="Enter value in candela"
                  value={candela}
                  onChange={(e) => setCandela(e.target.value)}
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
                <Label htmlFor="lumens">Luminous Flux (Lumens)</Label>
                <Input
                  id="lumens"
                  type="number"
                  placeholder="Calculated lumens"
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

      <GuidanceSection title="Candela to Lumens Conversion Guide">
        <div className="space-y-4">
          <p>
            This calculator converts luminous intensity in candelas (cd) to luminous flux in lumens (lm), based on the beam angle of the light.
          </p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lumens = Candela × 2π × (1 - cos(θ / 2))</code>
              <br />
              Where <b>θ</b> is the beam angle in degrees.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This conversion is useful for directional light sources like spotlights.</li>
              <li>A larger beam angle increases the total lumens.</li>
              <li>Ensure beam angle is in degrees before input.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default CandelaToLumensCalculator;
