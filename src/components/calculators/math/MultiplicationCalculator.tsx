import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const MultiplicationCalculator: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0); // First number for multiplication
  const [number2, setNumber2] = useState<number>(0); // Second number for multiplication
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    const multiplicationResult = number1 * number2;
    setResult(multiplicationResult);
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
            <BreadcrumbPage>Multiplication Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Multiplication Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="number1">First Number</Label>
              <Input
                id="number1"
                type="number"
                value={number1}
                onChange={(e) => setNumber1(Number(e.target.value))}
                min="0"
                step="any"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number2">Second Number</Label>
              <Input
                id="number2"
                type="number"
                value={number2}
                onChange={(e) => setNumber2(Number(e.target.value))}
                min="0"
                step="any"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Multiplication Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Multiplication Calculator">
          <p>This calculator helps you multiply two numbers to get the result.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Multiply Two Numbers</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the first number in the "First Number" field.</li>
            <li>Enter the second number in the "Second Number" field.</li>
            <li>Click "Calculate" to get the multiplication result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Multiplication Formula</h4>
          <p>The formula for multiplication is:</p>
          <p>Result = First Number × Second Number</p>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Number: 12</li>
              <li>Second Number: 8</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>12 × 8 = 96</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The multiplication of 12 and 8 is 96.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default MultiplicationCalculator;
