import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const WattsToLumensCalculator = () => {
  const [watts, setWatts] = useState('');
  const [luminousEfficacy, setLuminousEfficacy] = useState('');
  const [lumens, setLumens] = useState('');
  const [error, setError] = useState('');

  const calculateLumens = () => {
    setError('');
    try {
      const wattsVal = parseFloat(watts);
      const efficacyVal = parseFloat(luminousEfficacy);

      if (isNaN(wattsVal) || isNaN(efficacyVal) || wattsVal <= 0 || efficacyVal <= 0) {
        setError('Please enter valid positive numbers for Watts and Luminous Efficacy.');
        return;
      }

      // Formula: Lumens = Watts × Luminous Efficacy
      const lumensResult = wattsVal * efficacyVal;
      setLumens(lumensResult.toFixed(2));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setLuminousEfficacy('');
    setLumens('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to Lumens Calculator</CardTitle>
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

      <GuidanceSection title="Watts to Lumens Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts electrical power in watts (W) to luminous flux in lumens (lm) using the luminous efficacy of the light source.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Lumens = Watts × Luminous Efficacy</code>
              <br />Where:
              <br />Watts (W) = Power consumed by the light source
              <br />Luminous Efficacy (lm/W) = Luminous output per watt of power consumed
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>The luminous efficacy can vary depending on the type of light source.</li>
              <li>Incandescent lights typically have a lower efficacy (15 lm/W), while LEDs can have much higher efficacy (80-100 lm/W).</li>
              <li>This calculation is useful when trying to estimate the light output from different power-consuming light sources.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default WattsToLumensCalculator;
