import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LuxToCandelaCalculator = () => {
  const [lux, setLux] = useState('');
  const [distance, setDistance] = useState('');
  const [candela, setCandela] = useState('');
  const [error, setError] = useState('');

  const calculateCandela = () => {
    setError('');
    try {
      const luxVal = parseFloat(lux);
      const distanceVal = parseFloat(distance);

      if (isNaN(luxVal) || luxVal <= 0 || isNaN(distanceVal) || distanceVal <= 0) {
        setError('Please enter valid positive numbers for lux and distance.');
        return;
      }

      // Formula: Candela = Lux × Distance²
      const candelaResult = luxVal * Math.pow(distanceVal, 2);
      setCandela(candelaResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLux('');
    setDistance('');
    setCandela('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lux to Candela Calculator</CardTitle>
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
                <Label htmlFor="distance">Distance (m)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Enter distance in meters"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="candela">Luminous Intensity (Candela)</Label>
                <Input
                  id="candela"
                  type="number"
                  placeholder="Calculated Candela"
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

      <GuidanceSection title="Lux to Candela Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts illuminance in Lux to luminous intensity in Candela, assuming a point light source and a known distance.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Candela = Lux × Distance²</code>
              <br />Where:
              <br />Lux = Illuminance (lux)
              <br />Distance = Distance from the light source (in meters)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This formula assumes a point-like light source.</li>
              <li>Lux measures the illuminance on a surface, while Candela measures the intensity of light emitted from the source.</li>
              <li>This calculation is useful for understanding light intensity from a particular point source at a given distance.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LuxToCandelaCalculator;
