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

const PercentageIncreaseCalculator: React.FC = () => {
  const [initialValue, setInitialValue] = useState<number>(0);
  const [newValue, setNewValue] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    if (initialValue === 0) {
      setResult("Initial value cannot be zero.");
      return;
    }

    const increase = ((newValue - initialValue) / initialValue) * 100;
    setResult(`${increase.toFixed(2)}%`);
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
            <BreadcrumbPage>Percentage Increase Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Percentage Increase Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="initialValue">Initial Value</Label>
              <Input
                id="initialValue"
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newValue">New Value</Label>
              <Input
                id="newValue"
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(Number(e.target.value))}
              />
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Percentage Increase:</p>
                <p className="text-2xl font-semibold">{result}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Percentage Increase Calculator">
          <p>This calculator determines the percentage increase from an original value to a new value.</p>

          <h4 className="font-medium mt-3 mb-1">Formula</h4>
          <p><strong>Percentage Increase</strong> = ((New - Original) / Original) × 100%</p>

          <h4 className="font-medium mt-3 mb-1">Example</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Original Value: 150</li>
            <li>New Value: 180</li>
            <li>Percentage Increase = ((180 - 150) / 150) × 100 = 20%</li>
          </ul>
        </GuidanceSection>
      </div>
    </>
  );
};

export default PercentageIncreaseCalculator;
