import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const PercentageDecreaseCalculator = () => {
  const [initialValue, setInitialValue] = useState<number>(1000);
  const [finalValue, setFinalValue] = useState<number>(800);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (initialValue <= 0 || finalValue < 0) {
      setResult(null);
      alert("Please enter valid positive values for initial and final amounts.");
      return;
    }

    const decrease = ((initialValue - finalValue) / initialValue) * 100;
    setResult(decrease);
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
            <BreadcrumbPage>Percentage Decrease Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Percentage Decrease Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="initialValue">Initial Value ($)</Label>
              <Input
                id="initialValue"
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="finalValue">Final Value ($)</Label>
              <Input
                id="finalValue"
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button
              variant="default"
              onClick={handleCalculate}
              className="w-full"
            >
              Calculate Decrease Percentage
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Percentage Decrease:</p>
                <p className="text-2xl font-semibold">{result.toFixed(2)}%</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Percentage Decrease Calculator">
          <p>This calculator helps you find the percentage decrease between an initial value and a final value.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Percentage Decrease</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the initial value (the original amount)</li>
            <li>Enter the final value (the reduced amount)</li>
            <li>Click "Calculate Decrease Percentage" to see the result</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Percentage Decrease Formula</h4>
          <p>Percentage Decrease = ((Initial Value - Final Value) / Initial Value) * 100</p>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Initial Value: $1000</li>
              <li>Final Value: $800</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Percentage Decrease = ((1000 - 800) / 1000) * 100</p>
            <p>Percentage Decrease = (200 / 1000) * 100 = 20%</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The percentage decrease is 20%</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
