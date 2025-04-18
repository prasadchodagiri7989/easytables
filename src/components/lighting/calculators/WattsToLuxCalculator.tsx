import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const WattsToLuxCalculator = () => {
  const [watts, setWatts] = useState('');
  const [luminousEfficacy, setLuminousEfficacy] = useState('');
  const [area, setArea] = useState('');
  const [lux, setLux] = useState('');
  const [error, setError] = useState('');

  const calculateLux = () => {
    setError('');
    try {
      const wattsVal = parseFloat(watts);
      const efficacyVal = parseFloat(luminousEfficacy);
      const areaVal = parseFloat(area);

      if (isNaN(wattsVal) || isNaN(efficacyVal) || isNaN(areaVal) || wattsVal <= 0 || efficacyVal <= 0 || areaVal <= 0) {
        setError('Please enter valid positive numbers for Watts, Luminous Efficacy, and Area.');
        return;
      }

      // Step 1: Calculate Lumens
      const lumens = wattsVal * efficacyVal;

      // Step 2: Calculate Lux
      const luxResult = lumens / areaVal;
      setLux(luxResult.toFixed(2));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setLuminousEfficacy('');
    setArea('');
    setLux('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to Lux Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="watts">Power (Watts)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Enter power in Watts"
                  value={watts}
                  onChange={(e) => setWatts(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="luminousEfficacy">Luminous Efficacy (lm/W)</Label>
                <Input
                  id="luminousEfficacy"
                  type="number"
                  placeholder="Enter luminous efficacy in lm/W"
                  value={luminousEfficacy}
                  onChange={(e) => setLuminousEfficacy(e.target.value)}
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
                  placeholder="Calculated Lux"
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

      <GuidanceSection title="Watts to Lux Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts electrical power in watts (W) to illuminance in lux (lx) by first calculating the total luminous flux (lumens) and then dividing by the illuminated area.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <p>
              1. **Lumens** = Watts × Luminous Efficacy (lm/W)
              <br />2. **Lux** = Lumens ÷ Area (m²)
            </p>
            <p>Where:
              <br />Watts (W) = Power consumed by the light source
              <br />Luminous Efficacy (lm/W) = Luminous output per watt of power consumed
              <br />Area (m²) = Area being illuminated (in square meters)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation is used to determine how much light intensity (lux) is provided across an area from a given wattage of lighting.</li>
              <li>It’s important to consider the luminous efficacy, which can vary based on the type of light source.</li>
              <li>Common luminous efficacy values: Incandescent (15 lm/W), LED (80-100 lm/W), and CFL (50-70 lm/W).</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default WattsToLuxCalculator;
