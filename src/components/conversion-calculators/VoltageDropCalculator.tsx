import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltageDropCalculator = () => {
  const [length, setLength] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [voltageDrop, setVoltageDrop] = useState("");
  const [error, setError] = useState("");

  const calculateVoltageDrop = () => {
    setError("");
    try {
      const L = parseFloat(length);
      const I = parseFloat(current);
      const R = parseFloat(resistance);

      if (isNaN(L) || isNaN(I) || isNaN(R)) {
        setError("Please enter valid numeric values.");
        return;
      }

      const result = (2 * L * I * R) / 1000; // V = (2 × L × I × R) / 1000
      setVoltageDrop(result.toFixed(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setLength("");
    setCurrent("");
    setResistance("");
    setVoltageDrop("");
    setError("");
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
            <BreadcrumbPage>Voltage Drop Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Voltage Drop Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="length">Length of Wire (m)</Label>
              <Input
                id="length"
                type="number"
                placeholder="Enter length of wire in meters"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="current">Current (A)</Label>
              <Input
                id="current"
                type="number"
                placeholder="Enter current in Amps"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="resistance">Resistance per meter (Ω)</Label>
              <Input
                id="resistance"
                type="number"
                placeholder="Enter resistance in Ohms per meter"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="voltageDrop">Voltage Drop (V)</Label>
              <Input
                id="voltageDrop"
                type="text"
                placeholder="Calculated voltage drop in Volts"
                value={voltageDrop}
                disabled
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 mt-4 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button onClick={calculateVoltageDrop}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Voltage Drop Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps you determine the voltage drop across a conductor, which is essential to ensure proper voltage at the load.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>V = (2 × L × I × R) / 1000</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Examples:</h3>
            <ul className="list-disc pl-5">
              <li>Example 1: Length = 50 meters, Current = 10 A, Resistance = 0.1 Ω/m</li>
              <li>Example 2: Length = 100 meters, Current = 5 A, Resistance = 0.2 Ω/m</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default VoltageDropCalculator;
