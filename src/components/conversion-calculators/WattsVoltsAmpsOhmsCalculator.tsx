import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsVoltsAmpsOhmsCalculator = () => {
  const [watts, setWatts] = useState('');
  const [volts, setVolts] = useState('');
  const [amps, setAmps] = useState('');
  const [ohms, setOhms] = useState('');
  const [error, setError] = useState('');

  const parseValue = (val: string) => {
    const num = parseFloat(val);
    return isNaN(num) ? undefined : num;
  };

  const calculate = () => {
    setError('');
    const P = parseValue(watts);
    const V = parseValue(volts);
    const I = parseValue(amps);
    const R = parseValue(ohms);

    let known = [P, V, I, R].filter(val => val !== undefined).length;

    if (known < 2) {
      setError('Enter at least two known values.');
      return;
    }

    let newP = P, newV = V, newI = I, newR = R;

    try {
      if (P !== undefined && V !== undefined) newI = P / V;
      else if (P !== undefined && I !== undefined) newV = P / I;
      else if (P !== undefined && R !== undefined) {
        newV = Math.sqrt(P * R);
        newI = Math.sqrt(P / R);
      }

      if (V !== undefined && I !== undefined) {
        newP = V * I;
        newR = V / I;
      } else if (V !== undefined && R !== undefined) {
        newI = V / R;
        newP = V * (V / R);
      }

      if (I !== undefined && R !== undefined) {
        newV = I * R;
        newP = I * I * R;
      }

      setWatts(newP?.toFixed(4) || '');
      setVolts(newV?.toFixed(4) || '');
      setAmps(newI?.toFixed(4) || '');
      setOhms(newR?.toFixed(4) || '');
    } catch {
      setError('Something went wrong during calculation.');
    }
  };

  const reset = () => {
    setWatts('');
    setVolts('');
    setAmps('');
    setOhms('');
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
            <BreadcrumbPage>Watts–Volts–Amps–Ohms Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Watts–Volts–Amps–Ohms Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="watts">Power (W)</Label>
              <Input
                id="watts"
                type="number"
                placeholder="Enter Watts"
                value={watts}
                onChange={(e) => setWatts(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="volts">Voltage (V)</Label>
              <Input
                id="volts"
                type="number"
                placeholder="Enter Volts"
                value={volts}
                onChange={(e) => setVolts(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="amps">Current (A)</Label>
              <Input
                id="amps"
                type="number"
                placeholder="Enter Amps"
                value={amps}
                onChange={(e) => setAmps(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="ohms">Resistance (Ω)</Label>
              <Input
                id="ohms"
                type="number"
                placeholder="Enter Ohms"
                value={ohms}
                onChange={(e) => setOhms(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 mt-4 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button onClick={calculate}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Electrical Unit Relationships Guide">
        <div className="space-y-4">
          <p>Use any 2 known values to calculate the other 2 using the fundamental laws of electricity.</p>
          <div>
            <h3 className="font-medium">Common Formulas:</h3>
            <ul className="list-disc pl-5">
              <li>P = V × I</li>
              <li>P = I² × R</li>
              <li>P = V² / R</li>
              <li>V = I × R</li>
              <li>I = V / R</li>
              <li>R = V / I</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
    </>
  );
};

export default WattsVoltsAmpsOhmsCalculator;
