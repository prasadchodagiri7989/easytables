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

export const PercentageChangeCalculator = () => {
  const [original, setOriginal] = useState<number>(0);
  const [newValue, setNewValue] = useState<number>(0);
  const [change, setChange] = useState<number | null>(null);

  const handleCalculate = () => {
    if (original === 0) {
      setChange(null);
      return;
    }
    const diff = newValue - original;
    const percentChange = (diff / original) * 100;
    setChange(percentChange);
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
            <BreadcrumbPage>Percentage Change Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Percentage Change Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="original">Original Value</Label>
              <Input
                id="original"
                type="number"
                value={original}
                onChange={(e) => setOriginal(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newValue">New Value</Label>
              <Input
                id="newValue"
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(Number(e.target.value))}
                min="0"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {change !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">
                  Percentage Change:
                </p>
                <p
                  className={`text-2xl font-semibold ${
                    change > 0 ? "text-green-600" : change < 0 ? "text-red-600" : ""
                  }`}
                >
                  {change > 0 ? "+" : ""}
                  {change.toFixed(2)}%
                </p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Percentage Change Calculator">
          <p>
            This calculator helps you determine the percentage increase or
            decrease between two values.
          </p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the original value.</li>
            <li>Enter the new value.</li>
            <li>Click "Calculate" to see the percentage change.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Formula:</h4>
          <p>
            Percentage Change = ((New - Original) / Original) × 100
          </p>

          <h4 className="font-medium mt-3 mb-1">Example:</h4>
          <p>Original: 200, New: 250</p>
          <p>Change = (250 - 200) / 200 × 100 = 25%</p>

          <p className="mt-2 text-sm text-muted-foreground">
            Note: A negative result means a decrease.
          </p>
        </GuidanceSection>
      </div>
    </>
  );
};
