import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const CosineCalculator: React.FC = () => {
  const [angle, setAngle] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    // Convert angle to radians
    const radians = (angle * Math.PI) / 180;
    const cosineValue = Math.cos(radians);
    setResult(cosineValue);
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
            <BreadcrumbPage>Cosine Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Cosine Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="angle">Angle (degrees)</Label>
              <Input
                id="angle"
                type="number"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                min="-360"
                max="360"
                step="0.1"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate Cosine
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Cosine Value:</p>
                <p className="text-2xl font-semibold">{result.toFixed(4)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Cosine Calculator">
          <p>This calculator helps you find the cosine value of an angle in degrees.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Cosine</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the angle in degrees (between -360° and 360°).</li>
            <li>Click "Calculate Cosine" to get the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Cosine Formula</h4>
          <p>cos(θ) = cos(θ in radians)</p>
          <p>Where θ is the angle in degrees.</p>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Value:</strong></p>
            <ul className="list-disc pl-5">
              <li>Angle: 60°</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>cos(60°) = cos(60° × π/180) ≈ cos(1.0472 radians)</p>
            <p>cos(60°) ≈ 0.5</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Cosine of 60° ≈ 0.5</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default CosineCalculator;
