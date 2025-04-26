import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const LnCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(1); // The value for which to calculate the natural logarithm (Ln)
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    if (inputValue <= 0) {
      setResult("Please enter a positive number.");
      return;
    }

    const lnValue = Math.log(inputValue); // Natural logarithm calculation
    setResult(lnValue);
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
            <BreadcrumbPage>Ln Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Ln Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="inputValue">Input Value</Label>
              <Input
                id="inputValue"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                min="0.0001"
                step="0.0001"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Natural Logarithm (Ln):</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Ln Calculator">
          <p>This calculator helps you calculate the natural logarithm (Ln) of a number.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Ln Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter a positive number in the input field.</li>
            <li>Click "Calculate" to find the natural logarithm (Ln) of the entered number.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Ln Formula</h4>
          <p>The natural logarithm (Ln) is the logarithm to the base of the constant e (approximately 2.71828).</p>
          <p>The formula is:</p>
          <p>Ln(x) = logₑ(x)</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>x = the number for which the natural logarithm is to be calculated</li>
            <li>e ≈ 2.71828 (Euler's constant)</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Value:</strong></p>
            <ul className="list-disc pl-5">
              <li>Input Value: 10</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Ln(10) = logₑ(10) ≈ 2.302585</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The natural logarithm (Ln) of 10 is approximately 2.302585.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default LnCalculator;
