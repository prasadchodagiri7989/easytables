import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const VoltsToAmpsCalculator = () => {
  const [power, setPower] = useState("");
  const [volts, setVolts] = useState("");
  const [amps, setAmps] = useState("");
  const [error, setError] = useState("");

  const calculateAmps = () => {
    setError("");
    try {
      const P = parseFloat(power);
      const V = parseFloat(volts);

      if (isNaN(P) || isNaN(V) || V === 0) {
        setError("Please enter valid numeric values. Voltage cannot be zero.");
        return;
      }

      const result = P / V; // A = W / V
      setAmps(result.toFixed(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setPower("");
    setVolts("");
    setAmps("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Volts to Amps (A) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="power">Power (W)</Label>
              <Input
                id="power"
                type="number"
                placeholder="Enter power in Watts"
                value={power}
                onChange={(e) => setPower(e.target.value)}
              />
            </div>
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
              <Label htmlFor="amps">Current (A)</Label>
              <Input
                id="amps"
                type="text"
                placeholder="Calculated current in Amps"
                value={amps}
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
            <Button onClick={calculateAmps}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Volts to Amps Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts electrical power from watts and volts to current in amperes (A).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>A = W / V</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Examples:</h3>
            <ul className="list-disc pl-5">
              <li>Example 1: 1200 W ÷ 120 V = 10 A</li>
              <li>Example 2: 1150 W ÷ 230 V = 5 A</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default VoltsToAmpsCalculator;
