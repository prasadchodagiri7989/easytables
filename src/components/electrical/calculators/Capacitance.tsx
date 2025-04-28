import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


const CapacitanceCalculator = () => {
  const [charge, setCharge] = useState('');
  const [voltage, setVoltage] = useState('');
  const [capacitance, setCapacitance] = useState('');
  const [error, setError] = useState('');

  const calculateCapacitance = () => {
    setError('');
    const Q = parseFloat(charge); // in coulombs
    const V = parseFloat(voltage); // in volts

    if (isNaN(Q) || isNaN(V) || V === 0) {
      setError('Please enter valid values. Voltage must not be zero.');
      return;
    }

    const C = Q / V; // Farads
    setCapacitance(C.toExponential(3) + ' F'); // Format in scientific notation for large/small values
  };

  const reset = () => {
    setCharge('');
    setVoltage('');
    setCapacitance('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Capacitance Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="charge">Charge (Q) in Coulombs</Label>
                <Input
                  id="charge"
                  type="number"
                  placeholder="Enter charge"
                  value={charge}
                  onChange={e => setCharge(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="voltage">Voltage (V) in Volts</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage"
                  value={voltage}
                  onChange={e => setVoltage(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="capacitance">Capacitance (C)</Label>
                <Input
                  id="capacitance"
                  type="text"
                  placeholder="Result"
                  value={capacitance}
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
              <Button onClick={calculateCapacitance}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Capacitance">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Capacitance Formula</h3>
            <p>
              Capacitance is the ability of a system to store electric charge per unit voltage.
            </p>
            <p className="mt-2 font-medium">C = Q / V</p>
            <p>Where:</p>
            <ul className="list-disc pl-5">
              <li><strong>C</strong> = Capacitance in Farads (F)</li>
              <li><strong>Q</strong> = Charge in Coulombs (C)</li>
              <li><strong>V</strong> = Voltage in Volts (V)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the charge (Q) in Coulombs</li>
              <li>Enter the voltage (V) in Volts</li>
              <li>Click "Calculate" to find capacitance (C)</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Designing capacitors in circuits</li>
              <li>Energy storage systems</li>
              <li>Filtering in power supplies</li>
              <li>Signal smoothing in analog circuits</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default CapacitanceCalculator;
