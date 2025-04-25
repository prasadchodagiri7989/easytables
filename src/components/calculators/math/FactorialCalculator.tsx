import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const FactorialCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(5); // The number for which the factorial is to be calculated
  const [result, setResult] = useState<number | string>("");

  const calculateFactorial = (n: number): number => {
    if (n === 0 || n === 1) return 1; // Base case for factorial
    return n * calculateFactorial(n - 1); // Recursive factorial calculation
  };

  const handleCalculate = () => {
    if (number < 0) {
      setResult("Factorial is not defined for negative numbers.");
    } else {
      const factorial = calculateFactorial(number);
      setResult(factorial);
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
            <BreadcrumbPage>Factorial Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Factorial Calculator</h2>

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

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Factorial Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Factorial Calculator">
          <p>This calculator helps you find the factorial of a number.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Factorial</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the number for which you want to calculate the factorial.</li>
            <li>Click "Calculate" to see the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Factorial Formula</h4>
          <p>Factorial of n (denoted as n!) is calculated as:</p>
          <p>n! = n × (n-1) × (n-2) × ... × 1</p>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Value:</strong></p>
            <ul className="list-disc pl-5">
              <li>Number: 5</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>5! = 5 × 4 × 3 × 2 × 1 = 120</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The factorial of 5 is 120.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default FactorialCalculator;
