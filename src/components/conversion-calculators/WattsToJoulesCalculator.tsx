import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const WattsToJoulesCalculator = () => {
  const [watts, setWatts] = useState('');
  const [seconds, setSeconds] = useState('');
  const [joules, setJoules] = useState('');
  const [error, setError] = useState('');

  const calculateJoules = () => {
    setError('');
    try {
      const W = parseFloat(watts);
      const S = parseFloat(seconds);

      if (isNaN(W) || isNaN(S) || W < 0 || S < 0) {
        setError('Please enter valid positive numbers for both fields.');
        return;
      }

      const result = W * S;
      setJoules(result.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setSeconds('');
    setJoules('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to Joules Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="watts">Power (W)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Enter power in Watts"
                  value={watts}
                  onChange={(e) => setWatts(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="seconds">Time (s)</Label>
                <Input
                  id="seconds"
                  type="number"
                  placeholder="Enter time in Seconds"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="joules">Energy (Joules)</Label>
                <Input
                  id="joules"
                  type="number"
                  placeholder="Calculated Joules"
                  value={joules}
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
              <Button onClick={calculateJoules}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Watts to Joules Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts power in Watts (W) and time in seconds (s) to energy in Joules (J).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Joules = Watts × Seconds</b></li>
            </ul>
            <p className="mt-2">
              Where:
              <br />Watts = Rate of energy transfer
              <br />Seconds = Time duration
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>1 Watt = 1 Joule per second.</li>
              <li>Joules measure total energy, useful in physics and engineering contexts.</li>
              <li>Always use consistent time units (seconds).</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default WattsToJoulesCalculator;
