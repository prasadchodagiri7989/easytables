import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const ExponentialGrowthCalculator: React.FC = () => {
  const [initialValue, setInitialValue] = useState<number>(1000); // Initial value of the population or quantity
  const [growthRate, setGrowthRate] = useState<number>(5); // Growth rate in percentage
  const [time, setTime] = useState<number>(10); // Time period in years or other units
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    // Exponential growth formula: A = P(1 + r)^t
    // Where:
    // A = Final amount (after growth)
    // P = Initial value
    // r = Growth rate per time period (decimal)
    // t = Time period

    const rate = growthRate / 100;
    const finalAmount = initialValue * Math.pow(1 + rate, time);
    setResult(finalAmount);
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
            <BreadcrumbPage>Exponential Growth Calculator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Exponential Growth Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="initialValue">Initial Value</Label>
              <Input
                id="initialValue"
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="growthRate">Growth Rate (%)</Label>
              <Input
                id="growthRate"
                type="number"
                value={growthRate}
                onChange={(e) => setGrowthRate(Number(e.target.value))}
                min="0"
                step="0.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time Period (years)</Label>
              <Input
                id="time"
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                min="0"
                step="0.5"
              />
            </div>

            <Button variant="default" onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result !== "" && (
            <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Final Amount:</p>
                <p className="text-2xl font-semibold">
                {typeof result === "number" ? result.toFixed(2) : result}
                </p>
            </div>
            )}

          </div>
        </Card>

        <GuidanceSection title="How to Use the Exponential Growth Calculator">
          <p>This calculator helps you estimate the growth of a quantity over time using exponential growth.</p>

          <h4 className="font-medium mt-3 mb-1">Steps to Calculate Exponential Growth</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the initial value (the starting quantity or population).</li>
            <li>Enter the growth rate (as a percentage).</li>
            <li>Enter the time period (in years or the appropriate unit of time).</li>
            <li>Click "Calculate" to see the result.</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Exponential Growth Formula</h4>
          <p>A = P(1 + r)^t</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>A = Final amount (after growth)</li>
            <li>P = Initial value (starting quantity or population)</li>
            <li>r = Growth rate per time period (as a decimal)</li>
            <li>t = Time period (in years or other units)</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example Calculation</h4>
          <div className="space-y-1">
            <p><strong>Input Values:</strong></p>
            <ul className="list-disc pl-5">
              <li>Initial Value: 1000</li>
              <li>Growth Rate: 5%</li>
              <li>Time Period: 10 years</li>
            </ul>

            <p className="mt-2"><strong>Calculation:</strong></p>
            <p>A = 1000 × (1 + 0.05)^10</p>
            <p>A = 1000 × (1.05)^10</p>
            <p>A = 1000 × 1.62889</p>
            <p>A = 1628.89</p>

            <p className="mt-2"><strong>Result:</strong></p>
            <p>After 10 years, the quantity grows to 1628.89</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

export default ExponentialGrowthCalculator;
