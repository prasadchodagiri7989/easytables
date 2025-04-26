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

// SWG to mm conversion data
const swgToMmData: { [key: string]: number } = {
  "7": 4.447,
  "8": 4.039,
  "9": 3.658,
  "10": 3.251,
  "11": 2.951,
  "12": 2.642,
  "13": 2.335,
  "14": 2.032,
  "15": 1.828,
  "16": 1.626,
  "17": 1.421,
  "18": 1.314,
  "19": 1.157,
  "20": 1.062,
  "21": 0.953,
  "22": 0.910,
  "23": 0.812,
  "24": 0.710,
};

const SWGToMmCalculator: React.FC = () => {
  const [swg, setSwg] = useState<string>("7"); // SWG input
  const [mm, setMm] = useState<number | string>(""); // Diameter in mm result

  const handleCalculate = () => {
    const diameterInMm = swgToMmData[swg];

    if (diameterInMm !== undefined) {
      // Set the result if the SWG is valid
      setMm(diameterInMm);
    } else {
      setMm("Invalid SWG");
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
            <BreadcrumbPage>SWG to mm Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">SWG to mm Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="swg">SWG</Label>
              <Input
                id="swg"
                type="text"
                value={swg}
                onChange={(e) => setSwg(e.target.value)}
                placeholder="Enter SWG value (e.g., 7, 8, 9, etc.)"
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

        <GuidanceSection title="How to Use the SWG to mm Calculator">
          <p>This calculator allows you to convert a Standard Wire Gauge (SWG) value to its corresponding diameter in millimeters (mm).</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the SWG to mm Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the SWG value (e.g., 7, 8, 9).</li>
            <li>Click "Calculate" to get the corresponding diameter in millimeters.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>SWG: 12</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Diameter for 12 SWG = 2.642 mm</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <ul className="list-disc pl-5">
              <li>Diameter = 2.642 mm</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default SWGToMmCalculator;
