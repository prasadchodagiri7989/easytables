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

const SineCalculator: React.FC = () => {
  const [angle, setAngle] = useState<number>(0); // Angle input
  const [isDegrees, setIsDegrees] = useState<boolean>(true); // Toggle between Degrees or Radians
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    // Convert angle to radians if input is in degrees
    const angleInRadians = isDegrees ? (angle * Math.PI) / 180 : angle;

    // Calculate sine of the angle
    const sineValue = Math.sin(angleInRadians);
    setResult(sineValue);
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
            <BreadcrumbPage>Sine Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Sine Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="angle">Angle</Label>
              <Input
                id="angle"
                type="number"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <select
                id="unit"
                value={isDegrees ? "degrees" : "radians"}
                onChange={(e) => setIsDegrees(e.target.value === "degrees")}
                className="w-full p-2 border rounded-md"
              >
                <option value="degrees">Degrees</option>
                <option value="radians">Radians</option>
              </select>
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result (sin θ):</p>
                {/* Check if result is a number before calling toFixed */}
                <p className="text-2xl font-semibold">{typeof result === 'number' ? result.toFixed(4) : result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Sine Calculator">
          <p>This calculator allows you to calculate the sine of an angle in either degrees or radians.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Sine Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the angle value.</li>
            <li>Select the unit of the angle (degrees or radians).</li>
            <li>Click "Calculate" to get the sine value of the angle.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Angle: 30°</li>
              <li>Unit: Degrees</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>sin(30°) = 0.5</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The sine of 30° is 0.5</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default SineCalculator;
