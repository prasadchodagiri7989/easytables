import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const ExponentsCalculator: React.FC = () => {
  const [base, setBase] = useState<number>(2); // Base of the exponentiation
  const [exponent, setExponent] = useState<number>(3); // Exponent value
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    // Exponentiation formula: A = base ^ exponent
    const powerResult = Math.pow(base, exponent);
    setResult(powerResult);
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
            <BreadcrumbPage>Exponents Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Exponents Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="base">Base</Label>
              <Input
                id="base"
                type="number"
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exponent">Exponent</Label>
              <Input
                id="exponent"
                type="number"
                value={exponent}
                onChange={(e) => setExponent(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">
                  {typeof result === "number" ? result.toFixed(2) : result}
                </p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Exponents Calculator">
          <p>This calculator helps you calculate the result of raising a number (base) to a power (exponent).</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Exponents</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the base value.</li>
            <li>Enter the exponent value (the power to which the base is raised).</li>
            <li>Click "Calculate" to see the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Exponentiation Formula</h4>
          <p>A = base^exponent</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>A = Result (final value after applying the exponent)</li>
            <li>base = The number to be raised to a power</li>
            <li>exponent = The power to which the base is raised</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Base: 2</li>
              <li>Exponent: 3</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>A = 2^3</p>
            <p>A = 8</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The result of raising 2 to the power of 3 is 8.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default ExponentsCalculator;
