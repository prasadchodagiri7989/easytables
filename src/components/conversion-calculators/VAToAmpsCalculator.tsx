import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VAToAmpsCalculator = () => {
  const [va, setVa] = useState('');
  const [volts, setVolts] = useState('');
  const [amps, setAmps] = useState('');
  const [error, setError] = useState('');

  const calculateAmps = () => {
    setError('');
    try {
      const vaValue = parseFloat(va);
      const voltageValue = parseFloat(volts);

      if (isNaN(vaValue) || isNaN(voltageValue) || voltageValue === 0) {
        setError('Please enter valid numbers. Voltage cannot be zero.');
        return;
      }

      const result = vaValue / voltageValue;
      setAmps(result.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setVa('');
    setVolts('');
    setAmps('');
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
            <BreadcrumbPage>VA to Amps Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>VA to Amps Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="va">Apparent Power (VA)</Label>
                <Input
                  id="va"
                  type="number"
                  placeholder="Enter apparent power in VA"
                  value={va}
                  onChange={(e) => setVa(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="volts">Voltage (V)</Label>
                <Input
                  id="volts"
                  type="number"
                  placeholder="Enter voltage in volts"
                  value={volts}
                  onChange={(e) => setVolts(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="amps">Current (A)</Label>
                <Input
                  id="amps"
                  type="number"
                  placeholder="Calculated current in amps"
                  value={amps}
                  disabled
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={calculateAmps}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="VA to Amps Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts apparent power (VA) to current (Amps), given the voltage.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><strong>Current (A) = VA / Volts</strong></li>
            </ul>
            <p className="mt-2">This formula is valid for single-phase systems. For three-phase systems, the formula would differ.</p>
          </div>
          <div>
            <h3 className="font-medium">Example:</h3>
            <p>If you have 1200 VA and 240 V:</p>
            <p>Amps = 1200 / 240 = <strong>5 A</strong></p>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default VAToAmpsCalculator;
