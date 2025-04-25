import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const FractionSimplifier: React.FC = () => {
  const [numerator, setNumerator] = useState<number>(0); // Fraction numerator
  const [denominator, setDenominator] = useState<number>(1); // Fraction denominator
  const [result, setResult] = useState<string>("");

  // Function to calculate GCD (Greatest Common Divisor)
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // Function to simplify fraction
  const simplifyFraction = (numerator: number, denominator: number): string => {
    if (denominator === 0) {
      return "Denominator cannot be zero!";
    }
    const commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    const simplifiedNumerator = numerator / commonDivisor;
    const simplifiedDenominator = denominator / commonDivisor;

    return `${simplifiedNumerator}/${simplifiedDenominator}`;
  };

  const handleSimplify = () => {
    const simplifiedFraction = simplifyFraction(numerator, denominator);
    setResult(simplifiedFraction);
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
            <BreadcrumbPage>Fraction Simplifier</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Fraction Simplifier</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="numerator">Numerator</Label>
              <Input
                id="numerator"
                type="number"
                value={numerator}
                onChange={(e) => setNumerator(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator">Denominator</Label>
              <Input
                id="denominator"
                type="number"
                value={denominator}
                onChange={(e) => setDenominator(Number(e.target.value))}
                min="1"
              />
            </div>

            <Button variant="default" onClick={handleSimplify} className="w-full">
              Simplify
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Simplified Fraction:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Fraction Simplifier">
          <p>This calculator helps you simplify a fraction to its lowest terms.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Simplify a Fraction</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the numerator and denominator of the fraction.</li>
            <li>Click "Simplify" to see the result.</li>
            <li>The fraction will be simplified to its lowest terms.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Simplification</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Numerator: 12</li>
              <li>Denominator: 16</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>GCD(12, 16) = 4</p>
            <p>12 ÷ 4 = 3</p>
            <p>16 ÷ 4 = 4</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The simplified fraction is 3/4.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default FractionSimplifier;
