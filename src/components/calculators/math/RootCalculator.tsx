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

const RootCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [degree, setDegree] = useState<number>(2); // Square root by default
  const [result, setResult] = useState<string>("");

  const calculateRoot = () => {
    if (degree === 0) {
      setResult("Degree must be greater than 0.");
      return;
    }

    if (number < 0 && degree % 2 === 0) {
      setResult("Even roots of negative numbers are not real.");
      return;
    }

    const root = Math.pow(number, 1 / degree);
    setResult(`The ${degree} root of ${number} is ${root.toFixed(6)}`);
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
            <BreadcrumbPage>Root Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Root Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div>
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
              />
            </div>

            <div>
              <Label htmlFor="degree">Root Degree</Label>
              <Input
                id="degree"
                type="number"
                value={degree}
                onChange={(e) => setDegree(Number(e.target.value))}
                min={1}
              />
            </div>

            <Button className="w-full" onClick={calculateRoot}>
              Calculate Root
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Root Calculator">
          <p>This calculator helps you find the nth root of a number.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter the number you want the root of.</li>
            <li>Enter the degree of the root (e.g., 2 for square root, 3 for cube root).</li>
            <li>Click "Calculate Root" to get the result.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Formula:</h4>
          <p><strong>Root = number<sup>1/degree</sup></strong></p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <p>To find the cube root of 27:</p>
          <p>Root = 27<sup>1/3</sup> = 3</p>
        </GuidanceSection>
      </div>
    </>
  );
};

export default RootCalculator;
