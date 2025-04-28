import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const GaugeToMmCalculator: React.FC = () => {
  const [gauge, setGauge] = useState<string>("#2"); // Gauge input
  const [mm, setMm] = useState<number | string>(""); // Diameter in mm result

  // Wire gauge to mm data for #2 gauge wire
  const gaugeToMmData: { [key: string]: number } = {
    "#2": 6.544, // #2 gauge wire = 6.544 mm diameter
  };

  const handleCalculate = () => {
    const diameterInMm = gaugeToMmData[gauge];

    if (diameterInMm !== undefined) {
      // Set the result if the gauge is valid
      setMm(diameterInMm);
    } else {
      setMm("Invalid Gauge");
    }
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
        <Link to="/wire/all">Wire Calculators</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
          <BreadcrumbPage>#2 Gauge to mm Calculator</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">#2 Gauge to mm Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gauge">Wire Gauge</Label>
              <Input
                id="gauge"
                type="text"
                value={gauge}
                onChange={(e) => setGauge(e.target.value)}
                placeholder="Enter gauge value (e.g., #2)"
                className="w-full"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {mm !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Diameter (mm):</p>
                <p className="text-2xl font-semibold">{mm}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the #2 Gauge to mm Calculator">
          <p>This calculator allows you to convert a wire gauge value (e.g., #2) to its corresponding diameter in millimeters (mm).</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the #2 Gauge to mm Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the gauge value (e.g., #2).</li>
            <li>Click "Calculate" to get the corresponding diameter in millimeters.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Gauge: #2</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Diameter for #2 gauge = 6.544 mm</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <ul className="list-disc pl-5">
              <li>Diameter = 6.544 mm</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default GaugeToMmCalculator;
