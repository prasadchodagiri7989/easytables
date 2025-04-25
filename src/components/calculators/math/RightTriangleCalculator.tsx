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

const RightTriangleCalculator: React.FC = () => {
  const [a, setA] = useState<number | undefined>(undefined);
  const [b, setB] = useState<number | undefined>(undefined);
  const [c, setC] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    let calculated = false;
    if (a !== undefined && b !== undefined) {
      const hypotenuse = Math.sqrt(a * a + b * b);
      setC(hypotenuse);
      setResult(`Hypotenuse (c) = ${hypotenuse.toFixed(2)}`);
      calculated = true;
    } else if (a !== undefined && c !== undefined) {
      if (c <= a) {
        setResult("Hypotenuse must be greater than the leg.");
        return;
      }
      const bCalc = Math.sqrt(c * c - a * a);
      setB(bCalc);
      setResult(`Side b = ${bCalc.toFixed(2)}`);
      calculated = true;
    } else if (b !== undefined && c !== undefined) {
      if (c <= b) {
        setResult("Hypotenuse must be greater than the leg.");
        return;
      }
      const aCalc = Math.sqrt(c * c - b * b);
      setA(aCalc);
      setResult(`Side a = ${aCalc.toFixed(2)}`);
      calculated = true;
    }

    if (!calculated) {
      setResult("Please provide any two sides.");
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
            <BreadcrumbPage>Right Triangle Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Right Triangle Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div>
              <Label htmlFor="a">Side a (leg)</Label>
              <Input
                id="a"
                type="number"
                value={a ?? ""}
                onChange={(e) => setA(Number(e.target.value) || undefined)}
              />
            </div>

            <div>
              <Label htmlFor="b">Side b (leg)</Label>
              <Input
                id="b"
                type="number"
                value={b ?? ""}
                onChange={(e) => setB(Number(e.target.value) || undefined)}
              />
            </div>

            <div>
              <Label htmlFor="c">Side c (hypotenuse)</Label>
              <Input
                id="c"
                type="number"
                value={c ?? ""}
                onChange={(e) => setC(Number(e.target.value) || undefined)}
              />
            </div>

            <Button className="w-full" onClick={handleCalculate}>
              Calculate
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Right Triangle Calculator">
          <p>This tool calculates one side of a right triangle using the Pythagorean theorem: <strong>a² + b² = c²</strong>.</p>

          <h4 className="font-medium mt-3 mb-1">Instructions:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter any two side lengths: either two legs or one leg and the hypotenuse.</li>
            <li>Leave the side you want to calculate blank.</li>
            <li>Click "Calculate" to find the missing side.</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <p>If a = 3 and b = 4, then:</p>
          <p>c = √(3² + 4²) = √(9 + 16) = √25 = 5</p>
        </GuidanceSection>
      </div>
    </>
  );
};

export default RightTriangleCalculator;
