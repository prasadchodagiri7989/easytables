import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const PercentageIncreaseCalculator = () => {
  const [initialValue, setInitialValue] = useState<number>(0);
  const [finalValue, setFinalValue] = useState<number>(0);
  const [increase, setIncrease] = useState<number | null>(null);

  const handleCalculate = () => {
    if (initialValue === 0 || finalValue <= initialValue) {
      setIncrease(null);
      return;
    }
    const percentIncrease = ((finalValue - initialValue) / initialValue) * 100;
    setIncrease(percentIncrease);
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
                          <Link to="/finance-all">Financial Calculators</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Percentage Increase Calculator</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                 </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Percentage Increase Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="initial">Initial Value</Label>
              <Input
                id="initial"
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="final">Final Value</Label>
              <Input
                id="final"
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {increase !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Percentage Increase:</p>
                <p className="text-2xl font-semibold text-green-600">
                  +{increase.toFixed(2)}%
                </p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Percentage Increase Calculator">
          <p>This tool helps calculate the percentage increase from one value to another.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the initial value.</li>
            <li>Enter the final value (must be higher than initial).</li>
            <li>Click "Calculate" to see the percentage increase.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Formula:</h4>
          <p>
            Percentage Increase = ((Final - Initial) / Initial) × 100
          </p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <p>Initial: 400, Final: 500</p>
          <p>Increase = ((500 - 400) / 400) × 100 = 25%</p>

          <p className="mt-2 text-sm text-muted-foreground">
            Note: This calculator only shows results if there is an increase.
          </p>
        </GuidanceSection>
      </div>
    </>
  );
};
