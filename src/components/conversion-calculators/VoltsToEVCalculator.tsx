import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";

const VoltsToEVCalculator = () => {
  const [volts, setVolts] = useState("");
  const [chargeCount, setChargeCount] = useState("1");
  const [electronvolts, setElectronvolts] = useState("");
  const [error, setError] = useState("");

  const calculateEV = () => {
    setError("");
    try {
      const V = parseFloat(volts);
      const q = parseFloat(chargeCount);

      if (isNaN(V) || isNaN(q)) {
        setError("Please enter valid numeric values.");
        return;
      }

      const result = V * q;
      setElectronvolts(result.toExponential(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setVolts("");
    setChargeCount("1");
    setElectronvolts("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Volts to Electronvolts (eV) Calculator</CardTitle>
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
              <Label htmlFor="chargeCount">Number of Charges (e⁻)</Label>
              <Input
                id="chargeCount"
                type="number"
                placeholder="Enter number of elementary charges"
                value={chargeCount}
                onChange={(e) => setChargeCount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="electronvolts">Energy (eV)</Label>
              <Input
                id="electronvolts"
                type="text"
                placeholder="Result in eV"
                value={electronvolts}
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
            <Button onClick={calculateEV}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Volts to Electronvolts (eV) Guide">
        <div className="space-y-4">
          <p>Use this tool to convert voltage (V) into electronvolts (eV) based on the number of elementary charges (electrons).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>eV = V × n</b> (where n is the number of electrons)</li>
              <li>1 eV = 1.602 × 10⁻¹⁹ Joules</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Examples:</h3>
            <ul className="list-disc pl-5">
              <li>1 Volt × 1 charge = 1 eV</li>
              <li>5 Volts × 3 charges = 15 eV</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default VoltsToEVCalculator;

