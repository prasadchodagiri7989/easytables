import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LumensToWattsCalculator = () => {
  const [lumens, setLumens] = useState('');
  const [efficiency, setEfficiency] = useState('80'); // Default for LED
  const [watts, setWatts] = useState('');
  const [error, setError] = useState('');

  const calculateWatts = () => {
    setError('');
    try {
      const lumensVal = parseFloat(lumens);
      const efficiencyFactor = parseFloat(efficiency);

      if (isNaN(lumensVal) || lumensVal <= 0 || isNaN(efficiencyFactor) || efficiencyFactor <= 0) {
        setError('Please enter valid positive numbers for lumens and efficiency.');
        return;
      }

      // Formula: Watts = Lumens × Efficiency Factor
      const wattsResult = lumensVal / efficiencyFactor;
      setWatts(wattsResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLumens('');
    setEfficiency('80'); // Default for LED
    setWatts('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lumens to Watts Calculator</CardTitle>
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
                <Label htmlFor="efficiency">Efficiency (lm/W)</Label>
                <Input
                  id="efficiency"
                  type="number"
                  placeholder="Enter efficiency factor"
                  value={efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="watts">Power Consumption (Watts)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Calculated watts"
                  value={watts}
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
              <Button onClick={calculateWatts}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Lumens to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts luminous flux (lumens) to power consumption (watts), assuming a known efficiency factor for the light source.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Watts = Lumens / Efficiency Factor</code>
              <br />Where:
              <br />Lumens = Total luminous flux
              <br />Efficiency Factor = Luminous efficacy in lumens per watt (lm/W)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>LED bulbs typically have an efficiency factor of 80-100 lm/W.</li>
              <li>Incandescent bulbs typically have an efficiency factor of 10-15 lm/W.</li>
              <li>This formula helps determine the energy consumption of a light source.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LumensToWattsCalculator;
