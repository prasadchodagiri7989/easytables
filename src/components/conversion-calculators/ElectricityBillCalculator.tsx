import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GuidanceSection } from "@/components/GuidanceSection";

const ElectricityBillCalculator = () => {
  const [units, setUnits] = useState("");
  const [ratePerUnit, setRatePerUnit] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [error, setError] = useState("");

  const calculateBill = () => {
    setError("");

    const kwh = parseFloat(units);
    const rate = parseFloat(ratePerUnit);

    if (isNaN(kwh) || isNaN(rate)) {
      setError("Please enter valid numeric values.");
      return;
    }

    const total = kwh * rate;
    setBillAmount(total.toFixed(2));
  };

  const reset = () => {
    setUnits("");
    setRatePerUnit("");
    setBillAmount("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Electricity Bill Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="units">Energy Consumed (kWh)</Label>
                <Input
                  id="units"
                  type="number"
                  placeholder="e.g. 350"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="rate">Cost per Unit (₹ / $)</Label>
                <Input
                  id="rate"
                  type="number"
                  placeholder="e.g. 6.5"
                  value={ratePerUnit}
                  onChange={(e) => setRatePerUnit(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="bill">Total Bill Amount</Label>
                <Input id="bill" value={billAmount} disabled />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded text-sm">{error}</div>
            )}

            <div className="flex gap-3">
              <Button onClick={calculateBill}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Electricity Bill Calculation Guide">
        <div className="space-y-4">
          <p>
            This calculator helps estimate your electricity bill based on the energy consumed in kilowatt-hours (kWh) and the cost per unit.
          </p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <p className="pl-4 mt-1">Bill Amount = Units Consumed × Cost per Unit</p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Check your latest electricity bill to find the exact rate per unit in your region.</li>
              <li>Units consumed (kWh) is the difference between your previous and current meter readings.</li>
              <li>Some regions apply tiered pricing – this calculator assumes a flat rate per unit.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default ElectricityBillCalculator;
    