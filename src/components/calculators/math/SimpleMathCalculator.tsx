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

const SimpleMathCalculator: React.FC = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [operation, setOperation] = useState<string>("add");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    let calculatedResult: number;
    
    switch (operation) {
      case "add":
        calculatedResult = firstNumber + secondNumber;
        break;
      case "subtract":
        calculatedResult = firstNumber - secondNumber;
        break;
      case "multiply":
        calculatedResult = firstNumber * secondNumber;
        break;
      case "divide":
        if (secondNumber === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        calculatedResult = firstNumber / secondNumber;
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult);
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
            <BreadcrumbPage>Simple Math Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Simple Math Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstNumber">First Number</Label>
              <Input
                id="firstNumber"
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondNumber">Second Number</Label>
              <Input
                id="secondNumber"
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(Number(e.target.value))}
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

            <Button onClick={handleCalculate} className="w-full">
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

        <GuidanceSection title="How to Use the Simple Math Calculator">
          <p>
            This calculator allows you to perform basic arithmetic operations (addition, subtraction, multiplication, and division) on two numbers.
          </p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter the first and second numbers.</li>
            <li>Select the desired operation (addition, subtraction, multiplication, or division).</li>
            <li>Click "Calculate" to get the result.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation:</h4>
          <p>If you input 5 as the first number and 3 as the second number:</p>
          <ul className="list-disc pl-5">
            <li>For addition: 5 + 3 = 8</li>
            <li>For subtraction: 5 - 3 = 2</li>
            <li>For multiplication: 5 × 3 = 15</li>
            <li>For division: 5 ÷ 3 = 1.67</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

export default SimpleMathCalculator;
