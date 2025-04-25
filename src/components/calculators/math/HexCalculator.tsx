import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HexCalculator: React.FC = () => {
  const [hex1, setHex1] = useState<string>("0"); // First hexadecimal number
  const [hex2, setHex2] = useState<string>("0"); // Second hexadecimal number
  const [operation, setOperation] = useState<string>("add"); // Operation type
  const [result, setResult] = useState<string>("");

  // Function to perform calculation
  const handleCalculate = () => {
    const decimal1 = parseInt(hex1, 16); // Convert first hex number to decimal
    const decimal2 = parseInt(hex2, 16); // Convert second hex number to decimal

    let calcResult;
    if (operation === "add") {
      calcResult = decimal1 + decimal2;
    } else if (operation === "subtract") {
      calcResult = decimal1 - decimal2;
    } else if (operation === "multiply") {
      calcResult = decimal1 * decimal2;
    } else if (operation === "divide") {
      if (decimal2 === 0) {
        setResult("Cannot divide by zero");
        return;
      }
      calcResult = decimal1 / decimal2;
    }

    setResult(calcResult.toString(16).toUpperCase()); // Convert result back to hex and display
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
            <BreadcrumbPage>Hexadecimal Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Hexadecimal Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hex1">First Hexadecimal Number</Label>
              <Input
                id="hex1"
                type="text"
                value={hex1}
                onChange={(e) => setHex1(e.target.value.toUpperCase())} // Convert to uppercase for consistency
                placeholder="Enter hexadecimal"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hex2">Second Hexadecimal Number</Label>
              <Input
                id="hex2"
                type="text"
                value={hex2}
                onChange={(e) => setHex2(e.target.value.toUpperCase())}
                placeholder="Enter hexadecimal"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="operation">Select Operation</Label>
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
                <p className="text-sm text-muted-foreground">Result (Hexadecimal):</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Hexadecimal Calculator">
          <p>This calculator helps you perform basic arithmetic operations (addition, subtraction, multiplication, division) on hexadecimal numbers.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Use the Hexadecimal Calculator</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter two hexadecimal numbers in the provided fields.</li>
            <li>Select the operation (addition, subtraction, multiplication, or division) from the dropdown.</li>
            <li>Click "Calculate" to see the result in hexadecimal.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Hexadecimal: A (which is 10 in decimal)</li>
              <li>Second Hexadecimal: B (which is 11 in decimal)</li>
            </ul>

            <p className="mt-2"><strong>Calculation (Addition):</strong></p>
            <p>Hex A + Hex B = Decimal 10 + Decimal 11 = Decimal 21</p>
            <p className="mt-2"><strong>Result:</strong></p>
            <p>The result in hexadecimal is 15.</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default HexCalculator;
