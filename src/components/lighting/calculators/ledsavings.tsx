import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const LEDSavingsCalculator = () => {
  const [incandescentWattage, setIncandescentWattage] = useState('');
  const [ledWattage, setLedWattage] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [costPerKwh, setCostPerKwh] = useState('');
  const [savings, setSavings] = useState('');
  const [error, setError] = useState('');

  const calculateSavings = () => {
    setError('');
    const oldWatt = parseFloat(incandescentWattage);
    const newWatt = parseFloat(ledWattage);
    const hours = parseFloat(hoursPerDay);
    const rate = parseFloat(costPerKwh);

    if (
      isNaN(oldWatt) || oldWatt <= 0 ||
      isNaN(newWatt) || newWatt <= 0 ||
      isNaN(hours) || hours <= 0 ||
      isNaN(rate) || rate <= 0
    ) {
      setError('Please enter valid positive values for all fields.');
      return;
    }

    const dailySavings = ((oldWatt - newWatt) * hours) / 1000 * rate;
    const annualSavings = dailySavings * 365;
    setSavings(`$${annualSavings.toFixed(2)} / year`);
  };

  const reset = () => {
    setIncandescentWattage('');
    setLedWattage('');
    setHoursPerDay('');
    setCostPerKwh('');
    setSavings('');
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
          <CardTitle>LED Savings Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="incandescentWattage">Incandescent Wattage (W)</Label>
                <Input
                  id="incandescentWattage"
                  type="number"
                  placeholder="e.g., 60"
                  value={incandescentWattage}
                  onChange={e => setIncandescentWattage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="ledWattage">LED Wattage (W)</Label>
                <Input
                  id="ledWattage"
                  type="number"
                  placeholder="e.g., 10"
                  value={ledWattage}
                  onChange={e => setLedWattage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="hoursPerDay">Hours Used Per Day</Label>
                <Input
                  id="hoursPerDay"
                  type="number"
                  placeholder="e.g., 5"
                  value={hoursPerDay}
                  onChange={e => setHoursPerDay(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="costPerKwh">Cost Per kWh ($)</Label>
                <Input
                  id="costPerKwh"
                  type="number"
                  placeholder="e.g., 0.12"
                  value={costPerKwh}
                  onChange={e => setCostPerKwh(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="savings">Annual Savings</Label>
                <Input
                  id="savings"
                  type="text"
                  value={savings}
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
              <Button onClick={calculateSavings}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About LED Energy Savings">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Formula</h3>
            <p>Annual Savings = ((Old Wattage - LED Wattage) × Hours/Day × 365 / 1000) × Cost per kWh</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the wattage of your incandescent bulb</li>
              <li>Enter the wattage of the LED bulb you're using</li>
              <li>Specify how many hours per day the bulb is used</li>
              <li>Input your electricity cost per kilowatt-hour</li>
              <li>Click "Calculate" to view annual savings</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Why It Matters</h3>
            <ul className="list-disc pl-5">
              <li>LEDs are more energy-efficient than incandescent bulbs</li>
              <li>Reduces electricity bills significantly over time</li>
              <li>Supports sustainability and lowers carbon footprint</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default LEDSavingsCalculator;
