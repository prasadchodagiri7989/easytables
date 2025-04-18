import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const VoltsToWattsCalculator = () => {
  const [volts, setVolts] = useState("");
  const [current, setCurrent] = useState("");
  const [watts, setWatts] = useState("");
  const [error, setError] = useState("");

  const calculateWatts = () => {
    setError("");
    try {
      const V = parseFloat(volts);
      const I = parseFloat(current);

      if (isNaN(V) || isNaN(I)) {
        setError("Please enter valid numeric values.");
        return;
      }

      const result = V * I; // W = V * I
      setWatts(result.toFixed(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setVolts("");
    setCurrent("");
    setWatts("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Volts to Watts (W) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="volts">Voltage (V)</Label>
              <Input
                id="volts"
                type="number"
                placeholder="Enter voltage in Volts"
                value={volts}
                onChange={(e) => setVolts(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="current">Current (A)</Label>
              <Input
                id="current"
                type="number"
                placeholder="Enter current in Amps"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="watts">Power (W)</Label>
              <Input
                id="watts"
                type="text"
                placeholder="Calculated power in Watts"
                value={watts}
                disabled
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 mt-4 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button onClick={calculateWatts}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Volts to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts electrical power from volts and amperes to watts (W).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>W = V × I</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Examples:</h3>
            <ul className="list-disc pl-5">
              <li>Example 1: 120 V × 10 A = 1200 W</li>
              <li>Example 2: 230 V × 5 A = 1150 W</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default VoltsToWattsCalculator;
