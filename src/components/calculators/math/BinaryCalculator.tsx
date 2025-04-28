import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

export const BinaryCalculator = () => {
  const [firstBinary, setFirstBinary] = useState<string>("");
  const [secondBinary, setSecondBinary] = useState<string>("");
  const [operation, setOperation] = useState<string>("add");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const num1 = parseInt(firstBinary, 2);
      const num2 = parseInt(secondBinary, 2);

      if (isNaN(num1) || isNaN(num2)) {
        setResult("Invalid binary input.");
        return;
      }

      let res;
      switch (operation) {
        case "add":
          res = num1 + num2;
          break;
        case "subtract":
          res = num1 - num2;
          break;
        case "multiply":
          res = num1 * num2;
          break;
        case "divide":
          if (num2 === 0) {
            setResult("Cannot divide by zero.");
            return;
          }
          res = num1 / num2;
          break;
        default:
          setResult("Invalid operation.");
          return;
      }

      setResult(res.toString(2)); // Convert the result to binary
    } catch (error) {
      setResult("An error occurred during calculation.");
    }
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
            <BreadcrumbPage>Binary Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Binary Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstBinary">First Binary Number</Label>
              <Input
                id="firstBinary"
                type="text"
                value={firstBinary}
                onChange={(e) => setFirstBinary(e.target.value)}
                placeholder="Enter binary number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondBinary">Second Binary Number</Label>
              <Input
                id="secondBinary"
                type="text"
                value={secondBinary}
                onChange={(e) => setSecondBinary(e.target.value)}
                placeholder="Enter binary number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="operation">Operation</Label>
              <Select
                value={operation}
                onValueChange={(value) => setOperation(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select operation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="add">Addition (+)</SelectItem>
                  <SelectItem value="subtract">Subtraction (-)</SelectItem>
                  <SelectItem value="multiply">Multiplication (×)</SelectItem>
                  <SelectItem value="divide">Division (÷)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result (Binary):</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Binary Calculator">
          <p>This calculator helps you perform basic arithmetic operations on binary numbers.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Perform Binary Operations</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the first binary number.</li>
            <li>Enter the second binary number.</li>
            <li>Select the operation (addition, subtraction, multiplication, or division).</li>
            <li>Click "Calculate" to get the result in binary.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Binary Number: 1101 (13 in decimal)</li>
              <li>Second Binary Number: 1010 (10 in decimal)</li>
              <li>Operation: Addition (+)</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>1101 (binary) + 1010 (binary) = 10111 (binary)</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Result (Binary): 10111</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
