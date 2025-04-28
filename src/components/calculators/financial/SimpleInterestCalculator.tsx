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
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(2);
  const [interest, setInterest] = useState<number | null>(null);

  const handleCalculate = () => {
    const i = (principal * rate * time) / 100;
    setInterest(i);
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
                        <BreadcrumbPage>Simple Interest Calculator</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                 </Breadcrumb>

      <div className="calculator-container bg-white/40 dark:bg-transparent">
        <h2 className="calculator-header">Simple Interest Calculator</h2>

        <Card className="p-6 glass-card">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="principal">Principal Amount ($)</Label>
              <Input
                id="principal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rate">Annual Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
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

            <Button
              variant="default"
              onClick={handleCalculate}
              className="w-full"
            >
              Calculate
            </Button>

            {interest !== null && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Interest Earned:</p>
                <p className="text-2xl font-semibold">${interest.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Total Amount:</p>
                <p className="text-lg font-medium">${(principal + interest).toFixed(2)}</p>
              </div>
            )}
          </div>
        </Card>

        <GuidanceSection title="How to Use the Simple Interest Calculator">
          <p>This tool helps you calculate interest earned on an investment using the simple interest formula.</p>

          <h4 className="font-medium mt-3 mb-1">Steps:</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter the principal amount</li>
            <li>Enter the annual interest rate</li>
            <li>Enter the time period in years</li>
            <li>Click "Calculate"</li>
          </ol>

          <h4 className="font-medium mt-3 mb-1">Simple Interest Formula</h4>
          <p>I = P × R × T / 100</p>
          <p>Where:</p>
          <ul className="list-disc pl-5 my-1">
            <li>I = Interest</li>
            <li>P = Principal</li>
            <li>R = Annual interest rate (%)</li>
            <li>T = Time in years</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Example</h4>
          <ul className="list-disc pl-5">
            <li>Principal: $1,000</li>
            <li>Rate: 5%</li>
            <li>Time: 2 years</li>
          </ul>
          <p className="mt-2">I = 1000 × 5 × 2 / 100 = $100</p>
          <p>Total Amount = $1,100</p>
        </GuidanceSection>
      </div>
    </>
  );
};
    