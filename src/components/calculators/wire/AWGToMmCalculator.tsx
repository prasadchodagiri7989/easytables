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

// AWG to mm conversion data
const awgToMmData: { [key: string]: number } = {
  "10": 2.588,
  "12": 2.053,
  "14": 1.628,
  "16": 1.291,
  "18": 1.024,
  "20": 0.812,
  "22": 0.644,
  "24": 0.511,
  "26": 0.405,
  "28": 0.320,
};

const AWGToMmCalculator: React.FC = () => {
  const [awg, setAwg] = useState<string>("10"); // AWG input
  const [mm, setMm] = useState<number | string>(""); // Diameter in mm result

  const handleCalculate = () => {
    const diameterInMm = awgToMmData[awg];

    if (diameterInMm !== undefined) {
      // Set the result if the AWG is valid
      setMm(diameterInMm);
    } else {
      setMm("Invalid AWG");
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
            <BreadcrumbPage>AWG to mm Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">AWG to mm Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="awg">AWG</Label>
              <Input
                id="awg"
                type="text"
                value={awg}
                onChange={(e) => setAwg(e.target.value)}
                placeholder="Enter AWG value (e.g., 10, 12, 14, etc.)"
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

        <GuidanceSection title="How to Use the AWG to mm Calculator">
          <p>This calculator allows you to convert an American Wire Gauge (AWG) value to its corresponding diameter in millimeters (mm).</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the AWG to mm Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the AWG value (e.g., 10, 12, 14).</li>
            <li>Click "Calculate" to get the corresponding diameter in millimeters.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>AWG: 12</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Diameter for 12 AWG = 2.053 mm</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <ul className="list-disc pl-5">
              <li>Diameter = 2.053 mm</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default AWGToMmCalculator;
