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

const PercentErrorCalculator: React.FC = () => {
  const [measured, setMeasured] = useState<number>(0);
  const [actual, setActual] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    if (actual === 0) {
      setResult("Actual value cannot be zero.");
      return;
    }

    const error = Math.abs((measured - actual) / actual) * 100;
    setResult(`${error.toFixed(2)}%`);
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
            <BreadcrumbPage>Percent Error Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Percent Error Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="measured">Measured Value</Label>
              <Input
                id="measured"
                type="number"
                value={measured}
                onChange={(e) => setMeasured(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="actual">Actual Value</Label>
              <Input
                id="actual"
                type="number"
                value={actual}
                onChange={(e) => setActual(Number(e.target.value))}
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Percent Error:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Percent Error Calculator">
          <p>This calculator helps determine the percent error between a measured and actual value.</p>

          <h4 className="font-medium mt-3 mb-1">Percent Error Formula</h4>
          <p>
            <strong>Percent Error</strong> = |Measured - Actual| / Actual × 100%
          </p>

          <h4 className="font-medium mt-3 mb-1">Steps</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the measured value.</li>
            <li>Enter the actual (true) value.</li>
            <li>Click "Calculate" to get the percent error.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example</h4>
          <p>Measured: 98, Actual: 100</p>
          <p>Percent Error = |98 - 100| / 100 × 100 = 2%</p>
        </GuidanceSection>
      </div>
    </>
  );
};

export default PercentErrorCalculator;
