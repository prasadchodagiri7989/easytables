import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const CandelaToLuxCalculator = () => {
  const [candela, setCandela] = useState('');
  const [distance, setDistance] = useState('');
  const [lux, setLux] = useState('');
  const [error, setError] = useState('');

  const calculateLux = () => {
    setError('');
    try {
      const cd = parseFloat(candela);
      const d = parseFloat(distance);

      if (isNaN(cd) || isNaN(d) || d <= 0) {
        setError('Please enter valid numeric values. Distance must be greater than zero.');
        return;
      }

      const luxResult = cd / (d * d);
      setLux(luxResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setCandela('');
    setDistance('');
    setLux('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Candela to Lux Calculator</CardTitle>
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
                <Label htmlFor="distance">Distance (Meters)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Enter distance in meters"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
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

      <GuidanceSection title="Candela to Lux Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts luminous intensity in candelas (cd) to illuminance in lux (lx), based on the distance to the surface.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lux = Candela / Distance²</code>
              <br />
              Where distance is measured in meters.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Used for calculating light level on a surface from a point source.</li>
              <li>Ensure the distance is not zero to avoid invalid results.</li>
              <li>This assumes light is evenly distributed over the surface area.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default CandelaToLuxCalculator;
