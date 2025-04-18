import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const AmpsToVoltsCalculator = () => {
  const [solveBy, setSolveBy] = useState<"power" | "resistance">("power");
  const [current, setCurrent] = useState("");
  const [value, setValue] = useState(""); // Power or Resistance
  const [volts, setVolts] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    const I = parseFloat(current);
    const X = parseFloat(value);

    if (isNaN(I) || isNaN(X)) {
      setError("Please enter valid numeric values.");
      return;
    }

    const V = solveBy === "power" ? X / I : I * X;
    setVolts(V.toFixed(2));
  };

  const reset = () => {
    setCurrent("");
    setValue("");
    setVolts("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Amps to Volts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Solve using</Label>
              <Select value={solveBy} onValueChange={(val) => setSolveBy(val as "power" | "resistance")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="power">Power (Watts)</SelectItem>
                  <SelectItem value="resistance">Resistance (Ohms)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="current">Current (Amps)</Label>
                <Input
                  id="current"
                  type="number"
                  placeholder="Enter current"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="value">
                  {solveBy === "power" ? "Power (Watts)" : "Resistance (Ohms)"}
                </Label>
                <Input
                  id="value"
                  type="number"
                  placeholder={`Enter ${solveBy === "power" ? "power" : "resistance"}`}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="volts">Voltage (Volts)</Label>
                <Input id="volts" type="text" value={volts} disabled />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded text-sm">{error}</div>
            )}

            <div className="flex gap-3">
              <Button onClick={calculate}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Understanding Amps to Volts Conversion">
        <div className="space-y-4">
          <p>
            Voltage can be calculated from current and either power or resistance:
          </p>
          <ul className="list-disc pl-5">
            <li>Using Power: V = P / I</li>
            <li>Using Resistance: V = I × R</li>
          </ul>
          <p>
            Example 1: If you have 10 amps and 1000 watts, voltage = 1000 ÷ 10 = 100V.
          </p>
          <p>
            Example 2: If you have 5 amps and 20 ohms, voltage = 5 × 20 = 100V.
          </p>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default AmpsToVoltsCalculator;
