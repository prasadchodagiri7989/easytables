import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const VAToWattsCalculator = () => {
  const [va, setVa] = useState('');
  const [pf, setPf] = useState('');
  const [watts, setWatts] = useState('');
  const [error, setError] = useState('');

  const calculateWatts = () => {
    setError('');
    try {
      const vaValue = parseFloat(va);
      const pfValue = parseFloat(pf);

      if (isNaN(vaValue) || isNaN(pfValue) || pfValue <= 0 || pfValue > 1) {
        setError('Enter valid values. Power factor must be between 0 and 1.');
        return;
      }

      const result = vaValue * pfValue;
      setWatts(result.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setVa('');
    setPf('');
    setWatts('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>VA to Watts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Enter apparent power in VA"
                  value={va}
                  onChange={(e) => setVa(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="pf">Power Factor (0-1)</Label>
                <Input
                  id="pf"
                  type="number"
                  placeholder="Enter power factor"
                  value={pf}
                  onChange={(e) => setPf(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="watts">Real Power (Watts)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Calculated real power in watts"
                  value={watts}
                  disabled
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
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

      <GuidanceSection title="VA to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts apparent power (VA) to real power (Watts) using the power factor.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><strong>Watts = VA × Power Factor</strong></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Example:</h3>
            <p>If you have 1000 VA and a power factor of 0.85:</p>
            <p>Watts = 1000 × 0.85 = <strong>850 W</strong></p>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default VAToWattsCalculator;
