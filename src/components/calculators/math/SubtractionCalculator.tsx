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

const SubtractionCalculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(0); // First number input
  const [num2, setNum2] = useState<number>(0); // Second number input
  const [result, setResult] = useState<number | string>("");

  const handleSubtract = () => {
    const difference = num1 - num2;
    setResult(difference);
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
            <BreadcrumbPage>Subtraction Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Subtraction Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="num1">First Number</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="num2">Second Number</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
              />
            </div>

            <Button onClick={handleSubtract} className="w-full">
              Subtract
            </Button>

            {result !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Subtraction Calculator">
          <p>This calculator allows you to subtract two numbers and get the result.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Subtraction Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the first number.</li>
            <li>Enter the second number.</li>
            <li>Click "Subtract" to get the difference between the two numbers.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Number: 10</li>
              <li>Second Number: 3</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>10 - 3 = 7</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>The difference between 10 and 3 is 7.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default SubtractionCalculator;
