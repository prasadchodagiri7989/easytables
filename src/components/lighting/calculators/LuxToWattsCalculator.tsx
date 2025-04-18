import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LuxToWattsCalculator = () => {
  const [lux, setLux] = useState('');
  const [area, setArea] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [watts, setWatts] = useState('');
  const [error, setError] = useState('');

  const calculateWatts = () => {
    setError('');
    try {
      const luxVal = parseFloat(lux);
      const areaVal = parseFloat(area);
      const efficiencyVal = parseFloat(efficiency);

      if (isNaN(luxVal) || isNaN(areaVal) || isNaN(efficiencyVal) || luxVal <= 0 || areaVal <= 0 || efficiencyVal <= 0) {
        setError('Please enter valid positive numbers for lux, area, and efficiency.');
        return;
      }

      // Formula: Watts = Lux * Area * Efficiency (lumens per watt)
      const wattsResult = (luxVal * areaVal * efficiencyVal) / 1000; // Divide by 1000 to convert milliwatts to watts
      setWatts(wattsResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLux('');
    setArea('');
    setEfficiency('');
    setWatts('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lux to Watts Calculator</CardTitle>
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
                <Label htmlFor="efficiency">Efficiency (lm/W)</Label>
                <Input
                  id="efficiency"
                  type="number"
                  placeholder="Enter luminous efficacy in lumens per watt"
                  value={efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="watts">Power (W)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Calculated Watts"
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

      <GuidanceSection title="Lux to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts illuminance in Lux to power in Watts, based on the area and luminous efficacy of the light source.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Watts = Lux × Area × Efficiency (lm/W)</code>
              <br />Where:
              <br />Lux = Illuminance (lux)
              <br />Area = Area in square meters (m²)
              <br />Efficiency = Luminous efficacy in lumens per watt (lm/W)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Efficiency values typically range from 30 lm/W for incandescent bulbs to 100 lm/W for LEDs.</li>
              <li>This calculation helps estimate the power consumption of light sources based on their efficiency.</li>
              <li>Ensure you have a reasonable estimate of the luminous efficacy for your light source.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LuxToWattsCalculator;
