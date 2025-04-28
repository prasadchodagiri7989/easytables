import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltageDividerCalculator = () => {
  const [vin, setVin] = useState("");  // Input Voltage (V_in)
  const [r1, setR1] = useState("");    // Resistor 1 (R1)
  const [r2, setR2] = useState("");    // Resistor 2 (R2)
  const [vout, setVout] = useState(""); // Output Voltage (V_out)
  const [error, setError] = useState("");

  const calculateVout = () => {
    setError("");
    try {
      const V_in = parseFloat(vin);
      const R1 = parseFloat(r1);
      const R2 = parseFloat(r2);

      if (isNaN(V_in) || isNaN(R1) || isNaN(R2)) {
        setError("Please enter valid numeric values.");
        return;
      }

      const V_out = V_in * (R2 / (R1 + R2)); // V_out = V_in × (R2 / (R1 + R2))
      setVout(V_out.toFixed(4));
    } catch {
      setError("Something went wrong with the calculation.");
    }
  };

  const reset = () => {
    setVin("");
    setR1("");
    setR2("");
    setVout("");
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
            <BreadcrumbPage>Voltage Divider Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
     </Breadcrumb>
      <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Voltage Divider Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vin">Input Voltage (V_in)</Label>
              <Input
                id="vin"
                type="number"
                placeholder="Enter input voltage in Volts"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="r1">Resistor 1 (R1)</Label>
              <Input
                id="r1"
                type="number"
                placeholder="Enter value of Resistor 1 in Ohms"
                value={r1}
                onChange={(e) => setR1(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="r2">Resistor 2 (R2)</Label>
              <Input
                id="r2"
                type="number"
                placeholder="Enter value of Resistor 2 in Ohms"
                value={r2}
                onChange={(e) => setR2(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="vout">Output Voltage (V_out)</Label>
              <Input
                id="vout"
                type="text"
                placeholder="Calculated output voltage in Volts"
                value={vout}
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
            <Button onClick={calculateVout}>Calculate</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="Voltage Divider Conversion Guide">
        <div className="space-y-4">
          <p>This calculator helps you determine the output voltage across resistor R2 in a voltage divider circuit.</p>
          <div>
            <h3 className="font-medium">Formula:</h3>
            <ul className="list-disc pl-5">
              <li><b>V_out = V_in × (R2 / (R1 + R2))</b></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Example:</h3>
            <ul className="list-disc pl-5">
              <li>Given: V_in = 12V, R1 = 1000Ω, R2 = 2000Ω</li>
              <li>Output Voltage: V_out = 12V × (2000 / (1000 + 2000)) = 8V</li>
            </ul>
          </div>
        </div>
      </GuidanceSection>
    </div> </>
  );
};

export default VoltageDividerCalculator;

