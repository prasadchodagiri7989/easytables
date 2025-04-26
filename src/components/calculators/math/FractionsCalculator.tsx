import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const FractionsCalculator: React.FC = () => {
  const [numerator1, setNumerator1] = useState<number>(1); // First fraction's numerator
  const [denominator1, setDenominator1] = useState<number>(1); // First fraction's denominator
  const [numerator2, setNumerator2] = useState<number>(1); // Second fraction's numerator
  const [denominator2, setDenominator2] = useState<number>(1); // Second fraction's denominator
  const [operation, setOperation] = useState<string>("add"); // Operation to perform: add, subtract, multiply, divide
  const [result, setResult] = useState<string>("");

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const simplifyFraction = (numerator: number, denominator: number): string => {
    const commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
  };

  const handleCalculate = () => {
    let resultNumerator = 0;
    let resultDenominator = 0;

    switch (operation) {
      case "add":
        resultNumerator = numerator1 * denominator2 + numerator2 * denominator1;
        resultDenominator = denominator1 * denominator2;
        break;
      case "subtract":
        resultNumerator = numerator1 * denominator2 - numerator2 * denominator1;
        resultDenominator = denominator1 * denominator2;
        break;
      case "multiply":
        resultNumerator = numerator1 * numerator2;
        resultDenominator = denominator1 * denominator2;
        break;
      case "divide":
        resultNumerator = numerator1 * denominator2;
        resultDenominator = denominator1 * numerator2;
        break;
      default:
        return;
    }

    // Simplify the result fraction
    const simplifiedResult = simplifyFraction(resultNumerator, resultDenominator);
    setResult(simplifiedResult);
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
            <BreadcrumbPage>Fractions Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Fractions Calculator</h2>

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

            <div className="space-y-2">
              <Label htmlFor="operation">Operation</Label>
              <select
                id="operation"
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
              </select>
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Fractions Calculator">
          <p>This calculator allows you to perform basic operations on fractions, such as addition, subtraction, multiplication, and division.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Perform Operations</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the numerators and denominators for the two fractions.</li>
            <li>Select the operation (Add, Subtract, Multiply, Divide).</li>
            <li>Click "Calculate" to see the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Numerator 1: 1, Denominator 1: 2</li>
              <li>Numerator 2: 1, Denominator 2: 3</li>
              <li>Operation: Add</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>(1/2) + (1/3) = (3 + 2) / 6 = 5/6</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The result of 1/2 + 1/3 is 5/6.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default FractionsCalculator;
