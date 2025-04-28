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

const PythagoreanCalculator: React.FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<string>("");

  const calculateHypotenuse = () => {
    const hypotenuse = Math.sqrt(a * a + b * b);
    setC(hypotenuse.toFixed(2));
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
            <BreadcrumbPage>Pythagorean Theorem Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Pythagorean Theorem Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sideA">Side A</Label>
              <Input
                id="sideA"
                type="number"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sideB">Side B</Label>
              <Input
                id="sideB"
                type="number"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button onClick={calculateHypotenuse} className="w-full">
              Calculate Hypotenuse (c)
            </Button>

            {c && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Hypotenuse:</p>
                <p className="text-2xl font-semibold">{c}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Pythagorean Theorem Calculator">
          <p>This calculator uses the Pythagorean Theorem to find the length of the hypotenuse of a right triangle.</p>

          <h4 className="font-medium mt-3 mb-1">Formula</h4>
          <p><strong>c = √(a² + b²)</strong></p>

          <h4 className="font-medium mt-3 mb-1">Example</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Side A = 3</li>
            <li>Side B = 4</li>
            <li>Hypotenuse = √(3² + 4²) = √(9 + 16) = √25 = 5</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

export default PythagoreanCalculator;
