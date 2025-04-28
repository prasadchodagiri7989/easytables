import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const KWToVoltsCalculator = () => {
  const [kw, setKw] = useState('');
  const [amps, setAmps] = useState('');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [volts, setVolts] = useState('');
  const [error, setError] = useState('');

  const calculateVolts = () => {
    setError('');
    try {
      const kwValue = parseFloat(kw);
      const ampsValue = parseFloat(amps);

      if (isNaN(kwValue) || isNaN(ampsValue)) {
        setError('Please enter valid numeric values.');
        return;
      }

      let voltsResult = 0;
      if (phase === 'single') {
        voltsResult = (kwValue * 1000) / ampsValue; // Single-phase formula
      } else {
        voltsResult = (kwValue * 1000) / (Math.sqrt(3) * ampsValue); // Three-phase formula
      }

      setVolts(voltsResult.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setKw('');
    setAmps('');
    setVolts('');
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
            <BreadcrumbPage>kW to Volts Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>kW to Volts Calculator</CardTitle>
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
                <Label htmlFor="kw">Power (kW)</Label>
                <Input
                  id="kw"
                  type="number"
                  placeholder="Enter power in kW"
                  value={kw}
                  onChange={(e) => setKw(e.target.value)}
                />
              </div>
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
                <Label htmlFor="volts">Voltage (V)</Label>
                <Input
                  id="volts"
                  type="number"
                  placeholder="Calculated voltage in Volts"
                  value={volts}
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
              <Button onClick={calculateVolts}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="kW to Volts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert power in kilowatts (kW) to voltage in volts (V), based on the current and phase type.</p>
          <div>
            <h3 className="font-medium">Formulas:</h3>
            <ul className="list-disc pl-5">
              <li><b>Single Phase:</b> Voltage = (kW × 1000) / Current</li>
              <li><b>Three Phase:</b> Voltage = (kW × 1000) / (√3 × Current)</li>
            </ul>
            <p className="mt-2">Where:
              <br />kW = Power (kilowatts)
              <br />Current = Current (Amps)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Use RMS values for AC current.</li>
              <li>Commonly used for voltage drop calculations in circuits.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default KWToVoltsCalculator;
