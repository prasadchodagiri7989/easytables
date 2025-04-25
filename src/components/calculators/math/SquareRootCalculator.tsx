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

const SquareRootCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(0); // Input number
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    if (number < 0) {
      setResult("Error: Negative numbers do not have real square roots.");
    } else {
      const sqrtResult = Math.sqrt(number);
      setResult(sqrtResult);
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
            <BreadcrumbPage>Square Root Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Square Root Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Square Root:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Square Root Calculator">
          <p>This calculator helps you find the square root of a given number.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Square Root</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the number for which you want to find the square root.</li>
            <li>Click "Calculate" to get the square root of the number.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Number: 16</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>√16 = 4</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The square root of 16 is 4.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default SquareRootCalculator;
