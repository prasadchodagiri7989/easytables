import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const JoulesToVoltsCalculator = () => {
  const [joules, setJoules] = useState('');
  const [charge, setCharge] = useState('');
  const [volts, setVolts] = useState('');
  const [error, setError] = useState('');

  const calculateVolts = () => {
    setError('');
    try {
      const E = parseFloat(joules); // energy in Joules
      const Q = parseFloat(charge); // charge in Coulombs

      if (isNaN(E) || isNaN(Q) || Q <= 0) {
        setError('Please enter valid numeric values. Charge must be greater than 0.');
        return;
      }

      const voltsResult = E / Q; // V = E / Q

      setVolts(voltsResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setJoules('');
    setCharge('');
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
            <BreadcrumbPage>Joules to Volts Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Joules to Volts Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="joules">Energy (Joules)</Label>
                <Input
                  id="joules"
                  type="number"
                  placeholder="Enter energy in Joules"
                  value={joules}
                  onChange={(e) => setJoules(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="charge">Charge (Coulombs)</Label>
                <Input
                  id="charge"
                  type="number"
                  placeholder="Enter charge in Coulombs"
                  value={charge}
                  onChange={(e) => setCharge(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="volts">Voltage (Volts)</Label>
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

      <GuidanceSection title="Joules to Volts Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert energy in Joules (J) to voltage in Volts (V), based on charge in Coulombs.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Voltage (V) = Energy (J) / Charge (C)</b></li>
            </ul>
            <p className="mt-2">Where:
              <br />V = Voltage (Volts)
              <br />E = Energy (Joules)
              <br />Q = Charge (Coulombs)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>Joules is a unit of energy, and Coulombs is a unit of charge.</li>
              <li>This formula calculates the potential difference or voltage for a given amount of energy and charge.</li>
              <li>Commonly used in electrical circuits and electrostatics.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default JoulesToVoltsCalculator;
