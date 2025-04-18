import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const AmpsToWattsCalculator = () => {
  const [phase, setPhase] = useState<"single" | "three">("single");
  const [current, setCurrent] = useState("");
  const [voltage, setVoltage] = useState("");
  const [powerFactor, setPowerFactor] = useState("1");
  const [watts, setWatts] = useState("");
  const [error, setError] = useState("");

  const calculateWatts = () => {
    setError("");

    const A = parseFloat(current);
    const V = parseFloat(voltage);
    const PF = parseFloat(powerFactor);

    if (isNaN(A) || isNaN(V) || isNaN(PF)) {
      setError("Please enter valid numeric values.");
      return;
    }

    const W =
      phase === "single"
        ? V * A * PF
        : Math.sqrt(3) * V * A * PF;

    setWatts(W.toFixed(2));
  };

  const reset = () => {
    setPhase("single");
    setCurrent("");
    setVoltage("");
    setPowerFactor("1");
    setWatts("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Amps to Watts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Phase</Label>
              <Select value={phase} onValueChange={(val) => setPhase(val as "single" | "three")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Phase</SelectItem>
                  <SelectItem value="three">Three Phase</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="current">Current (Amps)</Label>
                <Input
                  id="current"
                  type="number"
                  placeholder="Enter current in amps"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="voltage">Voltage (Volts)</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage in volts"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="powerFactor">Power Factor (0–1)</Label>
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
                <Label htmlFor="watts">Power (Watts)</Label>
                <Input id="watts" value={watts} disabled />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded text-sm">{error}</div>
            )}

            <div className="flex gap-3">
              <Button onClick={calculateWatts}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Amps to Watts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert electric current (Amps) into power (Watts), based on the voltage, phase type, and power factor.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><strong>Single Phase:</strong> W = V × I × PF</li>
              <li><strong>Three Phase:</strong> W = √3 × V × I × PF</li>
            </ul>
            <p className="mt-2">Where:
              <br />V = Voltage (Volts)
              <br />I = Current (Amps)
              <br />PF = Power Factor (0 to 1)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use a PF of 1 for resistive loads (heaters, incandescent bulbs).</li>
              <li>Use a PF around 0.8 for motors or inductive loads.</li>
              <li>Ensure all units are consistent.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default AmpsToWattsCalculator;
