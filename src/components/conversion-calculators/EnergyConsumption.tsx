import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const EnergyConsumptionCalculator = () => {
  const [power, setPower] = useState('');
  const [hours, setHours] = useState('');
  const [energy, setEnergy] = useState('');
  const [error, setError] = useState('');
  const [unit, setUnit] = useState<'kWh' | 'Wh'>('kWh');

  const calculateEnergy = () => {
    setError('');
    try {
      const P = parseFloat(power);
      const H = parseFloat(hours);

      if (isNaN(P) || isNaN(H)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let energyResult = P * H;

      if (unit === 'kWh') {
        energyResult = energyResult / 1000;
      }

      setEnergy(energyResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setPower('');
    setHours('');
    setEnergy('');
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
            <BreadcrumbLink asChild>
              <Link to="/all-calculators">All Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/electrical-calculators">Electrical Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Energy Consumption Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Energy Consumption Calculator</CardTitle>
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
                <Label htmlFor="energy">Energy Consumption</Label>
                <Input
                  id="energy"
                  type="number"
                  placeholder="Calculated energy consumption"
                  value={energy}
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
              <Button onClick={calculateEnergy}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Energy Consumption Calculation Guide">
        <div className="space-y-4">
          <p>This calculator helps estimate the energy consumption based on power and time.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Energy (Wh) = Power (W) × Time (hours)</b></li>
              <li><b>Energy (kWh) = Power (W) × Time (hours) / 1000</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation helps estimate electricity usage over a period of time.</li>
              <li>Energy consumption is usually measured in kWh for larger appliances.</li>
              <li>Ensure that your power values are in Watts for accurate results.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default EnergyConsumptionCalculator;
