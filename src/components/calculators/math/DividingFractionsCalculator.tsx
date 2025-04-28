import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const DividingFractionsCalculator: React.FC = () => {
  const [numerator1, setNumerator1] = useState<number>(1);
  const [denominator1, setDenominator1] = useState<number>(1);
  const [numerator2, setNumerator2] = useState<number>(1);
  const [denominator2, setDenominator2] = useState<number>(1);
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    if (denominator1 === 0 || denominator2 === 0) {
      setResult("Denominator cannot be zero");
      return;
    }

    // Dividing fractions is the same as multiplying by the reciprocal
    // (a/b) ÷ (c/d) = (a/b) × (d/c)
    const resultNumerator = numerator1 * denominator2;
    const resultDenominator = denominator1 * numerator2;

    // Simplify the fraction
    const gcd = (a: number, b: number) => {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };

    const gcdValue = gcd(resultNumerator, resultDenominator);
    const simplifiedNumerator = resultNumerator / gcdValue;
    const simplifiedDenominator = resultDenominator / gcdValue;

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
            <BreadcrumbPage>Dividing Fractions Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Dividing Fractions Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="numerator1">Numerator of First Fraction</Label>
              <Input
                id="numerator1"
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator1">Denominator of First Fraction</Label>
              <Input
                id="denominator1"
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(Number(e.target.value))}
                min="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numerator2">Numerator of Second Fraction</Label>
              <Input
                id="numerator2"
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator2">Denominator of Second Fraction</Label>
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

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Dividing Fractions Calculator">
          <p>This calculator helps you divide two fractions and simplify the result.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Divide Fractions</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the numerator and denominator for both fractions.</li>
            <li>Click "Calculate" to see the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">How to Divide Fractions</h4>
          <p>Dividing fractions is done by multiplying the first fraction by the reciprocal of the second fraction:</p>
          <p>(a/b) ÷ (c/d) = (a/b) × (d/c)</p>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Fraction: 1/2</li>
              <li>Second Fraction: 3/4</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>(1/2) ÷ (3/4) = (1/2) × (4/3)</p>
            <p>Result: 4/6</p>
            <p>Simplified: 2/3</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>After dividing 1/2 by 3/4, the result is 2/3</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default DividingFractionsCalculator;
