import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const EVToVoltsCalculator = () => {
  const [energy, setEnergy] = useState('');
  const [charge, setCharge] = useState('');
  const [volts, setVolts] = useState('');
  const [error, setError] = useState('');

  const calculateVolts = () => {
    setError('');
    try {
      const E = parseFloat(energy); // energy in eV
      const q = parseFloat(charge); // charge in Coulombs

      if (isNaN(E) || isNaN(q)) {
        setError('Please enter valid numeric values.');
        return;
      }

      const voltsResult = E / q; // V = E / q

      setVolts(voltsResult.toFixed(4));
    } catch {
      setError('Something went wrong with the calculation.');
    }
  };

  const reset = () => {
    setEnergy('');
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
            <BreadcrumbPage>Energy (eV) to Voltage (V) Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Energy (eV) to Voltage (V) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="energy">Energy (eV)</Label>
                <Input
                  id="energy"
                  type="number"
                  placeholder="Enter energy in eV"
                  value={energy}
                  onChange={(e) => setEnergy(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="charge">Charge (C)</Label>
                <Input
                  id="charge"
                  type="number"
                  placeholder="Enter charge in Coulombs"
                  value={charge}
                  onChange={(e) => setCharge(e.target.value)}
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

      <GuidanceSection title="eV to Voltage Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps convert energy in electron volts (eV) to voltage in Volts based on charge.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Voltage (V) = Energy (eV) / Charge (C)</b></li>
            </ul>
            <p className="mt-2">Where:
              <br />V = Voltage (Volts)
              <br />E = Energy (eV)
              <br />q = Charge (Coulombs)
            </p>
          </div>
          <div>
            <h3 className="font-medium">Tips:</h3>
            <ul className="list-disc pl-5">
              <li>This calculation helps in understanding how energy relates to voltage based on a given charge.</li>
              <li>Be sure the energy and charge values are in the correct units.</li>
              <li>Useful for calculations in particle physics and electrical engineering.</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default EVToVoltsCalculator;
