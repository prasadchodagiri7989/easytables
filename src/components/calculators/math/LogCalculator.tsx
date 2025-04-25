import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const LogCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(10); // The value for which to calculate the logarithm
  const [base, setBase] = useState<number>(10); // The base of the logarithm
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    if (inputValue <= 0 || base <= 0 || base === 1) {
      setResult("Please enter a positive number for the value and a base greater than 0 and not equal to 1.");
      return;
    }

    const logValue = Math.log(inputValue) / Math.log(base); // Logarithm formula: log_b(x) = log(x) / log(b)
    setResult(logValue);
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
            <BreadcrumbPage>Logarithm Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Logarithm Calculator</h2>

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

            <div className="space-y-2">
              <Label htmlFor="base">Base</Label>
              <Input
                id="base"
                type="number"
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
                min="0.0001"
                step="0.0001"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Logarithm (log<sub>base</sub>):</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Log Calculator">
          <p>This calculator helps you calculate the logarithm of a number with a specified base.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Log Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter a positive number (greater than 0) in the "Input Value" field.</li>
            <li>Enter the base of the logarithm (greater than 0 and not equal to 1) in the "Base" field.</li>
            <li>Click "Calculate" to find the logarithm of the input value with the specified base.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Logarithm Formula</h4>
          <p>The formula for calculating the logarithm of a number x to a base b is:</p>
          <p>log<sub>b</sub>(x) = log(x) / log(b)</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>x = the number for which the logarithm is to be calculated</li>
            <li>b = the base of the logarithm</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Input Value: 100</li>
              <li>Base: 10</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>log<sub>10</sub>(100) = log(100) / log(10)</p>
            <p>log<sub>10</sub>(100) = 2 / 1</p>
            <p>log<sub>10</sub>(100) = 2</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The logarithm of 100 with base 10 is 2.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default LogCalculator;
