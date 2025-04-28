import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const ComplexNumberCalculator: React.FC = () => {
  const [real1, setReal1] = useState<number>(0);
  const [imag1, setImag1] = useState<number>(0);
  const [real2, setReal2] = useState<number>(0);
  const [imag2, setImag2] = useState<number>(0);
  const [operation, setOperation] = useState<string>("add");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      let resReal: number, resImag: number;

      switch (operation) {
        case "add":
          resReal = real1 + real2;
          resImag = imag1 + imag2;
          break;
        case "subtract":
          resReal = real1 - real2;
          resImag = imag1 - imag2;
          break;
        case "multiply":
          resReal = real1 * real2 - imag1 * imag2;
          resImag = real1 * imag2 + imag1 * real2;
          break;
        case "divide":
          const denominator = real2 * real2 + imag2 * imag2;
          if (denominator === 0) {
            setResult("Cannot divide by zero.");
            return;
          }
          resReal = (real1 * real2 + imag1 * imag2) / denominator;
          resImag = (imag1 * real2 - real1 * imag2) / denominator;
          break;
        default:
          setResult("Invalid operation.");
          return;
      }

      const resultString = `${resReal}${resImag >= 0 ? " + " : " - "}${Math.abs(resImag)}i`;
      setResult(resultString);
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
            <BreadcrumbPage>Complex Number Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Complex Number Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="real1">First Complex Number Real Part</Label>
              <Input
                id="real1"
                type="number"
                value={real1}
                onChange={(e) => setReal1(Number(e.target.value))}
                placeholder="Enter real part"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imag1">First Complex Number Imaginary Part</Label>
              <Input
                id="imag1"
                type="number"
                value={imag1}
                onChange={(e) => setImag1(Number(e.target.value))}
                placeholder="Enter imaginary part"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="real2">Second Complex Number Real Part</Label>
              <Input
                id="real2"
                type="number"
                value={real2}
                onChange={(e) => setReal2(Number(e.target.value))}
                placeholder="Enter real part"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imag2">Second Complex Number Imaginary Part</Label>
              <Input
                id="imag2"
                type="number"
                value={imag2}
                onChange={(e) => setImag2(Number(e.target.value))}
                placeholder="Enter imaginary part"
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
                <p className="text-sm text-muted-foreground">Result (Complex Number):</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Complex Number Calculator">
          <p>This calculator helps you perform basic arithmetic operations on complex numbers.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Perform Complex Number Operations</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the real and imaginary parts of the first complex number.</li>
            <li>Enter the real and imaginary parts of the second complex number.</li>
            <li>Select the operation (addition, subtraction, multiplication, or division).</li>
            <li>Click "Calculate" to get the result in complex number form.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>First Complex Number: 3 + 4i</li>
              <li>Second Complex Number: 1 + 2i</li>
              <li>Operation: Addition (+)</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>(3 + 4i) + (1 + 2i) = (3 + 1) + (4 + 2)i = 4 + 6i</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>Result (Complex Number): 4 + 6i</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default ComplexNumberCalculator;
