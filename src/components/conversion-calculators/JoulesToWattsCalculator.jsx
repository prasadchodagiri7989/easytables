import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const JoulesToWattsCalculator = () => {
  const [joules, setJoules] = useState('');
  const [time, setTime] = useState('');
  const [watts, setWatts] = useState('');
  const [error, setError] = useState('');

  const calculateWatts = () => {
    setError('');
    try {
      const E = parseFloat(joules); // energy in Joules
      const t = parseFloat(time); // time in seconds

      if (isNaN(E) || isNaN(t) || t <= 0) {
        setError('Please enter valid numeric values. Time must be greater than 0.');
        return;
      }

      const wattsResult = E / t; // P = E / t

      setWatts(wattsResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setJoules('');
    setTime('');
    setWatts('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Joules to Watts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="joules">Energy (Joules)</Label>
                <Input
                  id="joules"
                  type="number"
                  placeholder="Enter energy in Joules"
                  value={joules}
                  onChange={(e) => setJoules(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="time">Time (Seconds)</Label>
                <Input
                  id="time"
                  type="number"
                  placeholder="Enter time in seconds"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="watts">Power (Watts)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Calculated power in Watts"
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

      <GuidanceSection title="Joules to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert energy in Joules (J) to power in Watts (W), based on time in seconds.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Power (W) = Energy (J) / Time (s)</b></li>
            </ul>
            <p className="mt-2">Where:
              <br />P = Power (Watts)
              <br />E = Energy (Joules)
              <br />t = Time (seconds)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Joules is a unit of energy, and Watts is a unit of power.</li>
              <li>This formula calculates the rate of energy transfer over time.</li>
              <li>Used for understanding electrical power consumption or energy output in systems.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default JoulesToWattsCalculator;
