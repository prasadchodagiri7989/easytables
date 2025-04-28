import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const AmpsToKWCalculator = () => {
  const [amps, setAmps] = useState('');
  const [voltage, setVoltage] = useState('');
  const [powerFactor, setPowerFactor] = useState('1');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [kW, setKW] = useState('');
  const [error, setError] = useState('');

  const calculateKW = () => {
    setError('');
    try {
      const I = parseFloat(amps);
      const V = parseFloat(voltage);
      const PF = parseFloat(powerFactor);

      if (isNaN(I) || isNaN(V) || isNaN(PF)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let kwResult = 0;
      if (phase === 'single') {
        kwResult = (V * I * PF) / 1000;
      } else {
        kwResult = (Math.sqrt(3) * V * I * PF) / 1000;
      }

      setKW(kwResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setAmps('');
    setVoltage('');
    setPowerFactor('1');
    setKW('');
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
            <BreadcrumbPage>Amps to Kilowatts (kW) Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Amps to Kilowatts (kW) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phase">Phase</Label>
                <Select value={phase} onValueChange={(value) => setPhase(value as 'single' | 'three')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select phase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Phase</SelectItem>
                    <SelectItem value="three">Three Phase</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amps">Current (A)</Label>
                <Input
                  id="amps"
                  type="number"
                  placeholder="Enter current in Amps"
                  value={amps}
                  onChange={(e) => setAmps(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="voltage">Voltage (V)</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage in Volts"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="powerFactor">Power Factor</Label>
                <Input
                  id="powerFactor"
                  type="number"
                  step="0.01"
                  placeholder="Enter power factor (0 to 1)"
                  value={powerFactor}
                  onChange={(e) => setPowerFactor(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="kW">Power (kW)</Label>
                <Input
                  id="kW"
                  type="number"
                  placeholder="Calculated kilowatts"
                  value={kW}
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
              <Button onClick={calculateKW}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Amps to kW Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts electrical current in Amperes (A) to Power in kilowatts (kW), considering the system's voltage, phase type, and power factor.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> kW = (V × I × PF) / 1000</li>
              <li><b>Three Phase:</b> kW = (√3 × V × I × PF) / 1000</li>
            </ul>
            <p className="mt-2">Where:
              <br />V = Voltage (Volts)
              <br />I = Current (Amps)
              <br />PF = Power Factor (typically between 0.8 to 1)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use a power factor of 1 for purely resistive loads.</li>
              <li>Industrial applications often use a PF of 0.8.</li>
              <li>Ensure consistent units when inputting values.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default AmpsToKWCalculator;
