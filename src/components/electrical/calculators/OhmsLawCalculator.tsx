
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const OhmsLawCalculator = () => {
  const [voltage, setVoltage] = useState<string>('');
  const [current, setCurrent] = useState<string>('');
  const [resistance, setResistance] = useState<string>('');
  const [power, setPower] = useState<string>('');
  const [solveFor, setSolveFor] = useState<string>('voltage');
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    try {
      const V = parseFloat(voltage);
      const I = parseFloat(current);
      const R = parseFloat(resistance);
      const P = parseFloat(power);
      
      switch (solveFor) {
        case 'voltage':
          if (!isNaN(I) && !isNaN(R)) {
            // V = I * R
            setVoltage((I * R).toFixed(2));
            setPower((I * I * R).toFixed(2));
          } else if (!isNaN(P) && !isNaN(I)) {
            // V = P / I
            setVoltage((P / I).toFixed(2));
            setResistance((P / (I * I)).toFixed(2));
          } else if (!isNaN(P) && !isNaN(R)) {
            // V = sqrt(P * R)
            setVoltage(Math.sqrt(P * R).toFixed(2));
            setCurrent(Math.sqrt(P / R).toFixed(2));
          } else {
            setError('Please enter at least two values (Current and Resistance, Power and Current, or Power and Resistance)');
          }
          break;
          
        case 'current':
          if (!isNaN(V) && !isNaN(R)) {
            // I = V / R
            setCurrent((V / R).toFixed(2));
            setPower((V * V / R).toFixed(2));
          } else if (!isNaN(P) && !isNaN(V)) {
            // I = P / V
            setCurrent((P / V).toFixed(2));
            setResistance((V * V / P).toFixed(2));
          } else if (!isNaN(P) && !isNaN(R)) {
            // I = sqrt(P / R)
            setCurrent(Math.sqrt(P / R).toFixed(2));
            setVoltage(Math.sqrt(P * R).toFixed(2));
          } else {
            setError('Please enter at least two values (Voltage and Resistance, Power and Voltage, or Power and Resistance)');
          }
          break;
          
        case 'resistance':
          if (!isNaN(V) && !isNaN(I)) {
            // R = V / I
            setResistance((V / I).toFixed(2));
            setPower((V * I).toFixed(2));
          } else if (!isNaN(P) && !isNaN(I)) {
            // R = P / I²
            setResistance((P / (I * I)).toFixed(2));
            setVoltage((P / I).toFixed(2));
          } else if (!isNaN(P) && !isNaN(V)) {
            // R = V² / P
            setResistance((V * V / P).toFixed(2));
            setCurrent((P / V).toFixed(2));
          } else {
            setError('Please enter at least two values (Voltage and Current, Power and Current, or Power and Voltage)');
          }
          break;
          
        case 'power':
          if (!isNaN(V) && !isNaN(I)) {
            // P = V * I
            setPower((V * I).toFixed(2));
            setResistance((V / I).toFixed(2));
          } else if (!isNaN(V) && !isNaN(R)) {
            // P = V² / R
            setPower((V * V / R).toFixed(2));
            setCurrent((V / R).toFixed(2));
          } else if (!isNaN(I) && !isNaN(R)) {
            // P = I² * R
            setPower((I * I * R).toFixed(2));
            setVoltage((I * R).toFixed(2));
          } else {
            setError('Please enter at least two values (Voltage and Current, Voltage and Resistance, or Current and Resistance)');
          }
          break;
      }
    } catch (err) {
      setError('Invalid input. Please check your values.');
    }
  };

  const reset = () => {
    setVoltage('');
    setCurrent('');
    setResistance('');
    setPower('');
    setError('');
  };

  const handleSolveForChange = (value: string) => {
    setSolveFor(value);
    reset();
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
                        <BreadcrumbPage>Ohm's Law Calculator</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ohm's Law Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="solveFor">Solve For</Label>
                <Select value={solveFor} onValueChange={handleSolveForChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select what to solve for" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="voltage">Voltage (V)</SelectItem>
                    <SelectItem value="current">Current (I)</SelectItem>
                    <SelectItem value="resistance">Resistance (R)</SelectItem>
                    <SelectItem value="power">Power (P)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="voltage">Voltage (V) in Volts</Label>
                <Input
                  id="voltage"
                  type="number"
                  placeholder="Enter voltage"
                  value={voltage}
                  onChange={e => setVoltage(e.target.value)}
                  disabled={solveFor === 'voltage'}
                />
              </div>
              <div>
                <Label htmlFor="current">Current (I) in Amperes</Label>
                <Input
                  id="current"
                  type="number"
                  placeholder="Enter current"
                  value={current}
                  onChange={e => setCurrent(e.target.value)}
                  disabled={solveFor === 'current'}
                />
              </div>
              <div>
                <Label htmlFor="resistance">Resistance (R) in Ohms</Label>
                <Input
                  id="resistance"
                  type="number"
                  placeholder="Enter resistance"
                  value={resistance}
                  onChange={e => setResistance(e.target.value)}
                  disabled={solveFor === 'resistance'}
                />
              </div>
              <div>
                <Label htmlFor="power">Power (P) in Watts</Label>
                <Input
                  id="power"
                  type="number"
                  placeholder="Enter power"
                  value={power}
                  onChange={e => setPower(e.target.value)}
                  disabled={solveFor === 'power'}
                />
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="flex gap-3">
              <Button onClick={calculate}>Calculate</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <GuidanceSection title="About Ohm's Law">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Ohm's Law Explained</h3>
            <p>Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points, and inversely proportional to the resistance between them.</p>
            <p className="mt-2 font-medium">The basic formula is: V = I × R</p>
            <p>Where:</p>
            <ul className="list-disc pl-5">
              <li>V = Voltage in volts (V)</li>
              <li>I = Current in amperes (A)</li>
              <li>R = Resistance in ohms (Ω)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Power Relationship</h3>
            <p>Power is related to Ohm's Law through these formulas:</p>
            <ul className="list-disc pl-5">
              <li>P = V × I (Power equals voltage times current)</li>
              <li>P = I² × R (Power equals current squared times resistance)</li>
              <li>P = V² / R (Power equals voltage squared divided by resistance)</li>
            </ul>
            <p className="mt-2">Where P = Power in watts (W)</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">How to Use This Calculator</h3>
            <ol className="list-decimal pl-5">
              <li>Select what you want to solve for (Voltage, Current, Resistance, or Power).</li>
              <li>Enter any two of the remaining three values.</li>
              <li>Click "Calculate" to find the unknown value.</li>
              <li>The calculator will also determine the fourth value based on the power relationships.</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Practical Applications</h3>
            <p>Ohm's Law is fundamental to analyzing and designing electrical circuits. Some common applications include:</p>
            <ul className="list-disc pl-5">
              <li>Designing power supplies</li>
              <li>Selecting proper wire gauges</li>
              <li>Sizing fuses and circuit breakers</li>
              <li>Calculating power consumption</li>
              <li>Troubleshooting electrical circuits</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div>
  );
};

export default OhmsLawCalculator;
