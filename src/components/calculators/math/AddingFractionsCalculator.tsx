import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const AddingFractionsCalculator = () => {
  const [numerator1, setNumerator1] = useState<number>(1);
  const [denominator1, setDenominator1] = useState<number>(2);
  const [numerator2, setNumerator2] = useState<number>(1);
  const [denominator2, setDenominator2] = useState<number>(3);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    // Find the common denominator and add the fractions
    const commonDenominator = denominator1 * denominator2;
    const adjustedNumerator1 = numerator1 * denominator2;
    const adjustedNumerator2 = numerator2 * denominator1;

    const finalNumerator = adjustedNumerator1 + adjustedNumerator2;
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(finalNumerator, commonDenominator);
    
    const simplifiedNumerator = finalNumerator / divisor;
    const simplifiedDenominator = commonDenominator / divisor;

    setResult(`${simplifiedNumerator}/${simplifiedDenominator}`);
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
      <BreadcrumbPage>Adding Fractions Calculator</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>


      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Adding Fractions Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="numerator1">Numerator 1</Label>
              <Input
                id="numerator1"
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator1">Denominator 1</Label>
              <Input
                id="denominator1"
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(Number(e.target.value))}
                min="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numerator2">Numerator 2</Label>
              <Input
                id="numerator2"
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator2">Denominator 2</Label>
              <Input
                id="denominator2"
                type="number"
                value={denominator2}
                onChange={(e) => setDenominator2(Number(e.target.value))}
                min="1"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate Sum
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">The Sum of the Fractions is:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Adding Fractions Calculator">
          <p>This calculator helps you add two fractions and simplify the result to its lowest terms.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Add Fractions</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the numerator and denominator for the first fraction.</li>
            <li>Enter the numerator and denominator for the second fraction.</li>
            <li>Click "Calculate Sum" to get the result of the addition.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Fraction: 1/2</li>
              <li>Second Fraction: 1/3</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Common Denominator = 2 * 3 = 6</p>
            <p>Adjusted Numerators: 1 * 3 = 3, 1 * 2 = 2</p>
            <p>Final Numerator = 3 + 2 = 5</p>
            <p>Result = 5/6</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The sum of 1/2 and 1/3 is 5/6</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
