import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";

const EnergyCostCalculator = () => {
  const [power, setPower] = useState('');
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  const [cost, setCost] = useState('');
  const [error, setError] = useState('');
  const [unit, setUnit] = useState<'kWh' | 'Wh'>('kWh');

  const calculateCost = () => {
    setError('');
    try {
      const P = parseFloat(power);
      const H = parseFloat(hours);
      const R = parseFloat(rate);

      if (isNaN(P) || isNaN(H) || isNaN(R)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let energyConsumed = P * H;

      if (unit === 'kWh') {
        energyConsumed = energyConsumed / 1000;
      }

      const totalCost = energyConsumed * R;
      setCost(totalCost.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setPower('');
    setHours('');
    setRate('');
    setCost('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Energy Cost Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="unit">Energy Unit</Label>
                <Select value={unit} onValueChange={(value) => setUnit(value as 'kWh' | 'Wh')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select energy unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kWh">kWh</SelectItem>
                    <SelectItem value="Wh">Wh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

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
                <Label htmlFor="hours">Time (Hours)</Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="Enter time in hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="rate">Electricity Rate (per kWh/Wh)</Label>
                <Input
                  id="rate"
                  type="number"
                  placeholder="Enter electricity rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="cost">Total Cost</Label>
                <Input
                  id="cost"
                  type="number"
                  placeholder="Calculated total cost"
                  value={cost}
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
              <Button onClick={calculateCost}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Energy Cost Calculation Guide">
        <div className="space-y-4">
          <p>This calculator helps estimate the cost of energy consumption based on power, time, and the electricity rate.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Energy (Wh) = Power (W) × Time (hours)</b></li>
              <li><b>Energy (kWh) = Power (W) × Time (hours) / 1000</b></li>
              <li><b>Total Cost = Energy (kWh/Wh) × Rate (per kWh/Wh)</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Make sure to enter the electricity rate in the correct unit (per kWh or per Wh).</li>
              <li>The energy consumption is calculated based on the total power used over time.</li>
              <li>This calculator helps estimate the total cost of using electrical appliances for a given period.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default EnergyCostCalculator;
