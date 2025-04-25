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

const QuadraticEquationSolver: React.FC = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-3);
  const [c, setC] = useState<number>(2);
  const [roots, setRoots] = useState<string>("");

  const solveQuadratic = () => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setRoots(`Two real roots: ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setRoots(`One real root: ${root.toFixed(2)}`);
    } else {
      setRoots("No real roots (complex roots)");
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
            <BreadcrumbPage>Quadratic Equation Solver</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Quadratic Equation Solver</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="a">Coefficient a</Label>
              <Input
                id="a"
                type="number"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="b">Coefficient b</Label>
              <Input
                id="b"
                type="number"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="c">Coefficient c</Label>
              <Input
                id="c"
                type="number"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
              />
            </div>

            <Button onClick={solveQuadratic} className="w-full">
              Solve
            </Button>

            {roots && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Result:</p>
                <p className="text-2xl font-semibold">{roots}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Quadratic Equation Solver">
          <p>
            This calculator finds the roots of a quadratic equation of the form ax² + bx + c = 0.
          </p>

          <h4 className="font-medium mt-3 mb-1">Quadratic Formula</h4>
          <p>
            <strong>x = (-b ± √(b² - 4ac)) / 2a</strong>
          </p>

          <h4 className="font-medium mt-3 mb-1">Example</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Equation: x² - 3x + 2 = 0</li>
            <li>Coefficients: a = 1, b = -3, c = 2</li>
            <li>Discriminant: (-3)² - 4×1×2 = 9 - 8 = 1</li>
            <li>Roots: (3 ± √1) / 2 = (3 ± 1) / 2 → x = 2, x = 1</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

export default QuadraticEquationSolver;
