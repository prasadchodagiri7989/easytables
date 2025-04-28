import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const GCFCalculator: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0); // First number
  const [number2, setNumber2] = useState<number>(0); // Second number
  const [result, setResult] = useState<string>("");

  // Function to calculate GCD (Greatest Common Divisor)
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const handleCalculate = () => {
    if (number1 === 0 || number2 === 0) {
      setResult("Both numbers should be non-zero to calculate GCD.");
      return;
    }
    const gcf = gcd(Math.abs(number1), Math.abs(number2));
    setResult(`The GCF is: ${gcf}`);
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
            <BreadcrumbPage>GCF (Greatest Common Factor) Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">GCF (Greatest Common Factor) Calculator</h2>

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
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate GCF
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the GCF Calculator">
          <p>This calculator helps you calculate the Greatest Common Factor (GCF) of two numbers.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate GCF</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the two numbers for which you want to find the GCF.</li>
            <li>Click "Calculate GCF" to see the result.</li>
            <li>The GCF will be displayed below.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Number: 24</li>
              <li>Second Number: 36</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>GCD(24, 36) = 12</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The GCF of 24 and 36 is 12.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default GCFCalculator;
