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

const RemainderCalculator: React.FC = () => {
  const [dividend, setDividend] = useState<number>(0);
  const [divisor, setDivisor] = useState<number>(1);
  const [remainder, setRemainder] = useState<number | null>(null);

  const calculateRemainder = () => {
    if (divisor === 0) {
      setRemainder(NaN);
      return;
    }
    setRemainder(dividend % divisor);
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
            <BreadcrumbPage>Remainder Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Remainder Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div>
              <Label htmlFor="dividend">Dividend</Label>
              <Input
                id="dividend"
                type="number"
                value={dividend}
                onChange={(e) => setDividend(Number(e.target.value))}
              />
            </div>

            <div>
              <Label htmlFor="divisor">Divisor</Label>
              <Input
                id="divisor"
                type="number"
                value={divisor}
                onChange={(e) => setDivisor(Number(e.target.value))}
              />
            </div>

            <Button className="w-full" onClick={calculateRemainder}>
              Calculate Remainder
            </Button>

            {remainder !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                {isNaN(remainder) ? (
                  <p className="text-red-500">Cannot divide by zero</p>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground">Remainder:</p>
                    <p className="text-2xl font-semibold">{remainder}</p>
                  </>
                )}
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Remainder Calculator">
          <p>This calculator finds the remainder when one number is divided by another.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the dividend (the number to be divided).</li>
            <li>Enter the divisor (the number you divide by).</li>
            <li>Click "Calculate Remainder" to view the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Formula:</h4>
          <p><strong>Remainder = Dividend % Divisor</strong></p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <ul className="list-disc pl-5">
            <li>Dividend = 17</li>
            <li>Divisor = 5</li>
            <li>Remainder = 17 % 5 = 2</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

export default RemainderCalculator;
