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

const StandardDeviationCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    const numArray = numbers.split(",").map((num) => parseFloat(num.trim()));

    if (numArray.some(isNaN)) {
      setResult("Error: Please enter valid numbers.");
      return;
    }

    const mean = numArray.reduce((sum, num) => sum + num, 0) / numArray.length;
    const variance = numArray.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numArray.length;
    const standardDeviation = Math.sqrt(variance);

    setResult(standardDeviation);
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
            <BreadcrumbPage>Standard Deviation Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Standard Deviation Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="numbers">Enter Numbers (comma separated)</Label>
              <Input
                id="numbers"
                type="text"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                placeholder="e.g., 1, 2, 3, 4, 5"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Standard Deviation:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Standard Deviation Calculator">
          <p>This calculator helps you calculate the standard deviation of a set of numbers.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Standard Deviation</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter a list of numbers separated by commas.</li>
            <li>Click "Calculate" to get the standard deviation.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Standard Deviation Formula</h4>
          <p>
            <strong>σ = √(Σ(xᵢ - μ)² / N)</strong>
          </p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>σ = Standard deviation</li>
            <li>xᵢ = Each individual number</li>
            <li>μ = Mean (average) of the numbers</li>
            <li>N = Number of values in the dataset</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Numbers: 1, 2, 3, 4, 5</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>Mean = (1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3</p>
            <p>Variance = [(1 - 3)² + (2 - 3)² + (3 - 3)² + (4 - 3)² + (5 - 3)²] / 5</p>
            <p>Variance = [4 + 1 + 0 + 1 + 4] / 5 = 10 / 5 = 2</p>
            <p>Standard Deviation = √2 ≈ 1.41</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The standard deviation is approximately 1.41.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default StandardDeviationCalculator;
