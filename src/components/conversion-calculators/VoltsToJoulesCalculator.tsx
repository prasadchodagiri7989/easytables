import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltsToJoulesCalculator = () => {
  const [volts, setVolts] = useState("");
  const [charge, setCharge] = useState("");
  const [joules, setJoules] = useState("");
  const [error, setError] = useState("");

  const calculateJoules = () => {
    setError("");
    try {
      const V = parseFloat(volts);
      const Q = parseFloat(charge);

      if (isNaN(V) || isNaN(Q)) {
        setError("Please enter valid numeric values.");
        return;
      }

      const result = V * Q; // Joules = Voltage (V) * Charge (C)
      setJoules(result.toFixed(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setVolts("");
    setCharge("");
    setJoules("");
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
            <BreadcrumbPage>Volts to Joules (J) Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Volts to Joules (J) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="volts">Voltage (V)</Label>
              <Input
                id="volts"
                type="number"
                placeholder="Enter voltage in Volts"
                value={volts}
                onChange={(e) => setVolts(e.target.value)}
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
              <Label htmlFor="joules">Energy (J)</Label>
              <Input
                id="joules"
                type="text"
                placeholder="Calculated energy in Joules"
                value={joules}
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
            <Button onClick={calculateJoules}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Volts to Joules Conversion Guide">
        <div className="space-y-4">
          <p>This calculator converts voltage (V) and charge (C) into energy in joules (J).</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>Joules (J) = Voltage (V) × Charge (C)</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Examples:</h3>
            <ul className="list-disc pl-5">
              <li>1 Volt × 1 Coulomb = 1 Joule</li>
              <li>5 Volts × 3 Coulombs = 15 Joules</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default VoltsToJoulesCalculator;
