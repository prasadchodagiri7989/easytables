import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const AntilogCalculator = () => {
  const [logValue, setLogValue] = useState<number>(0);
  const [base, setBase] = useState<number>(10);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    // Antilog formula: Antilog(x) = base^x
    const antilogResult = Math.pow(base, logValue);
    setResult(antilogResult);
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
            <BreadcrumbPage>Antilog Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Antilog Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="logValue">Logarithmic Value (x)</Label>
              <Input
                id="logValue"
                type="number"
                value={logValue}
                onChange={(e) => setLogValue(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="base">Base</Label>
              <Input
                id="base"
                type="number"
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
                min="1"
                step="0.1"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate Antilog
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Antilog Value:</p>
                <p className="text-2xl font-semibold">{result.toFixed(4)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Antilog Calculator">
          <p>This calculator helps you find the antilogarithm (inverse logarithm) of a given value.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Antilog</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the logarithmic value (x) for which you want to find the antilog.</li>
            <li>Enter the base of the logarithm. The default is 10.</li>
            <li>Click "Calculate Antilog" to get the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Antilog Formula</h4>
          <p>Antilog(x) = base^x</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>x = Logarithmic value</li>
            <li>base = Base of the logarithm</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Logarithmic Value (x): 2</li>
              <li>Base: 10</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Antilog(2) = 10^2</p>
            <p>Antilog(2) = 100</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The antilog of 2 with base 10 is 100.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
