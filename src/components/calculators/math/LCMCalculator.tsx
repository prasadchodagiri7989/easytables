import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const LCMCalculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(0); // First number
  const [num2, setNum2] = useState<number>(0); // Second number
  const [result, setResult] = useState<number | string>("");

  // Function to calculate LCM
  const handleCalculate = () => {
    if (num1 === 0 || num2 === 0) {
      setResult("Please enter both numbers.");
      return;
    }

    const calculateLCM = (a: number, b: number) => {
      // Formula: LCM(a, b) = (a * b) / GCD(a, b)
      const gcd = (x: number, y: number): number => {
        while (y !== 0) {
          let temp = y;
          y = x % y;
          x = temp;
        }
        return x;
      };

      return (a * b) / gcd(a, b);
    };

    const lcm = calculateLCM(num1, num2);
    setResult(lcm);
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
            <BreadcrumbPage>LCM Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">LCM Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="num1">First Number</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="num2">Second Number</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">LCM:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the LCM Calculator">
          <p>This calculator helps you find the Least Common Multiple (LCM) of two numbers.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the LCM Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter two positive numbers in the provided fields.</li>
            <li>Click "Calculate" to find the Least Common Multiple (LCM) of the two numbers.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">LCM Formula</h4>
          <p>The formula for calculating LCM is:</p>
          <p>LCM(a, b) = (a × b) / GCD(a, b)</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>a = First number</li>
            <li>b = Second number</li>
            <li>GCD = Greatest Common Divisor (found using the Euclidean algorithm)</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Number: 12</li>
              <li>Second Number: 18</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>GCD(12, 18) = 6</p>
            <p>LCM(12, 18) = (12 × 18) / 6 = 216 / 6 = 36</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The Least Common Multiple of 12 and 18 is 36.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default LCMCalculator;
