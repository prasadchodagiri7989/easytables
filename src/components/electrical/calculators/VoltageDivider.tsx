import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const VoltageDividerCalculator = () => {
  const [vin, setVin] = useState('');
  const [r1, setR1] = useState('');
  const [r2, setR2] = useState('');
  const [vout, setVout] = useState('');
  const [error, setError] = useState('');

  const calculateVout = () => {
    setError('');
    const V = parseFloat(vin);
    const R1 = parseFloat(r1);
    const R2 = parseFloat(r2);

    if (isNaN(V) || isNaN(R1) || isNaN(R2) || R1 + R2 === 0) {
      setError('Please enter valid values for Vin, R1, and R2');
      return;
    }

    const Vout = V * (R2 / (R1 + R2));
    setVout(Vout.toFixed(2));
  };

  const reset = () => {
    setVin('');
    setR1('');
    setR2('');
    setVout('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
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
                          <Link to="/electrical-calculators">Electrical Calculators</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Voltage Divider Calculator</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Voltage Divider Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vin">Input Voltage (Vin) in Volts</Label>
                <Input
                  id="vin"
                  type="number"
                  placeholder="Enter input voltage"
                  value={vin}
                  onChange={e => setVin(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="r1">Resistor R1 (Ω)</Label>
                <Input
                  id="r1"
                  type="number"
                  placeholder="Enter resistance R1"
                  value={r1}
                  onChange={e => setR1(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="r2">Resistor R2 (Ω)</Label>
                <Input
                  id="r2"
                  type="number"
                  placeholder="Enter resistance R2"
                  value={r2}
                  onChange={e => setR2(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="vout">Output Voltage (Vout) in Volts</Label>
                <Input
                  id="vout"
                  type="number"
                  placeholder="Result"
                  value={vout}
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
              <Button onClick={calculateVout}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="About Voltage Divider">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Voltage Divider Formula</h3>
            <p>
              A voltage divider is a simple circuit that turns a large voltage into a smaller one using two series resistors.
            </p>
            <p className="mt-2 font-medium">Vout = Vin × (R2 / (R1 + R2))</p>
            <p>Where:</p>
            <ul className="list-disc pl-5">
              <li>Vin = Input voltage</li>
              <li>Vout = Output voltage</li>
              <li>R1 = Resistance of first resistor</li>
              <li>R2 = Resistance of second resistor</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">How to Use</h3>
            <ol className="list-decimal pl-5">
              <li>Enter the input voltage (Vin)</li>
              <li>Enter values for R1 and R2</li>
              <li>Click "Calculate" to get Vout</li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium mb-1">Applications</h3>
            <ul className="list-disc pl-5">
              <li>Voltage level adjustment for microcontrollers</li>
              <li>Sensor signal conditioning</li>
              <li>Analog-to-digital interface design</li>
              <li>Biasing transistor bases</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default VoltageDividerCalculator;
