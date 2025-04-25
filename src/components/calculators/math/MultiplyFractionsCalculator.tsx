import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const MultiplyFractionsCalculator: React.FC = () => {
  const [numerator1, setNumerator1] = useState<number>(1); // Numerator of the first fraction
  const [denominator1, setDenominator1] = useState<number>(1); // Denominator of the first fraction
  const [numerator2, setNumerator2] = useState<number>(1); // Numerator of the second fraction
  const [denominator2, setDenominator2] = useState<number>(1); // Denominator of the second fraction
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    // Multiply the numerators and denominators
    const resultNumerator = numerator1 * numerator2;
    const resultDenominator = denominator1 * denominator2;

    // Simplify the fraction
    const gcd = (a: number, b: number): number => {
      return b === 0 ? a : gcd(b, a % b);
    };
    const gcdValue = gcd(resultNumerator, resultDenominator);

    const simplifiedNumerator = resultNumerator / gcdValue;
    const simplifiedDenominator = resultDenominator / gcdValue;

    setResult(`${simplifiedNumerator} / ${simplifiedDenominator}`);
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
            <BreadcrumbPage>Multiplying Fractions Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Multiplying Fractions Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="numerator1">First Fraction - Numerator</Label>
              <Input
                id="numerator1"
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator1">First Fraction - Denominator</Label>
              <Input
                id="denominator1"
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(Number(e.target.value))}
                min="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numerator2">Second Fraction - Numerator</Label>
              <Input
                id="numerator2"
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator2">Second Fraction - Denominator</Label>
              <Input
                id="denominator2"
                type="number"
                value={denominator2}
                onChange={(e) => setDenominator2(Number(e.target.value))}
                min="1"
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

        <GuidanceSection title="How to Use the Multiplying Fractions Calculator">
          <p>This calculator helps you multiply two fractions and simplify the result.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Multiply Fractions</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the numerator and denominator of the first fraction.</li>
            <li>Enter the numerator and denominator of the second fraction.</li>
            <li>Click "Calculate" to get the multiplication result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Multiplication Formula</h4>
          <p>The formula for multiplying fractions is:</p>
          <p>(a/b) × (c/d) = (a × c) / (b × d)</p>
          <p>After multiplication, simplify the fraction if needed.</p>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Fraction: 1/2</li>
              <li>Second Fraction: 3/4</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>(1/2) × (3/4) = (1 × 3) / (2 × 4)</p>
            <p>Result = 3/8</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The product of 1/2 and 3/4 is 3/8.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default MultiplyFractionsCalculator;
