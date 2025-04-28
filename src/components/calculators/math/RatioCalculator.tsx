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

const RatioCalculator: React.FC = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(2);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number | string>("");

  const handleCalculate = () => {
    if (a !== 0) {
      const result = (b * x) / a;
      setY(result.toFixed(2));
    } else {
      setY("Undefined (division by zero)");
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
            <BreadcrumbPage>Ratio Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Ratio Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="a">First Part (a)</Label>
              <Input
                id="a"
                type="number"
                onChange={(e) => setA(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="b">Second Part (b)</Label>
              <Input
                id="b"
                type="number"
                onChange={(e) => setB(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="x">Value (x)</Label>
              <Input
                id="x"
                type="number"
                onChange={(e) => setX(Number(e.target.value))}
              />
            </div>
            <Button onClick={handleCalculate} className="w-full">Calculate</Button>

            {y !== "" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result (y):</p>
                <p className="text-2xl font-semibold">{y}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Ratio Calculator">
          <p>
            This calculator solves proportions in the form <strong>a : b = x : y</strong>. Enter values for a, b, and x to find y.
          </p>

          <h4 className="font-medium mt-3 mb-1">Formula</h4>
          <p><strong>y = (b × x) / a</strong></p>

          <h4 className="font-medium mt-3 mb-1">Example</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>a = 2, b = 4, x = 6</li>
            <li>y = (4 × 6) / 2 = 24 / 2 = 12</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

export default RatioCalculator;
