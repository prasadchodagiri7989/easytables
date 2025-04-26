import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const DivisionCalculator: React.FC = () => {
  const [dividend, setDividend] = useState<number>(0);
  const [divisor, setDivisor] = useState<number>(1);
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    if (divisor === 0) {
      setResult("Division by zero is not allowed");
      return;
    }

    const divisionResult = dividend / divisor;
    setResult(divisionResult);
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
            <BreadcrumbPage>Division Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Division Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dividend">Dividend</Label>
              <Input
                id="dividend"
                type="number"
                value={dividend}
                onChange={(e) => setDividend(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="divisor">Divisor</Label>
              <Input
                id="divisor"
                type="number"
                value={divisor}
                onChange={(e) => setDivisor(Number(e.target.value))}
                min="1"
              />
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

        <GuidanceSection title="How to Use the Division Calculator">
          <p>This calculator helps you divide one number by another.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Divide Numbers</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the dividend (the number to be divided).</li>
            <li>Enter the divisor (the number by which to divide).</li>
            <li>Click "Calculate" to get the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Dividend: 100</li>
              <li>Divisor: 20</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>100 ÷ 20 = 5</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>After dividing 100 by 20, the result is 5</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default DivisionCalculator;
