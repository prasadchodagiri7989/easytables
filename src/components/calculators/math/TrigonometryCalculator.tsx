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

const TrigonometryCalculator: React.FC = () => {
  const [angle, setAngle] = useState<number>(0); // Angle input
  const [isDegrees, setIsDegrees] = useState<boolean>(true); // Toggle between Degrees or Radians
  const [sineResult, setSineResult] = useState<number | null>(null);
  const [cosineResult, setCosineResult] = useState<number | null>(null);
  const [tangentResult, setTangentResult] = useState<number | null>(null);

  const handleCalculate = () => {
    // Convert angle to radians if input is in degrees
    const angleInRadians = isDegrees ? (angle * Math.PI) / 180 : angle;

    // Calculate sine, cosine, and tangent
    const sineValue = Math.sin(angleInRadians);
    const cosineValue = Math.cos(angleInRadians);
    const tangentValue = Math.tan(angleInRadians);

    // Set results
    setSineResult(sineValue);
    setCosineResult(cosineValue);
    setTangentResult(tangentValue);
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
              <Link to="/math/all">Math Calculators</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Trigonometry Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Trigonometry Calculator</h2>

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

            {sineResult !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result (sin θ):</p>
                <p className="text-2xl font-semibold">{sineResult.toFixed(4)}</p>
              </div>
            )}

            {cosineResult !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result (cos θ):</p>
                <p className="text-2xl font-semibold">{cosineResult.toFixed(4)}</p>
              </div>
            )}

            {tangentResult !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result (tan θ):</p>
                <p className="text-2xl font-semibold">{tangentResult.toFixed(4)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Trigonometry Calculator">
          <p>This calculator allows you to calculate the sine, cosine, and tangent of an angle in either degrees or radians.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Trigonometry Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the angle value.</li>
            <li>Select the unit of the angle (degrees or radians).</li>
            <li>Click "Calculate" to get the sine, cosine, and tangent values of the angle.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Angle: 45°</li>
              <li>Unit: Degrees</li>
            </ul>

            <p className="mt-2"><strong>Calculations:</strong></p>
            <p>sin(45°) = 0.7071</p>
            <p>cos(45°) = 0.7071</p>
            <p>tan(45°) = 1</p>

            <p className="mt-2"><strong>Results:</strong></p>
            <p>The sine, cosine, and tangent values of 45° are:</p>
            <ul className="list-disc pl-5">
              <li>sin(45°) = 0.7071</li>
              <li>cos(45°) = 0.7071</li>
              <li>tan(45°) = 1</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default TrigonometryCalculator;
