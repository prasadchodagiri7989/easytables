import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const VoltsToKWCalculator = () => {
  const [volts, setVolts] = useState("");
  const [current, setCurrent] = useState("");
  const [powerFactor, setPowerFactor] = useState("1");
  const [kilowatts, setKilowatts] = useState("");
  const [error, setError] = useState("");

  const calculateKW = () => {
    setError("");
    try {
      const V = parseFloat(volts);
      const I = parseFloat(current);
      const PF = parseFloat(powerFactor);

      if (isNaN(V) || isNaN(I) || isNaN(PF)) {
        setError("Please enter valid numeric values.");
        return;
      }

      const result = (V * I * PF) / 1000; // kW = V * I * PF / 1000
      setKilowatts(result.toFixed(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setVolts("");
    setCurrent("");
    setPowerFactor("1");
    setKilowatts("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Volts to Kilowatts (kW) Calculator</CardTitle>
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
              <Label htmlFor="powerFactor">Power Factor (PF)</Label>
              <Input
                id="powerFactor"
                type="number"
                step="0.01"
                placeholder="Enter power factor"
                value={powerFactor}
                onChange={(e) => setPowerFactor(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="kilowatts">Power (kW)</Label>
              <Input
                id="kilowatts"
                type="text"
                placeholder="Calculated power in kW"
                value={kilowatts}
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
            <Button onClick={calculateKW}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Volts to kW Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts electrical power from volts, amperes, and power factor to kilowatts (kW).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>kW = V × I × PF / 1000</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Examples:</h3>
            <ul className="list-disc pl-5">
              <li>Example 1: 120 V × 10 A × 0.8 PF = 0.96 kW</li>
              <li>Example 2: 230 V × 5 A × 1 PF = 1.15 kW</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default VoltsToKWCalculator;
