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

const SubtractingFractionsCalculator: React.FC = () => {
  const [numerator1, setNumerator1] = useState<number>(0); // Numerator of the first fraction
  const [denominator1, setDenominator1] = useState<number>(1); // Denominator of the first fraction
  const [numerator2, setNumerator2] = useState<number>(0); // Numerator of the second fraction
  const [denominator2, setDenominator2] = useState<number>(1); // Denominator of the second fraction
  const [result, setResult] = useState<string>("");

  const subtractFractions = () => {
    // Find common denominator
    const commonDenominator = denominator1 * denominator2;

    // Adjust the numerators accordingly
    const adjustedNumerator1 = numerator1 * denominator2;
    const adjustedNumerator2 = numerator2 * denominator1;

    // Subtract the numerators
    const finalNumerator = adjustedNumerator1 - adjustedNumerator2;

    // Simplify the fraction if possible
    const gcd = (a: number, b: number): number => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };

    const commonFactor = gcd(finalNumerator, commonDenominator);

    const simplifiedNumerator = finalNumerator / commonFactor;
    const simplifiedDenominator = commonDenominator / commonFactor;

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
            <BreadcrumbPage>Subtracting Fractions Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Subtracting Fractions Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="numerator1">Numerator 1</Label>
              <Input
                id="numerator1"
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator1">Denominator 1</Label>
              <Input
                id="denominator1"
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numerator2">Numerator 2</Label>
              <Input
                id="numerator2"
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="denominator2">Denominator 2</Label>
              <Input
                id="denominator2"
                type="number"
                value={denominator2}
                onChange={(e) => setDenominator2(Number(e.target.value))}
              />
            </div>

            <Button onClick={subtractFractions} className="w-full">
              Subtract
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Subtracting Fractions Calculator">
          <p>This calculator allows you to subtract two fractions and simplify the result.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Subtracting Fractions Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the numerator and denominator for both fractions.</li>
            <li>Click "Subtract" to get the result in simplified fraction form.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Fraction 1: 3/4</li>
              <li>Fraction 2: 1/4</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>3/4 - 1/4 = (3 - 1)/4 = 2/4</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The result of 3/4 - 1/4 is 1/2 after simplification.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default SubtractingFractionsCalculator;
