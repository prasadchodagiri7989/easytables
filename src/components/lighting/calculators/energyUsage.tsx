import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";


const EnergyUsageCalculator = () => {
  const [power, setPower] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState('');
  const [usage, setUsage] = useState('');
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const p = parseFloat(power);
    const h = parseFloat(hours);
    const d = parseFloat(days);

    if (isNaN(p) || isNaN(h) || isNaN(d) || p <= 0 || h <= 0 || d <= 0) {
      setError("Please enter valid numbers greater than 0.");
      return;
    }

    const result = (p * h * d) / 1000; // kWh
    setUsage(result.toFixed(2));
  };

  const reset = () => {
    setPower('');
    setHours('');
    setDays('');
    setUsage('');
    setError('');
  };

  return (
    <>
              <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Average Calculator</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Energy Usage Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="power">Power (Watts)</Label>
                <Input
                  id="power"
                  type="number"
                  placeholder="e.g., 100"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="hours">Hours per Day</Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="e.g., 5"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="days">Number of Days</Label>
                <Input
                  id="days"
                  type="number"
                  placeholder="e.g., 30"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <Label>Energy Usage (kWh)</Label>
                <Input value={usage} disabled />
              </div>
              <div className="flex gap-3">
                <Button onClick={calculate}>Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Energy Usage Calculator">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Formula</h3>
            <ul className="list-disc pl-5">
              <li>Energy (kWh) = Power (W) × Hours × Days ÷ 1000</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the device power consumption in watts.</li>
              <li>Enter the number of hours the device runs per day.</li>
              <li>Enter the number of days it runs in a month or custom duration.</li>
              <li>Click "Calculate" to see energy usage in kWh.</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Estimate monthly electricity usage</li>
              <li>Compare energy consumption of appliances</li>
              <li>Calculate cost of usage based on energy rates</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default EnergyUsageCalculator;
