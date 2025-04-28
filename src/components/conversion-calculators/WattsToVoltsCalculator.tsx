import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToVoltsCalculator = () => {
  const [watts, setWatts] = useState('');
  const [amps, setAmps] = useState('');
  const [volts, setVolts] = useState('');
  const [error, setError] = useState('');

  const calculateVolts = () => {
    setError('');
    try {
      const W = parseFloat(watts);
      const I = parseFloat(amps);

      if (isNaN(W) || isNaN(I) || I <= 0) {
        setError('Please enter valid numeric values. Current must be greater than 0.');
        return;
      }

      const V = W / I;
      setVolts(V.toFixed(2));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setWatts('');
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
            <BreadcrumbPage>Watts to Volts Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts to Volts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="watts">Power (W)</Label>
                <Input
                  id="watts"
                  type="number"
                  placeholder="Enter power in Watts"
                  value={watts}
                  onChange={(e) => setWatts(e.target.value)}
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
                  placeholder="Calculated Volts"
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

      <GuidanceSection title="Watts to Volts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts power in Watts (W) to voltage in Volts (V), using the current in Amps (A).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Volts = Watts / Amps</b></li>
            </ul>
            <p className="mt-2">
              Where:
              <br />Watts = Power (W)
              <br />Amps = Current (A)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Ensure the current is not zero to avoid divide-by-zero errors.</li>
              <li>Use consistent units (Watts and Amps).</li>
              <li>This formula assumes a resistive (non-reactive) load.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default WattsToVoltsCalculator;
