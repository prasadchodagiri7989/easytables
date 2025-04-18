import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const LuxToFootcandlesCalculator = () => {
  const [lux, setLux] = useState('');
  const [footcandles, setFootcandles] = useState('');
  const [error, setError] = useState('');

  const calculateFootcandles = () => {
    setError('');
    try {
      const luxVal = parseFloat(lux);

      if (isNaN(luxVal) || luxVal <= 0) {
        setError('Please enter a valid positive number for lux.');
        return;
      }

      // Formula: Footcandles = Lux / 10.764
      const footcandlesResult = luxVal / 10.764;
      setFootcandles(footcandlesResult.toFixed(4));
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setLux('');
    setFootcandles('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lux to Footcandles Calculator</CardTitle>
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
                <Label htmlFor="footcandles">Illuminance (Footcandles)</Label>
                <Input
                  id="footcandles"
                  type="number"
                  placeholder="Calculated Footcandles"
                  value={footcandles}
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
              <Button onClick={calculateFootcandles}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Lux to Footcandles Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts illuminance in Lux to footcandles, which is a measurement used primarily in the United States.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p>
              <code>Footcandles = Lux / 10.764</code>
              <br />Where:
              <br />Lux = Illuminance (lux)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Lux is the metric unit for illuminance, while footcandles are used in imperial units.</li>
              <li>Use this conversion when working with lighting systems in the U.S. or when dealing with footcandles as a unit.</li>
              <li>This conversion is commonly used in architectural lighting design and photography.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default LuxToFootcandlesCalculator;
