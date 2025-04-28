import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


const PowerCalculator = () => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [power, setPower] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    const V = parseFloat(voltage);
    const I = parseFloat(current);

    if (!isNaN(V) && !isNaN(I)) {
      setPower((V * I).toFixed(2));
    } else {
      setError("Please enter both voltage and current.");
    }
  };

  const reset = () => {
    setVoltage("");
    setCurrent("");
    setPower("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Power Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="voltage">Voltage (V)</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage in volts"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="current">Current (I)</Label>
                <Input
                  id="current"
                  type="number"
                  placeholder="Enter current in amperes"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="flex gap-3">
              <Button onClick={calculate}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
            {power && (
              <div className="text-lg font-semibold mt-4">
                Power: {power} Watts
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Power Calculation">
        <div className="space-y-2">
          <p>
            Power in an electrical circuit is the product of voltage and current. The formula is:
          </p>
          <p className="font-medium">P = V × I</p>
          <p>
            Where:
            <ul className="list-disc pl-5">
              <li>P = Power in watts (W)</li>
              <li>V = Voltage in volts (V)</li>
              <li>I = Current in amperes (A)</li>
            </ul>
          </p>
          <p>
            This calculator helps you quickly determine how much electrical power a circuit is consuming or delivering.
          </p>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default PowerCalculator;