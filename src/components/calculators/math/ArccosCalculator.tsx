import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const ArccosCalculator = () => {
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (value < -1 || value > 1) {
      alert("The input value must be between -1 and 1.");
      return;
    }
    const arccosValue = Math.acos(value); // Arccos function (inverse of cosine)
    setResult(arccosValue);
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
            <BreadcrumbPage>Arccos Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Arccos Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="value">Cosine Value</Label>
              <Input
                id="value"
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                min="-1"
                max="1"
                step="0.01"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate Arccos
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Arccos Value (radians):</p>
                <p className="text-2xl font-semibold">{result.toFixed(4)} radians</p>
                <p className="text-sm text-muted-foreground">Arccos Value (degrees):</p>
                <p className="text-lg font-medium">{(result * (180 / Math.PI)).toFixed(2)}°</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Arccos Calculator">
          <p>This calculator helps you determine the angle whose cosine is a given value (inverse cosine).</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Arccos</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter a value between -1 and 1 (inclusive) for which you want to find the arccosine.</li>
            <li>Click "Calculate Arccos" to get the result in radians and degrees.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Arccos Formula</h4>
          <p>Arccos(x) = θ, where cos(θ) = x</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>x = Given value</li>
            <li>θ = The angle whose cosine is x (in radians, or optionally converted to degrees)</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Value:</strong></p>
            <ul className="list-disc pl-5">
              <li>Cosine Value: 0.5</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Arccos(0.5) = 1.0472 radians (or 60°)</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The arccos of 0.5 is 1.0472 radians (or 60°).</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
